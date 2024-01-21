"use client" 

import React from "react";
import {Navbar, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenuItem, NavbarMenu} from "@nextui-org/react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "About",
    "Projects",
    "Contact",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="w-full">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
          <p className="font-bold text-inherit">MV</p>

      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8 w-full" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="#" color="foreground" >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
          Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <ThemeSwitcher />

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
            color="foreground" 
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

