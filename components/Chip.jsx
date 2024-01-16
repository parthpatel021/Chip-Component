/* eslint-disable @next/next/no-img-element */

const Chip = ({name, email, imgURL, removeChip, index, selected}) => {
    return (
        <div className={`relative min-w-40 m-3 bg-neutral-600 hover:bg-neutral-500 rounded-[2rem] flex flex-row items-center justify-between gap-3 ${selected ? 'border-neutral-400 border-2' : null}`}>
            <img
                className="w-10 h-10 rounded-[50%]"
                src={imgURL}
                alt="profile-photo"
            />
            <p className="text-md text-white whitespace-nowrap cursor-default">
                {name}
            </p>
            <div 
                className="mr-3 text-xl font-bold cursor-pointer opacity-70 hover:opacity-100"
                onClick={() => removeChip(index)}
            >
                <img src="./images/close.png" alt="close-button" className="w-[.85rem] h-full" />
            </div>
        </div>
    )
}

export default Chip;