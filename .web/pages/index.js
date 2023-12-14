

import { Fragment, useCallback } from "react"
import { Fragment_054be72e0ea98018059eac5951b3d7a7 } from "/utils/stateful_components"
import { Box, Button, Container, Image, Input, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { getRefValue, getRefValues, set_val } from "/utils/state"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_054be72e0ea98018059eac5951b3d7a7/>
  <Container sx={{"maxWidth": "auto", "height": "100vh", "bg": "#d8cafc"}}>
  <Box sx={{"display": "flex"}}>
  <Box sx={{"display": "flex"}}>
  <Image src={`./icon.svg`} sx={{"width": "200px", "height": "200px", "marginTop": "160px", "marginLeft": "30px"}}/>
  <Text sx={{"fontSize": "80px", "color": "black", "fontWeight": "bold", "marginTop": "175px"}}>
  {`Nextpy`}
</Text>
</Box>
  <Box>
  <Box sx={{"width": "700px", "height": "500px", "bg": "#1d1d1d", "marginLeft": "50px", "borderRadius": "10px", "marginTop": "40px"}}>
  <Box sx={{"textAlign": "center", "paddingTop": "60px"}}>
  <Text sx={{"fontSize": "35px", "color": "#eaeaea", "fontWeight": "bold", "letterSpacing": "1.3px"}}>
  {`Login to your account`}
</Text>
  <Text sx={{"fontSize": "14px", "fontWeight": "bold", "width": "350px", "marginLeft": "175px", "marginTop": "12px", "color": "#dbdbdc"}}>
  {`The Pure Python Framework for Web Apps, Meticulously Optimized for AI agents. World's first AMS.`}
</Text>
</Box>
  <Box sx={{"display": "flex"}}>
  <Box as={`form`}>
  <VStack alignItems={`left`} sx={{"marginLeft": "60px", "marginTop": "60px"}}>
  <Input name={`first_name`} placeholder={`Email / Phone number`} sx={{"width": "240px", "border": "none", "bg": "#222222"}} type={`text`}/>
  <Input name={`password`} placeholder={`Password`} sx={{"width": "240px", "border": "none", "bg": "#222222"}} type={`text`}/>
  <Button sx={{"width": "240px", "backgroundImage": "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)", "textAlign": "left", "fontWeight": "bold"}}>
  {`Login to your account`}
</Button>
</VStack>
</Box>
  <Box as={`form`}>
  <VStack alignItems={`right`} sx={{"marginLeft": "90px", "marginTop": "60px"}}>
  <Input name={`first_name`} placeholder={`Email / Phone number`} sx={{"width": "240px", "border": "none", "bg": "#222222"}} type={`text`}/>
  <Input name={`password`} placeholder={`Password`} sx={{"width": "240px", "border": "none", "bg": "#222222"}} type={`text`}/>
  <Button sx={{"width": "240px", "backgroundImage": "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)", "textAlign": "right", "fontWeight": "bold"}}>
  {`Login to your account`}
</Button>
</VStack>
</Box>
</Box>
</Box>
</Box>
</Box>
</Container>
  <NextHead>
  <title>
  {`Nextpy App`}
</title>
  <meta content={`A Nextpy app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
