import { AwsIcon, ExpressIcon, GeminiIcon, PostgresIcon, PythonIcon, ReactIcon, TypeOrmIcon, TypescriptIcon, VercelIcon, WebsocketIcon } from "../ui/stackIcon";

export const projects = [
    {
        id: "/project/ai-website-builder",
        title: "AI Website Builder",
        description: "A real-time AI-powered website builder that allows users to describe a website idea in plain text and instantly receive a fully generated, editable, production-ready website. The system streams AI responses, renders live previews, and safely executes generated code in isolated environments.",
        subDescription: "A real-time AI website builder that converts text prompts into fully generated, production-ready websites with live previews.",
        duration: "3 months",
        live: "",
        github: "https://github.com/chintan1081/lovable",
        video: "https://www.youtube.com/watch?v=-l5YFWGai40",
        image: "/lovable1.png",
        technologies: [
            { title: "React.js", icon: ReactIcon, href: "" },
            { title: "Express.js", icon: ExpressIcon, href: "" },
            { title: "PostgreSQL", icon: PostgresIcon, href: "" },
            { title: "TypeORM", icon: TypeOrmIcon, href: "" },
            { title: "TypeScript", icon: TypescriptIcon, href: "" },
            { title: "AWS", icon: AwsIcon, href: "" },
            { title: "Vercel AI SDK", icon: VercelIcon, href: "" },
            { title: "WebSockets", icon: WebsocketIcon, href: "" },

        ],
        whyStarted: "I wanted to explore how far AI-assisted development could go and build a system where users can create real websites with just simple text prompts.",
        whatUsersCanDo: [
            "Generate a complete website from a simple text prompt",
            "Edit generated content and layout in real time",
            "See live previews while the AI is generating the website",
            "Iterate on designs using AI-assisted changes",
            "Safely execute and preview AI-generated code"
        ],

        whyIBuiltThis: [
            "To explore the real limits of AI-assisted software development",
            "To reduce the time required to build production-ready websites",
            "To bridge the gap between idea and implementation for non-technical users",
            "To experiment with real-time AI streaming and execution systems"
        ],

        whatILearned: [
            "LLM streaming and tool calling using Vercel AI SDK",
            "Building real-time systems using WebSockets",
            "Executing untrusted code safely using isolated sandboxes (E2B)",
            "Designing scalable backend architectures with NestJS",
            "Automating asset storage and deployment with AWS"
        ],

        afterLaunchAndImpact: [
            "Achieved fast website generation with real-time feedback loops",
            "Improved user experience through live previews",
            "Validated safe AI-generated code execution in production-like environments",
            "Built a strong foundation for AI-powered developer tools"
        ],

        futurePlans: [
            "Support custom domain deployments",
            "Add collaborative editing features",
            "Introduce multi-page and dynamic websites",
            "Improve AI accuracy with fine-tuned prompts"
        ]
    },
    {
        id: "/project/n8n-clone",
        title: "N8n Clone",
        description: "A no-code workflow automation platform inspired by n8n that allows users to visually design, execute, and monitor workflows. The system supports multiple trigger types, AI-powered automation nodes, and reliable execution tracking with retries.",
        subDescription: "A no-code workflow automation platform inspired by n8n that lets users visually build, run, and monitor workflows with AI-powered nodes.",
        duration: "3 months",
        learned: [
            "Workflow orchestration and execution pipelines",
            "Drag-and-drop canvas design for complex systems",
            "Reliable job execution with retries and scheduling",
            "Type-safe backend architecture",
            "Integrating AI agents into automation flows"
        ],
        live: "",
        github: "https://github.com/chintan1081/n8n-clone",
        video: "https://www.youtube.com/watch?v=aQ7KeDj3eng",
        image: "/n8n.png",
        technologies: [
            { title: "React.js", icon: ReactIcon, href: "" },
            { title: "Express.js", icon: ExpressIcon, href: "" },
            { title: "PostgreSQL", icon: PostgresIcon, href: "" },
            { title: "TypeORM", icon: TypeOrmIcon, href: "" },
            { title: "TypeScript", icon: TypescriptIcon, href: "" },
            { title: "WebSockets", icon: WebsocketIcon, href: "" },
            { title: "Gemini Ai", icon: GeminiIcon, href: "" },

        ],
        whatUsersCanDo: [
            "Visually design workflows using a drag-and-drop interface",
            "Trigger workflows manually, via webhooks, or on schedules",
            "Automate tasks using AI-powered workflow nodes",
            "Monitor workflow execution status and logs",
            "Build complex automation without writing code"
        ],

        whyIBuiltThis: [
            "To deeply understand how workflow automation platforms work internally",
            "To combine AI agents with traditional automation systems",
            "To build a developer-friendly alternative to existing tools",
            "To learn reliable execution and retry mechanisms"
        ],

        whatILearned: [
            "Workflow orchestration and execution design",
            "Building scalable drag-and-drop canvas UIs",
            "Reliable job scheduling and retry strategies",
            "Designing type-safe backend systems",
            "Integrating AI agents into automation pipelines"
        ],

        afterLaunchAndImpact: [
            "Enabled no-code automation for complex workflows",
            "Successfully implemented multiple trigger types",
            "Built a reliable workflow execution and tracking system",
            "Demonstrated AI-driven task automation capabilities"
        ],

        futurePlans: [
            "Add more third-party service integrations",
            "Introduce reusable workflow templates",
            "Enable team and organization-based workflows",
            "Build advanced execution analytics and monitoring"
        ]
    },
    {
        id: "/project/animagraph",
        title: "AnimaGraph",
        description: "An AI-driven platform that converts natural language prompts into mathematical animations using the Manim library. Users can generate animations without writing code, preview results in real time, and export high-quality visuals for teaching and presentations.",
        subDescription: "An AI-powered platform that turns text prompts into mathematical animations(video) with real-time previews and high-quality exports.",
        duration: "1 month",
        learned: [
            "Manim animation pipeline and rendering",
            "Prompt-to-code AI generation",
            "Real-time preview streaming using WebSockets",
            "Optimizing animation rendering performance",
            "Building AI tools for non-technical users"
        ],
        live: "",
        github: "https://github.com/chintan1081/animagraph",
        video: "https://www.youtube.com/watch?v=hI7rlN2hntQ",
        image: "/animagraph.png",
        technologies: [
            { title: "React.js", icon: ReactIcon, href: "" },
            { title: "Express.js", icon: ExpressIcon, href: "" },
            { title: "PostgreSQL", icon: PostgresIcon, href: "" },
            { title: "TypeORM", icon: TypeOrmIcon, href: "" },
            { title: "TypeScript", icon: TypescriptIcon, href: "" },
            { title: "WebSockets", icon: WebsocketIcon, href: "" },
            { title: "Python", icon: PythonIcon, href: "" },
            { title: "Gemini Ai", icon: GeminiIcon, href: "" },
            
        ],
        whatUsersCanDo: [
            "Generate mathematical animations using plain English prompts",
            "Preview animations in real time while they are being generated",
            "Customize animation styles and parameters",
            "Export high-resolution animations for presentations",
            "Create animations without learning Manim or writing code"
        ],

        whyIBuiltThis: [
            "To make mathematical animation creation accessible to non-programmers",
            "To remove the steep learning curve of the Manim library",
            "To help educators and students visualize complex concepts easily",
            "To explore prompt-to-code generation systems"
        ],

        whatILearned: [
            "Manim animation pipeline and rendering workflow",
            "Prompt-to-code AI generation techniques",
            "Real-time preview streaming using WebSockets",
            "Optimizing rendering performance for animations",
            "Designing AI tools for creative workflows"
        ],

        afterLaunchAndImpact: [
            "Simplified creation of math animations for educators",
            "Reduced time and effort required to produce animations",
            "Enabled rapid iteration through real-time previews",
            "Validated AI-driven creative tooling"
        ],

        futurePlans: [
            "Add timeline-based animation editing",
            "Introduce animation templates for common concepts",
            "Enable collaborative animation creation",
            "Improve AI prompt understanding and accuracy"
        ]

    }
]