import React from "react";

function article_1() {
	return {
		date: "17 May 2023",
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Cloud computing has revolutionized the way businesses operate by providing scalable, on-demand computing resources that can be accessed from anywhere in the world. This has led to a number of benefits for businesses of all sizes, including:

Cost savings: By using cloud computing services, businesses can avoid the upfront costs associated with purchasing and maintaining expensive hardware and software. Instead, they pay for only the resources they use on an as-needed basis.

Scalability: Cloud computing allows businesses to easily scale their computing resources up or down as their needs change. This means they can quickly respond to changes in demand without having to invest in additional hardware.

Reliability: Cloud computing providers typically have multiple data centers located in different geographic regions. This means that if one data center experiences an outage, another can take over, ensuring that businesses have continuous access to their data and applications.

Collaboration: Cloud computing makes it easy for employees to collaborate on projects, even if they are located in different parts of the world. They can access shared documents and applications from any device with an internet connection.

Security: Cloud computing providers invest heavily in security measures to protect their customers’ data. This includes physical security measures at their data centers as well as cybersecurity measures such as firewalls and encryption.

In conclusion, cloud computing offers a number of benefits for businesses of all sizes. By taking advantage of these benefits, businesses can save money, improve their agility and competitiveness, and better serve their customers.</div>
					{/* <img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/> */}
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "16 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		body: (
			<React.Fragment>
				<div className="paragraph">Artificial Intelligence (AI) is transforming the way healthcare is being delivered. Health organizations have accumulated vast data sets in the form of health records and images, population data, claims data and clinical trial data. AI technologies are well suited to analyze this data and uncover patterns and insights that humans could not find on their own.

AI tools have shown promise for augmenting patient care in two areas: clinical and administrative. Clinical AI tools have shown promise in predicting health trajectories of patients, recommending treatments, guiding surgical care, monitoring patients, and supporting population health management. Administrative AI tools have shown promise in reducing provider burden and increasing efficiency by recording digital notes, optimizing operational processes, and automating laborious tasks.

However, there are also challenges associated with AI tools in healthcare. These include difficulties obtaining high-quality data needed to create effective AI tools, limitations and bias in data used to develop AI tools which can reduce their safety and effectiveness for different groups of patients, challenges scaling up and integrating AI tools into new settings because of differences among institutions and patient populations, lack of transparency in how AI tools work which can reduce trust in the tool, and privacy risks and concerns as more AI systems are developed.

In conclusion, AI has the potential to greatly improve healthcare by providing user-centric experiences, improving efficiency in operations, connecting disparate healthcare data, and accelerating clinical decisions. However, there are also challenges that need to be addressed to ensure the safe and effective use of AI in healthcare.</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
