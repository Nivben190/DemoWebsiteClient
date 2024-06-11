
import axios from 'axios';
import { environment } from '../environment/environment';

export class UserService {
  
    public async login(name: string, password: string) : Promise<string> {
        try {
            const response = await axios.post(`${environment.apiBaseUrl}/api/User/Login`, { name, password });
            return response.data;
        } catch (error) {
            console.error(error);
            return '';
        }
    }

    public async getUsers() {
        try {
            const response = await axios.get(`${environment.apiBaseUrl}/api/users`);
            return response.data;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}