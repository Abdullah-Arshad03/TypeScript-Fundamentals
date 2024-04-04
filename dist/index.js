"use strict";
console.log("practicing yesterdays concepts !");
let myName = "my is Abdullah";
console.log(myName);
let id = 211316;
console.log(typeof id);
console.log("Working with the Functions");
var Enum;
(function (Enum) {
    Enum[Enum["first"] = 9] = "first";
    Enum[Enum["second"] = 10] = "second";
    Enum[Enum["third"] = 11] = "third";
})(Enum || (Enum = {}));
console.log(Enum.first, Enum.second, Enum.third);
let arr = ["sldf"];
let objects = {
    company: "futurenostics",
    area: 11,
    func: (date) => {
        return date;
    }
};
console.log(objects.area);
console.log(objects.func(33));
const sum = (num1) => {
    console.log('im in the sum and the type is : ', typeof num1);
};
sum(3);
sum('9');
let i = 9;
console.log(typeof i.toString());
console.log(typeof i);
//# sourceMappingURL=index.js.map