/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/media-has-caption */
import { useCallback, useEffect, useRef, useState } from 'react';

type Props = {
  id: string;
  soundId: string;
  soundName: string;
  src: string;
  className?: string;
  setDisplay: (id: string) => void;
};

export function DrumPad({
  id,
  soundId,
  soundName,
  className = '',
  src,
  setDisplay,
}: Props) {
  const audioRef = useRef<HTMLAudioElement>(new Audio());
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const play = useCallback(() => {
    setIsPressed(true);
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setDisplay(soundName);
  }, [soundName, setDisplay]);

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key.toUpperCase() === id) {
        play();
      }
    };
    const keyUpHandler = (event: KeyboardEvent) => {
      if (event.key.toUpperCase() === id) {
        setIsPressed(false);
      }
    };

    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
      document.removeEventListener('keyup', keyUpHandler);
    };
  }, [id, play]);

  return (
    <button
      onClick={() => {
        play();
        setIsPressed(false);
      }}
      id={soundId}
      className={`drum-pad bg-blue-500 hover:bg-blue-400 text-white font-bold h-16 border-b-4 border-blue-700 hover:border-blue-500 rounded active:border-none ${
        isPressed ? 'border-none' : ''
      }  ${className}`}
    >
      <audio ref={audioRef} id={id} className="clip" src={src} />
      {id}
    </button>
  );
}
