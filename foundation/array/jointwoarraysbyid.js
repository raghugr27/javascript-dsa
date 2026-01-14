/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const map = {};

    // Add arr1 items
    for (let obj of arr1) {
        map[obj.id] = { ...obj };
    }

    // Merge arr2 items (override if same id)
    for (let obj of arr2) {
        if (map[obj.id]) {
            map[obj.id] = { ...map[obj.id], ...obj };
        } else {
            map[obj.id] = { ...obj };
        }
    }

    // Convert map to array and sort by id
    return Object.values(map).sort((a, b) => a.id - b.id);
};