const Joi = require("joi");
const jwt = require("jsonwebtoken");
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const catchHandler = require("../utils/catch-handler");

module.exports = {
  register: async (req, res) => {
    const body = req.body;
    try {
      // validasi data yang dikirim dari body
      const schema = Joi.object({
        email: Joi.string().email().required(),
        name: Joi.string().required(),
        password: Joi.string().min(6).required(),
      });
      const { error } = schema.validate(body);
      if (error) {
        return res.status(400).json({
          status: "Bad Request",
          message: error.message,
          result: {},
        });
      }
      // check ke database apakah email user sudah digunakan
      const check = await Users.findOne({
        where: {
          email: body.email,
        },
      });
      if (check) {
        return res.status(400).json({
          status: "Bad Request",
          message: "Email already exist, please register with different email or login",
          result: {},
        });
      }
      // mengenkripsi password menggunakan bcrpyt
      const hashedPassword = await bcrypt.hash(body.password, 10);
      const user = await Users.create({
        name: body.name,
        email: body.email,
        password: hashedPassword,
      });

      // meng-generate token
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        process.env.SECRET_TOKEN,
        { expiresIn: 60 * 60 * 12 }
      );

      // mengembalikan token sebagai response
      res.status(200).json({
        status: "success",
        message: "Registered successfuly",
        result: {
          token: token,
        },
      });
    } catch (error) {
      catchHandler(res, error);
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      // validasi data yang dikirimkan lewat body
      const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
      });
      const { error } = schema.validate(req.body);
      if (error) {
        return res.status(400).json({
          status: "Bad Request",
          message: error.message,
          result: {},
        });
      }
      // cari user dengan email yang sama dengan yang dikirimkan oleh user
      const user = await Users.findOne({ where: { email } });
      // kalau tidak ada, maka kirimkan invalid email or password
      if (!user) {
        return res.status(401).json({
          status: "Unauthorized",
          message: "Invalid email or password",
          result: {},
        });
      }
      // compare password yang dikirimkan user dengan password yang sudah dihash di database
      const isValid = await bcrypt.compare(password, user.password);
      // kalau compare tidak valid, maka kirimkan invalid email or password
      if (!isValid) {
        return res.status(401).json({
          status: "Unauthorized",
          message: "Invalid email or password",
          result: {},
        });
      }
      // membuat token baru untuk user yang berhasil login
      const token = jwt.sign({ email: user.email, id: user.id }, process.env.SECRET_TOKEN, {
        expiresIn: "12h",
      });

      res.status(200).json({
        status: "success",
        message: "Logged in successfuly",
        result: {
          token,
        },
      });
    } catch (error) {
      catchHandler(res, error);
    }
  }
};
