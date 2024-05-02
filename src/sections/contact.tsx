import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/card";
import ContactForm from '../components/contact-form';

function Contact() {
  return (
    <Card className='my-6' id='contact'>
      <CardHeader>
        <a
          href={`#/contact`}
        >
          <CardTitle>
            Contact
          </CardTitle>
        </a>
        <CardDescription>
          If you wish, please contact me here
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ContactForm />
      </CardContent>
    </Card>
  )
}

export default Contact;
