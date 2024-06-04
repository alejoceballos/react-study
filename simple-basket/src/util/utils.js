import { $ } from 'moneysafe';

export const getKey = (...args) => args
    && args.reduce(
        (accumulator, current) =>
            (accumulator ? accumulator + "-" : "") + current.toLowerCase().replace(" ", "-")
        , undefined);

export const sumMoney = (a, b) => $(a).add(b).valueOf();

export const formatMoney = value => $(value).toFixed();