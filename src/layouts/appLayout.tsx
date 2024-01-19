import { Drawer } from "expo-router/drawer";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  type DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { Linking } from "react-native";
import {
  XStack,
  View,
  YStack,
  ListItem,
  ListItemTitle,
  getTokens,
} from "tamagui";
import { Button, Icon } from "@/components/base";
import { Href, router, useNavigation } from "expo-router";

const Links: { name: string; url: Href<any> }[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Your spaces",
    url: "/spaces",
  },
  {
    name: "Notifications",
    url: "/",
  },
  {
    name: "Settings",
    url: "/",
  },
  {
    name: "Help",
    url: "/",
  },
];

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        paddingTop: 0,
      }}
      {...props}
    >
      <XStack
        position="relative"
        ai="center"
        jc="center"
        py="$3"
        px="$4"
        borderBottomColor="$dark.3"
        borderBottomWidth={1}
      >
        <Icon name="Logo" width={80} />
      </XStack>
      <YStack mt="$6">
        {Links.map(({ name, url }, i) => {
          return (
            <ListItem
              key={i}
              size="$5"
              iconAfter={
                <Icon
                  name="ChevronRight"
                  color={getTokens().color["$dark.5"].val}
                  height={24}
                  width={24}
                />
              }
              bg="transparent"
              pressStyle={{
                bg: "$dark.1",
              }}
              onPress={() => {
                router.push(url);
              }}
            >
              <ListItemTitle>{name}</ListItemTitle>
            </ListItem>
          );
        })}
      </YStack>
    </DrawerContentScrollView>
  );
}

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          title: "overview",
        }}
      />
    </Drawer>
  );
}

function DrawerContent() {}
