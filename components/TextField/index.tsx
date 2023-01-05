import React from 'react'
import { TextField as MUITextField } from '@mui/material'

export const TextField = ({
  id,
  label,
  value,
  onChange,
  type = 'text',
  multiline,
  rows
}: {
  id: string,
  label: string,
  value?: string,
  onChange: (e:any) => void,
  type?: 'password' |'text' | 'number',
  multiline?: boolean
  rows?: number
}) => {
  return (
    <MUITextField
      id={id}
      label={label}
      type={type}
      onChange={onChange}
      value={value}
      multiline={multiline}
      rows={rows}
      sx={{
        'fieldset': {
          borderColor: 'olive !important'
        },
        '*': {
          color: 'olive !important'
        }
      }}
    />
  )
}