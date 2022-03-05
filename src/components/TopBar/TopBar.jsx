import React from "react";

const TopBar = () => {
  return (
    <section className="section-topbar topbar text-white">
      <div className="container-xxl">
        <div className="row p-3">
          <div className="col-lg-6 col-md-8">
            <div className="d-flex align-items-center">
              <div className="topbar__offer mr-3 pr-3">
                <span>Free Ground Shipping Over $250</span>
              </div>
              <div>
                <span className="">Download App</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 d-flex justify-content-end align-items-center">
            <div class="dropdown">
              <a
                href="#"
                className="dropdown-toggle topbar__dropdown text-white mr-5"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                English
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    France
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    United States
                  </a>
                </li>
              </ul>
            </div>

            <div class="dropdown">
              <a
                href="#"
                className="dropdown-toggle topbar__dropdown text-white"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                USD
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    EUR
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    GBR
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
