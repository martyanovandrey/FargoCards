import { Request, Response } from "express";
import CommentService, { CreateRequest } from "../services/commentService";
import UserService from "../services/userService";
import { handleError } from "./utils/sendError";

const commentService = new CommentService();
const userService = new UserService();

interface AddEmojiRequest {
    emojiId: number;
}

export default class CommentApi {

    static request = async (request: Request<any, any, any, { topicId: string }>, response: Response) => {
        try {
            response.send(await commentService.request(Number((request.query.topicId))));
        }
        catch (e) {
            handleError(e, "Cannot get comments", response);
        }
    };

    static addEmoji = async (request: Request<any, any, AddEmojiRequest>, response: Response) => {
        try {

            await commentService.addEmoji(parseInt(request.params.commentId), request.body.emojiId);

            response.sendStatus(200);
        }
        catch (e) {
            handleError(e, "Cannot add emoji", response);
        }
    };

    static create = async (request: Request, response: Response) => {
        try {
            const { id: userId, login } = response.locals["user"];

            // TODO тут проверяем, что переданный юзер совпадает с залогиненым
            // по идее, можно было бы избавиться от передачи юзера, т.к. он уже тут есть, но не сейчас
            if ((request.body as CreateRequest).userId !== parseInt(userId)) {
                response.sendStatus(401);
            }

            await userService.ensureUser({ id: userId, name: login });

            response.send(await commentService.create(request.body));
        }
        catch (e) {
            console.error(e);
            response.status(500).send({ error: "Cannot create comment" });
        }
    };
}
