import ContentPart from './ContentPart';
import { Dayjs } from 'dayjs';

export default interface Message {
  role: 'user' | 'assistant';
  content: string | ContentPart[];
  date?: Dayjs;
}
