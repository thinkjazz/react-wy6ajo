import React from 'react';

const DrumPad = ({ id, audioSrc, keyCode, triggerSound }) => {
  const handleClick = () => {
    triggerSound(id);
  };

  return (
    <button className="drum-pad" id={id} onClick={handleClick}>
      {String.fromCharCode(keyCode)}
      <audio
        className="clip"
        id={String.fromCharCode(keyCode)}
        src={audioSrc}
      />
    </button>
  );
};

export default DrumPad;
