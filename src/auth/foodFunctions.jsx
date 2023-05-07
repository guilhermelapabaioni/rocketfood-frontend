import React, { useState } from 'react'

export const FoodsContext = React.createContext()

const FoodsProvider = ({ children }) => {
  const [orders, setOrders] = React.useState(0)

  const incrementOrders = () => {
    setOrders(orders + 1)
  }

  const value = { orders, incrementOrders }

  return <FoodsContext.Provider value={value}>{children}</FoodsContext.Provider>
}

function useFoodsProvider() {
  const context = React.useContext(FoodsContext)

  return context
}

export { FoodsProvider, useFoodsProvider }
