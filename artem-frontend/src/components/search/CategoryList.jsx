import { Box } from '@mui/material'
import React from 'react'
import theme from '../../theme'
import CategoryCard from './CategoryCard'

const categories = [
    {
        title: 'paintings',
        imageIndex: 1
    },
    {
        title: 'clay',
        imageIndex: 2
    },
    {
        title: 'woodwork',
        imageIndex: 3
    },
    {
        title: 'print',
        imageIndex: 4
    },
    {
        title: 'jewelry',
        imageIndex: 5
    },
    {
        title: 'miscellaneous',
        imageIndex: 6
    },

]
function CategoryList() {
  return (
    <Box sx={{mt: theme.spacing(3)}}>
    {categories.map(c => {
        return (
            <Box sx={{mb:theme.spacing(2)}}>
                <CategoryCard title={c.title} imageIndex={c.imageIndex} />
            </Box>
        )
    })}
  </Box>
  )
}

export default CategoryList