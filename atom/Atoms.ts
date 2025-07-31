import { atom } from "recoil";
export const history=atom<string[]>({
    key:"history",
    default:[]
})