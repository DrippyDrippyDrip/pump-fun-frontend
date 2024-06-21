"use client";

import { ChartTable } from "./types";

export async function getChartTable({
    pairIndex,
    from,
    to,
    range,
    token
}: {
    pairIndex: number;
    from: number;
    to: number;
    range: number;
    token: string;
}): Promise<ChartTable> {
    try {
        console.log("GET bars", token, from,)
        const res = await fetch(
            `http://localhost:5000/chart/${pairIndex}/${from}/${to}/${range}/${token}`,
        ).then((data) => data.json());

        if (!res) {
            throw new Error();
        }
console.log("tradingchart === getch data", res)
        return res as ChartTable;
    } catch (err) {
        return Promise.reject(new Error("Failed at fetching charts"));
    }
}
