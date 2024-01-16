import { useContext } from "react";
import { DataContext } from "@/contexts/DataContext";
import Suggestion from "./Suggestion";

const SearchSuggestion = () => {
    const { data, setData } = useContext(DataContext);
    const addToChip = (idx) => {
        setData({
            chipData: [...data.chipData, data.mainData[idx]],
            mainData: data.mainData.filter((d, index) => index != idx)
        });
    }
    return (
        <div className="absolute top-[3.55rem] left-2 bg-neutral-700/85 border-t-2 border-neutral-600 w-[25rem]">
            <ul className="divide-y divide-neutral-600 h-[20rem] overflow-auto">
                {data.mainData.map((d, index) => {
                    return (
                        <div key={index} onClick={() => addToChip(index)}>
                            <Suggestion  {...d} />
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default SearchSuggestion;