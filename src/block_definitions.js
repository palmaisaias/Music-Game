import * as Blockly from 'blockly/core';
import 'blockly/blocks'; // Import default Blockly blocks
import 'blockly/javascript'; // Import the JavaScript generator

console.log('Initializing custom block definitions...');

// Define custom blocks
Blockly.defineBlocksWithJsonArray([
  {
    type: 'music_note',
    message0: 'play note %1 for %2 beats',
    args0: [
      {
        type: 'field_dropdown',
        name: 'NOTE',
        options: [
          ['C4', 'C4'],
          ['D4', 'D4'],
          ['E4', 'E4'],
          ['F4', 'F4'],
          ['G4', 'G4'],
          ['A4', 'A4'],
          ['B4', 'B4'],
        ],
      },
      {
        type: 'field_number',
        name: 'DURATION',
        value: 1,
        min: 0.1,
        precision: 0.1,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: 'Plays a musical note for a specified duration.',
    helpUrl: '',
  },
]);

// Debug: Confirm block definition
console.log('Custom block "music_note" defined:', Blockly.Blocks['music_note']);

// Check if Blockly.JavaScript is loaded
if (Blockly.JavaScript) {
  console.log('Blockly.JavaScript is available. Assigning generator for "music_note".');
  Blockly.JavaScript['music_note'] = function (block) {
    const note = block.getFieldValue('NOTE');
    const duration = block.getFieldValue('DURATION');
    console.log(`Generating code for note "${note}" with duration ${duration}.`);
    return `play('${note}', ${duration});\n`;
  };
} else {
  console.error('Error: Blockly.JavaScript is not available!');
}