import React, { useEffect } from 'react';
import DrumPad from './DrumPad';

const audioData = [
  { id: 'Kick', keyCode: 81, audioSrc: 'path/to/kick.wav' },
  { id: 'Snare', keyCode: 87, audioSrc: 'path/to/snare.wav' },
  // Добавьте больше сэмплов по аналогии
];

const DrumMachine = () => {
  const triggerSound = (id) => {
    const audio = document.getElementById(id);
    audio.currentTime = 0;
    audio.play();
  };

  const handleKeyPress = (e) => {
    const pad = audioData.find((pad) => pad.keyCode === e.keyCode);
    if (pad) {
      triggerSound(pad.id);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="drum-machine">
      {audioData.map((pad) => (
        <DrumPad
          key={pad.id}
          id={pad.id}
          keyCode={pad.keyCode}
          audioSrc={pad.audioSrc}
          triggerSound={triggerSound}
        />
      ))}
    </div>
  );
};

export default DrumMachine;