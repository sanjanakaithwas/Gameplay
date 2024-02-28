import React from 'react';

const Result = ({ captureResult }) => {
  if (!captureResult) {
    return <div className="result result-waiting">Waiting for the capture results...</div>;
  }

  let resultMessage = 'No cop has captured the fugitive yet.';

  if (captureResult === 'Cop 1') {
    resultMessage = 'Cop 1 has successfully captured the fugitive!';
  } else if (captureResult === 'Cop 2') {
    resultMessage = 'Cop 2 has successfully captured the fugitive!';
  } else if (captureResult === 'Cop 3') {
    resultMessage = 'Cop 3 has successfully captured the fugitive!';
  }

  return <div className="result">{resultMessage}</div>;
};

export default Result;