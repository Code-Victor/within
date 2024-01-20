import { Button, Icon } from '@/components/base'
import PaymentCard from '@/components/inc/PaymentCard'
import { Link } from 'expo-router'
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
      ItemSeparatorComponent={() => <View px="$4">
          <View w="100%" h={1} bg="$dark.3"></View>
        </View> }
      showsVerticalScrollIndicator={false}
      />
      <Link href="/spaces/123/payments/create" asChild>
        <Button
        // onPress={() => console.log("Hello")}
        circular
        size="$6"
        position="absolute"
        right="$5"
        bottom={60}
        borderRadius={99}
        elevation={0.5}
        icon={<Icon name="AddLight" width={35} height={35} />} />
      </Link>
    </View>
  )
}

export default Payments