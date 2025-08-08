import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/home/Homepage';
import SignUp from './components/home/components/SignUp';
import LogIn from './components/home/components/LogIn';
import Cart from './components/home/components/Cart';
import Profile from './components/home/components/Profile';
import WishList from './components/home/components/WishList';
import BillingDetails from './components/home/components/BillingDetails';
import ProductDetail from './components/home/components/ProductDetail';
import MainLayout from './common/MainLayout';
import Error from './components/home/components/Error';

function App() {
  return (
    <>
      <Routes>
        <Route path='/'
          element={
            <MainLayout>
              <Homepage />
            </MainLayout>
          } />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/cart' element={
          <MainLayout>
            <Cart />
          </MainLayout>
        } />
        <Route path='/profile' element={
          <MainLayout>
            <Profile />
          </MainLayout>
        } />
        <Route path='/wishlist' element={
          <MainLayout>
            <WishList />
          </MainLayout>
        } />
        <Route path='/billingdetails' element={
          <MainLayout>
            <BillingDetails />
          </MainLayout>
        } />
        <Route path='/product/:id' element={
          <MainLayout>
            <ProductDetail />
          </MainLayout>
        } />
        <Route path='/error' element={
          <MainLayout>
            <Error />
          </MainLayout>
        } />
      </Routes>
    </>
  );
}

export default App;
