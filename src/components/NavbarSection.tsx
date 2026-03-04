"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
} from "flowbite-react";
import { HiPhone, HiMail } from "react-icons/hi";
import { HiChevronDown, HiGlobeAlt } from "react-icons/hi2";

export default function NavbarSection() {
  return (
    <header>
      {/* Top bar */}
      <div className="border-b border-gray-200 bg-gray-50 py-2.5">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <a
              href="tel:+12345678"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600"
            >
              <HiPhone className="h-5 w-5" />
              +12 345 67890
            </a>
            <a
              href="mailto:name@company.com"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600"
            >
              <HiMail className="h-5 w-5" />
              name@company.com
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-sm font-medium text-gray-600">
            <HiGlobeAlt className="h-4 w-4" />
            English (US)
            <HiChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <Navbar fluid className="border-b border-gray-200 py-3">
        <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-4">
          <NavbarBrand href="/">
            <span className="self-center whitespace-nowrap text-xl font-bold text-[#155dfc]">
              PRO SERVICES
            </span>
          </NavbarBrand>

          <div className="flex items-center gap-6">
            <NavbarToggle />
            <NavbarCollapse>
              <NavbarLink href="/" className="text-sm font-medium text-gray-600">
                Homepage
              </NavbarLink>
              <NavbarLink href="/about" className="text-sm font-medium text-gray-600">
                About us
              </NavbarLink>
              <NavbarLink href="/services" className="text-sm font-medium text-gray-600">
                <span className="flex items-center gap-1.5">
                  Our services
                  <HiChevronDown className="h-4 w-4" />
                </span>
              </NavbarLink>
              <NavbarLink href="/contact" className="text-sm font-medium text-gray-600">
                Contact
              </NavbarLink>
            </NavbarCollapse>

            <Button
              href="tel:0465877248"
              size="sm"
              className="rounded-xl bg-[#155dfc] font-medium [&>span]:items-center [&>span]:gap-1.5"
            >
              <HiPhone className="h-4 w-4" />
              0465877248
            </Button>
          </div>
        </div>
      </Navbar>
    </header>
  );
}
