import React from 'react';
import { QiankunReduxContext } from './Context';

export default function Provider({ store, children }) {
  return <QiankunReduxContext.Provider value={store}>{children}</QiankunReduxContext.Provider>;
}
