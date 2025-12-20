import {
    AwsIcon,
    CSSIcon,
    GithubIcon,
    HtmlIcon,
    JavascriptIcon,
    NestjsIcon,
    NodeIcon,
    PostgresIcon,
    PostmanIcon,
    ReactIcon,
    TypeOrmIcon,
    TypescriptIcon,
    VercelIcon,
    WebsocketIcon,
} from "./ui/stackIcon"
import ToolsTechnology from "./ui/ToolsTechnology";

export const TechnologiesData = [
    { title: "React.js", icon: ReactIcon, href: "" },
    { title: "Node.js", icon: NodeIcon, href: "" },
    { title: "Nest.js", icon: NestjsIcon, href: "" },
    { title: "Typescript", icon: TypescriptIcon, href: "" },
    { title: "Javascript", icon: JavascriptIcon, href: "" },
    { title: "Postgres", icon: PostgresIcon, href: "" },
    { title: "TypeOrm", icon: TypeOrmIcon, href: "" },
    { title: "Vercel AI SDK", icon: VercelIcon, href: "" },
    { title: "Websocket", icon: WebsocketIcon, href: "" },
    { title: "Github", icon: GithubIcon, href: "" },
    { title: "AWS", icon: AwsIcon, href: "" },
    { title: "Postman", icon: PostmanIcon, href: "" },
    { title: "HTML", icon: HtmlIcon, href: "" },
    { title: "CSS", icon: CSSIcon, href: "" },
]

const TechnologiesSection = () => {
    return (
        <div className="border-b border-neutral-200">
            <div className="max-w-2xl pb-8 px-8 mx-auto border-x border-neutral-200">
                <h1 className="py-4 font-semibold text-2xl">Technologies & Tools</h1>
                <div className="flex items-end flex-wrap gap-0.5">
                    {TechnologiesData.map((technologie) => (
                        <ToolsTechnology href={technologie.href} title={technologie.title} Icon={technologie.icon} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechnologiesSection;
