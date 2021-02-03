import React from 'react';
import './LoadingPage.scss';

const LoadingPage = (props) => {
  return (
    <section className="loading-page">
      <div className="loading-animation">
        <div className="animation__ray"></div>
        <div className="animation__sun"></div>
        <div className="animation__cloud"></div>
        <p className="animation__title">Loading</p>
      </div>
    </section>
  );
};

export default LoadingPage;
