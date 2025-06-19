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
  Avatar,
  Select,
  SelectItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import MenuItems from "./MenuItems";
import { FaWhatsapp } from "react-icons/fa";

export default function NavbarComponent({
  activeHash,
  lang,
  setLang,
}: {
  activeHash: any;
  lang: any;
  setLang: any;
}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const mx = "https://flagcdn.com/mx.svg";
  const us = "https://flagcdn.com/us.svg";

  const langOptions = [
    { value: "es", label: "Español", flag: mx },
    { value: "en", label: "English", flag: us },
  ];

  const [value, setValue] = React.useState(new Set(["es"]));

  return (
    <Navbar
      position="sticky"
      shouldHideOnScroll={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-base"
    >
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
          <Button
            href="ARTURO ARGUELLES CV 2025.pdf"
            download
            as={Link}
            color="primary"
            variant="solid"
            className="text-white font-semibold text-md"
          >
            {lang.navbar.cv}
          </Button>
          <a href="https://wa.me/528117858904" target="_blank" rel="noreferrer">
            <FaWhatsapp className="fill-current size-8 text-primary" />
          </a>

          {/* <Select
                        onChange={(e) => {
                            setLang(e.target.value);
                        }}
                        onSelectionChange={(keys) => setValue(new Set(keys as unknown as string[]))}
                        selectedKeys={value as any}
                        className="text-primary w-[90px]"
                        variant="flat"
                        color="primary"
                        renderValue={() => (
                            <div className="flex flex-row items-center gap-2">
                                <Avatar src={langOptions.find((lang) => lang.value === value.values().next().value)?.flag} alt={value.values().next().value} className="w-6 h-6" />
                            </div>
                        )}
                    >
                        {langOptions.map((lang) => (
                            <SelectItem key={lang.value} value={lang.value} startContent={
                                <Avatar src={lang.flag} alt={lang.value} className="w-6 h-6" />
                            }>

                            </SelectItem>
                        ))}
                    </Select> */}

          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <Button variant="bordered"> Open Menu</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" variant="faded">
              <DropdownItem key="es">
                <div className="flex flex-row items-center gap-2 text-lg text-primary text-bold">
                  <Avatar
                    src={langOptions[0].flag}
                    alt={langOptions[0].label}
                  />
                  <h2>Espanol</h2>
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {MenuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`w-full text-xl ${
                activeHash === item.href ? "font-semibold" : "font-normal"
              }`}
              color={activeHash === item.href ? "primary" : "foreground"}
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
