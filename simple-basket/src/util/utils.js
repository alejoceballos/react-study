export const getKey = (...args) => args
    && args.reduce(
        (accumulator, current) =>
            (accumulator ? accumulator + "-" : "") + current.toLowerCase().replace(" ", "-")
        , undefined);