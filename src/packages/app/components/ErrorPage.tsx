import Paragraph from 'antd/es/typography/Paragraph';
import React from 'react';
import Title from 'antd/es/typography/Title';

const ErrorPage: React.FC = () => {
  return (
    <>
      <Title>Oops!</Title>
      <Paragraph>Sorry, an unexpected error has occurred.</Paragraph>
    </>
  );
};

export default ErrorPage;
