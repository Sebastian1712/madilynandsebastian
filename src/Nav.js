import React from "react";
import { slide as Menu } from "react-burger-menu";
import './Nav.css';



function Nav() {
  return (
        <div>
            <Menu>
                <a className="Home" href="/">
                    Home
                </a>
                <a className="Adventures" href="/adventures">
                    Adventures
                </a>
            </Menu>
        </div>
  );
}

export default Nav;
