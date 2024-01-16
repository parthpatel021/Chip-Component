import { useContext } from "react";
import { DataContext } from "@/contexts/DataContext";
import Chip from "./Chip";
import SearchSuggestion from "./SuggestionComponents/SearchSuggestion";

const Searchbar = () => {
    const { data, setData } = useContext(DataContext);

    return (
        <div className="px-3 relative bg-neutral-700 rounded-md flex flex-wrap">
            {data.chipData.map((d, index) => <Chip key={index} {...d} />)}
            <div className="relative flex">
                <input
                    type="text"
                    className="block rounded-md p-4 text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0"
                    placeholder="Add new User..."
                />
                <SearchSuggestion />
            </div>
        </div>
    );
}

export default Searchbar;