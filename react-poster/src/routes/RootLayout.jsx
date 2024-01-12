import MainHeader from "../components/MainHeader";
import {Outlet} from 'react-router-dom'

function RouteLayout(){
    return(
        <>
        <MainHeader></MainHeader>
        <Outlet></Outlet>
        </>
    )
}

export default RouteLayout;