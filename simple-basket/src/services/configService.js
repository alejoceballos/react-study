export const loadLogo = async () => {
    const response = await fetch('/data/logo.png');
    const blob = await response.blob();
    return URL.createObjectURL(blob);
};

export const loadInfo = async () => {
    const response = await fetch('/data/info.json');
    return await response.json();
};