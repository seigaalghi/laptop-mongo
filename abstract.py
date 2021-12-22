from abc import ABC, abstractmethod

class Car(ABC):
    def __init__(self, name, price) :
        self.name = name
        self.price = price
    @abstractmethod
    def getSummary():
        pass
        
class Suv(Car):
    def getSummary(self):
        print("SUV Car named", self.name, "with price of", self.price)
        
class Mpv(Car):
    def getSummary(self):
        print("MPV Car named", self.name, "with price of", self.price)
        
    def setSpeed(self, speed):
        self.speed = speed
        
    def getSpeed(self):
        print("MPV Car named", self.name, "has speed of", self.speed)


# agya = Car("Agya", 200000000)
fortuner = Suv("Fortuner", 470000000)
innova = Mpv("Innova Reborn", 390000000)

# agya.getSummary()
fortuner.getSummary() 
innova.setSpeed("180km/h")
innova.getSpeed()


# python, javascript, php, ruby = interpreter
# java, golang, c++, .net = compiler