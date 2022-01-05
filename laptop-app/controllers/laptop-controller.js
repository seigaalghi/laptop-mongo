const Joi = require("joi");
const catchHandler = require("../utils/catch-handler");
const { Laptop } = require("../models");

module.exports = {
  createLaptop: async (req, res) => {
    const body = req.body;
    const file = req.file;
    try {
      const schema = Joi.object({
        brandId: Joi.number().required(),
        name: Joi.string().required(),
        price: Joi.number().required(),
        image: Joi.string().required(),
        stock: Joi.number().required(),
      });
      const { error } = schema.validate({
        ...body,
        image: file.path,
      });
      if (error) {
        return res.status(400).json({
          status: "Bad Request",
          message: error.message,
        });
      }

      const laptop = await Laptop.create({
        ...body,
        image: file.path,
      });

      if (!laptop) {
        return res.status(500).json({
          status: "internal server error",
          message: "Failed to save the data",
          result: {},
        });
      }

      res.status(201).json({
        status: "success",
        message: "Successfuly created laptop",
        result: laptop,
      });
    } catch (error) {
      catchHandler(res, error);
    }
  },
};
