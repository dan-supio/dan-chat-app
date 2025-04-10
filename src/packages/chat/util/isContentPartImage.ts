import ContentPart from '../schema/ContentPart';
import ContentPartImage from '../schema/ContentPartImage';

const isContentPartImage = (contentPart: ContentPart): contentPart is ContentPartImage => {
  return contentPart.type === 'image_url';
};

export default isContentPartImage;
