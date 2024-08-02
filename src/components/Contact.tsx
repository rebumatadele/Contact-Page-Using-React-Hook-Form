import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { BsExclamationCircle } from "react-icons/bs";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const Contact = () => {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  // onSubmit
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card border-orange">
            <div className="card-header bg-orange text-white text-center">
              <h3>Contact Us</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control border-orange"
                    id="name"
                    placeholder="Your Name"
                    {...register("name", { required: " Name Is Required" })}
                  />
                  {errors.name && (
                    <div className="d-flex align-items-center mt-2">
                      <BsExclamationCircle className="text-danger me-2 small" />
                      <p className="text-danger small mb-0">
                        {errors.name.message}
                      </p>
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control border-orange"
                    id="email"
                    placeholder="Your Email"
                    {...register("email", {
                      required: "Email Field is Required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "invalid email format",
                      },
                    })}
                  />
                  {errors.email && (
                    <div className="d-flex align-items-center mt-2">
                      <BsExclamationCircle className="text-danger me-2 small" />
                      <p className="text-danger small mb-0">
                        {errors.email?.message}
                      </p>
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control border-orange"
                    id="subject"
                    placeholder="Subject"
                    {...register("subject", {
                      required: "Subject is Required",
                    })}
                  />
                  {errors.subject && (
                    <div className="d-flex align-items-center mt-2">
                      <BsExclamationCircle className="text-danger me-2 small" />
                      <p className="text-danger small mb-0">
                        {errors.subject?.message}
                      </p>
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control border-orange"
                    id="message"
                    rows={4}
                    placeholder="Your Message"
                    {...register("message", {
                      required: "Message is Required",
                    })}
                  ></textarea>
                  {errors.message && (
                    <div className="d-flex align-items-center mt-2">
                      <BsExclamationCircle className="text-danger me-2 small" />
                      <p className="text-danger small mb-0">
                        {errors.message?.message}
                      </p>
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <button type="submit" className="btn bg-orange text-white">
                    Send Message
                  </button>
                </div>
              </form>
              <DevTool control={control}></DevTool>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
