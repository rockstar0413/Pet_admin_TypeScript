import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
const MainLayout = () =>{
    return (
        <div>
            <Header />
            <div className="w-full flex">
                <div className="flex-none">
                    <SideBar />
                </div>
                <div className="grow">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default MainLayout;