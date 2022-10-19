import React, { useState } from "react";
import data from "../content/content.json";
import fflogo from "../images/fflogo.svg";
import facebookIcon from "../images/facebook.svg";
import phoneIcon from "../images/phone.svg";
import emailIcon from "../images/email.svg";
import addressIcon from "../images/address.svg";
import triangleReverted from "../images/triangle-reverted.svg";
import Button from "./button";
import { Link } from "gatsby";

const Footer = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");

  const TextWithIcon = ({ icon, alt, text, additionalSpace = true }) => (
    <div
      className={`${
        additionalSpace ? "contactTextLine" : "contactText"
      } textWithIcon`}
    >
      {icon ? (
        <img src={icon} alt={alt} />
      ) : (
        <div className="imagePlaceHolder" />
      )}
      <span>{text}</span>
    </div>
  );

  const SocialMediaIcon = ({ url, icon, alt }) => (
    <a href={url}>
      <img src={icon} alt={alt} className="icon" />
    </a>
  );

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const sendEmail = () => {
    setEmailSent(true);
    setEmail("");
    console.log("send email to", email);
  };

  return (
    <div className="footer" id={data.footer.id}>
      <img
        src={triangleReverted}
        alt="triangle"
        className="triangle-reverted"
      />
      <div>
        <img src={fflogo} alt="SmokeFinder logo" className="logo" />
        {!emailSent ? (
          <div className="emailForm">
            <span className="title">{data.footer.title}</span>
            <input
              type="email"
              placeholder={data.footer.emailPlaceHolder}
              id="email"
              value={email}
              onChange={handleChange}
            />
            <div className="signIn">
              <Button
                text={data.footer.button}
                class="footer-button"
                click={sendEmail}
              />
            </div>
          </div>
        ) : (
          <div className="emailForm">
            <span
              className="emailSent"
              onClick={() => {
                setEmailSent(!emailSent);
              }}
            >
              {data.footer.emailSent}
            </span>
          </div>
        )}
        <div className="contact">
          <div className="icons contactTextLine">
            <SocialMediaIcon
              icon={facebookIcon}
              alt="facebook icon"
              url="https://google.com"
            />
          </div>
          <TextWithIcon icon={phoneIcon} alt="phone" text={data.footer.phone} />
          <TextWithIcon
            icon={emailIcon}
            alt="email"
            text={data.footer.contactEmail}
          />
          <TextWithIcon
            icon={addressIcon}
            text={data.footer.addressLine1}
            additionalSpace={false}
            alt="address"
          />
          <TextWithIcon text={data.footer.addressLine2} />
          <span className="contactTextLine">
            {data.footer.copyrights}{" "}
            <Link to="privacy">{data.footer.policy}</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
