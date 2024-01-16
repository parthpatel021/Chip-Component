import data from "@/public/data";
import Suggestion from "./Suggestion";

const SearchSuggestion = () => {
    return(
        <ul className="divide-y divide-neutral-600">
            {data.map((d,index) => {
                return <Suggestion key={index} {...d} />
            })}
        </ul>
    )
}

export default SearchSuggestion;