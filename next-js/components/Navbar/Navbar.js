import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (

        <nav>
            <menu className="navbar">
                <div >
                    <Link href="/">

                        <a className="navbar_home">
                            <img className="logo-app" src="/images/avo-logo.png" />
                            <h3>Avo store</h3>
                        </a>
                    </Link>
                </div>
                <div >
                    <Link href="/about">
                        <a className="navbar_canasta">
                            <img className="logo-app" src="/images/canasta.png" />
                            <h3>Canasta</h3>
                        </a>
                    </Link>
                </div>


            </menu>
        </nav>

    )
}

export default Navbar;