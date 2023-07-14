export const parseNumber = (n: number) => {
    return `$${n.toLocaleString('en', {
        maximumFractionDigits: 2
    })}`
}