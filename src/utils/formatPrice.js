function formatPrice(amout, currency='USD', locale='en-Us'){
    const formatter = new Intl.NumberFormat(locale,{
        style:'currency', 
        currency:currency,
        minimumFractionDigits:2,
        maximumFractionDigits:2
    })

    return formatter.format(amout)
}

export default formatPrice;