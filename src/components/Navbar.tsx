import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav> 
      <header>
        <h1><Link href="/">Restaurant20</Link></h1>
        </header>    
        <ul>
        <li >
          <Link href="/dishes">Dishes</Link>
        </li>
        </ul>     
    </nav>
  );
}

export default Navbar;
