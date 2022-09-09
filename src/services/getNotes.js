import axios from "axios";

export const getNoteService = () => {
  return axios.get("https://6218cb5b1a1ba20cbaab958a.mockapi.io/notes");
};


export const createNewNoteService = (formData) => {
    return axios.post("https://6218cb5b1a1ba20cbaab958a.mockapi.io/notes", formData);
}