import { DrawerHeader, Space } from "@/components/inc";
import { FlatList } from "react-native";
import { YStack, getTokens } from "tamagui";
import { spaceRouter, authRouter } from "@/api/hooks";
const Spaces = () => {
  const { data: user } = authRouter.user.useQuery();
  const { data: spaces } = spaceRouter.getAllSpaces.useQuery();

  return (
    <YStack>
      <DrawerHeader name="Spaces" />
      <FlatList
        data={[...(spaces?.mySpaces ?? []), ...(spaces?.memberSpaces ?? [])]}
        renderItem={({ item }) => (
          <Space
            id={item.id}
            name={item.name}
            imageUrl={item.profileImage}
            createdBy={user?.id === item.owner.id ? "you" : item.owner.fullName}
          />
        )}
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
