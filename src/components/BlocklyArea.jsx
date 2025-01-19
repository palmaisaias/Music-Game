import React, { useRef, useEffect } from 'react';
import * as Blockly from 'blockly/core';
import 'blockly/blocks';
import 'blockly/javascript';
import '../block_definitions'; // Import custom block definitions

const toolbox = `
  <xml>
    <block type="controls_repeat">
      <value name="TIMES">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="math_number"></block>
    <block type="text"></block>
    <block type="music_note"></block>
  </xml>
`;

const BlocklyArea = () => {
  const blocklyDiv = useRef(null);
  const workspace = useRef(null);

  useEffect(() => {
    console.log('Initializing Blockly workspace...'); // Debug log for initialization

    // Initialize the Blockly workspace
    try {
      workspace.current = Blockly.inject(blocklyDiv.current, { toolbox });
      console.log('Blockly workspace initialized successfully.'); // Success log
    } catch (error) {
      console.error('Error initializing Blockly workspace:', error); // Error handling
    }

    return () => {
      // Dispose of the workspace on component unmount
      if (workspace.current) {
        console.log('Disposing Blockly workspace...'); // Debug log for cleanup
        workspace.current.dispose();
        console.log('Blockly workspace disposed.'); // Success log for cleanup
      }
    };
  }, []);

  return <div ref={blocklyDiv} style={{ height: '500px', width: '100%' }} />;
};

export default BlocklyArea;