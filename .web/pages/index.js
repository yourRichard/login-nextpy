

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
  <Text sx={{"fontSize": "14px", "fontWeight": "bold", "width": "350px", "marginLeft": "175px", "marginTop": "12px", "color": "#8c8c8c"}}>
  {`The Pure Python Framework for Web Apps, Meticulously Optimized for AI agents. World's first AMS.`}
</Text>
  <Image src={`./gradient_underline.svg`} sx={{"position": "absolute", "marginTop": "60px", "marginLeft": "-318px", "height": "14px"}}/>
</Box>
  <Box sx={{"display": "flex"}}>
  <Box as={`form`}>
  <VStack alignItems={`left`} sx={{"marginLeft": "60px", "marginTop": "60px"}}>
  <Image src={`./draw.png`} sx={{"position": "absolute", "width": "100px", "height": "100px", "marginLeft": "245px", "marginTop": "40px"}}/>
  <Input name={`first_name`} placeholder={`Email / Phone number`} sx={{"width": "240px", "border": "none", "bg": "#222222", "color": "#373737"}} type={`text`}/>
  <Input name={`password`} placeholder={`Password`} sx={{"width": "240px", "border": "none", "bg": "#222222", "color": "#373737"}} type={`text`}/>
  <Button sx={{"width": "240px", "backgroundImage": "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)", "textAlign": "left", "fontWeight": "bold"}}>
  {`Login to your account`}
</Button>
</VStack>
</Box>
  <Box as={`form`}>
  <VStack alignItems={`right`} sx={{"marginLeft": "90px", "marginTop": "60px"}}>
  <Box sx={{"height": "42px", "width": "240px", "border": "1px solid #ff3d00", "bg": "#222222", "borderRadius": "5px", "display": "flex", "alignItems": "center", "textAlign": "center"}}>
  <Image src={`./google.svg`} sx={{"width": "25px", "height": "25px", "marginLeft": "8px"}}/>
  <Text sx={{"fontSize": "15px", "fontWeight": "bold", "color": "white", "marginLeft": "15px"}}>
  {`Sign in with Google`}
</Text>
</Box>
  <Box sx={{"height": "42px", "width": "240px", "border": "1px solid #494369", "bg": "#222222", "borderRadius": "5px", "display": "flex", "alignItems": "center", "textAlign": "center"}}>
  <Image src={`./github.svg`} sx={{"width": "25px", "height": "25px", "marginLeft": "8px"}}/>
  <Text sx={{"fontSize": "15px", "fontWeight": "bold", "color": "white", "marginLeft": "15px"}}>
  {`Sign in with Github`}
</Text>
</Box>
  <Box sx={{"height": "42px", "width": "240px", "border": "1px solid #039be5", "bg": "#222222", "borderRadius": "5px", "display": "flex", "alignItems": "center", "textAlign": "center"}}>
  <Image src={`./facebook.svg`} sx={{"width": "26px", "height": "26px", "marginLeft": "8px"}}/>
  <Text sx={{"fontSize": "15px", "fontWeight": "bold", "color": "white", "marginLeft": "15px"}}>
  {`Sign in with Facebook`}
</Text>
</Box>
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
