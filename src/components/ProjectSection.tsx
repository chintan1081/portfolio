import { FaGithub } from "react-icons/fa6";
import { FiArrowRight, FiYoutube } from "react-icons/fi";
import ToolsTechnology from "./ui/ToolsTechnology";
import { projects } from "./utility/projects";
import { Link } from "react-router-dom";

const ProjectSection = () => {
    return (
        <div className="border-b border-neutral-200">
            <div className="max-w-2xl mx-auto border-x border-neutral-200">
                <div className="p-8">
                    <h1 className="py-4 font-semibold text-2xl text-center border-b border-neutral-200 mb-10">Best Projects</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {projects.map((project, idx) => (
                            <div key={project.title + idx} className="rounded-2xl border hover:shadow group/card border-neutral-200">
                                <img className="rounded-t-2xl h-40 w-full object-cover" src={project.image} alt={project.title} />
                                <div className="px-4 pt-4 pb-2 flex justify-between">
                                    <p className="text-sm font-medium">{project.title}</p>
                                    <span className="flex gap-2 text-neutral-500">
                                        {/* {project.live !== undefined && (
                                            <ToolsTechnology
                                                className="w-5 h-5"
                                                Icon={FiGlobe}
                                                title="Live"
                                                href={project.video}
                                            />
                                        )} */}
                                        {project.video !== undefined && (
                                            <ToolsTechnology
                                                className="w-5 h-5"
                                                Icon={FiYoutube}
                                                title="Video demo"
                                                href={project.video}
                                            />
                                        )}
                                        {project.github !== undefined && (
                                            <ToolsTechnology
                                                className="w-5 h-5"
                                                Icon={FaGithub}
                                                title="Github"
                                                href={project.github}
                                            />
                                        )}
                                    </span>
                                </div>
                                <p className="px-4 pb-4 text-xs text-neutral-500">
                                    {project.subDescription}
                                </p>
                                <div className="px-4 pb-3">
                                    <p className="text-xs font-semibold text-neutral-500">Technologies</p>
                                    <div className="flex flex-wrap whitespace-pre-wrap gap-1 space-y-1 pt-1">
                                        {project.technologies?.map((technologie, i) => (
                                            <ToolsTechnology key={technologie.title + i} href={technologie.href} title={technologie.title} Icon={technologie.icon} />
                                        ))}
                                    </div>
                                    <Link to={project.id} className="flex mt-4 justify-end text-xs items-center gap-2 text-gray-500">
                                        <p className="hover:underline cursor-pointer underline-offset-3 decoration-1 transition-all duration-200 font-medium ">
                                            View Details
                                            </p>
                                        <FiArrowRight />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection;
