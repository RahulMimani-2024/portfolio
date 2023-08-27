import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent/index";
import { ImEnvelop } from "react-icons/im";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { useEffect } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Spinner,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
const spin = (
  <Spinner
    thickness="15px"
    speed="0.65s"
    emptyColor="black"
    color="var(--green-theme-main-color)"
    size="lg"
    bg="black"
  />
);
const temp = (
  <Alert
    status="success"
    variant="subtle"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    height="200px"
    color="var(--green-theme-main-color)"
    position="relative"
  >
    <AlertIcon boxSize="60px" mr={0} />
    <AlertTitle mt={4} mb={1} fontSize="4rem">
      Query submitted!
    </AlertTitle>
    <AlertDescription maxWidth="sm" fontSize="2rem">
      Thanks for submitting your query. I will get back to you soon.
    </AlertDescription>
  </Alert>
);
const formData = {
  name: "",
  email: "",
  description: "",
};
const Index = () => {
  useEffect(() => emailjs.init(process.env.REACT_APP_PUBLIC_KEY), []);
  const [wheelLoader, setWheelLoader] = useState(false);
  const [form, setForm] = useState(formData);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setWheelLoader(true);
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    console.log(form);
    try {
      await emailjs.send(serviceId, templateId, {
        from_name: form.name,
        message: form.description,
      });
    } catch (e) {
      alert(e.message);
    }
    setForm(formData);
    setSubmitted(true);
  };
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="contact me"
        icon={<ImEnvelop size={40} />}
      ></PageHeaderContent>
      {submitted ? (
        temp
      ) : (
        <div className="contact__content">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-200px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="contact__content__header-text">Let's Talk</h3>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(200px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <form className="contact__content__form" onSubmit={handleSubmit}>
              <div className="contact__content__form__controlswrapper">
                <div>
                  <input
                    required
                    name="name"
                    className="inputName"
                    type={"text"}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    value={form.name}
                  ></input>
                  <label htmlFor="name" className="nameLabel">
                    Name
                  </label>
                </div>
                <div>
                  <input
                    required
                    name="email"
                    className="inputEmail"
                    type={"text"}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    value={form.email}
                  ></input>
                  <label htmlFor="email" className="emailLabel">
                    Email
                  </label>
                </div>
                <div>
                  <textarea
                    required
                    name="description"
                    className="inputDescription"
                    type={"text"}
                    rows={"5"}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                    value={form.description}
                  ></textarea>
                  {form.description.length === 0 && (
                    <label htmlFor="description" className="descriptionLabel">
                      Description
                    </label>
                  )}
                </div>
              </div>
              <button type="submit">{wheelLoader ? spin : "Submit"}</button>
            </form>
          </Animate>
        </div>
      )}
    </section>
  );
};

export default Index;
