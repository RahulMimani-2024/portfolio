import emailjs from 'emailjs-com';

function MyEmailComponent() {
  const sendEmail = () => {
    const serviceId = 'your_service_id'; // Replace with your service ID
    const templateId = 'your_template_id'; // Replace with your template ID
    const userId = 'your_user_id'; // Replace with your user ID

    emailjs.send(serviceId, templateId, { to_email: 'recipient@example.com' }, userId)
      .then((response) => {
        console.log('Email sent successfully!', response);
      })
      .catch((error) => {
        console.error('Email error:', error);
      });
  };
  return (
    <div>
      <button onClick={sendEmail}>Send Email</button>
    </div>
  );
}

export default MyEmailComponent;
