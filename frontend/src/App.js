// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import UserDashboard from './pages/user/UserDashboard'
import UserRoute from './component/UserRoute';
import Layout from './pages/global/Layout';
import UserJobsHistory from './pages/user/UserJobsHistory';

//higher order function 
const UserDashboardHOC = Layout(UserDashboard)
const UserJobsHistoryHOC = Layout(UserJobsHistory)


const App = () => {
  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/user/dashboard' element={<UserRoute><UserDashboardHOC /></UserRoute>} />
              <Route path='/user/jobs' element={<UserRoute><UserJobsHistoryHOC /></UserRoute>} />
              <Route path='*' element={<NotFound />} />
              <Route path='/search/location/:location' element={<Home />} />
              <Route path='/search/:keyword' element={<Home />} />
            </Routes>
          </BrowserRouter>
        </ProSidebarProvider>
      </ThemeProvider >
    </>
  );
}

export default App;
