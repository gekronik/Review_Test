export const formatClientName = (name: string) => {
    const parts = name.split(' ');
    if (parts.length > 1) {
        const lastName = parts[0];
        const firstNameInitial = parts[1].charAt(0);
        return `${lastName} ${firstNameInitial}.`;
    }
    return name;
};
