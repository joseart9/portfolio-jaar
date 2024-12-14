import React from "react";
import {
    Navbar,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from "@nextui-org/react";

import MenuItems from "./MenuItems";
import { FaWhatsapp } from "react-icons/fa";

export default function NavbarComponent({ activeHash }: { activeHash: any }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar position="sticky" shouldHideOnScroll={false} isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                />
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem className="flex flex-row gap-2 items-center">
                    <Button href="CV Arturo Arguelles 2024.pdf" download as={Link} color="primary" variant="solid" className="text-white font-semibold text-md">
                        Descargar CV
                    </Button>
                    <a href="https://wa.me/528117858904" target="_blank" rel="noreferrer">
                        <FaWhatsapp className="fill-current size-8 text-primary" />
                    </a>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {MenuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className={`w-full text-xl ${activeHash === item.href ? "font-semibold" : "font-normal"}`}
                            color={
                                activeHash === item.href ? "primary" : "foreground"
                            }
                            href={item.href}
                            size="lg"
                            onPress={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
