import PaymentCard from '@/components/inc/PaymentCard'
import React from 'react'
import { FlatList } from 'react-native'
import { View } from 'tamagui'

const Payments = () => {

  const payments = [
    {
      name: "Pay manual"
    },
    {
      name: "Pay material"
    },
    {
      name: "Pay material"
    },
    {
      name: "Pay material"
    },
    {
      name: "Pay material"
    },
    {
      name: "Pay material"
    },
    {
      name: "Pay material"
    },
    {
      name: "Pay material"
    },
    {
      name: "Pay material"
    },
    {
      name: "Pay material"
    },
    {
      name: "Pay material"
    },
    {
      name: "Pay material"
    },
    {
      name: "Pay material"
    },
    {
      name: "Pay material"
    },
    {
      name: "Pay material"
    },
    {
      name: "Pay material"
    },
    {
      name: "Pay material"
    },
    {
      name: "Pay materia"
    },
  ]

  return (
    <View f={1} pb="$4">
      <FlatList
      data={payments}
      renderItem={({ item }) => <PaymentCard {...item} />}
      style={{backgroundColor: "white", marginHorizontal:16, borderRadius: 10}}
      ItemSeparatorComponent={() => <View w="100%" h={1} bg="$dark.3" mx="$4"></View>}
      showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Payments