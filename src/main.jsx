import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CreatePost from './CreatePost.jsx'
import PostPage from './PostPage.jsx'
import Admin from './Admin.jsx'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/create' element={<CreatePost />} />
        <Route exact path='/post/:id' element={<PostPage />} />
        <Route exact path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
