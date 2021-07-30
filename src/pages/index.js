import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import keycapsssLogo from "../images/keycapsss-logo.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <div className="w-full mx-auto md:w-4/5 lg:w-3/6">
        <img
          alt="Keycapsss Logo"
          className="block w-3/4 px-2 mx-auto mb-1"
          src={keycapsssLogo}
        />
        <p className="px-12 mb-8 font-mono font-light text-center sm:px-0">
          Mechanical Keyboard Shop based in Germany.
        </p>

        <ul>
          <li className="mb-4">
            <a
              className="relative block py-4 font-bold text-center transition duration-200 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:bg-opacity-25 w-100 hover:border-opacity-50 hover:text-green-500 md:px-12"
              href="https://discord.gg/pSUHWfJNmp"
              alt="Keycapsss Discord Server"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
          </li>
          <li className="mb-4">
            <a
              className="relative block py-4 font-bold text-center transition duration-200 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:bg-opacity-25 w-100 hover:border-opacity-50 hover:text-green-500 md:px-12"
              href="https://www.instagram.com/keycapsss_com/"
              alt="Keycapsss Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li className="mb-4">
            <a
              className="relative block py-4 font-bold text-center transition duration-200 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:bg-opacity-25 w-100 hover:border-opacity-50 hover:text-green-500 md:px-12"
              href="https://www.youtube.com/channel/UCWV1bYERG7nmReykqa47LeA"
              alt="Keycapsss Youtbe Chanel"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export default IndexPage;
