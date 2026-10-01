import { AssetAllocation } from "../types/portfolio"

export function validatePortfolioWeights(assets: AssetAllocation[]): { isValid: boolean; totalWeight: number; message?: string } {
    const totalWeight = assets.reduce((sum, asset) => sum + asset.weight, 0)
    const normalized = Math.round(totalWeight * 100) / 100

    if (Math.abs(normalized - 1.0) > 0.001) {
        return {
            isValid: false,
            totalWeight: normalized,
            message: `Asset weights must total 100%. Current total is ${(normalized * 100).toFixed(1)}%.`
        }
    }

    return { isValid: true, totalWeight: normalized }
}

export function isValidNumericInput(val: unknown): boolean {
    if (typeof val === "number") return !isNaN(val) && isFinite(val)
    if (typeof val === "string") return !isNaN(parseFloat(val)) && isFinite(Number(val))
    return false
}
