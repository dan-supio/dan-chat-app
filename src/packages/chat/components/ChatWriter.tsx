import gfm from 'remark-gfm';
import Markdown from 'react-markdown';
import React, { memo, PropsWithChildren, useMemo, useState } from 'react';
import styles from './ChatWriter.module.css';
import useInterval from '../hooks/use-interval';

const getStringPosition = (string: string, subString: string, index: number): number => {
  return string.split(subString, index).join(' ').length;
};

interface Props {
  text?: string;
  delay?: number;
  showCursor?: boolean;
  disableAnimation?: boolean;
  onFinish?: () => void;
}

const NarrativeWriter: React.FC<PropsWithChildren<Props>> = memo((props) => {
  const {
    text = '',
    delay = 25,
    onFinish = () => {},
    showCursor = false,
    disableAnimation = false,
  } = props;

  const [pos, setPos] = useState(0);

  const totalTokens = useMemo(() => text.split(' ').length, [text]);

  useInterval(
    () => {
      setPos((prevPos) => {
        if (prevPos + 1 >= totalTokens) {
          onFinish();
        }

        return prevPos + 1;
      });
    },
    totalTokens > pos && !disableAnimation ? delay : 0
  );

  const textSpan = useMemo(() => {
    const index = disableAnimation ? totalTokens : pos;
    const slicedText = text.slice(0, getStringPosition(text, ' ', index));
    return slicedText;
  }, [text, pos, disableAnimation, totalTokens]);

  return (
    <>
      <Markdown remarkPlugins={[gfm]} children={textSpan} />
      {showCursor && <span className={styles.blinkingCursor}>|</span>}
    </>
  );
});

export default NarrativeWriter;
