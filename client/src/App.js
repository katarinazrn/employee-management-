import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Employees from './pages/Employees';
import EditEmployeePage from './pages/EditEmployee';
import NewEmployeePage from './pages/NewEmployee';
import EmployeeDetails from './components/details/EmployeeDetails';

function App() {
  return (
    <BrowserRouter >
      <div className='row bg-light w-100 p-0' >
        <Sidebar />
        <div className='col-md-9 col-sm-12 col-12  pt-5 pt-md-1 ms-auto'>
          <Routes >
            <Route path='/employees/:type' element={<Employees />} />
            <Route path='/employee/:id' element={<EmployeeDetails />} />
            <Route path='/new' element={<NewEmployeePage />} />
            <Route path='/edit/:id' element={<EditEmployeePage />} />
            <Route path='*' element={<Navigate to='/employees/all' replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
