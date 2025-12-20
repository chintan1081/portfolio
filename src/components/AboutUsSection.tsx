const AboutUsSection = () => {
    const aboutMe = [
  "Full-stack developer with a strong foundation in computer engineering and hands-on experience building scalable, user-focused web applications.",
  "Skilled in React, Next.js, TypeScript, Node.js, Express, PostgresSQL, and modern front-end tooling; focused on clean architecture and performance.",
  "Experienced MERN Stack Developer with 2+ years of industry exposure, leading client interactions and building enterprise-grade software solutions.",
  "Actively exploring AI, automation, and SaaS product development and passionate about turning ideas into real, usable products.",
  "Built multiple AI-powered projects including website generators, AI agents, and automation tools using LLM APIs and modern frameworks.",
  "Enjoys building polished projects, learning new technologies deeply, and continuously improving system design and UX."
];

    return (
        <div className="border-b border-neutral-200">
            <div className="border-x mx-auto max-w-2xl border-neutral-200">
                <div className="p-8">
                    <h1 className="py-4 font-semibold text-2xl">About Me</h1>
                    <ul className="ml-4">
                        {aboutMe.map((about) => <li className="py-0.5 font-mono text-sm marker:text-neutral-400 list-disc text-neutral-500">
                            {about}
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutUsSection
