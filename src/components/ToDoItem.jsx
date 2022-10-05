import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function ToDoItem(params) {
  return (
    <Box>
      <Grid container spacing={1} >
        <Grid item xs={8} justifyContent="left"> <Typography style={{ marginLeft: '-5rem' }}>
          {params.text}
        </Typography></Grid>
        <Grid item xs={4}>
          <EditOutlinedIcon title="Add Item"
            onClick={() => {
              params.onClickedEdit(params.id)
            }} />
            <DeleteOutlineOutlinedIcon title="Add Item" onClick={() => {
            params.onClickedDelete(params.id)
          }} />
        </Grid>

      </Grid>

    </Box>
  )
}

export default ToDoItem
