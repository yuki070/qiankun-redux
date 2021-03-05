import React, { useState, useEffect, useContext } from 'react';
import { QiankunReduxContext } from './Context';

export default function connect(mapStateToProps, mapDispatchToProps) {
  return (WrappedComponent) => {
    return (props) => {
      const store = useContext(QiankunReduxContext);
      const [state, setState] = useState(store.getState());

      useEffect(() => {
        return store.subscribe(() => {
          setState(store.getState());
        });
      }, [store]);

      const stateToProps = mapStateToProps(state);
      const dispatchToProps = mapDispatchToProps(store.dispatch);
      return <WrappedComponent {...stateToProps} {...dispatchToProps} {...props} />;
    };
  };
}
