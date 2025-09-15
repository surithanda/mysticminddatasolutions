"use client";

import logoDark from "@/public/images/logo/MysticMinds_Dark_Logo.png";
import logo from "@/public/images/logo/MysticMinds_Logo.png";

import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { SocialIcons } from "@/components/navbarCompo/social-icons";
import { MenuList } from "../navbarCompo/menu-list";

export default function Navbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const menuRef = useRef<HTMLElement>(null);
  const menuOverflowRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLUListElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const openBtnRef = useRef<HTMLButtonElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const scrollPositionRef = useRef(0);
  const isMenuOpenRef = useRef(false);
  const headerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (menuRef.current) {
      menuRef.current.style.visibility = "hidden";
      menuRef.current.style.opacity = "0";
    }
    if (menuOverflowRef.current) {
      menuOverflowRef.current.style.visibility = "hidden";
      menuOverflowRef.current.style.opacity = "0";
    }
  }, []);

  const openMenu = useCallback(() => {
    if (
      menuOverflowRef.current &&
      openBtnRef.current &&
      menuRef.current &&
      timelineRef.current
    ) {
      isMenuOpenRef.current = true;
      scrollPositionRef.current = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      gsap.set(menuOverflowRef.current, { scale: 0.98 });
      openBtnRef.current.classList.add("opacity-0");
      timelineRef.current.timeScale(1).play();
      menuRef.current.style.pointerEvents = "auto";
    }
  }, []);

  const closeMenu = useCallback(() => {
    if (openBtnRef.current && menuRef.current && timelineRef.current) {
      isMenuOpenRef.current = false;

      const scrollY = Number.parseInt(document.body.style.top || "0") * -1;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, Math.abs(scrollY));

      openBtnRef.current.classList.remove("opacity-1");
      gsap.to(openBtnRef.current, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        delay: 0.5,
        ease: "back.out(1.7)",
      });

      timelineRef.current.timeScale(1.2).reverse();
      menuRef.current.style.pointerEvents = "none";
    }
  }, []);

  // Close menu on route change
  useEffect(() => {
    if (isMenuOpenRef.current) {
      closeMenu();
    }
  }, [pathname, closeMenu]);

  useEffect(() => {
    gsap.registerEase("custom", (progress) =>
      progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
    );

    if (
      menuRef.current &&
      menuOverflowRef.current &&
      menuItemsRef.current &&
      closeBtnRef.current &&
      openBtnRef.current
    ) {
      gsap.set(menuRef.current, { pointerEvents: "none", autoAlpha: 0 });
      gsap.set(menuOverflowRef.current, {
        pointerEvents: "none",
        autoAlpha: 0,
        y: -30,
        rotate: -1,
        scale: 0.98,
      });
      gsap.set(menuItemsRef.current, { autoAlpha: 0, y: -10, scale: 0.95 });
      gsap.set(closeBtnRef.current, { autoAlpha: 0, y: -10, scale: 0.95 });

      timelineRef.current = gsap.timeline({
        paused: true,
        defaults: { ease: "custom", duration: 0.8 },
        onReverseComplete: () => {
          if (menuRef.current) {
            menuRef.current.style.pointerEvents = "none";
          }
        },
      });

      timelineRef.current
        .to(menuRef.current, { autoAlpha: 1, pointerEvents: "auto" }, 0)
        .to(
          menuOverflowRef.current,
          { autoAlpha: 1, pointerEvents: "auto", y: 0, rotate: 0, scale: 1 },
          0.1
        )
        .to(
          menuItemsRef.current,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            stagger: { amount: 0.4, ease: "power2.out" },
          },
          0.2
        )
        .to(
          closeBtnRef.current,
          { autoAlpha: 1, y: 0, scale: 1, ease: "back.out(1.7)" },
          0.3
        )
        .to(
          openBtnRef.current,
          { autoAlpha: 0, y: -10, scale: 0.95, delay: 0.3 },
          0.1
        );
    }

    return () => {
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed z-[9999] w-full transition-transform duration-300"
      >
        {/* Main navigation */}
        <nav
          className={`fixed z-[1000] w-full transition duration-300 ease-linear
            px-3 pt-2 sm:px-6 sm:pt-4 lg:px-10 lg:pt-6
            ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex-shrink-0">
              <Image
                className="inline-block dark:hidden
                  h-10 w-auto     /* bigger on mobile */
                  xs:h-12
                  sm:h-14
                  md:h-16
                  lg:h-18
                  xl:h-20
                  2xl:h-[84px]
                  3xl:h-[88px]
                  4xl:h-[92px]"
                src={logo}
                alt="logo"
                width={136}
                height={68}
                priority
              />
              <Image
                className="hidden dark:inline-block
                  h-10 w-auto
                  xs:h-12
                  sm:h-14
                  md:h-16
                  lg:h-18
                  xl:h-20
                  2xl:h-[84px]
                  3xl:h-[88px]
                  4xl:h-[92px]"
                src={logoDark}
                alt="logo"
                width={136}
                height={68}
                priority
              />
            </Link>

            {/* Hamburger Menu */}
            <div className="flex items-center">
              <button
                ref={openBtnRef}
                onClick={openMenu}
                className="menu-open relative h-[68px] w-[68px] cursor-pointer before:absolute before:left-1/2 before:top-[28px] before:h-0.5 before:w-9 before:-translate-x-1/2 before:bg-black before:transition-all before:duration-300 before:content-[''] after:absolute after:bottom-[28px] after:left-1/2 after:h-0.5 after:w-9 after:-translate-x-1/2 after:bg-black after:transition-all after:duration-300 after:content-[''] hover:before:top-[25px] hover:after:bottom-[25px] dark:before:bg-white dark:after:bg-white"
                aria-label="Open Menu"
              ></button>
            </div>
          </div>
        </nav>
      </header>

      {/* Fullscreen Menu */}
      <nav
        ref={menuRef}
        data-lenis-prevent="true"
        className="menu fixed inset-0 z-[99999] min-h-screen w-full opacity-0"
      >
        <button
          ref={closeBtnRef}
          onClick={closeMenu}
          className="menu-close sticky cursor-pointer text-white left-[90%] top-5 h-7 w-7 sm:left-[92%] sm:top-6 sm:h-8 sm:w-8 lg:left-[95%] lg:top-8 lg:h-10 lg:w-10"
          aria-label="Close Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
            viewBox="0 0 50 50"
          >
            <path
              d="M7.7 6.3L6.3 7.7 23.6 25 6.3 42.3 7.7 43.7 25 26.4 42.3 43.7 43.7 42.3 26.4 25 43.7 7.7 42.3 6.3 25 23.6Z"
              fill="#fff"
            />
          </svg>
        </button>

        <div className="menu-wrapper relative z-[99999] mx-auto flex flex-col gap-6 px-6 max-w-[360px] sm:max-w-[480px] md:max-w-[600px] lg:max-w-[800px]">
          <MenuList ref={menuItemsRef} onItemClick={closeMenu} />
        </div>

        <div className="menu-footer fixed bottom-0 w-full border-t border-white border-opacity-10 hidden lg:block px-10">
          <div className="menu-footer-content mx-auto flex justify-between text-base py-6 max-w-[900px]">
            <p className="text-white">
              Mystic Minds, 8-2-120/86, Banjara Hills, Hyderabad, TS, 500034
            </p>
            <SocialIcons />
          </div>
        </div>
      </nav>

      {/* Menu overlay */}
      <div
        ref={menuOverflowRef}
        className="menu-overflow pointer-events-none fixed inset-0 z-[9999] bg-[rgba(10,10,10,0.90)] backdrop-blur-[15px]"
      ></div>
    </>
  );
}
