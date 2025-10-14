import { useState } from 'react'
import { Input } from '../ui/input'
import { Card } from '../ui/card'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../ui/select'
import {
  calcYield,
  calcWaste,
  calcLearners,
  calcWater,
  calcProfit,
  calcNutrition,
  nutritionTable,
} from './utils'

export default function Calculators() {
  // crop yield
  const [landSize, setLandSize] = useState('')
  const [yieldRate, setYieldRate] = useState('')
  const yieldResult = (() => {
    const a = Number(landSize)
    const b = Number(yieldRate)
    const v = calcYield(a, b)
    return v === null ? '' : `${v} kg`
  })()

  // waste
  const [produced, setProduced] = useState('')
  const [wastePct, setWastePct] = useState('')
  const wasteResult = (() => {
    const a = Number(produced)
    const b = Number(wastePct)
    const v = calcWaste(a, b)
    return v === null ? '' : `${v} kg`
  })()

  // learners
  const [totalYield, setTotalYield] = useState('')
  const [serving, setServing] = useState('')
  const learnersResult = (() => {
    const a = Number(totalYield)
    const b = Number(serving)
    const v = calcLearners(a, b)
    return v === null ? '' : `${v} learners`
  })()

  // water
  const [waterUsed, setWaterUsed] = useState('')
  const [yieldForWater, setYieldForWater] = useState('')
  const waterResult = (() => {
    const a = Number(waterUsed)
    const b = Number(yieldForWater)
    const v = calcWater(a, b)
    return v === null ? '' : `${v} kg/L`
  })()

  // profit
  const [yieldForProfit, setYieldForProfit] = useState('')
  const [pricePerKg, setPricePerKg] = useState('')
  const [costOfProd, setCostOfProd] = useState('')
  const profitResult = (() => {
    const a = Number(yieldForProfit)
    const b = Number(pricePerKg)
    const c = Number(costOfProd)
    const v = calcProfit(a, b, c)
    return v === null ? '' : `R ${v}`
  })()

  // nutrition
  const [foodType, setFoodType] = useState<'Tomatoes' | 'Spinach' | 'Cabbage' | 'Onions'>('Tomatoes')
  const [amountGrams, setAmountGrams] = useState('')
  const nutritionResult = (() => {
    const amt = Number(amountGrams)
    const v = calcNutrition(foodType, amt)
    return v === null ? null : `${v.calories} kcal | ${v.vitaminC} mg Vitamin C`
  })()

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-bold">Agricultural Calculators</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-4">
          <h4 className="font-semibold">Crop Yield Estimator</h4>
          <div className="mt-3 space-y-3">
            <label className="block text-xs text-slate-600">Land size (m²)</label>
            <Input aria-label="Land size in square meters" placeholder="e.g. 100" value={landSize} onChange={(e) => setLandSize(e.target.value)} />
            <label className="block text-xs text-slate-600">Yield rate (kg/m²)</label>
            <Input aria-label="Yield per square meter" placeholder="e.g. 0.5" value={yieldRate} onChange={(e) => setYieldRate(e.target.value)} />
            <div className="text-sm text-slate-700">Result: <strong>{yieldResult || '—'}</strong></div>
          </div>
        </Card>

        <Card className="p-4">
          <h4 className="font-semibold">Food Waste Reduction</h4>
          <div className="mt-3 space-y-3">
            <label className="block text-xs text-slate-600">Produced (kg)</label>
            <Input aria-label="Produced kilograms" placeholder="e.g. 100" value={produced} onChange={(e) => setProduced(e.target.value)} />
            <label className="block text-xs text-slate-600">Waste (%)</label>
            <Input aria-label="Waste percentage" placeholder="e.g. 10" value={wastePct} onChange={(e) => setWastePct(e.target.value)} />
            <div className="text-sm text-slate-700">Result: <strong>{wasteResult || '—'}</strong></div>
          </div>
        </Card>

        <Card className="p-4">
          <h4 className="font-semibold">School Garden Nutrition</h4>
          <div className="mt-3 space-y-3">
            <label className="block text-xs text-slate-600">Total yield (kg)</label>
            <Input aria-label="Total yield kilograms" placeholder="e.g. 100" value={totalYield} onChange={(e) => setTotalYield(e.target.value)} />
            <label className="block text-xs text-slate-600">Serving per learner (kg)</label>
            <Input aria-label="Serving per learner in kilograms" placeholder="e.g. 0.5" value={serving} onChange={(e) => setServing(e.target.value)} />
            <div className="text-sm text-slate-700">Result: <strong>{learnersResult || '—'}</strong></div>
          </div>
        </Card>

        <Card className="p-4">
          <h4 className="font-semibold">Water Use Efficiency</h4>
          <div className="mt-3 space-y-3">
            <label className="block text-xs text-slate-600">Water used (L)</label>
            <Input aria-label="Water used in liters" placeholder="e.g. 1000" value={waterUsed} onChange={(e) => setWaterUsed(e.target.value)} />
            <label className="block text-xs text-slate-600">Yield (kg)</label>
            <Input aria-label="Yield kilograms" placeholder="e.g. 50" value={yieldForWater} onChange={(e) => setYieldForWater(e.target.value)} />
            <div className="text-sm text-slate-700">Result: <strong>{waterResult || '—'}</strong></div>
          </div>
        </Card>

        <Card className="p-4">
          <h4 className="font-semibold">Profit from Produce</h4>
          <div className="mt-3 space-y-3">
            <label className="block text-xs text-slate-600">Total yield (kg)</label>
            <Input aria-label="Total yield for profit" placeholder="e.g. 100" value={yieldForProfit} onChange={(e) => setYieldForProfit(e.target.value)} />
            <label className="block text-xs text-slate-600">Selling price (R/kg)</label>
            <Input aria-label="Price per kilogram in Rands" placeholder="e.g. 10" value={pricePerKg} onChange={(e) => setPricePerKg(e.target.value)} />
            <label className="block text-xs text-slate-600">Cost of production (R)</label>
            <Input aria-label="Cost of production in Rands" placeholder="e.g. 200" value={costOfProd} onChange={(e) => setCostOfProd(e.target.value)} />
            <div className="text-sm text-slate-700">Result: <strong>{profitResult || '—'}</strong></div>
          </div>
        </Card>

        <Card className="p-4">
          <h4 className="font-semibold">Nutrition Value</h4>
          <div className="mt-3 space-y-3">
            <label className="block text-xs text-slate-600">Food type</label>
            <Select value={foodType} onValueChange={(v) => setFoodType(v as any)}>
              <SelectTrigger>
                <SelectValue placeholder="Select food" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(nutritionTable).map((k) => (
                  <SelectItem key={k} value={k}>{k}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <label className="block text-xs text-slate-600">Amount eaten (g)</label>
            <Input aria-label="Amount eaten in grams" placeholder="e.g. 50" value={amountGrams} onChange={(e) => setAmountGrams(e.target.value)} />
            <div className="text-sm text-slate-700">Result: <strong>{nutritionResult || '—'}</strong></div>
          </div>
        </Card>
      </div>
    </div>
  )
}
