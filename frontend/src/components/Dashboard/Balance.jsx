export const Balance = ({value}) => {
    return (
        <div className="flex h-[60px] w-[300px] bg-appBlue rounded-lg px-2 shadow-md hover:bg-[#49b0ff]">
            <div className="font-bold text-3xl leading-[60px] text-[#040F23]">
                Your balance
            </div>
            <div className="font-semibold ml-4 text-xl leading-[60px] pt-1">
                Rs {value}
            </div>
        </div>
    )
}