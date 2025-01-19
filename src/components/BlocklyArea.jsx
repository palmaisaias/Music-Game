import React, { useRef, useEffect } from 'react';
import * as Blockly from 'blockly/core';
import '../block_definitions'; // Import custom block definitions

const BlocklyArea = () => {
  const blocklyDiv = useRef(null);
  const workspace = useRef(null);

  useEffect(() => {
    // Initialize the Blockly workspace
    workspace.current = Blockly.inject(blocklyDiv.current, {
      toolbox: `
        <xml>
          <block type="controls_repeat"></block>
          <block type="math_number"></block>
          <block type="text"></block>
          <block type="music_note"></block>
        </xml>
      `,
    });

    return () => {
      // Dispose of the workspace on component unmount
      if (workspace.current) {
        workspace.current.dispose();
      }
    };
  }, []);

  return <div ref={blocklyDiv} style={{ height: '500px', width: '100%' }} />;
};

export default BlocklyArea;