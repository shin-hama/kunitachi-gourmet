import * as React from 'react'
import Stack from '@mui/material/Stack'
import {
  FacebookIcon,
  FacebookShareButton,
  HatenaIcon,
  HatenaShareButton,
  LineIcon,
  LineShareButton,
  PocketIcon,
  PocketShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share'

type Props = {
  url: string
  title: string
}
const ShareButtons: React.FC<Props> = props => {
  const iconConfig = {
    size: 40,
    round: true,
  }
  return (
    <Stack direction="row" spacing={2} justifyContent="flex-end">
      <TwitterShareButton {...props}>
        <TwitterIcon {...iconConfig} />
      </TwitterShareButton>
      <FacebookShareButton {...props}>
        <FacebookIcon {...iconConfig} />
      </FacebookShareButton>
      <HatenaShareButton {...props}>
        <HatenaIcon {...iconConfig} />
      </HatenaShareButton>
      <LineShareButton {...props}>
        <LineIcon {...iconConfig} />
      </LineShareButton>
      <PocketShareButton {...props}>
        <PocketIcon {...iconConfig} />
      </PocketShareButton>
    </Stack>
  )
}

export default ShareButtons
