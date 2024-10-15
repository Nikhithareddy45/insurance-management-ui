import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CustomerList from './post-login/customers/list/CustomerList';
import Policy from './post-login/customers/policy/Policy';
import PolicyList from './post-login/customers/policy-list/PolicyList';

const Login = lazy(() => import('./pre-login/login/Login'));
const Register = lazy(() => import('./pre-login/registration/Register'));
const NotFound = lazy(() => import('./pre-login/not-found/NotFound'));
const AuthRoute = lazy(() => import('./post-login/AuthRoute'));
const Customer = lazy(() => import('./post-login/customers/create/Customer'));
const Dashboard = lazy(() => import('./post-login/dashboard/Dashboard'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading ....</h1>}>
          <Routes>
            <Route path='' element={<Login />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='*' element={<NotFound />} />
            <Route path='auth' element={<AuthRoute />}>
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='create' element={<Customer />} />
              <Route path='create/:id' element={<Customer />} />
              <Route path='list' element={<CustomerList />} />
              <Route path='policy/:customerId' element={<Policy />} />
              <Route path='policies/:customerId' element={<PolicyList />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
