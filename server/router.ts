import express, { Request, Response } from 'express';
import { ChatService } from './service/chat.service';
import { createSession } from 'better-sse';

const router = express.Router();

router.all('/health', (req, res) => {
  res.sendStatus(200);
});

router.post('/chat', async (req: Request, res: Response, next) => {
  const { prompt, prompt_context, topic, model, messages, functions, function_call } = req.body;

  const session = await createSession(req, res);
  const resWithSession: Response & { sse?: any } = res;
  resWithSession.sse = session;

  try {
    await ChatService.invokeCompletionRequest(res, {
      prompt,
      prompt_context,
      topic,
      model,
      messages,
      functions,
      function_call,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
