"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Button from "./Button";
import ProductCatalog from "../ProductCatalog/ProductCatalog";

// Add animation styles
const animationStyles = `
  @keyframes slideUnderline {
    from {
      width: 0;
      left: 0;
    }
    to {
      width: 100%;
      left: 0;
    }
  }

  .active-link-underline {
    display: inline-block;
  }

  .active-link-underline::after {
    animation: slideUnderline 0.4s ease-in-out forwards;
  }
`;

// Inject styles into the document
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = animationStyles;
  if (!document.head.querySelector("style[data-header-animation]")) {
    style.setAttribute("data-header-animation", "true");
    document.head.appendChild(style);
  }
}

interface MenuItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  dropdown?: {
    label: string;
    href: string;
    description?: string;
    icon?: React.ReactNode;
  }[];
  useCustomDropdown?: boolean;
  customDropdownType?: "products" | "services";
}

const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    useCustomDropdown: true,
    customDropdownType: "products",
  },
  {
    label: "Quality",
    href: "/quality-test-certificate",
  },
  {
    label: "Services",
    href: "/services",
  },
  { label: "About", href: "/about" },
  {
    label: "News-Gallery",
    href: "/news-gallery",
  },
  {
    label: "Sustainability",
    href: "/sustainability",
  },
  {
    label: "Case Study",
    href: "/case-study",
  },
  { label: "Contact", href: "/contact" },
];

const DesktopDropdown = React.memo(
  ({
    items,
    isActive,
    onMouseEnter,
    onMouseLeave,
    isActiveLink,
  }: {
    items: {
      label: string;
      href: string;
      description?: string;
      icon?: React.ReactNode;
    }[];
    isActive: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    isActiveLink: (href: string) => boolean;
  }) => (
    <div
      className={`absolute top-full left-0 mt-3 w-72 bg-white rounded-xl shadow-lg border border-gray-100 ${
        isActive ? "block" : "hidden"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="py-3">
        {items.map((dropItem) => (
          <Link
            key={dropItem.label}
            to={dropItem.href}
            className={`block px-4 py-2.5 rounded-lg transition-all duration-200 ${
              isActiveLink(dropItem.href)
                ? "text-blue-600 bg-blue-50 border-l-2 border-blue-600"
                : "text-black hover:text-black"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div>
                  <div className="text-base font-semibold text-black">
                    {dropItem.label}
                  </div>
                  {dropItem.description && (
                    <div className="text-sm text-black/60 mt-1">
                      {dropItem.description}
                    </div>
                  )}
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-black/50" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  ),
);

DesktopDropdown.displayName = "DesktopDropdown";

const ProductCatalogDropdown = React.memo(
  ({
    isActive,
    onMouseEnter,
    onMouseLeave,
  }: {
    isActive: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  }) => (
    <div
      className={`absolute top-full left-0 mt-3 w-[800px] bg-white rounded-xl shadow-lg border border-gray-100 ${
        isActive ? "block" : "hidden"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="p-4">
        <ProductCatalog />
      </div>
    </div>
  ),
);

ProductCatalogDropdown.displayName = "ProductCatalogDropdown";

const ModernMobileMenu = React.memo(
  ({
    isOpen,
    onClose,
    menuItems,
    isActiveLink,
  }: {
    isOpen: boolean;
    onClose: () => void;
    menuItems: MenuItem[];
    isActiveLink: (href: string) => boolean;
  }) => {
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

    const handleSubmenuToggle = useCallback((label: string) => {
      setActiveSubmenu((prev) => (prev === label ? null : label));
    }, []);

    const handleMainItemClick = useCallback(
      (item: MenuItem, e: React.MouseEvent) => {
        if (item.dropdown) {
          e.preventDefault();
          handleSubmenuToggle(item.label);
        } else {
          onClose();
        }
      },
      [handleSubmenuToggle, onClose],
    );

    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
        setActiveSubmenu(null);
      }

      return () => {
        document.body.style.overflow = "unset";
      };
    }, [isOpen]);

    return (
      <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/50 z-40 lg:hidden ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Mobile Menu Panel */}
        <div
          className={` text-left fixed top-0 right-0 h-screen w-full sm:w-96 bg-white z-50 lg:hidden transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 bg-white border-b border-gray-100 sticky top-0">
            <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Menu
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close menu"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto py-2 sm:py-4">
            <nav className="space-y-1 px-3 sm:px-4">
              {menuItems.map((item) => (
                <div key={item.label} className="space-y-1">
                  <div className="flex items-center">
                    <Link
                      to={item.href}
                      onClick={(e) => handleMainItemClick(item, e)}
                      className={`flex-1 group flex items-center px-3 sm:px-4 py-2.5 sm:py-3 text-base sm:text-lg font-semibold rounded-lg transition-all duration-200 ${
                        isActiveLink(item.href)
                          ? "text-blue-600 bg-blue-50"
                          : "text-black"
                      }`}
                    >
                      <span className="flex-1">{item.label}</span>
                      {item.dropdown && (
                        <ChevronDown
                          className={`h-4 w-4 text-black ${
                            activeSubmenu === item.label ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Link>
                  </div>

                  {/* Submenu */}
                  {item.dropdown && activeSubmenu === item.label && (
                    <div className="ml-3 sm:ml-4 mt-2 space-y-1 border-l-2 border-gray-200 pl-3 sm:pl-4">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.label}
                          to={dropItem.href}
                          onClick={onClose}
                          className={`block px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-all duration-200 ${
                            isActiveLink(dropItem.href)
                              ? "text-blue-600 bg-blue-50"
                              : "text-black"
                          }`}
                        >
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div>
                              <div className="text-base sm:text-lg font-semibold text-black">
                                {dropItem.label}
                              </div>
                              {dropItem.description && (
                                <div className="text-sm text-black/60 mt-1">
                                  {dropItem.description}
                                </div>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 p-4 sm:p-6 bg-gray-50">
            <div className="text-xs sm:text-sm text-black/60 text-center">
              © 2026 Your Company. All rights reserved.
            </div>
          </div>
        </div>
      </>
    );
  },
);

ModernMobileMenu.displayName = "ModernMobileMenu";

const OptimizedStickyHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 50;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
    }
  }, [isScrolled]);

  useEffect(() => {
    let ticking = false;

    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [handleScroll]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleDropdownEnter = useCallback((label: string) => {
    setActiveDropdown(label);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  // Check if a navigation item is active
  const isActiveLink = useCallback(
    (href: string) => {
      const currentPath = location.pathname;

      // Handle home page
      if (href === "/") {
        return currentPath === "/" || currentPath === "";
      }

      // Normalize paths for comparison
      const normalizedHref = href.startsWith("/") ? href : `/${href}`;
      const normalizedCurrentPath = currentPath === "" ? "/" : currentPath;

      // Handle exact matches
      if (normalizedCurrentPath === normalizedHref) {
        return true;
      }

      // Handle cases where href doesn't start with slash but current path does
      if (!href.startsWith("/") && currentPath === `/${href}`) {
        return true;
      }

      // Handle cases where href starts with slash but current path doFesn't
      if (href.startsWith("/") && currentPath === href.substring(1)) {
        return true;
      }

      return false;
    },
    [location.pathname],
  );

  // Memoize menu items to prevent unnecessary re-renders
  const memoizedMenuItems = useMemo(() => menuItems, []);

  return (
    <>
      {/* Spacer to prevent content jump */}
      <div className="h-20" />

      <header
        className="fixed top-0 left-0 right-0 z-30 w-full bg-white border-b border-gray-100"
        style={{ width: "100vw", maxWidth: "100vw" }}
      >
        <div className="w-full px-0">
          <div className="flex justify-between items-center h-20 max-w-[100vw] w-full px-4 sm:px-6 lg:px-8 mx-auto">
            {/* Logo */}
            <div className="flex-shrink-0 z-10 ml-4">
              <Link to="/" aria-label="Company logo">
                <img
                  src="/logo.png"
                  alt="Yogiraj Engineering Company"
                  className="h-16 w-auto object-contain"
                />
              </Link>
            </div>

            <nav
              className="hidden lg:flex items-center space-x-6"
              role="navigation"
            >
              {memoizedMenuItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() =>
                    (item.dropdown || item.useCustomDropdown) &&
                    handleDropdownEnter(item.label)
                  }
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    to={item.href}
                    className={`px-3 py-2 text-base font-medium transition-all duration-300 relative ${
                      isActiveLink(item.href)
                        ? "text-blue-600 active-link-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-violet-600"
                        : "text-black"
                    }`}
                    aria-haspopup={
                      item.dropdown || item.useCustomDropdown ? "true" : "false"
                    }
                    aria-expanded={
                      item.dropdown || item.useCustomDropdown
                        ? activeDropdown === item.label
                        : undefined
                    }
                  >
                    {item.label}
                    {(item.dropdown || item.useCustomDropdown) && (
                      <ChevronDown className="ml-1 h-4 w-4 inline text-black" />
                    )}
                  </Link>

                  {/* Custom ProductCatalog Dropdown */}
                  {item.useCustomDropdown &&
                    activeDropdown === item.label &&
                    item.customDropdownType === "products" && (
                      <ProductCatalogDropdown
                        isActive={true}
                        onMouseEnter={() => handleDropdownEnter(item.label)}
                        onMouseLeave={handleDropdownLeave}
                      />
                    )}

                  {/* Regular Desktop Dropdown */}
                  {item.dropdown && (
                    <DesktopDropdown
                      items={item.dropdown}
                      isActive={activeDropdown === item.label}
                      onMouseEnter={() => handleDropdownEnter(item.label)}
                      onMouseLeave={handleDropdownLeave}
                      isActiveLink={isActiveLink}
                    />
                  )}
                </div>
              ))}
              {/* Emergency Button (Desktop only) */}
              <div className="hidden lg:inline-flex ml-4 xl:ml-6">
                <Button />
              </div>
            </nav>

            <div className="lg:hidden z-10">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Modern Mobile Menu */}
      <ModernMobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        menuItems={memoizedMenuItems}
        isActiveLink={isActiveLink}
      />
    </>
  );
};

export default OptimizedStickyHeader;
