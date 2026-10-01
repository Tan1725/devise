export interface AssetAllocation {
    symbol: string
    name: string
    weight: number
    targetWeight?: number
    expectedReturn: number
    volatility: number
}

export interface PortfolioRiskProfile {
    totalValue: number
    sharpeRatio: number
    volatilityAnnualized: number
    maxDrawdown: number
    beta: number
}

export interface RebalanceRecommendation {
    symbol: string
    action: "BUY" | "SELL" | "HOLD"
    amount: number
    targetPercent: number
    currentPercent: number
}
