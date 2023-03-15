import { useContext,createContext, ReactNode} from 'react'


const ShoppingCartContext = createContext({})

const ShoppingCart = () => {
  return useContext(ShoppingCartContext)
}

export default ShoppingCart

type ShoppingCartProps ={
    children:ReactNode
}

export function ShoppingCartProvider ({children} :ShoppingCartProps  ){
    return(
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )

}