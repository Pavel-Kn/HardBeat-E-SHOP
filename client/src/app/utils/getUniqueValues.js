export const getUniqueValues = (data, type) => {
    const unique = data.map((item) => item[type]);
    return ["all", ...new Set(unique)];
};
