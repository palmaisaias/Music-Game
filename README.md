# Music Blockly Game

A web-based interactive music game built using React, Vite, Blockly, and Tone.js. This project enables users to create music by programming with drag-and-drop blocks and play their compositions.

## Features

- **Blockly Integration**: Drag-and-drop programming interface for music composition. *(Currently not functioning as expected; see below for details.)*
- **Custom Blocks**: Blocks designed for playing musical notes and sequences.
- **Tone.js Integration**: Real-time audio synthesis and playback.
- **Responsive Design**: Styled with Bootstrap for a clean and adaptable interface.

## Tech Stack

- **Frontend**: React with Vite for fast development and hot module replacement (HMR).
- **Blockly**: Block-based programming interface for interactive learning. *(Under review for replacement.)*
- **Tone.js**: JavaScript library for creating and controlling audio.
- **Bootstrap**: Responsive styling for a modern look.

## Known Issues

⚠️ **Blockly Integration:**
The current implementation of Blockly is not functioning as expected due to unresolved issues with block initialization and generator compatibility. An alternative block-based programming library is being explored to resolve these limitations.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd music-game