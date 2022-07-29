import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,
  Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Signup from './routes/Signup';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';
import TaskManagement from './routes/TaskManagement';
import { Provider } from 'react-redux'
import store from './store'
import AdapterDateFns from '@date-io/date-fns';
import { LocalizationProvider } from '@mui/x-date-pickers';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="taskmanagement" element={<TaskManagement />} />
      </Routes>
    </BrowserRouter>
    </LocalizationProvider>
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
