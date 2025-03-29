import { TimelineItem } from "@/queries/types";

const timelineItems: TimelineItem[] = [
  {
    dateRange: "Apr 2022 - Now",
    name: "Shopfully",
    summaryPoints: [
      "Developing the infrastructure that serves for the quality automation of all the tech stack web, mobile and API's.",
      "Multi repo infrastructure written entirely with Typescript in NodeJS.",
      "Using the CI from Github to launch automation tests, and creating a reporting system on Slack",
    ],
    techStack: "Node.js, Typescript, Playwright, WebdriverIO, Appium, Github, AWS",
    timelineType: "work",
    title: "QA Automation Engineer",
  },
  {
    dateRange: "Oct 2022 - Jun 2023",
    name: "VIU - Valencia International University",
    summaryPoints: [
      "Learning Python to be able to manage Tensorflow and Keras.",
      "Use diferent types of IA: Supervised and Unsupervised Learning, Deep Learning or Reinforce Learning",
      "Optimizing Algorithms to try to use always the most efficient ones.",
    ],
    techStack:
      "Natural language processing, Convolutional neural networks (CNN), TensorFlow, Deep learning, Data science, Data analysis, Recurrent Neural Network (RNN), Optimization algorithms, Pandas, Mathematics, Python",
    timelineType: "education",
    title: "Master's Degree in Artificial Intelligence",
  },
  {
    dateRange: "Apr 2021 - Apr 2022",
    name: "Tiendeo",
    summaryPoints: [
      "Creation of bots in PHP Synfony.",
      "Experience as a crawler, handling requests to webs and api's, and experimenting with different methods of sending information such as JSON.",
      "Experience developing with PHP symfony framework, bots managed with Doquer and Jenkins.",
    ],
    techStack: "PHP, Synfony, Crawling, Proxys, Jenkins",
    timelineType: "work",
    title: "PHP developer",
  },
  {
    dateRange: "Sep 2018 - Oct 2021",
    name: "La Salle BCN, Ramon Llull University",
    summaryPoints: [
      "Learn the basics of programming with C",
      "Learn the basics of OOP with Java",
      "Learn the basics of full stack development with Node.js",
    ],
    techStack: "C, Java, Node.js",
    timelineType: "education",
    title: "Computer Engineering",
  },
];

export const getTimeline = (): TimelineItem[] => {
  return timelineItems;
};
