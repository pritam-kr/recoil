import { atom } from "recoil";

export const allNoteAtom = atom({
    key: "allNoteAtom",
    default: []
})

export const loadingStatusAtom = atom({
    key: 'loadingStatusAtom',
    default: {
        loading: false,
        error: ''
    }
})