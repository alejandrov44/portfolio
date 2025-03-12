import { TimelineItem } from "@/queries/types";

const timelineItems: TimelineItem[] = [
  {
    name: "Shopfully",
    timelineType: "work",
    title: "QA Automation Engineer",
    techStack: "Node.js, Typescript, Playwright, WebdriverIO, Appium, Github, AWS",
    summaryPoints: [
      "Developing the infrastructure that serves for the quality automation of both web and API's.",
      "Multi repo infrastructure written entirely with Typescript in NodeJS.",
      "Using the CI from Github to launch automation tests, and creating a reporting system on Slack",
    ],
    dateRange: "Apr 2022 - Now",
  },
  {
    name: "VIU - Valencia International University",
    timelineType: "education",
    title: "Master's Degree in Artificial Intelligence",
    techStack:
      "Natural language processing, Convolutional neural networks (CNN), TensorFlow, Deep learning, Data science, Data analysis, Recurrent Neural Network (RNN), Optimization algorithms, Pandas, Mathematics, Python",
    summaryPoints: [
      "Learning Python to be able to manage Tensorflow and Keras.",
      "Use diferent types of IA: Supervised and Unsupervised Learning, Deep Learning or Reinforce Learning",
      "Optimizing Algorithms to try to use always the most efficient ones.",
    ],
    dateRange: "Oct 2022 - Jun 2023",
  },
  {
    name: "Tiendeo",
    timelineType: "work",
    title: "PHP developer",
    techStack: "PHP, Synfony, Crawling, Proxys, Jenkins",
    summaryPoints: [
      "Creation of bots in PHP Synfony.",
      "Experience as a crawler, handling requests to webs and api's, and experimenting with different methods of sending information such as JSON.",
      "Experience developing with PHP symfony framework, bots managed with Doquer and Jenkins.",
    ],
    dateRange: "Apr 2021 - Apr 2022",
  },
  {
    name: "La Salle BCN, Ramon Llull University",
    timelineType: "education",
    title: "Computer Engineering",
    techStack: "C, Java, Node.js",
    summaryPoints: [
      "Learn the basics of programming with C",
      "Learn the basics of OOP with Java",
      "Learn the basics of full stack development with Node.js",
    ],
    dateRange: "Sep 2018 - Oct 2021",
  },
];

export async function getTimeline(): Promise<TimelineItem[]> {
  return await timelineItems;
}
