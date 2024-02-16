export const formatPrice = (price: number | null) => {
    return price ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price/100) : 'R$ 0,00';
}