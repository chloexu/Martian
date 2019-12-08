import "mocha";
import { expect, assert } from "chai";
import calculate from "../src/helper";

describe("Generic Tests", function () {
    it("should pass!", () => {
        const t = 1;
        expect(t).to.equal(1);
    });
});



describe("helper.calculate.+", function () {
    it("should pass!", () => {
        const params = {
            a: 2,
            b: 3,
            op: "+",
        };
        const res = calculate(params);
        expect(res.result).to.equal(5);
    });
});

describe("helper.calculate.-", function () {
    it("should pass!", () => {
        const params = {
            a: 98,
            b: 3,
            op: "-",
        };
        const res = calculate(params);
        expect(res.result).to.equal(95);
    });
});

describe("helper.calculate.*", function () {
    it("should pass!", () => {
        const params = {
            a: 9,
            b: 3,
            op: "*",
        };
        const res = calculate(params);
        expect(res.result).to.equal(27);
    });
});

describe("helper.calculate./", function () {
    it("should pass!", () => {
        const params = {
            a: 78,
            b: 3,
            op: "/",
        };
        const res = calculate(params);
        expect(res.result).to.equal(26);
    });
});


describe("helper.calculate.empty_num", function () {
    it("should pass!", () => {
        const params: any = {
            a: undefined,
            b: 3,
            op: "/",
        };
        assert.throws(() => calculate(params), Error, "400 Invalid Input Number");
    });
});


describe("helper.calculate.empty_op", function () {
    it("should pass!", () => {
        const params: any = {
            a: 3,
            b: 3,
        };
        assert.throws(() => calculate(params), Error, "400 Invalid Operator");
    });
});
