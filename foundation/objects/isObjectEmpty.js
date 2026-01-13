const checkObjectOrArrayisEmpty = (value) => {
    if (Array.isArray(value)) return value.length === 0;
    return Object.keys(value).length===0
}
console.log(checkObjectOrArrayisEmpty({1:21}))