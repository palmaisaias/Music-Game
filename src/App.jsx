import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BlocklyArea from './components/BlocklyArea';
import MusicPlayer from './components/MusicPlayer';
import './block_definitions'; // Import custom block definitions
import './index.css'; // Optional: Custom styles if needed
import * as Blockly from 'blockly/core'; // Ensure Blockly is imported for JavaScript code generation

const App = () => {
  const [code, setCode] = useState(''); // State to store generated Blockly code

  const generateCode = () => {
    if (Blockly.JavaScript) {
      const workspaceCode = Blockly.JavaScript.workspaceToCode(); // Generate code from workspace
      setCode(workspaceCode);
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