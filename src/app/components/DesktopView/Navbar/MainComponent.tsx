import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Select,
  SelectItem,
  Avatar,
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
  const mx = "https://flagcdn.com/mx.svg";
  const us = "https://flagcdn.com/us.svg";

  const langOptions = [
    { value: "es", label: "Español", flag: mx },
    { value: "en", label: "English", flag: us },
  ];

  const [value, setValue] = React.useState(new Set(["es"]));

  return (
    <Navbar className="bg-base">
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        {MenuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <a href={item.href}>
              <Button
                disableRipple
                className={`${
                  activeHash === item.href ? "text-white" : "text-primary"
                } font-semibold uppercase`}
                variant={`${activeHash === item.href ? "solid" : "light"}`}
                color="primary"
                href="#"
              >
                {lang.navbar[item.key]}
              </Button>
            </a>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex flex-row items-center gap-4 w-full">
          <Button
            href="ARTURO ARGUELLES CV 2025.pdf"
            download
            as={Link}
            className="text-primary text-xl font-black"
            color="primary"
            variant="light"
            disableRipple
          >
            {lang.navbar.cv}
          </Button>

          <a href="https://wa.me/528117858904" target="_blank" rel="noreferrer">
            <FaWhatsapp className="fill-current size-8 text-primary inline-flex justify-center items-center" />
          </a>

          <Select
            onChange={(e) => {
              setLang(e.target.value);
            }}
            onSelectionChange={(keys) =>
              setValue(new Set(keys as unknown as string[]))
            }
            selectedKeys={value as any}
            className="text-primary w-32"
            variant="underlined"
            color="primary"
            renderValue={() => (
              <div className="flex flex-row items-center gap-2">
                <Avatar
                  src={
                    langOptions.find(
                      (lang) => lang.value === value.values().next().value
                    )?.flag
                  }
                  alt={value.values().next().value}
                  className="w-6 h-6"
                />
                <h2 className="text-primary font-semibold">
                  {
                    langOptions.find(
                      (lang) => lang.value === value.values().next().value
                    )?.label
                  }
                </h2>
              </div>
            )}
          >
            {langOptions.map((lang) => (
              <SelectItem
                key={lang.value}
                value={lang.value}
                startContent={
                  <Avatar
                    src={lang.flag}
                    alt={lang.value}
                    className="w-6 h-6"
                  />
                }
              >
                {lang.label}
              </SelectItem>
            ))}
          </Select>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
