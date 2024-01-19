import { Space } from "@/components/inc";
import { FlatList } from "react-native";
import { YStack, getTokens } from "tamagui";

const Spaces = () => {
  const mySpaces = [
    {
      id: "124",
      imageUrl: "",
      name: "Minervas",
      createdBy: "you",
    },
    {
      id: "125",
      imageUrl: "",
      name: "NAMS OAU",
      createdBy: "you",
    },
    {
      id: "126",
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
        // ItemSeparatorComponent={() => <View h="$1" bg={getTokens().color["$primary.1"].val}></View>}
        numColumns={2}
        columnWrapperStyle={{
          gap: 10,
          paddingHorizontal: 16,
          paddingBottom: 16,
          backgroundColor: getTokens().color["$primary.1"].val,
        }}
      />
    </YStack>
  );
};

export default Spaces;
