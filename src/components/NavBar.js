import React from "react";
import { FaGithub } from "react-icons/fa";
import "./nav-bar.scss";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          Frontend Developer Task By - <span>Cristian Bernal</span>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/cristianxew/higher-task"
          >
            <FaGithub className="github-icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
