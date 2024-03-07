import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
    name: 'language',
    initialState: {
        currentLanguage: 'english',
    },
    reducers: {
        toggleLanguage: (state) => {
            state.currentLanguage = state.currentLanguage === 'english' ? 'hindi' : 'english';
        },
    },
});

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
