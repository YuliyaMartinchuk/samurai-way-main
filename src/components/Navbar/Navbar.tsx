import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";



const Navbar = () => {
    // return (
        // <StoreContext.Consumer>
        //     {(store) => {
        //
        //         const friendsList = store.getState().sidebar.friends.map(el => {
        //             return (
        //                 <div key={el.id}>
        //                     <img className={s.avatar} src={el.avatar}/>
        //                     <div className={s.name}>{el.name}</div>
        //                 </div>
        //             )
        //         })
                return (
                    <nav className={s.nav}>
                        <div className={s.item}>
                            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/dialogs" activeClassName={s.active}>Message</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                        </div>
                        <div className={s.friendsText}>
                            Friends
                        </div>
                        <div className={s.friends}>
                            {/*{friendsList}*/}
                        </div>

                    </nav>
                )
        //     }
        //     }
        // </StoreContext.Consumer>
    // )
}
export default Navbar