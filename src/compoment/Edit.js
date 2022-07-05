import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import React from "react";
import { Formik } from "formik";
export function Edit({ apidata, setapidata }) {
  const location = useLocation();

  const { id } = useParams();

  console.log("inside component", location);

  let navigate = useNavigate();

  function editdata(value) {
    const newdata = apidata.map((data, index) => {
      if (index === id) {
        // console.log("ohih");
        return { ...value, id: id + 1 };
      } else {
        return data;
      }
    });

    setapidata(newdata);
    navigate("/");
    // setupdate(true);
  }

  const validationSchema = yup.object({
    email: yup.string().required(),
    first_name: yup.string().required("First Name is require"),
    last_name: yup.string().required("Last Name is require"),
  });

  useEffect(() => {
    if (location.pathname.match("/edit/")) {
      console.log("yes");
    }
    console.log("final", apidata);
    // setformdata(edit);
  }, []);

  return (
    <>
      <div className="container-fluid vh-100" style={{ marginTop: "30px" }}>
        <div className="" style={{ marginTop: "100px" }}>
          <div className="rounded d-flex justify-content-center">
            <div className="col-md-4 col-sm-12 shadow-lg p-5 bg-light">
              <div className="text-center">
                <h3 className="text-primary">Create Account</h3>
              </div>
              <div className="p-4">
                <Formik
                  initialValues={{
                    email: !id ? "" : apidata[id].email,
                    first_name: !id ? "" : apidata[id].first_name,
                    last_name: !id ? "" : apidata[id].last_name,
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    // setapidata([...apidata, [values]]);
                    console.log("crete", values);
                    console.log();
                    if (location.pathname.match("/edit/")) {
                      editdata(values);
                      navigate("/");
                    } else {
                      setapidata([...apidata, values]);
                      navigate("/");
                    }
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
            
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <a style={{ color: "red" }}>
                        {" "}
                        {errors.email && errors.email}
                      </a>{" "}
                      <div className="input-group mb-3">
                        <span className="input-group-text bg-primary">
                          <i className="bi bi-person-plus-fill text-white"></i>
                        </span>

                        <input
                          type="text"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          placeholder="Email"
                          className="form-control"
                        />
                      </div>
                      <a style={{ color: "red" }}>
                        {" "}
                        {errors.first_name && errors.first_name}
                      </a>{" "}
                      <div className="input-group mb-3">
                        <span className="input-group-text bg-primary">
                          <i className="fi fi-person-plus-fill text-white"></i>
                        </span>
                        <input
                          onChange={handleChange}
                          value={values.first_name}
                          type="text"
                          className="form-control"
                          name="first_name"
                          placeholder="First Name"
                        />
                      </div>
                      <a style={{ color: "red" }}>
                        {" "}
                        {errors.last_name && errors.last_name}
                      </a>{" "}
                      <div className="input-group mb-3">
                        <span className="input-group-text bg-primary">
                          <i className="bi bi-person-plus-fill text-white"></i>
                        </span>
                        <input
                          onChange={handleChange}
                  
                          value={values.last_name}
                          type="text"
                          className="form-control"
                          name="last_name"
                          placeholder="Last Name"
                        />
                      </div>
                   
                      <div className="d-grid col-12 mx-auto">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          Sign up
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}