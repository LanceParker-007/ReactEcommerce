/* eslint-disable jsx-a11y/iframe-has-title */
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
padding: 9rem 0 5rem 0;
text-align: center;

.container {
  margin-top: 6rem;

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}
`;
  return (
    <>
    <Wrapper>
      <h2 className="common-heading">Contact</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224568.15030524903!2d76.9897491!3d28.42295755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1686658303586!5m2!1sen!2sin" 
      width="100%" height="450" style={{border:0}} 
      allowfullscreen="" loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      <div className="container">
        <div className="contact-form">
          <form method="POST" action="https://formspree.io/f/xayzrnpn" className="contact-inputs">
            <input type="text" placeholder="username" name="username" required autoComplete="off" />
            <input type="email" placeholder="Email" name="Email" required autoComplete="off"/>
            <textarea name="Message" placeholder="Enter your Message" cols="30" rows="10" autoComplete="off"></textarea>

            <input type="submit" value="Send"/>
          </form>
        </div>
      </div>
      </Wrapper>
    </>
  );
};

export default Contact;
