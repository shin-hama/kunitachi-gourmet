import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

type Props = {
  timestamp: string
}
const Timestamp: React.FC<Props> = ({ timestamp }) => {
  return (
    <Stack direction="row" alignItems="baseline" spacing={0.5}>
      <FontAwesomeIcon icon={faEdit} size="xs" />
      <Typography variant="subtitle2">{timestamp}</Typography>
    </Stack>
  )
}

export default Timestamp
