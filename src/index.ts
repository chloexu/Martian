import calculate from "./helper";

export default function handler(event: any, context: any, callback: any): any {
    if (context && context.callbackWaitsForEmptyEventLoop) {
        context.callbackWaitsForEmptyEventLoop = false;
    } else {
        context.callbackWaitsForEmptyEventLoop = true;
    }
    console.log("Received event:", JSON.stringify(event, null, 2));
    if (
        event.a === undefined ||
        event.b === undefined ||
        event.op === undefined
    ) {
        callback("400 Invalid Input");
    }
    if (!event.a || !event.b) {
        callback("400 Invalid Operand");
    }
    try {
        const response = calculate(event);
        callback(null, response);
    } catch (error) {
        callback(error);
    }
}
