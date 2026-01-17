import { IoCodeSlash } from "react-icons/io5";
import { TbStack3 } from "react-icons/tb";
import ToolsTechnology from "./ui/ToolsTechnology";
import { AwsIcon, E2BIcon, GithubIcon, MongoDBIcon, NestjsIcon, NodeIcon, PostgresIcon, ReactIcon, TypeOrmIcon, TypescriptIcon, VercelIcon, WebsocketIcon } from "./ui/stackIcon";

type Experience = {
  companyName: string;
  role: string;
  employmentType: string;
  startDate: string;
  endDate?: string;
  bullets: string[];
  technologies: { href: string; title: string; icon: any }[];
};

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      companyName: "BanasTech Pvt Ltd.",
      role: "Software Engineer",
      employmentType: "Full-time",
      startDate: "May 2024",
      endDate: "September 2025",
      bullets: [
  "Developed the entire frontend of ZapHalo, implementing real-time communication between WhatsApp users and AI agents using WebSockets, significantly enhancing responsiveness and user engagement.",
  "Designed and deployed multiple AI agents to automate messaging workflows, including a message automation agent and a WhatsApp template generation agent, improving operational efficiency by 80% and reducing manual intervention.",
  "Implemented backend infrastructure leveraging TypeORM and GraphQL within a monorepo setup, enabling scalable, maintainable, and resource-efficient code management.",
  "Built and integrated webhook handlers to reliably process incoming WhatsApp messages into the application, ensuring seamless data flow and timely message delivery.",
  "Successfully deployed the full application stack on AWS EC2, optimizing cloud resource allocation for internal client use while ensuring high availability and cost-efficient infrastructure."
],
      technologies: [{ title: "React.js", icon: ReactIcon, href: "" },
          { title: "Node.js", icon: NodeIcon, href: "" },
          { title: "Nest.js", icon: NestjsIcon, href: "" },
          { title: "Postgres", icon: PostgresIcon, href: "" },
          { title: "TypeOrm", icon: TypeOrmIcon, href: "" },
          { title: "Github", icon: GithubIcon, href: "" },
          { title: "Typescript", icon: TypescriptIcon, href: "" },
          { title: "AWS", icon: AwsIcon, href: "" },]
    },
    {
  companyName: "Freelance · SaaS Landing Page Builder",
  role: "Founding Engineer",
  employmentType: "Freelance",
  startDate: "December 2025",
  endDate: "Present",
  bullets: [
    "Developed a freelance SaaS landing page builder that enables clients to create customizable landing pages by selecting from a library of pre-built UI components and generating production-ready layouts using AI-driven code generation.",
    "Integrated AI-powered UI component generation that writes and modifies ReactJS and TypeScript code in real time based on client prompts, allowing dynamic customization of layouts, styles, and content.",
    "Implemented real-time streaming responses and live preview updates using WebSocket and the Vercel AI SDK, enabling instant feedback loops and significantly improving user experience.",
    "Designed and implemented a scalable full-stack architecture using ReactJS on the frontend and Node.js, MongoDB, and Mongoose on the backend, ensuring flexible schema design and efficient data handling.",
    "Integrated isolated execution environments using the E2B sandbox to securely run, build, and preview AI-generated UI code, ensuring safe execution and preventing runtime conflicts.",
    "Future enhancements including RAG-based prompt enrichment, vector databases and embeddings for intelligent UI component retrieval, and a production deployment pipeline on AWS EC2 to scale the platform into a full SaaS offering."
  ],
  technologies: [
    { title: "React.js", icon: ReactIcon, href: "" },
    { title: "TypeScript", icon: TypescriptIcon, href: "" },
    { title: "Node.js", icon: NodeIcon, href: "" },
    { title: "MongoDB", icon: MongoDBIcon, href: "" },
    { title: "WebSocket", icon: WebsocketIcon, href: "" },
    { title: "Vercel AI SDK", icon: VercelIcon, href: "" },
    { title: "E2B Sandbox", icon: E2BIcon, href: "" }
  ]
}

  ];

  return (
    <div className="border-b border-neutral-200">
      <div className="border-x text-gray-800 border-neutral-200 mx-auto max-w-2xl">
        <div className="p-8">
          <div>
            <h1 className="font-semibold text-2xl py-4 mb-6 border-b border-neutral-200 text-center">Experience</h1>
          </div>
          <div className="py-2">
            {experiences.map((exp, idx) => (
              <div key={idx} className="py-4">
                <h2 className="font-medium">{exp.companyName}</h2>
                <div className="flex gap-4 pt-2">
                  <div className="flex flex-col pt-1">
                    <span className="text-xs rounded p-0.5 text-neutral-400 bg-neutral-100 border border-neutral-400"><IoCodeSlash /></span>
                    <span className="flex-1  w-0 self-center  border-l border-neutral-400"></span>
                    <span className="text-xs rounded p-0.5 text-neutral-400 bg-neutral-100 border border-neutral-400"><TbStack3 /></span>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-medium text-base">{exp.role}</p>
                    <span className="text-xs font-semibold text-gray-500/80">
                      {exp.employmentType} | {exp.startDate}{exp.endDate ? ` - ${exp.endDate}` : ""}
                    </span>
                    <ul className="pl-4 py-2 font-mono text-sm marker:text-neutral-400 list-disc text-neutral-500">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                    <p className="font-medium pt-3">Technologies & Tools</p>
                  </div>
                </div>
                <div className="pl-8 flex pt-2">
                  {exp.technologies.map((technologie, i) => (
                    <ToolsTechnology key={i} href={technologie.href} title={technologie.title} Icon={technologie.icon} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
