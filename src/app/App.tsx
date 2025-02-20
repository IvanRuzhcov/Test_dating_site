import React, { Suspense } from 'react';

import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';

function App() {
  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="content-page">
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
