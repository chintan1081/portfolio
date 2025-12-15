import { FaLinkedin, FaSquareGithub, FaXTwitter } from "react-icons/fa6"
import { IoCallSharp } from "react-icons/io5"
import { MdEmail } from "react-icons/md"

const socials = [
  { icon: <FaXTwitter />, title: "X", href: "https://x.com/Chintan_1081" },
  { icon: <FaLinkedin />, title: "Linkedin", href: "https://www.linkedin.com/in/chintanpatel1081/" },
  { icon: <FaSquareGithub />, title: "Github", href: "https://github.com/chintan1081" },
  { icon: <MdEmail />, title: "chintanpatel1081@gmail.com", href: "mailto:chintanpatel1081@gmail.com" },
  { icon: <IoCallSharp />, title: "+91 7202031718", href: "tel:+917202031718" },
]

const SocialSection = () => {
  return (
    <div className="border-b border-neutral-200">
      <div className="p-8 max-w-2xl mx-auto border-x border-neutral-200">
        <div className="flex gap-2">
          {socials.map((social) => 
          <a
            target="_blank"
            href={social.href}
            className="cursor-pointer relative group text-xl text-gray-700 hover:text-black">
            {social.icon}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 scale-95 
                            translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 
                            transition-all duration-200 ease-out pointer-events-none bg-gray-800 px-2 py-0.5 text-white text-sm rounded">
              <div className="text-xs w-full whitespace-nowrap">{social.title}</div>
              <div className="absolute w-2 h-2 rotate-45  left-1/2 -translate-x-1/2 -bottom-1 bg-black"></div>
            </div>
          </a>)}
        </div>
      </div>
    </div>
  )
}

export default SocialSection
