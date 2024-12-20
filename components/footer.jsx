import React from 'react'
import { GitHub, LinkedIn, Instagram, Email } from '@mui/icons-material'
import { IconButton, Input } from '@mui/material'

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-8 mt-16 w-full ">
      <div className="w-full  px-4 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <IconButton
            href="https://github.com/alikhazaeii"
            target="_blank"
            sx={{
              backgroundColor: '#333',
              '&:hover': {
                backgroundColor: '#444',
              },
            }}
          >
            <GitHub sx={{ color: 'white' }} />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/ali-khazaei021/"
            target="_blank"
            sx={{
              backgroundColor: '#0077B5',
              '&:hover': {
                backgroundColor: '#005D8D',
              },
            }}
          >
            <LinkedIn sx={{ color: 'white' }} />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/ali_khazaei_developer/"
            target="_blank"
            sx={{
              backgroundColor: '#C13584',
              '&:hover': {
                backgroundColor: '#9B2C67',
              },
            }}
          >
            <Instagram sx={{ color: 'white' }} />
          </IconButton>
          <IconButton
            href="mailto:ali.tradding021@gmail.com"
            target="_blank"
            sx={{
              backgroundColor: 'black',
              '&:hover': {
                backgroundColor: '#9B2C67',
              },
            }}
          >
            <Email sx={{ color: 'white' }} />
          </IconButton>
        </div>

        <p className="text-sm lg:text-xl text-gray-600">
          This product shop Apple was created by <span className="font-bold">Ali Khazaei</span>.
        </p>
      </div>
    </footer>
  )
}
