import React, { useState, useContext } from "react";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { FaMoon, FaSun } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";

const Navbar = () => {
  const [listOpen, setListOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <header className="w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] shadow fixed">
        <nav
          className={`md:flex justify-between items-center px-5 py-4 relative ${
            listOpen ? "flex-col gap-4 md:flex-row" : "flex-row"
          }`}
        >
          {/* LOGO */}
          <h1 className="text-2xl font-bold text-[var(--color-bg)]">
            PAVITHRA
          </h1>

          {/* MENU */}
          <ul
            className={`md:flex gap-6 ${
              listOpen ? "flex flex-col md:flex-row" : "hidden"
            }`}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[var(--color-bg)] font-bold"
                    : "text-[var(--color-text)]"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive
                    ? "text-[var(--color-bg)] font-bold"
                    : "text-[var(--color-text)]"
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="skills"
                className={({ isActive }) =>
                  isActive
                    ? "text-[var(--color-bg)] font-bold"
                    : "text-[var(--color-text)]"
                }
              >
                Skills
              </NavLink>
            </li>

            <li>
              <NavLink
                to="projects"
                className={({ isActive }) =>
                  isActive
                    ? "text-[var(--color-bg)] font-bold"
                    : "text-[var(--color-text)]"
                }
              >
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink
                to="blogs"
                className={({ isActive }) =>
                  isActive
                    ? "text-[var(--color-bg)] font-bold"
                    : "text-[var(--color-text)]"
                }
              >
                Blogs
              </NavLink>
            </li>
          </ul>

          {/* THEME BUTTON */}
          <button
            onClick={toggleTheme}
            className="p-2 bg-[var(--color-bg)] text-[var(--color-primary)] rounded-full shadow"
          >
            {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
          </button>

          {/* MOBILE MENU */}
          {listOpen ? (
            <MdOutlineClose
              className="md:hidden absolute top-2 right-2 text-3xl cursor-pointer text-[var(--color-text)]"
              onClick={() => setListOpen(false)}
            />
          ) : (
            <MdOutlineMenu
              className="md:hidden absolute top-2 right-2 text-3xl cursor-pointer text-[var(--color-text)]"
              onClick={() => setListOpen(true)}
            />
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
