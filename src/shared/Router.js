import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Detail from '../pages/Detail';
import Mypage from '../pages/Mypage';
import SetProfile from '../pages/SetProfile';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/mypage/:id" element={<Mypage />} />
        <Route path="/setprofile/:id" element={<SetProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
