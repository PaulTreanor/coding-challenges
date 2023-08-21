import { expect, expectTypeOf, test } from "vitest"
import { sumTwoNums } from "./sum-two-nums"

test("Ensure function returns type number", () => { 
    const sumTwoNumsValue = sumTwoNums()
    expectTypeOf(sumTwoNumsValue).toEqualTypeOf<{ a: number  }>()
})