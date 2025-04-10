export default interface PromptInput {
  prompt: string;
  function_call?: string;
  functions?: any;
  messages?: any[];
  model?: string;
  prompt_context?: string;
  topic?: string;
}
