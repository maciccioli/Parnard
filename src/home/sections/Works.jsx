import { useState } from "react";
import {
  Box,
  Grid,
  Card,
  useMediaQuery,
  Divider,
  Dialog,
  CardMedia,
  IconButton,
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import work1 from '../../assets/work1.jpg';
import work2 from '../../assets/work2.jpg';
import work3 from '../../assets/work3.jpg';

import work11 from '../../assets/work1-1.jpg';
import work12 from '../../assets/work1-2.jpg';
import work13 from '../../assets/work1-3.jpg';
import work14 from '../../assets/work1-4.jpg';
import work15 from '../../assets/work1-5.jpg';
import work16 from '../../assets/work1-6.jpg';


const Works= () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const worksList = [
    {
      imageUrl: work1,
      name: "Inoxsystem 1",
      description: 'Proyecto realizado para la industria láctea. Se diseñó y ejecutó el sistema de drenaje más la instalación del piso industrial para el área de procesamiento y embotellado de leche.',
    },
    {
      imageUrl: work2,
      name: "Inoxsystem 1",
      description: 'Proyecto realizado para la industria láctea. Se diseñó y ejecutó el sistema de drenaje más la provisión del piso industrial para el área de pasteurización y procesamiento de leche. ',
    },
    {
      imageUrl: work3,
      name: "Inoxsystem 1",
      description: 'Proyecto realizado para la industria cárnica. Se diseñó y ejecutó el sistema de drenaje más la provisión del piso industrial para el área de procesamiento de carnes y embutidos. ',
    },
  ];

  const work1List = [
    {
      imageUrl: work11,
    },
    {
      imageUrl: work12,
    },
    {
      imageUrl: work13,
    },
    {
      imageUrl: work14,
    },
    {
      imageUrl: work15,
    },
    {
      imageUrl: work16,
    }
  ]

  return (
    <section className="section bg-light-gray" id="works">
      <div className="container">
        <Box spacing={isMobile ? 4 : 10}>
          <h2 className="mt-0 mb-0 inline-block">
            Trabajos Realizados
          </h2>
          <Box sx={{ mt: '50px'}}>
            <Grid container spacing={3}>
            {worksList.map((work, index) => (
              <Grid item md={4} sm={4} key={index}>
                <Card
                  className="relative h-full card"
                  key={index}
                  sx={{
                    cursor: 'pointer',
                  }}
                  onClick={() => setOpenDialog(true)}
                >
                  <img
                    className="w-full"
                    src={work.imageUrl}
                    alt={work.name}
                  />
                  <div className="flex-column justify-between">
                    <div className="px-4 pt-4">
                      <h5 className="m-0 text-16 font-bold">{work.name}</h5>
                      <p className="mb-4">{work.description}</p>
                      <Divider />
                    </div>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
    {openDialog && (
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth='lg'
      >
        {selectedIndex !== 0 && (
          <IconButton 
            onClick={() => setSelectedIndex(selectedIndex - 1)}
            sx={{
              height: '40px',
              width: '40px',
              borderRadius: '20px',
              backgroundColor: '#000000bf',
              position: 'fixed',
              top: '50%',
              bottom: '50%',
              left: '12px !important',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover':{
                backgroundColor: '#4d90fe',
              },
            }}
          >
            <NavigateBeforeIcon
              fontSize='medium'
              sx={{ color: '#ffffff' }}
            />
            </IconButton>
        )}
        <CardMedia
          src={work1List[selectedIndex].imageUrl}
          component="img"
          loading="lazy"
          width={900}
          height={600}
        />
        {selectedIndex !== 5 && (
          <IconButton 
            onClick={() => setSelectedIndex(selectedIndex + 1)}
            sx={{
              height: '40px',
              width: '40px',
              borderRadius: '20px',
              backgroundColor: '#000000bf',
              position: 'fixed',
              top: '50%',
              bottom: '50%',
              right: '12px !important',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover':{
                backgroundColor: '#4d90fe',
              },
            }}
          >
            <NavigateNextIcon
              fontSize='medium'
              sx={{ color: '#ffffff' }}
            />
          </IconButton>
        )}
      </Dialog>
    )}
  </section>
  );
};

export default Works;
