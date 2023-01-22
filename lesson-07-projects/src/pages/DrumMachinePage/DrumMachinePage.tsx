import { useState } from 'react';
import { DrumPad } from './DrumPad';
import { Card } from '../../components';

interface AudioClip {
  id: string;
  soundId: string;
  soundName: string;
  src: string;
}

/** FreeCodeCamp: Frontend Project 3 */
export function DrumMachinePage() {
  const audioClips: AudioClip[] = [
    {
      id: 'Q',
      soundId: 'Heater1',
      soundName: 'Heater 1',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    },
    {
      id: 'W',
      soundId: 'Heater2',
      soundName: 'Heater 2',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    },
    {
      id: 'E',
      soundId: 'Heater3',
      soundName: 'Heater 3',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    },
    {
      id: 'A',
      soundId: 'Heater4',
      soundName: 'Heater 4',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    },
    {
      id: 'S',
      soundId: 'Heater6',
      soundName: 'Clap',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    },
    {
      id: 'D',
      soundId: 'DscOh',
      soundName: 'Open HH',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    },
    {
      id: 'Z',
      soundId: 'kickHat',
      soundName: "Kick n' Hat",
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    },
    {
      id: 'X',
      soundId: 'kick1',
      soundName: 'Kick',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
      id: 'C',
      soundId: 'CevH2',
      soundName: 'Closed HH',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    },
  ];

  const [display, setDisplay] = useState(' ');

  return (
    <div
      id="drum-machine"
      className="pt-16 flex flex-col justify-center items-center w-full min-h-screen"
    >
      <Card className="h-full max-w-2xl p-0">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full h-full">
          {/* Q, W, E, A, S, D, Z, X, C. */}
          <div className="grid grid-cols-3 gap-4 w-full h-72 p-8 bg-slate-100 rounded">
            {audioClips.map(({ id, soundId, soundName, src }) => (
              <DrumPad
                key={id}
                id={id}
                soundId={soundId}
                soundName={soundName}
                src={src}
                setDisplay={setDisplay}
              />
            ))}
          </div>

          <div className="grid auto-rows-fr gap-4 h-full md:h-72 w-full md:w-96 bg-white p-8 rounded">
            <h3 className="text-right ">
              Drum Machiner <br /> Minimal-series v1.0.0
            </h3>
            <div
              id="display"
              className="flex justify-center items-center bg-gray-500  text-white rounded-md"
            >
              {display} &nbsp;
            </div>
            <div />
          </div>
        </div>
      </Card>
    </div>
  );
}

/*
User Story #1: I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.
User Story #2: Within #drum-machine I can see an element with a corresponding id="display".
User Story #3: Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.
User Story #4: Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).
User Story #5: When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.
User Story #6: When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string Q, pressing the W key should trigger the drum pad which contains the string W, etc.).
User Story #7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).
*/
