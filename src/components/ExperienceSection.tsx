import { IoCodeSlash } from "react-icons/io5";
import { TbStack3 } from "react-icons/tb";
import ToolsTechnology from "./ui/ToolsTechnology";
import { AwsIcon, GithubIcon, NestjsIcon, NodeIcon, PostgresIcon, ReactIcon, TailwindIcon, TypeOrmIcon, TypescriptIcon, VercelIcon, WebsocketIcon } from "./ui/stackIcon";

type Experience = {
  companyName: string;
  role: string;
  live: string | null;
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
      live: null,
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
  companyName: "LaunchHQ · Startup Boilerplate & Code Generation Platform",
  role: "Founder & Full Stack Engineer",
  employmentType: "Saas",
  live: "https://www.launchhq.dev",
  startDate: "January 2026",
  endDate: "Present",
  bullets: [
    "Founded and built LaunchHQ, a developer-first platform designed to help founders launch production-ready startups faster using structured boilerplates and automation.",
    
    "Designed and implemented a scalable, high-performance frontend using React.js, Next.js, TypeScript, and Tailwind CSS, focusing on clean UX, modular components, and conversion-driven layouts.",
    
    "Architected the platform for end-to-end startup generation, covering frontend, backend, database, and deployment workflows with a phased and extensible system design.",
    
    "Planning and designing future backend services, authentication, database schemas, and cloud deployment pipelines to support full SaaS application generation.",
    
    "Defined a future roadmap to integrate AI orchestration with RAG-based prompt enrichment and vector databases, enabling intelligent code generation for frontend, backend APIs, database models, and deployment configurations."
  ],
  technologies: [
    { title: "React.js", icon: ReactIcon, href: "" },
    { title: "TypeScript", icon: TypescriptIcon, href: "" },
    { title: "Tailwind CSS", icon: TailwindIcon, href: "" },
    { title: "WebSocket", icon: WebsocketIcon, href: "" },
    { title: "Postgres", icon: PostgresIcon, href: "" },
    { title: "Vercel AI SDK", icon: VercelIcon, href: "" },
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
                      {exp.employmentType} | {exp.startDate}{exp.endDate ? ` - ${exp.endDate} ` : ""}
                      {exp.live ? <>| <a className="text-blue-500 underline hover:text-blue-700">Live</a></> : null}
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
