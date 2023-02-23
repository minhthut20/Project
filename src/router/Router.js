import React from 'react'
import IndexPage from '../page/indexPage/IndexPage'
import { Routes, Route, useLocation } from 'react-router-dom'
import DashBoard from '../page/dashBoard/DashBoard'
import TakeActionPage from '../page/thoiSuPage/ThoiSuPage'
import LoginPage from '../page/loginPage/LoginPage'
import RegisterPage from '../page/registerPage/RegisterPage'
import AdminPage from '../page/adminPage/AdminPage'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { loading, postLoading } from '../redux/action/action'
import UserAdminPage from '../page/adminPage/UserAdminPage'
import PostAdminPage from '../page/adminPage/PostAdminPage'
import CommentAdminPage from '../page/adminPage/CommentAdminPage'
import NewPostPage from '../page/adminPage/NewPostPage'
import WorldPage from '../page/thoiSuPage/WorldPage'
import SportPage from '../page/thoiSuPage/SportPage'
import EducationPage from '../page/thoiSuPage/EducationPage'
import CulturePage from '../page/thoiSuPage/CulturePage'
import DetailPage from '../page/detailPage/DetailPage'


export default function Router() {
  // const location = useLocation()
  // console.log(location);
  const dispatch = useDispatch()
  axios.get('http://localhost:5555/user').then((data) => {
    dispatch(loading(data.data))
  })
  axios.get('http://localhost:5555/post').then((data) => {
    dispatch(postLoading(data.data))
  })
  return (
    <>
      <Routes>

        <Route path='/' element={<DashBoard />}>
          <Route index element={<IndexPage />} />

          <Route path='news' element={<TakeActionPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='world' element={<WorldPage />} />
          <Route path='sport' element={<SportPage />} />
          <Route path='education' element={<EducationPage />} />
          <Route path='culture' element={<CulturePage />} />
          <Route path='/:cataloge/:id' element={<DetailPage />} />
        </Route>
        <Route path='/admin' element={<AdminPage />}>
          <Route path='user' element={<UserAdminPage />} />
          <Route path='post' element={<PostAdminPage />} />
          <Route path='newpost' element={<NewPostPage />} />
          <Route path='comment' element={<CommentAdminPage />} />
        </Route>

      </Routes>


    </>
  )
}
