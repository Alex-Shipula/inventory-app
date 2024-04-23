import { styled } from '@mui/material'

export const ScrollBarContainer = styled('div')`
   overflow-y: auto;
   overflow-x: hidden;
   padding-right: 10px; 

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #F1F1F1;
  }

  ::-webkit-scrollbar-thumb {
    background: #D4DCE0;
    border-radius: 16px;
  }
`
