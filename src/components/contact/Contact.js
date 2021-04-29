import ContactForm from "./content/ContactForm";
import ContactInfo from "./content/ContactInfo";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Holidaze</title>
      </Helmet>
      <main className="contact">
        <div className="contact__left">
          <ContactInfo />
        </div>
        <div className="contact__right">
          <ContactForm />
        </div>
      </main>
    </>
  );
}
