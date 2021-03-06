import React from 'react';
import Helmet from 'react-helmet';

const Head: React.FC = () => (
  <Helmet>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
    <title>Chess</title>
  </Helmet>
);

export default Head;