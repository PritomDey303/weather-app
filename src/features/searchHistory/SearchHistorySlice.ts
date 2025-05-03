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

interface SearchHistoryState {
    history: HistoryEntry[]
}

//  load history from localStorage
const loadHistory = (): HistoryEntry[] => {
    try {
        const stored = localStorage.getItem('searchHistory');
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error('Failed to load search history:', error);
        return [];
    }
};
//inital state
const initialState: SearchHistoryState = {
    history: loadHistory(),
};
const searchHistorySlice = createSlice({
    name: 'searchHistory',
    initialState,
    reducers: {
        addToHistory: (state, action: PayloadAction<HistoryEntry>) => {
            //console.log(state.history)
            const updatedHistory = [...state.history, action.payload];
            console.log(updatedHistory)

            // Keep only the last 5 entries
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
