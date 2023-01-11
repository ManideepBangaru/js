var num1 = 7
var num2 = 6
console.log(num1*num2)
var answer = num1 > num2
console.log(answer)

// Discount formula
// D = (L - S)/L * 100

var selling_price = 199
var listing_price = 799

var discount_percent = ((listing_price - selling_price)/listing_price) * 100
console.log("Discount Percentage = " + discount_percent)

display_discount_percentage = Math.round(discount_percent)
console.log("Discount Percentage = " + display_discount_percentage + "% off")