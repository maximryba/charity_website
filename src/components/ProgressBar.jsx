import React from 'react';

const ProgressBar = ({ title, percentage, showNumbers = true }) => {
  return (
    <div className="bar">
      {showNumbers && (
        <div className="bar__line">
          <p className="bar__text">{title}</p>
          <p className="bar__percentage">{percentage}%</p>
        </div>
      )}
      <div className="progress">
        <progress max="100" value={percentage}></progress>
        <div className="progress-value"></div>
        <div className="progress-bg">
          <div style={{ width: `${percentage}%` }} className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;