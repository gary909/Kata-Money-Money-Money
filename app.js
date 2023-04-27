function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    if(principal == desired){
        return 0;
    } else {
        while(principal < desired){
            let gains = principal * interest - (principal * interest * tax);
            principal = principal + gains;
            years = years + 1;
        }
        return years;
    }
}

console.log(calculateYears(1000, 0.05, 0.18, 1100)); // 3
console.log(calculateYears(1000,0.01625,0.18,1200)); // 14
console.log(calculateYears(1000,0.05,0.18,1000)); // 0