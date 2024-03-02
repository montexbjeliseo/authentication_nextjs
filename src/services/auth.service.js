export const signUp = async (payload) => {
    const response = await fetch('https://pets-api.montexbjeliseo.com.ar/api/auth/register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(payload)
    });
    return response;
}

export const signIn = (payload) => {
    return fetch('https://pets-api.montexbjeliseo.com.ar/api/auth/login', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(payload)
    });
}