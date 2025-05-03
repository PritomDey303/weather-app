import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface HistoryEntry {
    temperature: number;
    humidity: number;
    windSpeedInKmh: number;
    city: string;
    icon: string;
    description: string;
    date: string;
    time: string
}

//defining initial state type
interface SearchHistoryState {
    history: HistoryEntry[]
}

//load history function
const loadHistory = (): HistoryEntry[] => {
    try {
        const stored = localStorage.getItem('searchHistory');
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error('Failed to load search history:', error);
        return [];
    }
};
//defining inital state
const initialState: SearchHistoryState = {
    history: loadHistory(),
};

//creating search history slice
const searchHistorySlice = createSlice({
    name: 'searchHistory',
    initialState,
    reducers: {
        addToHistory: (state, action: PayloadAction<HistoryEntry>) => {
            //console.log(state.history)
            const updatedHistory = [...state.history, action.payload];
            console.log(updatedHistory)

            //removing oldest entry if history exceeds 5 entries
            if (updatedHistory.length > 5) {
                updatedHistory.shift();
            }

            state.history = updatedHistory;

            localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
        }
    },
});

export const { addToHistory } = searchHistorySlice.actions;
export default searchHistorySlice.reducer;
