    export const loadLS = (name) => {
    try {
        const initialState = localStorage.getItem(name);
        if (initialState === null) {
        return [];
    }
    return JSON.parse(initialState);
    } catch (err) {
    return [];
    }
};
    export const setLS = (name,items) => {
    localStorage.setItem(name, JSON.stringify(items));
    };
    export const removeLs = () => {
    localStorage.removeItem('cartItems');
    };


