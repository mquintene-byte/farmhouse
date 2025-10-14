export type NutritionData = {
  caloriesPer100g: number
  vitaminCPer100g: number
}

const nutritionTable: Record<string, NutritionData> = {
  Tomatoes: { caloriesPer100g: 18, vitaminCPer100g: 13 },
  Spinach: { caloriesPer100g: 23, vitaminCPer100g: 28 },
  Cabbage: { caloriesPer100g: 25, vitaminCPer100g: 36 },
  Onions: { caloriesPer100g: 40, vitaminCPer100g: 7 },
}

export function calcYield(landSizeM2: number, yieldPerM2: number) {
  if (!isFinite(landSizeM2) || !isFinite(yieldPerM2)) return null
  const value = landSizeM2 * yieldPerM2
  return Math.round(value * 100) / 100
}

export function calcWaste(producedKg: number, wastePct: number) {
  if (!isFinite(producedKg) || !isFinite(wastePct)) return null
  const usable = producedKg * (1 - wastePct / 100)
  return Math.round(usable * 100) / 100
}

export function calcLearners(totalYieldKg: number, servingPerLearnerKg: number) {
  if (!isFinite(totalYieldKg) || !isFinite(servingPerLearnerKg) || servingPerLearnerKg <= 0) return null
  const learners = Math.floor(totalYieldKg / servingPerLearnerKg)
  return learners
}

export function calcWater(waterUsedL: number, yieldKg: number) {
  if (!isFinite(waterUsedL) || waterUsedL <= 0 || !isFinite(yieldKg)) return null
  const eff = yieldKg / waterUsedL
  return Math.round(eff * 10000) / 10000
}

export function calcProfit(totalYieldKg: number, pricePerKg: number, costR: number) {
  if (!isFinite(totalYieldKg) || !isFinite(pricePerKg) || !isFinite(costR)) return null
  const profit = totalYieldKg * pricePerKg - costR
  return Math.round(profit * 100) / 100
}

export function calcNutrition(foodType: string, amountGrams: number) {
  const data = nutritionTable[foodType]
  if (!data || !isFinite(amountGrams) || amountGrams < 0) return null
  const factor = amountGrams / 100
  const calories = Math.round((data.caloriesPer100g * factor) * 10) / 10
  const vitaminC = Math.round((data.vitaminCPer100g * factor) * 10) / 10
  return { calories, vitaminC }
}

export { nutritionTable }
