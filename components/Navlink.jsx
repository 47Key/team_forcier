import React from "react";
import Link from "next/link";

const Navlink = ({ title, href }) => {
    return (
        <Link href={href}>
          <p>{title}</p>
        </Link>
    );
}

export default Navlink;