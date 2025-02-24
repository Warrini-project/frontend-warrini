import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    selectedDomain: null,
    checkedDomains: {},
    selectedSkill: null
  },
  reducers: {
    setSelectedDomain: (state, action) => {
      state.selectedDomain = action.payload;
    },
    toggleDomainCheckbox: (state, action) => {
      const domain = action.payload;
      // If we're checking a new domain, uncheck all others
      if (!state.checkedDomains[domain]) {
        state.checkedDomains = {}; // Clear all checkboxes
      }
      state.checkedDomains[domain] = !state.checkedDomains[domain];
    },
    clearAllFilters: (state) => {
      state.selectedDomain = null;
      state.checkedDomains = {};
    },
    initializeDomainFilter: (state, action) => {
        const domain = action.payload;
        state.selectedDomain = domain;
        state.checkedDomains = { [domain]: true };
    },
    setSelectedSkill: (state, action) => {
      const skill = action.payload;
      state.selectedSkill = skill;
    }
  },
});

export const { setSelectedDomain, toggleDomainCheckbox, clearAllFilters, initializeDomainFilter, setSelectedSkill  } = filterSlice.actions;
export default filterSlice.reducer;