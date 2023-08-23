import {Comment} from "../models/Comment.ts";

export class ResponseUtil {

    static getCommentResponse(response: Comment | Comment[], statusCode: number): Response {
        return new Response(JSON.stringify(response), {
            headers: {
                "Content-Type": "application/json",
            },
            status: statusCode
        });
    }

    static getResponse(message: string, statusCode: number): Response {
        return new Response(JSON.stringify({timestamp: new Date(), message: message}), {
            headers: {
                "Content-Type": "application/json",
            },
            status: statusCode
        });
    }
}