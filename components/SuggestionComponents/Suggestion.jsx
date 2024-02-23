/* eslint-disable @next/next/no-img-element */

const Suggestion = ({ name, email, imgURL, selected }) => {
    return (
        <li className={`px-3 py-2 flex items-center cursor-pointer hover:bg-neutral-300/50 ${selected ? 'border-neutral-400 border-2' : null}`}>
            <img
                className="w-10 h-10 rounded-[50%]"
                src={imgURL}
                alt="profile-photo"
            />
            <p className="ml-2 text-md text-white font-semibold">
                {name}
            </p>
            <p className="ml-2 text-md text-neutral-300">
                {email}
            </p>
        </li>
    )
};

export default Suggestion;