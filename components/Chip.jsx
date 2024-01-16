/* eslint-disable @next/next/no-img-element */

const Chip = ({name, email, imgURL}) => {
    return (
        <div className="relative min-w-40 m-3 bg-neutral-600 hover:bg-neutral-500 rounded-[2rem] flex flex-row items-center justify-between gap-3">
            <img
                className="w-[3rem] h-full rounded-[50%]"
                src={imgURL}
                alt="profile-photo"
            />
            <p className="text-md text-white whitespace-nowrap cursor-default">
                {name}
            </p>
            <div 
                className="mr-3 text-xl font-bold cursor-pointer opacity-70 hover:opacity-100"
            >
                <img src="./images/close.png" alt="close-button" className="w-[.85rem] h-full" />
            </div>
        </div>
    )
}

export default Chip;