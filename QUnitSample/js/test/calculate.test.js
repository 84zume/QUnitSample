/// <reference path="../calculate.js"/>

module("Calculator tests");

test("SumTest", function() {
    var result = add(2, 3);
    equals(5, result, "Sum of 2 and 3 is 5");
});

test("SubstractTest", function () {
    var result = substract(5, 1);
    equals(4, result, "Substracting 1 from 5 gives 4");
});