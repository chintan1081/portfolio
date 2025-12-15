const StackName = ({ title, icon}: any) => {
    return (
        <div className="inline-flex self-end text-[11px] font-bold px-1.5 shadow-inner  py-0.5  items-center rounded gap-1 bg-gray-100 border border-gray-300">
            {icon}
            <p>{title}</p>
        </div>
    )
}

export default StackName
