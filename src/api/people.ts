import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Person, PersonBody } from "../models/person";

const API_URL = 'http://localhost:3000/';

interface PutParams {
    id: number;
    person: PersonBody;
}

export const getPeople = createAsyncThunk(
    'people/getPeople',
    async (): Promise<Person[]> => {
        const response = await axios.get(`${API_URL}people`);
        return response.data;
    }
);

export const getPerson = createAsyncThunk(
    'people/getPerson',
    async (id: number): Promise<Person> => {
        const response = await axios.get(`${API_URL}people/${id}`);
        return response.data;
    }
);

export const registerPerson = createAsyncThunk(
    'people/registerPerson',
    async (person: PersonBody): Promise<Person> => {
        const response = await axios.post(`${API_URL}people`, person);
        return response.data;
    }
);

export const updatePerson = createAsyncThunk(
    'people/updatePerson',
    async ({ id, person }: PutParams): Promise<Person> => {
        const response = await axios.put(`${API_URL}people/${id}`, person);
        return response.data;
    }
);

export const removePerson = createAsyncThunk(
    'people/removePerson',
    async (id: number): Promise<any> => {
        const response = await axios.delete(`${API_URL}people/${id}`);
        return response.data;
    }
);
