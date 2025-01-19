import React from 'react';
import * as Tone from 'tone';

const MusicPlayer = ({ code }) => {
  const playMusic = async () => {
    if (!code) {
      console.warn('No code to play. Please generate some Blockly code first.');
      return;
    }

    console.log('Playing music with generated code:', code);

    try {
      // Ensure AudioContext starts only after user gesture
      if (Tone.context.state !== 'running') {
        console.log('Resuming AudioContext...');
        await Tone.start();
        console.log('AudioContext resumed.');
      }

      const synth = new Tone.Synth().toDestination();
      const lines = code.split('\n');

      let time = 0;
      lines.forEach((line) => {
        const match = line.match(/play\('([^']+)'\s*,\s*([\d.]+)\)/);
        if (match) {
          const [, note, duration] = match;
          console.log(`Playing note: ${note}, duration: ${duration}, time offset: ${time}`);
          synth.triggerAttackRelease(note, parseFloat(duration), Tone.now() + time);
          time += parseFloat(duration);
        } else {
          console.warn('Unrecognized line in generated code:', line);
        }
      });

      console.log('Music playback completed.');
    } catch (error) {
      console.error('Error during music playback:', error);
    }
  };

  return (
    <button className="btn btn-primary" onClick={playMusic}>
      Play Music
    </button>
  );
};

export default MusicPlayer;