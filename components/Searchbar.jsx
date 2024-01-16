import Chip from "./Chip";
import SearchSuggestion from "./SearchSuggestion";
import data from "@/public/data";

const Searchbar = () => {
    return (
        <div className="px-3 relative bg-neutral-700 rounded-md flex flex-wrap">
            {data.map((d,index) => <Chip key={index} {...d} />)}
            <div className="relative flex">
                <input
                    type="text"
                    className="block rounded-md p-4 text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0"
                    placeholder="Add new User..."
                />
                <div className="absolute top-[4.5rem] left-2 bg-neutral-700/85 border-t-2 border-neutral-600 w-[23rem]">
                    <SearchSuggestion />
                </div>
            </div>
        </div>
    );
}

export default Searchbar;