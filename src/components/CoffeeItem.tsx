//giving a type
type CoffeeItemProps = {
    id: number
    name: string
    price: number
    imgURL: string


}

export function CoffeeItem({id,name,price,imgURL}: CoffeeItemProps)