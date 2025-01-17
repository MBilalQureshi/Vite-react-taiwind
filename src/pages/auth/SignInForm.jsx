import { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export function SignInForm() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => setPasswordShown((cur) => !cur);

  // Validation schema with Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  return (
    <section className="grid text-center h-screen items-center p-8">
      <div>
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Sign In
        </Typography>
        <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
          Enter your email and password to sign in
        </Typography>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("Form data:", values);
          }}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form action="#" className="mx-auto max-w-[24rem] text-left">
              <div className="mb-6">
                <label htmlFor="email">
                  <Typography
                    variant="small"
                    className="mb-2 block font-medium text-gray-900"
                  >
                    Your Email
                  </Typography>
                </label>
                <Field name="email">
                  {({ field }) => (
                    <div>
                      <Input
                        {...field}
                        id="email"
                        color="gray"
                        size="lg"
                        type="email"
                        placeholder="name@mail.com"
                        className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                        labelProps={{
                          className: "hidden",
                        }}
                      />
                      <ErrorMessage
                        name="email"
                        component="p"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  )}
                </Field>
              </div>

              <div className="mb-6">
                <label htmlFor="password">
                  <Typography
                    variant="small"
                    className="mb-2 block font-medium text-gray-900"
                  >
                    Password
                  </Typography>
                </label>
                <Field name="password">
                  {({ field }) => (
                    <div>
                      <Input
                        {...field}
                        size="lg"
                        placeholder="********"
                        labelProps={{
                          className: "hidden",
                        }}
                        className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                        type={passwordShown ? "text" : "password"}
                        icon={
                          <i onClick={togglePasswordVisibility}>
                            {passwordShown ? (
                              <EyeIcon className="h-5 w-5" />
                            ) : (
                              <EyeSlashIcon className="h-5 w-5" />
                            )}
                          </i>
                        }
                      />
                      <ErrorMessage
                        name="password"
                        component="p"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  )}
                </Field>
              </div>

              <Button
                color="gray"
                size="lg"
                className="mt-6"
                fullWidth
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing In..." : "Sign In"}
              </Button>

              <div className="!mt-4 flex justify-end">
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  variant="small"
                  className="font-medium"
                >
                  Forgot password
                </Typography>
              </div>

              <Button
                variant="outlined"
                size="lg"
                className="mt-6 flex h-12 items-center justify-center gap-2"
                fullWidth
              >
                <img
                  src={`https://www.material-tailwind.com/logos/logo-google.png`}
                  alt="google"
                  className="h-6 w-6"
                />{" "}
                Sign in with Google
              </Button>

              <Typography
                variant="small"
                color="gray"
                className="!mt-4 text-center font-normal"
              >
                Not registered?{" "}
                <a href="#" className="font-medium text-gray-900">
                  Create account
                </a>
              </Typography>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default SignInForm;
