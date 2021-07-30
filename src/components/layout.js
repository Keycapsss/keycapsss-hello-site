import PropTypes from "prop-types";
import React from "react";

// import Header from "./header";

function Layout({ children }) {
  return (
    <div className="relative min-h-screen font-sans text-white bg-gradient-to-br from-green-200 via-green-400 to-green-500">
      <main className="container px-4 py-12 mx-auto">{children}</main>

      <footer className="font-mono opacity-60">
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
          <p className=""></p>

          <p>
            Created with&nbsp;
            <a
              className="font-bold no-underline uppercase"
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              TailwindCSS
            </a>
            &nbsp;&amp;&nbsp;
            <a
              className="font-bold no-underline uppercase"
              href="https://www.gatsbyjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
