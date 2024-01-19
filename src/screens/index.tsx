import { authRouter } from "@/api/hooks";
import useStore from "@/store";
import { Redirect } from "expo-router";

export default function Home() {
  const { data: user } = authRouter.user.useQuery();
  const onboardingComplete = useStore((state) => state.onboardingComplete);
  console.log({ user, onboardingComplete });
  if (!user) {
    if (onboardingComplete) {
      return <Redirect href="/(onboarding)/signin" />;
    }
    return <Redirect href="/(onboarding)/signup" />;
  }
  return <Redirect href="/(app)/" />;
}
