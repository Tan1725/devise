export function calculateCAGR(startValue: number, endValue: number, years: number): number {
    if (startValue <= 0 || years <= 0) return 0
    return Math.pow(endValue / startValue, 1 / years) - 1
}

export function calculateSharpeRatio(expectedReturn: number, riskFreeRate: number, volatility: number): number {
    if (volatility <= 0) return 0
    return (expectedReturn - riskFreeRate) / volatility
}

export function calculateMaxDrawdown(prices: number[]): number {
    if (!prices || prices.length < 2) return 0
    let peak = prices[0]
    let maxDrawdown = 0

    for (const price of prices) {
        if (price > peak) {
            peak = price
        }
        const drawdown = (peak - price) / peak
        if (drawdown > maxDrawdown) {
            maxDrawdown = drawdown
        }
    }
    return maxDrawdown
}
