import * as Blockly from 'blockly/core';
import 'blockly/javascript';  // Import the JavaScript code generator

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

Blockly.JavaScript['music_note'] = function (block) {
  const note = block.getFieldValue('NOTE');
  const duration = block.getFieldValue('DURATION');
  return `play('${note}', ${duration});\n`;
};