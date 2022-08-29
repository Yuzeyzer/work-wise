import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const UserProfileSidebar = () => {
  const { user, isLoading } = useSelector((state) => state.authReducer);

  return (
    <div class="col-lg-3 col-md-4 pd-left-none no-pd">
      <div class="main-left-sidebar no-margin">
        {user && (
          <div class="user-data full-width">
            <div class="user-profile">
              <div class="username-dt">
                <div class="usr-pic">
                  <img src={user.photoURL} alt="" />
                </div>
              </div>
              <div class="user-specs">
                <h3>{user.displayName}</h3>
                <span>{user.role}</span>
              </div>
            </div>
            <ul class="user-fw-status">
              <li>
                <h4>Following</h4>
                <span>{user.following}</span>
              </li>
              <li>
                <h4>Followers</h4>
                <span>{user.followers}</span>
              </li>
              <li>
                <a href="my-profile.html" title="">
                  View Profile
                </a>
              </li>
            </ul>
          </div>
        )}
        {isLoading && (
          <Box
            py={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <CircularProgress />
          </Box>
        )}
        <div class="suggestions full-width">
          <div class="sd-title">
            <h3>Suggestions</h3>
            <i class="la la-ellipsis-v"></i>
          </div>
          <div class="suggestions-list">
            <div class="suggestion-usd">
              <img src="images/resources/s1.png" alt="" />
              <div class="sgt-text">
                <h4>Jessica William</h4>
                <span>Graphic Designer</span>
              </div>
              <span>
                <i class="la la-plus"></i>
              </span>
            </div>
            <div class="suggestion-usd">
              <img src="images/resources/s2.png" alt="" />
              <div class="sgt-text">
                <h4>John Doe</h4>
                <span>PHP Developer</span>
              </div>
              <span>
                <i class="la la-plus"></i>
              </span>
            </div>
            <div class="suggestion-usd">
              <img src="images/resources/s3.png" alt="" />
              <div class="sgt-text">
                <h4>Poonam</h4>
                <span>Wordpress Developer</span>
              </div>
              <span>
                <i class="la la-plus"></i>
              </span>
            </div>
            <div class="suggestion-usd">
              <img src="images/resources/s4.png" alt="" />
              <div class="sgt-text">
                <h4>Bill Gates</h4>
                <span>C & C++ Developer</span>
              </div>
              <span>
                <i class="la la-plus"></i>
              </span>
            </div>
            <div class="suggestion-usd">
              <img src="images/resources/s5.png" alt="" />
              <div class="sgt-text">
                <h4>Jessica William</h4>
                <span>Graphic Designer</span>
              </div>
              <span>
                <i class="la la-plus"></i>
              </span>
            </div>
            <div class="suggestion-usd">
              <img src="images/resources/s6.png" alt="" />
              <div class="sgt-text">
                <h4>John Doe</h4>
                <span>PHP Developer</span>
              </div>
              <span>
                <i class="la la-plus"></i>
              </span>
            </div>
            <div class="view-more">
              <a href="#" title="">
                View More
              </a>
            </div>
          </div>
        </div>
        <div class="tags-sec full-width">
          <ul>
            <li>
              <a href="#" title="">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" title="">
                About
              </a>
            </li>
            <li>
              <a href="#" title="">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" title="">
                Community Guidelines
              </a>
            </li>
            <li>
              <a href="#" title="">
                Cookies Policy
              </a>
            </li>
            <li>
              <a href="#" title="">
                Career
              </a>
            </li>
            <li>
              <a href="#" title="">
                Language
              </a>
            </li>
            <li>
              <a href="#" title="">
                Copyright Policy
              </a>
            </li>
          </ul>
          <div class="cp-sec">
            <img src="images/logo2.png" alt="" />
            <p>
              <img src="images/cp.png" alt="" />
              Copyright 2019
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};