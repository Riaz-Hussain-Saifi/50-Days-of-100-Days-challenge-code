"use strict";
// Q61 - Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicles;
(function (Vehicles) {
    Vehicles[Vehicles["Car"] = 1] = "Car";
    Vehicles[Vehicles["Truck"] = 2] = "Truck";
    Vehicles[Vehicles["Motorcycle"] = 3] = "Motorcycle";
})(Vehicles || (Vehicles = {}));
let myVehicle = Vehicles.Car;
console.log(myVehicle);
