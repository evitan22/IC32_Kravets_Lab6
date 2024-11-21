const medicines = {
    Агалгін: new Date("2022-05-01"),
    Ношпа: new Date("2025-07-02"),
    Альфахолін: new Date("2024-12-21"),
    Аспірин: new Date("2022-08-15"),
    Аспаркам: new Date("2024-04-18"),
};

console.log(medicines)

let medKeys = Object.keys(medicines);
let filteredMedicines = medKeys.filter(medKey => {
    return Number(medicines[medKey]) > Number(new Date());
})
console.log(filteredMedicines);

filteredMedicines.sort((a,b) => {
    return Number(medicines[a]) - Number(medicines[b])
})
console.log(filteredMedicines);