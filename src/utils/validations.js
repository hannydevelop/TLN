let required = (propertyType) => {
    return v => v && v.length > 0 || `you must input a ${propertyType}`
}

let minLength = (propertyType, minLength) => {
    return v => v && v.length >= minLength || `${propertyType} must be at least ${minLength}`
}

export default{
    required,
    minLength
}