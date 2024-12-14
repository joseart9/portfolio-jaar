import React, { useEffect, useState } from "react";
import {
    Navbar,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from "@nextui-org/react";

import MenuItems from "./MenuItems";
import { FaWhatsapp } from "react-icons/fa";


export default function NavbarComponent({ activeHash }: { activeHash: any }) {

    return (
        <Navbar className="bg-base">
            <NavbarContent className="hidden sm:flex gap-4" justify="start">
                {MenuItems.map((item, index) => (
                    <NavbarItem key={`${item}-${index}`}>
                        <a href={item.href}>
                            <Button className={`${activeHash === item.href ? 'text-white' : 'text-primary'} font-semibold uppercase`}
                                variant={`${activeHash === item.href ? 'solid' : 'light'}`}
                                color="primary" href="#">
                                {item.label}
                            </Button>
                        </a>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="flex flex-row items-center gap-4">

                    <Button href="CV Arturo Arguelles 2024.pdf" download as={Link} className="text-primary text-xl font-black" color="primary" variant="light">
                        Descargar CV
                    </Button>

                    <a href="https://wa.me/528117858904" target="_blank" rel="noreferrer">
                        <FaWhatsapp className="fill-current size-8 text-primary" />
                    </a>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

