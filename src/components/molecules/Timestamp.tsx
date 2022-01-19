import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEdit } from '@fortawesome/free-solid-svg-icons'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

type SizeProp = 'lg' | 'sm' | 'xs'
type FontVariant = 'h6' | 'subtitle2' | 'body1'
const fontVariant: Record<SizeProp, FontVariant> = {
  lg: 'h6',
  sm: 'body1',
  xs: 'subtitle2',
}

type Props = {
  timestamp: string
  size?: SizeProp
}
const Timestamp: React.FC<Props> = ({ timestamp, size = 'xs' }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={0.5}>
      <FontAwesomeIcon icon={faEdit} size={size} />
      <Typography variant={fontVariant[size]}>{timestamp}</Typography>
    </Stack>
  )
}

export default Timestamp
