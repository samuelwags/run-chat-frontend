import React from 'react'
import { TextField as MUITextField, TextFieldProps } from '@mui/material'

export const TextField = (props: TextFieldProps) => <MUITextField
      {...props}
      sx={{
        'fieldset': {
          borderColor: 'olive !important'
        },
        '*': {
          color: 'olive !important'
        }
      }}
    />