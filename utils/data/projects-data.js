import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "HubSpot Integration",
    description:
      "Integrated HubSpot CRM with Educative.io to facilitate the reaching out to users with promotions, newsletters, and course recommendations. Designed and implemented the pipelines to post data from internal system to HubSpot. Audited the systems for GDRP compliance. Optimized the APIs to 90th percentile.",
    tools: ["GCP", "BigQuery", "HubSpot", "Python"],
    role: "FullStack Engineer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Mobile Health",
    description:
      "Engineered the integration of data pipelines that ingest large amount of data. Executed the creation of lite framework that can be plugged in any CRM and worked as a FullStack engineer for this project",
    tools: [
      "Angular",
      "Jquery",
      "SCSS",
      "C#",
      "TypeScript",
      "MySQL",
      "Azure Cloud",
      ".net core 6",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "Invoicing Webapp",
    description:
      "Deisgned and implemented a fullstack app that creates invoices, process the payments using stripe, send the receipts to the payee, send multiple reminders by the time the payment is due and has the ability to process subscriptions.",
    tools: [
      "React",
      "Material UI",
      "Stripe",
      "Express",
      "TypeScript",
      "MongoDB",
      "Cronjob",
      "JWT",
      "Nodejs",
    ],
    code: "",
    role: "Full Stack Developer",
    demo: "",
    image: realEstate,
  },
  ];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
