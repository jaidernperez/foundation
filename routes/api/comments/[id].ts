import {Handlers} from "$fresh/server.ts";
import {Comment} from "../../../models/Comment.ts";
import {ResponseUtil} from "../../../utils/response-util.ts";

const kv = await Deno.openKv();

export const handler: Handlers<Comment | null> = {
    async GET(_req, ctx): Promise<Response> {
        const id = ctx.params.id;
        const commentFound = ["comments", id];
        const commentRes = await kv.get<Comment>(commentFound);
        if (!commentRes.value) return ResponseUtil.getResponse(`Comment with id ${id} not found`, 404);

        return ResponseUtil.getCommentResponse(commentRes.value, 200);
    },
    async DELETE(_req, ctx): Promise<Response> {
        const id = ctx.params.id;
        const commentKey = ["comments", id];
        const commentFound = await kv.get<Comment>(commentKey);
        if (!commentFound.value) return ResponseUtil.getResponse(`Comment with id ${id} not found`, 404);

        const ok = await kv.atomic().check(commentFound).delete(commentKey).commit();
        if (!ok) return ResponseUtil.getResponse('Something went wrong', 500);

        return ResponseUtil.getResponse(`Comment with id ${id} deleted`, 200);
    },
    async PUT(req, ctx): Promise<Response> {
        const id = ctx.params.id;
        const comment: Comment = (await req.json());
        const commentKey = ["comments", id];
        const commentRes = await kv.get(commentKey);
        if (!commentRes.value) return ResponseUtil.getResponse(`Comment with id ${id} not found`, 404);

        const ok = await kv.atomic().check(commentRes).set(commentKey, comment).commit();
        if (!ok) return ResponseUtil.getResponse('Something went wrong', 500);

        return ResponseUtil.getCommentResponse(comment, 200);
    },
};
