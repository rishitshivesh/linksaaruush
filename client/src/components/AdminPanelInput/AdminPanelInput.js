import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Form, CustomInput } from "reactstrap";

import classes from "./AdminPanelInput.module.css";

const HomePageForm = (props) => {
  const formik = useFormik({
    initialValues: {
      heading: "",
      description: "",
      link: "",
      attachment: null,
      category: "",
    },
    validationSchema: Yup.object({
      heading: Yup.string().required("Every Event has a name"),
      description: Yup.string().required("Its just a one-liner"),
      link: Yup.string().required("We need the redirect for this event"),
      attachment: Yup.mixed()
        .test(
          "fileSize",
          "Too large file",
          (value) => value && value.size <= 5 * 1024 * 1024
        )
        .test(
          "fileFormat",
          "Unsupported Format",
          (value) =>
            value &&
            ["image/jpg", "image/jpeg", "image/png", "image/svg+xml"].includes(
              value.type
            )
        ),
      category: Yup.string().required(
        "Please choose a category to list the event in"
      ),
    }),
    onSubmit: (values) => {
      props.onSubmitForm(values);
    },
  });

  return (
    <React.Fragment>
      <div className="mx-auto col-12 col-lg-6 mt-3">
        <h1 className={classes.head + " text-center"}>Add a New Event</h1>
        <Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <div className={classes.main + " mx-auto"}>
            <div>
              <input
                id="heading"
                name="heading"
                type="text"
                placeholder="Event Heading"
                className={"col-11"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.heading}
              />
              {formik.touched.heading && formik.errors.heading ? (
                <div className={classes.error + " col-12"}>
                  {formik.errors.heading}
                </div>
              ) : null}
            </div>

            <div>
              <input
                id="description"
                name="description"
                type="text"
                placeholder="Event Description"
                className={"col-11"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
              />
              {formik.touched.description && formik.errors.description ? (
                <div className={classes.error + " col-12"}>
                  {formik.errors.description}
                </div>
              ) : null}
            </div>

            <div>
              <input
                id="link"
                name="link"
                type="text"
                placeholder="Event Redirect Link"
                className={"col-11"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.link}
              />
              {formik.touched.link && formik.errors.link ? (
                <div className={classes.error + " col-12"}>
                  {formik.errors.link}
                </div>
              ) : null}
            </div>

            <div>
              <CustomInput
                type="file"
                id="attachment"
                name="customFile"
                className={"col-11"}
                label="Event Poster"
                style={{ marginLeft: "0px" }}
                onChange={(event) => {
                  formik.setFieldValue("attachment", event.target.files[0]);
                }}
              />

              {formik.values.attachment !== null && formik.errors.attachment ? (
                <div className={classes.error + " col-12"}>
                  {formik.errors.attachment}
                </div>
              ) : null}
              <div className="col-11 mx-auto">
                <p className={classes.fileSpecs + " text-left text-muted"}>
                  Less than <strong>5 MB</strong>.
                  <br />
                  Supported extensions
                  <strong> .jpeg | .jpg | .png | .svg </strong>.
                </p>
              </div>
            </div>

            <div>
              <select
                id="category"
                name="category"
                className={"col-11"}
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ display: "block" }}
              >
                <option value="" label="Choose the Category" />
                <option value="competition" label="Competitions" />
                <option value="certificate" label="Certificate" />
                <option value="webinar" label="Webinar" />
                <option value="workshop" label="Workshop" />
              </select>
              {formik.touched.category && formik.errors.category ? (
                <div className={classes.error + " col-12"}>
                  {formik.errors.category}
                </div>
              ) : null}
            </div>

            <div className="col-12 text-center">
              <Button
                className={classes.btn + " mt-3 col-10 col-lg-5"}
                color="success"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </div>
        </Form>
        <div className="text-center">
          <Button
            color="danger"
            className={classes.btn + " mt-3 mx-auto col-10 col-lg-5"}
            onClick={() => props.logoutClicked()}
          >
            Logout
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePageForm;
