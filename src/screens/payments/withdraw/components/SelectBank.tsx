import { Input, Text } from "@/components/base"
import { useState } from "react"
import { View, YStack } from "tamagui"

type SelectBankType = {
}

export const SelectBank = (props:SelectBankType) => {

  const [search, setSearch] = useState("")

  const banks = ["Sterling Bank", "Keystone Bank", "FCMB", "United Bank for Africa", "Diamond Bank", "JAIZ Bank", "Fidelity Bank", "Polaris Bank", "Citi Bank", "Ecobank Bank", "Unity Bank", "StanbicIBTC Bank", "GTBank Plc", "Access Bank", "Zenith Bank Plc", "First Bank of Nigeria", "Wema Bank", "Union Bank", "Enterprise Bank", "Heritage", "Standard Chartered", "Suntrust Bank", "Providus Bank", "Rand Merchant Bank", "Titan Trust Bank", "Taj Bank", "Globus Bank", "Central Bank of Nigeria", "Lotus Bank", "Premium Trust Bank", "eNaira", "Signature Bank", "Optimus Bank", "FEWCHORE FINANCE COMPANY LIMITED", "SageGrey Finance Limited", "AAA Finance", "Branch International Financial Services", "Tekla Finance Limited", "Fast Credit", "Fundquest Financial Services Limited", "Enco Finance", "Dignity Finance", "Trinity Financial Services Limited", "FSDH Merchant Bank", "Coronation Merchant Bank", "FBNQUEST Merchant Bank", "Nova Merchant Bank", "Omoluabi savings and loans", "ASOSavings & Loans", "Trustbond Mortgage Bank", "SafeTrust", "FBN Mortgages Limited", "Imperial Homes Mortgage Bank", "AG Mortgage Bank", "Gateway Mortgage Bank", "Abbey Mortgage Bank", "Refuge Mortgage Bank", "Lagos Building Investment Company", "Platinum Mortgage Bank", "First Generation Mortgage Bank", "Brent Mortgage Bank", "Infinity Trust Mortgage Bank", "MayFresh Mortgage Bank", "Jubilee-Life Mortgage  Bank", "Haggai Mortgage Bank Limited", "Coop Mortgage Bank", "Delta Trust Microfinance Bank", "Homebase Mortgage Bank", "Akwa Savings & Loans Limited", "FHA Mortgage Bank", "New Prudential Bank", "NPF MicroFinance Bank", "Fortis Microfinance Bank", "Covenant MFB", "Page Financials", "Parralex Microfinance bank", "Ekondo MFB", "VFD MFB", "FinaTrust Microfinance Bank", "Seed Capital Microfinance Bank", "Empire trust MFB", "TCF MFB", "AMML MFB", "Boctrust Microfinance Bank", "IBILE Microfinance Bank", "Ohafia Microfinance Bank", "Wetland Microfinance Bank", "Hasal Microfinance Bank", "Gowans Microfinance Bank", "Verite Microfinance Bank", "Xslnce Microfinance Bank"]

  const getBanks = () => {
    return banks.filter((bank) => bank.slice(0, search.length) === search)
  }

  return (
    <View my="$2">
      <Input label="Bank Name" onChangeText={(value:string) => setSearch(value)} />
      { search.length > 0 &&
      <YStack mt="$2" p="$4" bg="white" gap="$4" borderRadius="$4">
      { search.length > 0 && getBanks().map((bank, index) => {
        return (
          <Text key={index} type="body2">{bank}</Text>
        )
      })}
      </YStack> }
    </View>
  )
}