import React from 'react';
import * as Tone from 'tone';

const MusicPlayer = ({ code }) => {
  const playMusic = () => {
    if (!code) return; // Prevent playback if code is empty

    const synth = new Tone.Synth().toDestination();
    const lines = code.split('\n');

    let time = 0;
    lines.forEach((line) => {
      const match = line.match(/play\('([^']+)'\s*,\s*([\d.]+)\)/);
      if (match) {
        const [, note, duration] = match;
        synth.triggerAttackRelease(note, parseFloat(duration), Tone.now() + time);
        time += parseFloat(duration);
      }
    });
  };

  return (
    <button className="btn btn-primary" onClick={playMusic}>
      Play Music
    </button>
  );
};

export default MusicPlayer;