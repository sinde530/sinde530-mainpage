import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/account/service/signin" element={<SignIn />} />
        <Route path="/account/service/create/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}
