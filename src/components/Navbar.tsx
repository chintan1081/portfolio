import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from "react-router-dom"

type NavDataProp = {
    to: string,
    title: string
}

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const navData: NavDataProp[] = [
        { to: "/work", title: "Work" },
        { to: "/blogs", title: "Blogs" },
        { to: "/projects", title: "Projects" }
    ]

    return (
        <div className="sticky top-0 inset-x-0 bg-white border border-neutral-200">
            <div className="relative p-4 md:pr-8 mx-auto border-x border-neutral-200 max-w-2xl flex flex-row justify-between items-center">
                <img className="w-12" src="cp-logo.png" alt="chintan-img" />
                <div className="hidden md:flex gap-4 text-neutral-700 text-sm font-medium">
                    {navData.map((navItem) =>
                        <Link
                            to={navItem.to}
                            className="hover:underline underline-offset-4 decoration-2 hover:text-neutral-900 delay-100" >
                            {navItem.title}
                        </Link>
                    )}
                </div>
                <button onClick={() => setNavOpen(!navOpen)} className="text-xl cursor-pointer md:hidden">
                    <GiHamburgerMenu />
                </button>
                {navOpen && <div className=" absolute inset-x-0 shadow-lg border-neutral-300 text-sm text-neutral-700 font-medium mx-auto rounded-2xl gap-2 max-w-[90%] top-16 bg-white flex flex-col p-4">
                    {
                        navData.map((navItem) =>
                            <Link
                                to={navItem.to}
                                className="border-b border-neutral-100 px-2"
                            >
                                {navItem.title}
                            </Link>
                        )
                    }
                </div>}
            </div>
        </div>
    )
}

export default Navbar
