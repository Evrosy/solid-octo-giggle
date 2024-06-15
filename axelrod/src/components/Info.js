import React from 'react';

function Info({ info }) {
  if (!info) return null;

  return (
    <div id="Info" style={{ display: info ? 'block' : 'none' }} dangerouslySetInnerHTML={{ __html: info }}></div>
  );
}

export default Info;