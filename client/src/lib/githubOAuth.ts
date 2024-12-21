const CALLBACK_URL = "https://quantica-v1.vercel.app";  
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "https://viora-v1.onrender.com";


export const loginWithGithub = async () => {
    const clientId = "Iv23liaxH9BTc9CvGQFr";
    const redirectUri = `${CALLBACK_URL}/home`; 

    const githubUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user`;

    window.location.href = githubUrl;
};

export const handleGitHubCallback = async () => {
    const query = new URLSearchParams(window.location.search);
    const code = query.get('code');

    if (code) {
        const response = await fetch(`${BACKEND_URL}/api/github/callback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code }),
        });
        const data = await response.json();

        // Store access_token in localStorage
        localStorage.setItem('access_token', data.access_token);
        window.location.href = '/'; 
    }
};

export const checkSession = () => {
    const token = localStorage.getItem('access_token');
    return token;
};

export const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('username');
    window.location.href = '/'; 
};