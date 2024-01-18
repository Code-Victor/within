import { Button, Text } from "@/components/base"
import { Link } from "expo-router"

const Payment = () => {

  const payables = [
    {
      name: "Pay manual"
    },
    {
      name: "Pay material"
    },
  ]
  
  return (
    <>
      <Text>Payment Home</Text>
      { payables.map((payable) => {
        return (
          <Link href={{
            pathname: "/payment/payable",
            params: {name: payable.name}
          }}
          asChild
          >
            <Button type="primary">{ payable.name }</Button>
          </Link>
        )
      }) }
    </>
  )
}

export default Payment