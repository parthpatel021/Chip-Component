import { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "@/contexts/DataContext";
import Chip from "./Chip";
import SearchSuggestion from "./SuggestionComponents/SearchSuggestion";

const Searchbar = () => {
    const { data, setData } = useContext(DataContext);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const newRef = useRef(null);

    const removeChip = (idx) => {
        setData({
            ...data,
            mainData: [...data.mainData, data.chipData[idx]],
            chipData: data.chipData.filter((d, index) => index !== idx),
            selectedChip: -1,
        });
    }

    const addToChip = (idx) => {
        setData({
            chipData: [...data.chipData, data.mainData[idx]],
            mainData: data.mainData.filter((d, index) => index != idx),
            keyString: '',
            selectedChip: -1,
            selectedMainData: 0,
        });
    }

    // handling closing of suggestion
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (newRef.current && !newRef.current.contains(e.target)) {
                setShowSuggestion(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    });

    const handleInputChnage = (e) => {
        setData({
            ...data,
            keyString: e.target.value
        })
    }

    const handleKeyDown = event => {
        // console.log('Caret at: ', event.target.selectionStart);
        // console.log(event.key); // Enter

        if(event.key === 'Enter'){
            addToChip(data.selectedMainData);
        }

        // Changing selection with up and down key in suggestion list
        if(event.key === 'ArrowDown' || event.key === 'ArrowUp'){
            let idx;
            if(event.key === 'ArrowDown'){ 
                idx = (data.selectedMainData + 1)%(data.mainData.length);
            } else {
                idx = data.selectedMainData - 1;
                if(idx < 0){
                    idx = data.mainData.length-1;
                }
            }

            setData({
                ...data,
                selectedMainData: idx
            });
        }

        if (event.key === 'Backspace' && data.keyString === '') {
            if (data.selectedChip !== -1) {
                console.log('Backspace');
                removeChip(data.selectedChip);
            } else {
                setData({
                    ...data,
                    selectedChip: data.chipData.length - 1,
                });
            }
        }
    };

    return (
        <div className="px-3 relative bg-neutral-700 rounded-md flex flex-wrap">
            {data.chipData.map((d, index) =>
                <Chip
                    key={index}
                    {...d}
                    removeChip={removeChip}
                    index={index}
                    selected={data.selectedChip === index}
                />
            )}
            <div className="relative flex" ref={newRef}>
                <input
                    type="text"
                    className="block rounded-md p-4 text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0"
                    placeholder="Add new User..."
                    onClick={() => setShowSuggestion(true)}
                    onChange={handleInputChnage}
                    value={data.keyString}
                    onKeyDown={handleKeyDown}
                />
                {showSuggestion && <SearchSuggestion addToChip={addToChip} />}
            </div>
        </div>
    );
}

export default Searchbar;