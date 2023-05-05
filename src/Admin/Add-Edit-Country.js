import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  countrypostActions,
  countryinfo,
  updatecountryAction,
} from "../Redux/Action/Country-action";
import swal from "sweetalert";
import { useNavigate, useParams, Link } from "react-router-dom";
import { validations } from "../utils";
// import Select from 'react-select'
import countryList from "react-select-country-list";

function Add_Edit_Country() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { countryId } = useParams();
  const { countrydetals } = useSelector((state) => state.getDetailsReducer);

  const { success: postsuccess, error: errpost } = useSelector(
    (state) => state.postcountrytReducer
  );
  const { success, error } = useSelector((state) => state.updateCountryReducer);

  const [rerender, setRerender] = useState(false);
  const [rerender1, setRerender1] = useState(false);

  useEffect(() => {
    dispatch(countryinfo(countryId));
  }, []);

  const [country, setCountry] = useState("");
  const [price, setPrice] = useState();

  useEffect(() => {
    if (countrydetals) {
      setCountry(countrydetals?.country);
      setPrice(countrydetals?.price);
    }
  }, [countrydetals]);

  const postBlog = () => {
    const formData = new FormData();
    formData.append("country", country);
    formData.append("price", price);

    if (countrydetals?.id) {
      dispatch(updatecountryAction(countryId, formData));
    } else {
      dispatch(countrypostActions(formData));
    }
    setRerender(true);
    setRerender1(true);
  };

  useEffect(() => {
    if (postsuccess && rerender) {
      swal({
        title: "Successfully Complete",
        text: " Country Post Successfully",
        className: "successAlert",
        icon: "/img/company-logo.png",
        buttons: false,
        timer: 1500,
      });
      setRerender(false);
      setCountry("");
      setPrice("");
      navigate("/country-list");
    }
    if (errpost && rerender) {
      swal({
        title: "Error",
        text: errpost,
        className: "errorAlert",
        icon: "/img/company-logo.png",
        buttons: false,
        timer: 1500,
      });
      setRerender(false);
    }
  }, [postsuccess, errpost]);
  // alert("success",updatesuccess)

  useEffect(() => {
    if (success && rerender1) {
      swal({
        title: "Successfully Complete",
        text: " Country updated Successfully!",
        className: "successAlert",
        icon: "/img/company-logo.png",
        buttons: false,
        timer: 1500,
      });
      setRerender1(false);
      navigate("/country-list");
    }
    if (error && rerender1) {
      swal({
        title: "Error",
        text: error,
        className: "errorAlert",
        icon: "/img/company-logo.png",
        buttons: false,
        timer: 1500,
      });
      setRerender1(false);
    }
  }, [success, error]);

  return (
    <>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="all-content-div w-full  h-screen">
            <main>
              <div className="pt-6 px-4">
                <div className=" mt-12">
                  <div className="heading-top">
                    {countrydetals?.id ? (
                      <h3 className="text-black text-2xl font-medium mb-10">
                        Edit Country
                      </h3>
                    ) : (
                      <h3 className="text-black text-2xl font-medium mb-10">
                        Add Country
                      </h3>
                    )}
                  </div>
                  <div className="bg-white rounded-md mb-8 mt-3 p-4 sm:p-6 h-full  ">
                    <div className="size-all-content justify-between mb-12 mt-12">
                      <div className="blog_add">
                        <section className=" dark:bg-gray-900">
                          <div className="blogs_forms rounded-lg">
                            <div>
                              <div className="space-y-4 md:space-y-6">
                                <div>
                                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Country
                                  </label>
                                  <input
                                    value={country}
                                    onChange={(e) => {
                                      setCountry(e.target.value);
                                    }}
                                    type="text"
                                    className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full	 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Add Country"
                                  />
                                </div>

                                <div>
                                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Price
                                  </label>
                                  <input
                                    value={price}
                                    onChange={(e) => {
                                      setPrice(e.target.value);
                                    }}
                                    type="number"
                                    className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full	 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Add Price"
                                  />
                                </div>

                                <div className="submit_cancel-btn flex  justify-between">
                                  {countrydetals?.id ? (
                                    <button
                                      onClick={() => {
                                        postBlog();
                                      }}
                                      type="submit"
                                      className="submit-cancel-btn"
                                    >
                                      Update
                                    </button>
                                  ) : (
                                    <button
                                      onClick={() => {
                                        postBlog();
                                      }}
                                      type="submit"
                                      className="submit-cancel-btn"
                                    >
                                      Submit
                                    </button>
                                  )}
                                  <Link to="/country-list">
                                    <button className="submit-cancel-btn">
                                      Cancel
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default Add_Edit_Country;
