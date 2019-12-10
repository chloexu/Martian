/* eslint-disable @typescript-eslint/no-explicit-any */
import * as R from "ramda";

// Best practice to separate functions from handler
export default function calculate(params: any): any {
    let result: any;
    if (!params.a || !params.b) {
        throw new Error("400 Invalid Input Number");
    }
    switch (params.op) {
        case "+":
            result = R.add(params.a, params.b);
            break;
        case "-":
            result = R.subtract(params.a, params.b);
            break;
        case "*":
            result = R.multiply(params.a, params.b);
            break;
        case "/":
            result = R.divide(params.a, params.b);
            break;
        default:
            throw new Error("400 Invalid Operator");
    }
    return {
        a: params.a,
        b: params.b,
        op: params.op,
        result,
    };
}
