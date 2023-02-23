import React from 'react'
import TodoList from './components/UI/User/Todo/TodoList'
// import { Count_Down } from './components/UI/COUNT_DOWN/Count_Down'
// import HeaderHome from './components/UI/Header/HeaderNavbar/HeaderHome'
// import Sidebar from './components/UI/SideBar/Sidebar'
// import HomePages from './pages/UI/HomePages/HomePages'
import './styles/app.css'
const App = () => {
  return (
    <div>
      {/* <Count_Down/> */}
      {/* <HeaderHome />
      <div className="container">
        <div className="sideBar">
          <Sidebar />
        </div>
        <div className="HomePage">
          <HomePages />
        </div>
      </div> */}
      <TodoList />
    </div>
  )
}

export default App
