import React from "react";
import {
  Button,
  ControlledInput,
  Icon,
  Input,
  Text,
  Modal,
} from "@/components/base";
import { YStack, XStack, View } from "tamagui";
import { Link, router } from "expo-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SafeAreaView } from "react-native-safe-area-context";
import { announcementRouter, authRouter } from "@/api/hooks";
import { Image } from "expo-image";
import { useQueryClient } from "@tanstack/react-query";
import { Announcement } from "@/api/types";
import { timeSince } from "@/utils";
const createAnnoucement = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
});
type CreateAnnouncement = z.infer<typeof createAnnoucement>;
export function Annoucement({
  isAdmin,
  spaceId,
}: {
  isAdmin: boolean;
  spaceId: string;
}) {
  const { control, handleSubmit } = useForm<CreateAnnouncement>();
  const [modalOpen, setModalOpen] = React.useState(false);
  const { mutateAsync, isPending, isSuccess, reset } =
    announcementRouter.create.useMutation();
  const { data: announcement, isLoading } = announcementRouter.get.useQuery({
    variables: {
      spaceId,
    },
  });
  const queryClient = useQueryClient();

  function onSubmit(data: CreateAnnouncement) {
    mutateAsync({
      spaceId,
      title: data.name,
      description: data?.description,
    }).then(() => {
      queryClient.invalidateQueries(
        announcementRouter.get.getOptions({
          spaceId,
        })
      );
    });
  }
  if (isLoading) {
    return (
      <YStack
        br={10}
        borderWidth={1}
        bg="white"
        borderColor="#F3F2F3"
        px="$3"
        mx="$4"
        h="$12"
        ai="center"
        jc="center"
      >
        <Text type="h4">Loading...</Text>
      </YStack>
    );
  }
  if (announcement?.length === 0) {
    return (
      <YStack
        br={10}
        borderWidth={1}
        bg="white"
        borderColor="#F3F2F3"
        px="$3"
        mx="$4"
        h="$12"
        ai="center"
        jc="center"
      >
        <Text type="h4">No current announcements...</Text>
      </YStack>
    );
  }
  return (
    <YStack gap="$2" px="$4">
      <Modal open={modalOpen} onOpenChange={setModalOpen}>
        <Modal.Content
          bg="$primary.2"
          p="$4"
          borderWidth={1}
          borderColor="$dark.5"
          br={10}
          width={320}
          gap="$4"
          overlay
        >
          <YStack gap="$2">
            {isSuccess ? (
              <>
                <Image
                  source={require("@/assets/images/complete.png")}
                  style={{
                    width: "100%",
                    aspectRatio: 1.35,
                    marginTop: 20,
                    marginBottom: 20,
                  }}
                />
                <Text type="h4" ta="center">
                  Successful
                </Text>
                <Button
                  onPress={() => {
                    setModalOpen(false);
                    reset();
                  }}
                >
                  continue
                </Button>
              </>
            ) : (
              <>
                <ControlledInput
                  control={control}
                  name="name"
                  label="Name of space"
                />
                <ControlledInput
                  name="description"
                  control={control}
                  label="Description"
                  multiline
                  numberOfLines={6}
                  textAlignVertical="top"
                />
                <Button
                  loading={isPending}
                  onPress={handleSubmit(onSubmit)}
                  mt="$2"
                >
                  Send
                </Button>
              </>
            )}
          </YStack>
        </Modal.Content>
      </Modal>
      <XStack jc="space-between" ai="baseline">
        <Text type="h4">Annoucements</Text>
        <Link href="/">
          <Text color="$dark.5">View more</Text>
        </Link>
      </XStack>
      {isAdmin && (
        <Button onPress={() => setModalOpen(true)}>
          Create an annoucement
        </Button>
      )}
      <YStack
        br={10}
        borderWidth={1}
        bg="white"
        borderColor="#F3F2F3"
        px="$3"
        separator={<View h={0.5} bg="$dark.4" />}
      >
        {announcement?.slice(0, 5).map((a) => {
          return <AnnoucementTile {...a} />;
        })}
      </YStack>
    </YStack>
  );
}

export function AnnoucementTile(props: Announcement) {
  return (
    <YStack py="$3" gap="$2">
      <Text type="body1">{props.title}</Text>
      <XStack gap="$2" ai="baseline" jc="space-between">
        <Text type="body2" color="$dark.5">
          {props.description}
        </Text>
        <Text fontSize={12}>{timeSince(new Date(props.createdAt))}</Text>
      </XStack>
    </YStack>
  );
}
