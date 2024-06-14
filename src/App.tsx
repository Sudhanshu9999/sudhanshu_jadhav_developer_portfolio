import React from 'react';
import RoutePage from './Common/RoutePage';
import { MenuProvider } from './ContextAPI/MenuContext';

const App: React.FC = () => {
  return (
    <MenuProvider>
      <RoutePage />
    </MenuProvider>
  );
};

export default App;
