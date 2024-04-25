import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import TodoList from './ToDo';
// import Counter from './Hooks/useReducer';
// import ParentComponent from './Hooks/useCallback';
// import MemoComponent from './Hooks/useMemo';
// import CustomCounter from './Hooks/customHook';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <TodoList/>
    <center><Counter/></center>
    <ParentComponent/><br/>
    <MemoComponent/>
    <CustomCounter/> */}
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
