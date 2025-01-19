import React from 'react';
import * as Tone from 'tone';
import 'blockly/javascript';

const MusicPlayer = ({ code }) => {
  const playMusic = () => {
    if (!code) {
      console.warn('No code to play. Please generate some Blockly code first.'); // Warning if no code
      return;
    }

    console.log('Playing music with generated code:', code); // Debug log for code playback

    try {
      const synth = new Tone.Synth().toDestination();
      const lines = code.split('\n');

      let time = 0;
      lines.forEach((line) => {
        const match = line.match(/play\('([^']+)'\s*,\s*([\d.]+)\)/);
        if (match) {
          const [, note, duration] = match;
          console.log(`Playing note: ${note}, duration: ${duration}, time offset: ${time}`); // Log each note
          synth.triggerAttackRelease(note, parseFloat(duration), Tone.now() + time);
          time += parseFloat(duration);
        } else {
          console.warn('Unrecognized line in generated code:', line); // Log unrecognized lines
        }
      });

      console.log('Music playback completed.');
    } catch (error) {
      console.error('Error during music playback:', error); // Log playback errors
    }
  };

  return (
    <button className="btn btn-primary" onClick={playMusic}>
      Play Music
    </button>
  );
};

export default MusicPlayer;