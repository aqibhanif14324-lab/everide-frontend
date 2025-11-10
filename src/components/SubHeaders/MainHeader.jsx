import React, { useState } from "react";
import "./style.css";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useMenu } from "../UserAccount/Dashboard/context/MenuContext";

const MainHeader = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { activeMenuItemMessages, setActiveMenuItemMessages,setActiveMenuItem, setActiveTab, activeTabMessages,
      setActiveTabMessages } = useMenu();

  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="main_header">
        <div className="main_header_items_first">
          <Link to="/">
            <img
              src="https://static.everide.app/site/logo-primary.svg"
              alt="logo"
              className="main_header_logo"
            />
          </Link>
          <div className="search_container">
            <input
              type="search"
              placeholder=""
              className="search-input"
              value={searchValue}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <IoSearch className="search-icon" size={20} />
            {!isFocused && searchValue === "" && (
              <>
                {" "}
                <span className="search-label-1">Search</span>
                <span className="search-label">Clothes, Shoes...</span>
              </>
            )}
          </div>
        </div>

        {/* Rest of your header unchanged */}
        <div className="main_header_items_last">
          {/* Everide */}
          <div
            onClick={() => {
              setActiveMenuItem("My wardrobe");
              setActiveTab("Changing room");
              navigate("/user/dashboard/123454");
            }}
            className="main_header_items"
          >
            <img
              width={24.5}
              height={25.5}
              src="https://static.everide.app/_nLQcM-ECXhjb94yGuz_L2yvVxoQJmGpa6rDH7zZG38/rs:fill:100:100:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9hdmF0YXIvYXZhdGFyLWdlbmRlci1uLnBuZw.webp"
              alt=""
            />
            <p>Account</p>
          </div>

          {/* Messages */}
          <Link
            to={"/user/messenger/123454"}
          
            className="main_header_items"
          >
            <svg
              data-v-53df9f64=""
              fill="none"
              viewBox="0 0 32 33"
              xmlns="http://www.w3.org/2000/svg"
              class="h-11 text-black"
              height={26.27}
              width={27.5}
            >
              <clipPath data-v-53df9f64="" id="a">
                <path data-v-53df9f64="" d="M0 .5h32v32H0z"></path>
              </clipPath>
              <g data-v-53df9f64="" clip-path="url(#a)">
                <path
                  data-v-53df9f64=""
                  d="M6.093 22.233A10.666 10.666 0 0 1 4 15.913C4 9.58 9.533 4.5 16.333 4.5s12.334 5.08 12.334 11.36-5.507 11.347-12.334 11.36A13.16 13.16 0 0 1 11 26.233"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="2"
                ></path>
                <path
                  data-v-53df9f64=""
                  d="M5.867 21.153 4.32 28.78l7.747-2.48"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="2"
                ></path>
                <path
                  data-v-53df9f64=""
                  d="M31.25 5.833a4.583 4.583 0 1 1-9.167 0 4.583 4.583 0 0 1 9.167 0z"
                  fill="currentColor"
                  stroke="#fff"
                  stroke-width="1.5"
                  class="hidden"
                ></path>
              </g>
            </svg>
            <p>Messages</p>
          </Link>

          {/* Favorites */}
          <div
            className="main_header_items"
            onClick={() => {
              setActiveMenuItem("Favorites");
              setActiveTab("Items");
              navigate("/user/dashboard/123454");
            }}
          >
            <svg
              data-v-53df9f64=""
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="h-11 w-9 text-black"
              width="20"
              height="20"
            >
              <path
                data-v-53df9f64=""
                d="M9.98673 18.75L9.03408 17.98L2.49489 12.5787C1.65149 11.8891 0.992947 11.0035 0.577831 10.0005C-0.598281 6.76907 0.0132969 4.07424 2.48313 2.37101C3.60383 1.53695 5.00203 1.15613 6.39498 1.30556C7.78794 1.45499 9.07172 2.12352 9.98673 3.17596C10.8973 2.1143 12.1821 1.43741 13.5788 1.28348C14.9755 1.12955 16.3787 1.51018 17.5021 2.34768C19.9602 4.03924 20.6305 6.74574 19.3956 10.0005C18.9939 11.0082 18.3475 11.9018 17.5138 12.602L10.9276 18.0267L9.98673 18.75ZM5.77625 3.00097C4.95212 3.01908 4.15434 3.29238 3.49459 3.78259C1.75394 5.03085 1.29526 6.8974 2.25967 9.33558C2.54902 10.0779 3.02228 10.7359 3.63572 11.2488L9.98673 16.5918L16.3495 11.2255C16.9629 10.7125 17.4362 10.0545 17.7255 9.31225C18.69 6.87407 18.2783 5.00751 16.4906 3.79426C13.7973 1.95104 11.6921 3.79426 10.6806 5.03085L9.98673 5.88246L9.30458 5.04251C8.90294 4.46683 8.37878 3.98561 7.76912 3.63286C7.15945 3.2801 6.47915 3.06439 5.77625 3.00097Z"
                fill="currentColor"
              ></path>
            </svg>
            <p>Favorites</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
