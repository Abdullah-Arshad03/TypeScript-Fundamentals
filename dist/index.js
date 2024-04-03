"use strict";
let sales = 123456;
let course = 'TypeScript';
let isPublished = true;
let lmao;
console.log(typeof sales);
console.log(sales);
const func = (document) => {
    console.log(document);
};
func(9);
let user = [1, 'Abdullah', true];
console.log('the type is now ', typeof user[0].toString());
console.log('the type of the first element of the tuple is : ', typeof user[0]);
console.log(' this is the tuple ', user);
var Size;
(function (Size) {
    Size[Size["small"] = 4] = "small";
    Size[Size["meduim"] = 5] = "meduim";
    Size[Size["large"] = 6] = "large";
})(Size || (Size = {}));
console.log('this is the small one ', Size.small);
console.log('this is the meduim size : ', Size.meduim);
console.log('this is the meduim size : ', Size.large);
let newVariable = Size.large;
console.log('this is the new variable', newVariable);
//# sourceMappingURL=index.js.map