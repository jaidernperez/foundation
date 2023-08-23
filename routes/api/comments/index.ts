import { Handlers } from "$fresh/server.ts";
import {Comment} from "../../../models/Comment.ts";
import {ResponseUtil} from "../../../utils/response-util.ts";

const kv = await Deno.openKv();

export const handler: Handlers<Comment | null> = {
    async GET(_req, _ctx): Promise<Response> {
        const comments: Comment[] = [];
        for await (const res of kv.list({ prefix: ["comments"] })) {
            comments.push(res.value as Comment);
        }
        comments.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        return ResponseUtil.getCommentResponse(comments, 200);
    },
    async POST(req, _ctx): Promise<Response> {
        const comment: Comment = await req.json();
        const id = crypto.randomUUID();
        const commentKey = ["comments", id];
        comment.id = id;
        comment.createdAt = new Date();

        const ok = await kv.atomic().set(commentKey, comment).commit();
        if (!ok) return ResponseUtil.getResponse('Something went wrong', 500);

        return ResponseUtil.getCommentResponse(comment, 201);
    },
};