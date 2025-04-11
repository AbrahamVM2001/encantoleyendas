import React, { useEffect, useState } from "react";

const Nax: React.FC = () => {
    const [menuItems] = useState([
        { name: "Inicio", href: "/" },
        { name: "Nosotros", href: "#about" },
        { name: "Top Platillos", href: "#popular" },
        { name: "Menu", href: "#menu" },
        { name: "Reservación", href: "#reservation" }
    ]);

    useEffect(() => {
        const navContainer = document.getElementById("nav-container");
        const mobileMenu = document.getElementById("mobile-menu");
        const mobileMenuButton = document.getElementById("mobile-menu-button");
        const closeMenuButton = document.getElementById("close-menu");

        let lastScroll = 0;

        const handleScroll = () => {
            const currentScroll = window.pageYOffset;

            if (!navContainer) return;

            if (currentScroll > 100) {
                navContainer.classList.remove("rounded-full", "my-4");
                navContainer.classList.add("rounded-none", "my-0");
            } else {
                navContainer.classList.add("rounded-full", "my-4");
                navContainer.classList.remove("rounded-none", "my-0");
            }

            lastScroll = currentScroll;
        };

        const openMenu = () => {
            if (!mobileMenu) return;
            mobileMenu.classList.remove("hidden");
            mobileMenu.classList.add("flex");
            document.body.style.overflow = "hidden";
        };

        const closeMenu = () => {
            if (!mobileMenu) return;
            mobileMenu.classList.add("hidden");
            mobileMenu.classList.remove("flex");
            document.body.style.overflow = "";
        };

        const outsideClick = (e: MouseEvent) => {
            if (e.target === mobileMenu) {
                closeMenu();
            }
        };

        window.addEventListener("scroll", handleScroll);
        mobileMenuButton?.addEventListener("click", openMenu);
        closeMenuButton?.addEventListener("click", closeMenu);
        mobileMenu?.addEventListener("click", outsideClick);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            mobileMenuButton?.removeEventListener("click", openMenu);
            closeMenuButton?.removeEventListener("click", closeMenu);
            mobileMenu?.removeEventListener("click", outsideClick);
        };
    }, []);

    return (
        <nav id="main-nav" className="fixed w-full transition-all duration-300 z-50">
            <div className="container mx-auto px-4">
                <div
                    id="nav-container"
                    className="backdrop-blur-md bg-palette2/70 rounded-full my-4 px-6 py-4 shadow-lg transition-all duration-300"
                >
                    <div className="flex items-center justify-between">
                        <a href="/" className="text-2xl font-bold">
                            Logo
                        </a>
                        <div className="hidden md:flex space-x-8">
                            {menuItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-neutral-50 hover:text-palette5 transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <button
                            id="mobile-menu-button"
                            className="md:hidden text-neutral-50 hover:text-palette5 focus:outline-none"
                        >
                            <span className="icon-[ci--hamburger] w-6 h-6"></span>
                        </button>
                    </div>
                </div>
            </div>

            <div
                id="mobile-menu"
                className="fixed inset-0 bg-black/50 backdrop-blur-sm hidden items-center justify-center"
            >
                <div className="bg-palette1/90 backdrop-blur-lg w-11/12 max-w-sm rounded-2xl p-6 relative animate-fade-in">
                    <button
                        id="close-menu"
                        className="absolute top-4 right-4 text-neutral-50 hover:text-palette5"
                    >
                        <span className="icon-[gg--close]"></span>
                    </button>
                    <div className="flex flex-col space-y-4 pt-8">
                        {menuItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-xl text-center text-neutral-50 hover:text-palette5 transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nax;