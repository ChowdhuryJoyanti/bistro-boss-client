import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome } from 'react-icons/fa';
import useCart from '../Hooks/useCart';
const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>



                </div>
                <div className="drawer-side bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80">

                        <li><NavLink  to="/dashboard/home" className="text-black"><FaHome></FaHome>User Home</NavLink></li>
                        <li><NavLink to="/dashboard/reservation" className="text-black"><FaCalendarAlt></FaCalendarAlt>Reservations</NavLink></li>
                        <li><NavLink to="/dashboard/history" className="text-black"><FaWallet></FaWallet>Payment History</NavLink></li>
                        <li className=''>
                            <NavLink to="/dashboard/mycart" className="text-black" ><FaShoppingCart></FaShoppingCart>My Cart
                            <span className="badge inline badge-secondary">+{cart?.length || 0}</span>
                            </NavLink>

                            
                            </li>
                        <div className="divider"></div>
                        <li><NavLink to="/" className="text-black"><FaHome></FaHome>Home</NavLink></li>
                        <li><NavLink to="/menu" className="text-black"><></> Our Menu</NavLink></li>
                        <li><NavLink to="/order/salad" className="text-black">Order Food</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;