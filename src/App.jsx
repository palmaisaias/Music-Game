import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BlocklyArea from './components/BlocklyArea';
import MusicPlayer from './components/MusicPlayer';
import './block_definitions'; // Import custom block definitions
import './index.css'; // Optional: Custom styles if needed
import * as Blockly from 'blockly/core'; // Ensure Blockly is imported for JavaScript code generation

const App = () => {
  const [code, setCode] = useState(''); // State to store generated Blockly code

  console.log('Rendering App component...'); // Debug log for App rendering

  const generateCode = () => {
    console.log('Generate Code button clicked.'); // Debug log for button click

    if (Blockly.JavaScript) {
      try {
        const workspaceCode = Blockly.JavaScript.workspaceToCode(); // Generate code from workspace
        console.log('Generated Blockly code:', workspaceCode); // Log the generated code
        setCode(workspaceCode);
      } catch (error) {
        console.error('Error generating Blockly code:', error); // Log generation errors
      }
    } else {
      console.error('Blockly.JavaScript is not available!'); // Log if JavaScript generator is missing
    }
  };

  return (
    <div>
      <Navbar />

      <div className="container my-4">
        <h1 className="text-center">Music Blockly Game</h1>

        <div className="my-4">
          <BlocklyArea />
        </div>

        <div className="text-center my-4">
          <button className="btn btn-success mx-2" onClick={generateCode}>
            Generate Code
          </button>
          <MusicPlayer code={code} />
        </div>
      </div>
    </div>
  );
};

export default App;