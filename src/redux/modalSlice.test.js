import modalReducer, { toggleModal, setModalContent } from "./modalSlice";

describe("modalSlice", () => {
  describe("toggleModal", () => {
    it("should toggle the isModalOpen state", () => {
      const initialState = { isModalOpen: false };
      const expectedState = { isModalOpen: true };

      const nextState = modalReducer(initialState, toggleModal());

      expect(nextState).toEqual(expectedState);
    });
  });

  describe("setModalContent", () => {
    it("should update the modalContent state", () => {
      const initialState = { modalContent: { title: "test" } };
      const newModalContent = { title: "updated test" };
      const expectedState = { modalContent: newModalContent };

      const nextState = modalReducer(
        initialState,
        setModalContent(newModalContent)
      );

      expect(nextState).toEqual(expectedState);
    });
  });
});
