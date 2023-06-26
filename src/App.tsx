import { useEffect, useState } from 'react';
import { useLocation, Route, Routes } from 'react-router-dom'
import Card from '@mui/joy/Card';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Chip from '@mui/joy/Chip';

export const CurrentPath = () => {
  const {pathname} = useLocation()
  const [rendering, setRenderingState] = useState(false)

  useEffect(() => {
    setRenderingState(true)

    let timer = setTimeout(() => setRenderingState(false), 600);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname])

  return (
    <Card sx={{ width: '500px', height: '80px', backgroundColor: rendering ? '#E6E6E6' : 'white', transition: 'background-color .5s' }}>
      <Box display='flex' justifyContent='space-between'>
        <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
          CurrentPath
        </Typography>
        <Chip 
          sx={{
            opacity: !rendering ? "0" : "1",
            transition: "all .5s",
            visibility: !rendering ? "hidden" : "visible",
          }}
          color="danger"
          size="sm">
            Affected....
          </Chip>
      </Box>
      <Typography>{pathname}</Typography>
    </Card>
  )
}

export const CurrenHash = () => {
  const { hash } = useLocation()
  const [rendering, setRenderingState] = useState(false)

  useEffect(() => {
    setRenderingState(true)

    let timer = setTimeout(() => setRenderingState(false), 600);

    return () => {
      clearTimeout(timer);
    };
  }, [hash])

  return (
    <Card sx={{ width: '500px', height: '80px', backgroundColor: rendering ? '#E6E6E6' : 'white', transition: 'background-color .5s' }}>
      <Box display='flex' justifyContent='space-between'>
        <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
          CurrentHash
        </Typography>
        <Chip sx={{
          opacity: !rendering ? "0" : "1",
          transition: "all .5s",
          visibility: !rendering ? "hidden" : "visible",
        }}color="success" size="sm">Rendering....</Chip>
      </Box>
      <Typography>{hash}</Typography>
    </Card>
  )
}

export const Links = () => {
  return (
    <Card orientation='vertical' sx={{ width: '500px', height: '80px' }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        Links
      </Typography>
      <Box  display='flex' gap={2}>
      <Link href='#link1'>#link1</Link>
      <Link href='#link2'>#link2</Link>
      <Link href='#link3'>#link3</Link>
      </Box>
    </Card>
  )
}

export const App = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={4}
      height='500px'
      width='800px'
      sx={{
        backgroundColor: '#eeee',
        margin: '0 auto'
      }}
    >
      <Routes>
        <Route path="/" element={<Links />} />
      </Routes>
      <CurrentPath />
      <CurrenHash />
    </Stack>
  );
}

