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
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.88556 2.02788C1.77103 3.13549 1.51176 4.26287 1.74546 5.38539C1.99249 6.5719 2.8136 7.84712 4.06403 9.09775C5.3145 10.3484 6.58958 11.1705 7.77679 11.4191C8.90067 11.6545 10.0294 11.3969 11.139 10.2858C11.1565 10.2684 11.1747 10.2517 11.1937 10.2358C11.194 10.2356 11.1947 10.235 11.1953 10.2344L11.2 10.2303C11.2041 10.2266 11.2095 10.2216 11.2162 10.2152C11.2297 10.2023 11.2465 10.1858 11.2658 10.1659C11.3047 10.126 11.3485 10.0782 11.3911 10.0287C11.4342 9.97863 11.4709 9.93268 11.4976 9.89616C11.5088 9.88088 11.5158 9.87052 11.5196 9.86471C11.544 9.80737 11.5566 9.74562 11.5566 9.68316C11.5566 9.61526 11.5417 9.54821 11.513 9.48673C11.4843 9.42525 11.4425 9.37088 11.3906 9.32741C11.3717 9.31159 11.3535 9.29494 11.3361 9.2775L10.3835 8.32425C10.2113 8.15188 10.1044 8.10618 10.0641 8.09414C10.037 8.08606 10.0152 8.08391 9.96756 8.09987C9.90371 8.12128 9.8059 8.17327 9.66186 8.28659C9.51933 8.39873 9.3713 8.53823 9.19006 8.7118C8.77127 9.12707 8.20533 9.3603 7.61524 9.3603C7.02177 9.3603 6.45272 9.12438 6.03323 8.70464L4.47403 7.14439C4.47396 7.14432 4.47409 7.14446 4.47403 7.14439C4.1359 6.80621 3.79032 6.32783 3.73876 5.71564C3.6842 5.06768 3.97332 4.48013 4.47375 3.97959C4.47366 3.97969 4.47384 3.9795 4.47375 3.97959L4.8535 3.5995C4.96038 3.49229 5.02077 3.34665 5.02077 3.19495C5.02077 3.01354 4.97131 2.90836 4.88399 2.82088L3.89174 1.82793C3.79344 1.72956 3.71618 1.69422 3.66537 1.67961C3.61273 1.66448 3.55041 1.66085 3.47056 1.67721C3.29288 1.7136 3.07431 1.84174 2.88556 2.02788ZM3.13615 0.0444344C3.78154 -0.0877536 4.48509 0.0638473 5.07066 0.649835L6.06324 1.64311C6.50203 2.0827 6.68744 2.63138 6.68744 3.19495C6.68744 3.7881 6.45215 4.35711 6.03308 4.77694L5.65281 5.15756C5.3865 5.42387 5.39784 5.55632 5.39949 5.57506C5.39947 5.57485 5.39951 5.57533 5.39949 5.57506C5.40383 5.62662 5.4437 5.75705 5.65254 5.96588L7.21209 7.52649C7.31912 7.63358 7.46414 7.69363 7.61524 7.69363C7.76633 7.69363 7.91136 7.63358 8.01838 7.52649L8.03135 7.51379C8.04467 7.50103 8.05829 7.48796 8.0722 7.4746C8.39207 7.16747 8.86775 6.71075 9.43779 6.51964C9.77255 6.40742 10.1477 6.37967 10.5412 6.49721C10.9213 6.61078 11.2584 6.84191 11.5624 7.14617L12.4921 8.0765C12.7163 8.2718 12.8973 8.512 13.0232 8.7817C13.155 9.06395 13.2232 9.37167 13.2232 9.68316C13.2232 9.99465 13.155 10.3024 13.0232 10.5846C12.9293 10.7858 12.76 10.9932 12.6545 11.1157C12.5451 11.2429 12.4115 11.3844 12.2957 11.4862C10.8131 12.9581 9.12789 13.405 7.43511 13.0504C5.79705 12.7073 4.24402 11.635 2.88542 10.2762C1.52679 8.91731 0.45489 7.36351 0.113784 5.72509C-0.240582 4.02298 0.216705 2.32981 1.71189 0.844549L1.71362 0.842825C2.04723 0.513369 2.54224 0.166076 3.13615 0.0444344Z"
        fill="#52525C"
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
      <div className="hidden border-b border-gray-200 bg-gray-50 py-2.5 md:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4">
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
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4">
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

            <a
              href="tel:0465877248"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#155dfc] px-4 py-2.5 text-sm font-medium leading-5 text-white shadow-[0px_1px_0.5px_0px_rgba(29,41,61,0.02)] hover:bg-[#1447e6]"
            >
              <PhoneIconWhite className="h-4 w-4" />
              <span className="hidden md:inline">0465877248</span>
            </a>
          </div>
        </div>
      </Navbar>
    </header>
  );
}
