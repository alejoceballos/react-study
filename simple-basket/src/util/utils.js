import { $ } from 'moneysafe';

export const toListChildKey = (...args) => args
    && args.reduce(
        (accumulator, current) =>
            (accumulator ? accumulator + "-" : "") + current.toLowerCase().replace(" ", "-")
        , undefined);

export const sumMoney = (a, b) => $(a).add(b).valueOf();

export const formatMoney = value => $(value).toFixed();

export const capitalize = str => str ? str[0].toUpperCase() + str.slice(1).toLowerCase() : "";