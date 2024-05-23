export const loadLogo = async () => {
    const response = await fetch('http://localhost:3000/data/logo.svg');
    const blob = await response.blob();
    return URL.createObjectURL(blob);
};

export const loadInfo = async () => {
    const response = await fetch('http://localhost:3000/data/info.json');
    return await response.json();
};