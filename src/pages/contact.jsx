import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
// import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		document.title = `Contact | ${INFO.main.title}`;
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							{/* <Logo width={46} /> */}
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
						Stay Connected: Ways to Keep in Touch with Me
						</div>

						<div className="subtitle contact-subtitle">
						I appreciate your interest in contacting me. Your feedback, questions, and suggestions are always welcome. For specific inquiries or comments, feel free to email me directly at
							&nbsp;{""}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. I strive to reply to all messages within 24 hours, but please allow for additional time during busy periods. If social media is more your style, connect with me on {" "}
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								LinkedIn
							</a>
							 . I regularly post updates and interact with my followers there. Thank you for reaching out and I’m excited to hear from you!
						</div>
					</div>

					<div className="contact-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
