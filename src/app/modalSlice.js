import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { isModalOpen: false, modalContent: { title: "test" } },
  reducers: {
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    setModalContent: (state, action) => {
      state.modalContent = action.payload;
    },
  },
});

export const { toggleModal, setModalContent } = modalSlice.actions;

export default modalSlice.reducer;
