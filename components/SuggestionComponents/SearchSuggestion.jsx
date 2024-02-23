import { useContext } from "react";
import { DataContext } from "@/contexts/DataContext";
import Suggestion from "./Suggestion";

const SearchSuggestion = ({addToChip}) => {
    const { data } = useContext(DataContext);
    return (
        <div className="absolute top-[3.55rem] left-2 bg-neutral-700/85 border-t-2 border-neutral-600 w-[25rem]">
            <ul className="divide-y divide-neutral-600 max-h-[20rem] overflow-auto">
                {data.mainData.map((d, index) => {
                    const name = d.name.toLowerCase();
                    if(data.keyString ===''|| name.includes(data.keyString)){
                        return (
                            <div key={index} onClick={() => addToChip(index)}>
                                <Suggestion  
                                    {...d} 
                                    selected = {data.selectedMainData === index}
                                />
                            </div>
                        )
                    };
                })}
            </ul>
        </div>
    )
}

export default SearchSuggestion;