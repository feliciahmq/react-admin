import { AuthProvider } from "react-admin";

export const authProvider: AuthProvider = {
    // Runs when user attempts to login
    login: ({ username, password }) => {
        if (username === 'admin' && password === 'password') {
            localStorage.setItem('username', username); // key, value
            return Promise.resolve();
        } else {
            return Promise.reject();
        }
    }, 
    // Runs when user logout
    logout: () => {
        // Remove username from local storage
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    // Runs when API returns error
    checkError: ({ status }: {status: number}) => {
        if (status === 401 || status == 403) {
            // unauthorised
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // Runs when the user navigates to a new location to check for auth
    // when user goes to a page, checks if authenticated, then show page else cannot be shown
    checkAuth: () => {
        return localStorage.getItem('username') ? Promise.resolve() : Promise.reject();
    },
    // Runs when the user navigates to a new location to check for permissions or rules
    // different user have different roles & permissions
    getPermissions: () => {
        return Promise.resolve();
    }
}