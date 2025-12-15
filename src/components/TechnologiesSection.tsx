import {
    AwsIcon,
    CSSIcon,
    GithubIcon,
    HtmlIcon,
    JavascriptIcon,
    NestjsIcon,
    NodeIcon,
    PostgresIcon,
    ReactIcon,
    TypeOrmIcon,
    TypescriptIcon,
} from "./ui/stackIcon"

const TechnologiesData = [
    { title: "React.js", icon: ReactIcon, href: "" },
    { title: "Node.js", icon: NodeIcon, href: "" },
    { title: "Nest.js", icon: NestjsIcon, href: "" },
    { title: "Postgres", icon: PostgresIcon, href: "" },
    { title: "TypeOrm", icon: TypeOrmIcon, href: "" },
    // { title: "Vercel AI SDK", icon: VercelIcon, href: "" },
    // { title: "Websocket", icon: WebsocketIcon, href: "" },
    { title: "Github", icon: GithubIcon, href: "" },
    { title: "Typescript", icon: TypescriptIcon, href: "" },
    { title: "Javascript", icon: JavascriptIcon, href: "" },
    { title: "AWS", icon: AwsIcon, href: "" },
    { title: "HTML", icon: HtmlIcon, href: "" },
    { title: "CSS", icon: CSSIcon, href: "" },
]

const TechnologiesSection = () => {
    return (
        <div className="border-b border-neutral-200">
            <div className="max-w-2xl pb-8 px-8 mx-auto border-x border-neutral-200">
                <h1 className="py-4 font-semibold text-xl">Technologies & Tools</h1>
                <div className="flex items-end flex-wrap gap-4">
                    {TechnologiesData.map((technologie) => (
                        <div className="relative group border shadow-inner cursor-pointer hover:bg-gray-100 border-gray-300 rounded p-1">
                            <technologie.icon className="w-6 h-6" />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 rounded
                                            bg-gray-800 text-white text-[11px] px-1 py-0.5 mb-3
                                            scale-95 translate-y-2 group-hover:translate-y-0 
                                            group-hover:scale-100 group-hover:opacity-100 transition-all delay-200
                                            ease-out opacity-0
                                            ">
                            {technologie.title}
                            <div className="absolute rotate-45 left-1/2 -translate-x-1/2 -bottom-1 bg-gray-800 w-2 h-2"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechnologiesSection;
