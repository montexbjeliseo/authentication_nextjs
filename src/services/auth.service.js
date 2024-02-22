export const signUp = async (payload) => {
    const response = await fetch('https://petsapi-server.onrender.com/api/auth/register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(payload)
    });
    return response;
}

export const signIn = (payload) => {
    return fetch('https://petsapi-server.onrender.com/api/auth/login', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(payload)
    });
}