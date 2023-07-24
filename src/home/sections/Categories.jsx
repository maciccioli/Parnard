import { useState } from "react";
import {
  Box,
  Grid,
  CardMedia,
  useMediaQuery,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Button,
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Carousel from "../common/Carousel";
import pdfIcon from '../../assets/pdfIcon.png'

import drainageSystem from '../../assets/drainageSystem.jpg';
import refrigerationSystem from '../../assets/refrigerationSystem.jpg';
import controlledAirSystem from '../../assets/controlledAirSystem.jpg';
import catalogoGeneral from '../../assets/catalogoGeneral.png';

import sumiderosCategory from '../../assets/sumiderosCategory.jpg';
import canaletaCategories from '../../assets/canaletaCategories.jpg';
import rejillasCategories from '../../assets/rejillasCategories.jpg';
import inspeccionCategories from '../../assets/inspeccionCategories.jpg';
import terminacionCategories from '../../assets/terminacionCategories.jpg';
import accesoriosCategories from '../../assets/accesoriosCategories.jpg';

import higenizacion from '../../assets/higienizacion.jpg';
import habitacionesLimpias from '../../assets/habitacionesLimpias.jpg';
import productosLacteos from '../../assets/productosLacteos.jpg';
import curadoSalame from '../../assets/curadoSalame.jpg';
import curadoJamonCrudo from '../../assets/curadoJamonCrudo.jpg';

import barreraAire from '../../assets/barreraAire.jpg';
import ventiladores from '../../assets/ventiladores.jpg';
import sistemaSecado from '../../assets/sistemaSecado.jpg';
import puerta from '../../assets/puertasAccionRapida.jpg';

import inoxsystem from '../../assets/inoxsystem.pdf';
import standardTech from '../../assets/generalStandardTech.pdf';
import quesosStandardTech from '../../assets/quesosStandardTech.pdf';
import habitacionesLimpiasStandardTech from '../../assets/habitacionesLimpiasStandardTech.pdf';
import embutidosStandardTech from '../../assets/embutidosStandardTech.pdf';
import barrerasAire from '../../assets/barrerasAire.pdf';

const Categories= () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const [categorySelected, setCategorySelected] = useState(null);

  const getCurrentCategoryList = () => {
    switch(categorySelected.name) {
      case "Sistema de Drenaje":
        return drainageList;
      case "Sistema de Refrigeración":
        return refrigerationList;
      case "Sistema de Aire Controlado":
        return airList;
      default:
        return null;
    }
  }

  const categoriesList = [
    {
      imageUrl: drainageSystem,
      name: "Sistema de Drenaje",
    },
    {
      imageUrl: refrigerationSystem,
      name: "Sistema de Refrigeración",
    },
    {
      imageUrl: controlledAirSystem,
      name: "Sistema de Aire Controlado",
    },
    {
      imageUrl: catalogoGeneral,
      name: "Catálogo General",
    },
  ];


  const drainageList = [
    {
      title: 'Sumideros',
      image: sumiderosCategory,
    },
    {
      title: 'Canaletas',
      image: canaletaCategories,
    },
    {
      title: 'Rejillas',
      image: rejillasCategories,
    },
    {
      title: 'Tapas de Inspección',
      image: inspeccionCategories,
    },
    {
      title: 'Perfiles de Terminación',
      image: terminacionCategories,
    },
    {
      title: 'Accesorios',
      image: accesoriosCategories,
    },
  ];

  const refrigerationList = [
    {
      title: 'Higenización',
      image: higenizacion,
    },
    {
      title: 'Habitaciones Limpias',
      image: habitacionesLimpias,
    },
    {
      title: 'Maduración productos lácteos',
      image: productosLacteos,
    },
    {
      title: 'Curado de salame',
      image: curadoSalame,
    },
    {
      title: 'Curado de jamón crudo',
      image: curadoJamonCrudo,
    },
  ];
 
  const airList = [
    {
      title: 'Tecnología de Barrera de Aire',
      image: barreraAire,
    },
    {
      title: 'Ventiladores de Desestratificación',
      image: ventiladores,
    },
    {
      title: 'Sistemas de Secado',
      image: sistemaSecado,
    },
    {
      title: 'Puertas de Acción Rápida',
      image: puerta,
    },
  ];

  const pdfList = [
    {
      title: 'Catalogo General Inoxsystem Español.pdf',
      url: inoxsystem,
    },
    {
      title: 'Catalogo General Standard Tech.pdf',
      url: standardTech,
    },
    {
      title: 'Catalogo General Inoxsystem Español.pdf',
      url: quesosStandardTech,
    },
    {
      title: 'Catalogo Habitaciones Limpias Standard Tech.pdf',
      url: habitacionesLimpiasStandardTech,
    },
    {
      title: 'Catalogo Embutidos Standard Tech.pdf',
      url: embutidosStandardTech,
    },
    {
      title: 'Catalogo Barreras de Aire Enershield/CPA.pdf',
      url: barrerasAire,
    },
  ];

  return (
    <section className="section" id="products">
      <div className="container">
        <Box spacing={isMobile ? 4 : 10}>
          <h2 className="mt-0 mb-0 inline-block">
            Productos
          </h2>
          <Box sx={{ mt: '50px'}}>
            <Grid container spacing='60px' sx={{ justifyContent: 'space-around'}}>
              {categoriesList.map((category, index) => (
                <Grid item md={3} sm={3} key={index}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', width: '260px'}}>
                    <CardMedia
                      loading="lazy"
                      sx={{
                        height: '220px',
                        width: '270px',
                        borderRadius: '16px',
                        objectFit: 'cover',
                        filter: category.name === categorySelected?.name ? 'grayscale(0)' : 'grayscale(1)',
                        opacity: category.name === categorySelected?.name ? 1 : 0.7,
                        cursor: 'pointer',
                        "&:hover": {
                          boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
                          filter: 'grayscale(0)',
                          opacity: 1,
                        },
                      }}
                      src={category.imageUrl}
                      component='img'
                      alt={category.name}
                      onClick={() => setCategorySelected(category)}
                    />
                    <Box sx={{ mt: 3, display: 'flex', width: '100%', justifyContent: 'center'}}>
                      <h5 className="font-medium">{category.name}</h5>
                    </Box>
                    {category.name === categorySelected?.name && (
                      <Box sx={{ mt: 1.2, display: 'flex', width: '100%', justifyContent: 'center'}}>
                        <Divider sx={{ borderColor: '#A7B6E8', width: '50px', borderWidth: '1px'}} /> 
                      </Box>
                    )}
                  </Box>
                </Grid>
              ))}
            </Grid>
            {categorySelected
              && categorySelected.name !== 'Sistema de Aire Controlado' 
              && categorySelected.name !== 'Catálogo General' && (
              <Box sx={{ mt: '50px' }}>
                <Carousel
                  slidesPerView={4}
                  height={260}
                >
                  {getCurrentCategoryList().map((categoryList) => (
                    <>
                      <CardMedia
                        loading="lazy"
                        sx={{
                          height: '200px',
                          width: '260px',
                          borderRadius: '16px',
                          objectFit: 'cover',
                        }}
                        src={categoryList.image}
                        component='img'
                        alt={categoryList.title}
                      />
                      <Box
                        sx={{
                          mt: 3,
                          display: 'flex',
                          width: '100%',
                          justifyContent: 'center',
                          fontSize: '14px'
                        }}
                      >
                        <h5 className="font-medium">{categoryList.title}</h5>
                      </Box>
                    </>
                  ))}
              </Carousel>
              </Box>
            )}
            {categorySelected && categorySelected.name === 'Sistema de Aire Controlado' && (
              <Box
                sx={{
                  mt: '50px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {getCurrentCategoryList().map((categoryList) => (
                  <Box sx={{ mr: 4 }}>
                    <CardMedia
                      loading="lazy"
                      sx={{
                        height: '200px',
                        width: '260px',
                        borderRadius: '16px',
                        objectFit: 'cover',
                      }}
                      src={categoryList.image}
                      component='img'
                      alt={categoryList.title}
                    />
                    <Box
                      sx={{
                        mt: 3,
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        fontSize: '14px'
                      }}
                    >
                      <h5 className="font-medium">{categoryList.title}</h5>
                    </Box>
                  </Box>
                ))}
            </Box>
            )}
            {categorySelected && categorySelected.name === 'Catálogo General' && (
              <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', mt: '50px'}}>
                <List
                  sx={{ width: '720px' }}
                  component="nav"
                >
                  {pdfList.map((pdf) => (
                    <>
                      <ListItem component="div" disablePadding>
                        <ListItemButton sx={{ cursor: 'default'}}>
                          <ListItemIcon>
                            <img alt='' src={pdfIcon} width={20} height={20} />
                          </ListItemIcon>
                          <ListItemText primary={pdf.title} />
                          <a href={pdf.url} download>
                            <Button
                              sx={{
                                textTransform: 'none',
                                ':hover':{
                                  backgroundColor: 'transparent'
                                }
                              }}
                            >
                              Descargar PDF
                            </Button>
                          </a>
                        </ListItemButton>
                      </ListItem>
                      <Divider sx={{ my: 1 }} />
                    </>
                  ))}
                </List>
              </Box>
            )}
          </Box>
      </Box>
    </div>
  </section>
  );
};

export default Categories;