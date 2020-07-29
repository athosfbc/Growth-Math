// Company's Annual Growth

function Growth(initialValue, finalValue) {

    return (((finalValue - initialValue) / initialValue) * 100);
};

console.log('The percentual value is: ' + Growth(100, 200).toFixed(2) + '%');

// Company's Growth through years

function GrowthYears(startBudget, currentbudget, yearStart, yearFinal) {

    return (Math.pow((currentbudget / startBudget), 1 / (yearFinal - yearStart)) - 1 ) * 100;
};

console.log('The current growth is: ' + GrowthYears(10000, 65000, 2011, 2015).toFixed(2) + '%');