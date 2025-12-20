import type { ComponentType } from "react"

type ToolsTechnologyProp = {
  title: string,
  Icon: ComponentType<{ className?: string }>,
  href: string,
  className?: string
}

const ToolsTechnology = ({ title, Icon, href, className = "w-6 h-6" }: ToolsTechnologyProp) => {
  return (
    <a href={href ? href : undefined} target="_blank" className={`relative ${href ? 'cursor-pointer' : 'cursor-none'} max-w-sm group grayscale-10 whitespace-nowrap scale-85 hover:scale-100 transition-all duration-200 border-gray-300 rounded`} >
      <Icon className={`${className}`} />
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 rounded
                                            bg-gray-800 text-white text-[11px] px-1 py-0.5 mb-3
                                            scale-95 translate-y-2 group-hover:translate-y-0 
                                            group-hover:scale-100 group-hover:opacity-100 transition-all delay-200
                                            ease-out opacity-0  
                                            ">
        {title}
        <div className="absolute  rotate-45 left-1/2 -translate-x-1/2 -bottom-1 bg-gray-800 w-2 h-2"></div>
      </div>
    </a>
  )
}

export default ToolsTechnology
