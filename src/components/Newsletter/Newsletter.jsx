import React from "react";

const Newsletter = () => {
  return (
    <section className="home-newsletter mt-5  bg-primary">
      <div className="container-xxl">
        <div className="row newsletter align-items-center py-5">
          <div className="col-md-6">
            <div className="text-white">
              <h2>Join Our Newsletter Now</h2>
              <p>Register now to get updates on promotions!</p>
            </div>
          </div>
          <div className="col-md-6">
            <form>
              <input
                type="text"
                className="form-control p-3 rounded-pill"
                placeholder="Enter Email Address"
                aria-label="Enter Email Address"
                aria-describedby="button-addon2"
              />
              <button
                class="btn newsletter__btn rounded-pill"
                type="button"
                id=""
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
