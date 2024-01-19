import { Space } from '@/components/inc'
import { FlatList } from 'react-native'
import { YStack, getTokens } from 'tamagui'

const Spaces = () => {

  const mySpaces = [
    {
      imageUrl: "",
      name: "Minervas",
      createdBy: "you",
    },
    {
      imageUrl: "",
      name: "NAMS OAU",
      createdBy: "you",
    },
    {
      imageUrl: "",
      name: "Aquilas",
      createdBy: "you",
    },
  ];

  return (
    <YStack>
      <FlatList
      data={mySpaces}
      renderItem={({ item }) => <Space {...item} />}
      showsHorizontalScrollIndicator={false}
      numColumns={2}
      columnWrapperStyle={{
        gap: 10,
        paddingHorizontal: 16,
        paddingBottom: 16,
        backgroundColor: getTokens().color["$primary.1"].val,
      }}
      />
    </YStack>
  )
}

export default Spaces