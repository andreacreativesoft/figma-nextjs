"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
} from "flowbite-react";
import Image from "next/image";

/* ── Inline SVG icons extracted from Figma ── */

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 13.22 13.17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.886 2.028C1.771 3.135 1.512 4.263 1.745 5.385c.247 1.187 1.068 2.462 2.319 3.713 1.25 1.25 2.526 2.073 3.713 2.321 1.124.236 2.253-.022 3.362-1.133a1.1 1.1 0 0 1 .055-.05l.004-.003.005-.005.016-.015c.014-.013.03-.03.05-.05a3.5 3.5 0 0 0 .125-.147 2.1 2.1 0 0 0 .106-.133c.011-.015.018-.026.022-.032a.56.56 0 0 0 .037-.12.56.56 0 0 0-.046-.196.56.56 0 0 0-.123-.156 1 1 0 0 1-.054-.05l-.953-.954c-.172-.172-.279-.218-.319-.23a.26.26 0 0 0-.097.006c-.063.021-.161.073-.305.187a5.7 5.7 0 0 0-.472.425c-.419.415-.985.649-1.575.649-.593 0-1.163-.236-1.582-.656L4.474 7.144a2.5 2.5 0 0 1-.735-1.429c-.056-.648.233-1.235.734-1.736l.38-.38a.56.56 0 0 0 .167-.405c0-.181-.05-.286-.137-.374L3.892 1.828c-.098-.098-.176-.134-.226-.148a.37.37 0 0 0-.195-.003c-.178.037-.396.165-.585.351ZM3.136.044c.646-.132 1.349.019 1.935.605l.992.993c.44.44.625.988.625 1.552 0 .593-.235 1.162-.654 1.582l-.38.38c-.267.267-.255.399-.254.418v.001c.005.051.044.182.253.39l1.56 1.56a.83.83 0 0 0 1.212 0l.013-.013.059-.053c.32-.307.795-.764 1.366-.955a1.18 1.18 0 0 1 1.069.397l.95.756c.224.195.405.387.531.577a1.5 1.5 0 0 1-.605 2.67c-.094.191-.263.357-.369.48-.109.101-.222.214-.315.296-1.518 1.472-3.204 1.919-4.896 1.564-1.638-.343-3.191-1.415-4.55-2.774C1.527 8.917.455 7.364.114 5.725-.241 4.023.217 2.33 1.712.845l.002-.002c.333-.33.829-.677 1.423-.799Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailBoxIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.333.833A.833.833 0 0 1 9.167 0H11.25a.833.833 0 0 1 0 1.667H10v4.166a.833.833 0 1 1-1.667 0V4.167H6.869A4.17 4.17 0 0 1 7.5 6.25V10h5.833V5.833A2.5 2.5 0 0 0 11.667 3.333a.833.833 0 1 1 0-1.666A4.167 4.167 0 0 1 15 5.833v5a.833.833 0 0 1-.833.834H10.833v2.5a.833.833 0 1 1-1.666 0v-2.5H7.5v2.5a.833.833 0 1 1-1.667 0v-2.5H.833A.833.833 0 0 1 0 10.833v-4.583A3.75 3.75 0 0 1 3.75 2.5h4.583V.833ZM5.833 10V6.25a2.083 2.083 0 1 0-4.166 0V10h4.166ZM2.5 8.75a.833.833 0 0 1 .833-.833h.834a.833.833 0 1 1 0 1.666H3.333A.833.833 0 0 1 2.5 8.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronDownIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 12 6.75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: "scaleY(-1)" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.47.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 1 1-1.06 1.06L6 1.811 1.28 6.53A.75.75 0 0 1 .22 5.47L5.47.22Z"
        fill="currentColor"
      />
    </svg>
  );
}

function USFlagIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 13.33 13.33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.667 13.333a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333Z"
        fill="white"
      />
      <path d="M6.378 6.667h6.956a6.7 6.7 0 0 0-.23-1.739H6.379v1.739Z" fill="#D80027" />
      <path d="M6.378 3.188h5.978a6.7 6.7 0 0 0-1.538-1.739H6.378v1.739Z" fill="#D80027" />
      <path
        d="M6.667 13.333a6.64 6.64 0 0 0 4.15-1.449H2.517a6.64 6.64 0 0 0 4.15 1.45Z"
        fill="#D80027"
      />
      <path
        d="M.979 10.145h11.377a6.6 6.6 0 0 0 .748-1.739H.23c.167.62.421 1.205.749 1.74Z"
        fill="#D80027"
      />
      <path
        d="M3.088 1.041h.607l-.565.41.216.665-.565-.41-.565.41.186-.573A6.7 6.7 0 0 0 1.11 2.983h.195l-.36.261a6.6 6.6 0 0 0-.162.285l.172.528-.39-.233a6.5 6.5 0 0 0-.218.518l.19.582h.698l-.565.411.216.664-.565-.41-.339.245C0 6.107 0 6.385 0 6.666h6.666c0-3.681 0-4.116 0-6.666a6.65 6.65 0 0 0-3.578 1.041Zm.258 4.958-.565-.41-.565.41.216-.664-.566-.411h.699l.216-.664.216.664h.698l-.565.411.216.664Zm-.216-2.606.216.664-.565-.41-.565.41.216-.665-.566-.41h.699l.216-.664.216.664h.698l-.565.41Zm2.391 2.606-.565-.41-.565.41.216-.664-.566-.411h.699l.216-.664.215.664h.699l-.566.411.217.664Zm-.216-2.606.216.664-.565-.41-.565.41.216-.665-.566-.41h.699l.216-.664.215.664h.699l-.566.41Zm-.216-1.94.216.664-.565-.41-.565.41.216-.665-.566-.41h.699l.216-.664.215.664h.699l-.566.41Z"
        fill="#1A47B8"
      />
    </svg>
  );
}

function PhoneIconWhite({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 10.58 10.53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.308 1.622C1.417 2.508 1.21 3.41 1.396 4.308c.198.95.857 1.97 1.855 2.97 1 1.001 2.02 1.659 2.97 1.857.899.189 1.802-.017 2.69-.906a1 1 0 0 1 .044-.04l.004-.003.003-.003.013-.013c.01-.01.024-.024.04-.04l.04-.04a2.5 2.5 0 0 0 .1-.11 1.7 1.7 0 0 0 .085-.106c.009-.012.015-.021.018-.025a.44.44 0 0 0 .03-.095.44.44 0 0 0-.035-.157.44.44 0 0 0-.098-.125.8.8 0 0 1-.043-.04l-.762-.762c-.138-.138-.224-.175-.256-.184a.2.2 0 0 0-.077.004c-.05.017-.129.058-.244.149a4.6 4.6 0 0 0-.378.34c-.335.332-.788.519-1.26.519a1.78 1.78 0 0 1-1.266-.525L3.579 5.716a2 2 0 0 1-.588-1.143c-.044-.519.19-.988.59-1.389l.304-.304a.45.45 0 0 0 .133-.323.42.42 0 0 0-.11-.3L3.113 1.463a.38.38 0 0 0-.18-.12.3.3 0 0 0-.156-.003c-.142.03-.317.132-.468.281Zm.2-1.587a1.47 1.47 0 0 1 1.548.484l.794.795c.351.351.5.79.5 1.241 0 .475-.188.93-.523 1.266l-.304.304c-.213.213-.205.32-.203.335v.001c.003.041.035.146.202.313l1.248 1.248a.66.66 0 0 0 .968 0l.01-.01.049-.042c.255-.246.636-.611 1.093-.764a.94.94 0 0 1 .882.318l.744.744a1.2 1.2 0 0 1 .424.564 1.2 1.2 0 0 1-.49 2.137c-.075.153-.21.29-.294.388-.088.102-.195.215-.287.296C8.65 10.367 7.302 10.724 5.948 10.44 4.638 10.166 3.395 9.308 2.308 8.221 1.221 7.134.364 5.89.091 4.58-.192 3.218.173 1.864 1.37.676l.001-.002c.267-.264.663-.541 1.138-.64Z"
        fill="currentColor"
      />
    </svg>
  );
}

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
              <PhoneIcon className="h-5 w-5" />
              +12 345 67890
            </a>
            <a
              href="mailto:name@company.com"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600"
            >
              <MailBoxIcon className="h-5 w-5" />
              name@company.com
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-sm font-medium text-gray-600">
            <USFlagIcon className="h-4 w-4 overflow-hidden rounded-full" />
            English (US)
            <ChevronDownIcon className="h-[18px] w-[18px]" />
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <Navbar fluid className="border-b border-gray-200 py-3">
        <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-4">
          <NavbarBrand href="/">
            <span className="whitespace-nowrap text-xl font-bold text-[#155dfc]">
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
                  <ChevronDownIcon className="h-[18px] w-[18px]" />
                </span>
              </NavbarLink>
              <NavbarLink href="/contact" className="text-sm font-medium text-gray-600">
                Contact
              </NavbarLink>
            </NavbarCollapse>

            <Button
              href="tel:0465877248"
              size="sm"
              className="rounded-xl bg-[#155dfc] font-medium text-white [&>span]:items-center [&>span]:gap-1.5"
            >
              <PhoneIconWhite className="h-4 w-4" />
              0465877248
            </Button>
          </div>
        </div>
      </Navbar>
    </header>
  );
}
