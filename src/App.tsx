import React from 'react';
import RoutePage from './Common/RoutePage';
import { MenuProvider } from './ContextAPI/MenuContext';

const App: React.FC = () => {
  return (
    <div className="content">
    <MenuProvider>
      <RoutePage />
    </MenuProvider>
    </div>
  );
};

export default App;
