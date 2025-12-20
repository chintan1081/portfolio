import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { projects } from "./utility/projects";
import { FaYoutube } from "react-icons/fa6";
import { FiGithub, FiGlobe } from "react-icons/fi";

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = useMemo(() => {
        return projects.find((project) => project.id === `/project/${id}`);
    }, [projects, id]);

    const p: any = project

    return (
        <div className="border-b border-neutral-200">
            <div className="max-w-2xl mx-auto border-x border-neutral-200 p-8 px-12 pt-10">
                <div className="rounded-lg overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-64 md:h-75 object-cover rounded-lg" />
                </div>

                <div className="mt-4 flex flex-col gap-4">

                    <h1 className="text-3xl font-bold mt-2">{p.title}</h1>
                    <p className="text-neutral-500 text-sm">{p.description}</p>

                    <div className="mt-4 border border-neutral-200 rounded-xl p-4 bg-white">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-neutral-600">
                            <div>
                                <p className="text-neutral-400">Timeline</p>
                                <p className="font-medium">{p.duration || p.timeline || '—'}</p>
                            </div>
                            <div>
                                <p className="text-neutral-400">Role</p>
                                <p className="font-medium">{p.role || 'Full Stack'}</p>
                            </div>
                            <div>
                                <p className="text-neutral-400">Team</p>
                                <p className="font-medium">{p.team || 'Solo'}</p>
                            </div>
                            <div>
                                <p className="text-neutral-400">Status</p>
                                <p className="font-medium mt-1"><span className="px-1.5 py-0.5 rounded-sm bg-black text-white text-[10px]">{p.status || 'Completed'}</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <a href={p.video} target="_blank" rel="noreferrer"
                            className={`${p.video ? 'cursor-pointer' : 'cursor-not-allowed'} inline-flex hover:opacity-85 items-center text-xs font-semibold gap-1.5 px-2 py-2 bg-black text-white rounded-lg`}>
                            <FaYoutube />
                            Video Demo
                        </a>


                        <a href={p.github} target="_blank" rel="noreferrer"
                            className={`${p.github ? 'cursor-pointer' : 'cursor-not-allowed'} text-xs font-semibold inline-flex items-center gap-2 p-2 border border-neutral-200 shadow-inner inset-shadow-sm hover:bg-neutral-100 rounded-lg`}>
                                <FiGithub />
                                Source Code
                                </a>

                        <a href={p.video} target="_blank" rel="noreferrer"
                            className={`${p.live ? 'cursor-pointer' : 'cursor-not-allowed'} inline-flex hover:opacity-85 items-center text-xs font-semibold gap-1.5 px-2 py-2 bg-black text-white rounded-lg `}>
                            <FiGlobe />
                            Live Demo
                        </a>
                    </div>

                    <div className="">
                        <h3 className="pt-6 pb-2 font-semibold text-2xl">What Users Can Do</h3>
                        {p.whatUsersCanDo ? (
                            <ul className="ml-4">
                                {p.whatUsersCanDo.map((f: string, i: number) => (
                                    <li key={i} className="py-0.5 font-mono text-sm marker:text-neutral-400 list-disc text-neutral-500">{f}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="py-0.5 font-mono text-sm text-neutral-500">Feature details not provided.</p>
                        )}
                    </div>

                    <div className="">
                        <h4 className="pt-6 pb-2 font-semibold text-2xl">Why I built this</h4>
                        <ul className="ml-4">
                            {p.whyIBuiltThis?.map((l: string, i: number) => (
                                <li key={i} className="py-0.5 font-mono text-sm marker:text-neutral-400 list-disc text-neutral-500">{l}</li>
                            ))}
                        </ul>
                        <h4 className="pt-6 pb-2 font-semibold text-2xl">What I learned</h4>
                        <ul className="ml-4">
                            {p.whatILearned?.map((l: string, i: number) => (
                                <li key={i} className="py-0.5 font-mono text-sm marker:text-neutral-400 list-disc text-neutral-500">{l}</li>
                            ))}
                        </ul>

                        <h4 className="pt-6 pb-2 font-semibold text-2xl">Tech Stack</h4>
                        <ul className="ml-4">
                            {p.technologies?.map((l: any, i: number) => (
                                <li key={i} className="py-0.5 font-mono text-sm marker:text-neutral-400 list-disc text-neutral-500">
                                    {l.title}
                                </li>
                            ))}
                        </ul>

                        <h4 className="pt-6 pb-2 font-semibold text-2xl">After launch & Impact</h4>
                        {p.afterLaunchAndImpact ? (
                            <ul className="ml-4">
                                {p.futurePlans.map((it: string, i: number) => (
                                    <li key={i} className="py-0.5 font-mono text-sm marker:text-neutral-400 list-disc text-neutral-500">{it}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="py-0.5 font-mono text-sm text-neutral-500">No impact details provided.</p>
                        )}

                        <h4 className="pt-6 pb-2 font-semibold text-2xl">Future Plans</h4>
                        {p.futurePlans ? (
                            <ul className="ml-4">
                                {p.futurePlans.map((fp: string, i: number) => (
                                    <li key={i} className="py-0.5 font-mono text-sm marker:text-neutral-400 list-disc text-neutral-500">{fp}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="py-0.5 font-mono text-xs text-neutral-500">No future plans provided.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDisplay;
