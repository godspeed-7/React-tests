import './App.css';
import React, {useState} from 'react';
import UserContext from './context/userContext';
import Wrapper from './context/wrapper';
import Normal from './custom-hooks/normal';
import WrappingComponent from './error-boundary/wrapping-component';
import AllAboutFormik from './formik/all-about-formik';
import BasicForm from './formik/basic-form';
import FormWithYup from './formik/form-with-yup';
import Component1 from './hocs-test/component1';
import Component2 from './hocs-test/component2';
import withLoader from './hocs-test/withLoader';
import UseContextHook from './hooks/useContextHook';
import UseEffectHook from './hooks/useEffectHook';
import UseReducerTest from './hooks/useReducerHook';
import UseStateHook from './hooks/useStateHook';
import Multi from './state-tests/multi';
import ClassTick from './tick-tick/classTick';
import FuntionalTick from './tick-tick/funtionalTick';
import UseMemoHook from './hooks/useMemoHook';

function App() {
  const [theme, setTheme] = useState(0)
  return (
    <div className='container'>
      <UserContext.Provider value={{theme, setTheme}}>
      <UseMemoHook/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
