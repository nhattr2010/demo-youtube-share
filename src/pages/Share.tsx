import React from 'react';

function Share() {
  return (
    <div className="share-form">
      <h1>Share a Youtube movie</h1>
      <div className={'row'}>
        <label>Youtube URL</label>
        <input/>
      </div>
      <br />
      <button>Share</button>
    </div>
  );
}

export default Share;
