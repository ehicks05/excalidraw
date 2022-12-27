import React, { useRef } from 'react';
import { Excalidraw } from '@excalidraw/excalidraw';
import { ExcalidrawElement } from '@excalidraw/excalidraw/types/element/types';
import { AppState, BinaryFiles } from '@excalidraw/excalidraw/types/types';

const serialize = (
  elements: readonly ExcalidrawElement[],
  appState: AppState,
  files: BinaryFiles,
) => {
  localStorage.setItem(
    'data',
    JSON.stringify({
      elements,
      appState: { ...appState, collaborators: [] },
      files,
    }),
  );
};

const deserialize = () => JSON.parse(localStorage.getItem('data') || '{}');

const Home = () => {
  const excalidraw = useRef();

  const handleChange = (
    elements: readonly ExcalidrawElement[],
    appState: AppState,
    files: BinaryFiles,
  ) => {
    serialize(elements, appState, files);
  };

  return (
    <div className="h-screen">
      <Excalidraw
        initialData={deserialize()}
        onChange={handleChange}
        ref={excalidraw.current}
      />
    </div>
  );
};

export default Home;
