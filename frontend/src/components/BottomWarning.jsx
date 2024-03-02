function BottomWarning ({label, buttonText, to}) {
    return (
        <div className="py-2 text-sm flex justify-center">
            {label}
            <a href={to} className="pointer underline pl-1 cursor-pointer">{buttonText}</a>
        </div>
    )
}

export default BottomWarning;