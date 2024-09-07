import React from 'react';

export default function Comments(props) {
  return (
    <>
      <div className="testbox">
        <div className="testimg"></div>
        <p className="testpara">{props.comment}</p>
        <p className="testpara2">{props.name}</p>
      </div>
    </>
  );
}
