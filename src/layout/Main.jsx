import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"

const Main = () => {
  return (
    <div className="m-auto flex flex-col mt-6">
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}

export default Main