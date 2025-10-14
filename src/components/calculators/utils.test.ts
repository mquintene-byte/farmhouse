import { describe, it, expect } from 'vitest'
import { calcYield, calcWaste, calcLearners, calcWater, calcProfit, calcNutrition } from './utils'

describe('calculators utils', () => {
  it('calcYield computes area * rate', () => {
    expect(calcYield(10, 2)).toBe(20)
    expect(calcYield(7.123, 1.5)).toBe(Math.round(7.123 * 1.5 * 100) / 100)
  })

  it('calcWaste reduces produced by percent', () => {
    expect(calcWaste(100, 10)).toBe(90)
    expect(calcWaste(50, 0)).toBe(50)
  })

  it('calcLearners floors the division', () => {
    expect(calcLearners(100, 3)).toBe(33)
    expect(calcLearners(10, 2)).toBe(5)
  })

  it('calcWater returns kg per L rounded to 4 decimals', () => {
    expect(calcWater(1000, 50)).toBe(0.05)
  })

  it('calcProfit computes revenue minus cost', () => {
    expect(calcProfit(100, 2, 50)).toBe(150)
  })

  it('calcNutrition returns calories and vitamin C', () => {
    const res = calcNutrition('Tomatoes', 50)
    expect(res).not.toBeNull()
    if (res) {
      expect(res.calories).toBeCloseTo(9.0, 1)
      expect(res.vitaminC).toBeCloseTo(6.5, 1)
    }
  })
})
