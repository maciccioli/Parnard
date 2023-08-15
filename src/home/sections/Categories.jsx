import { useState } from "react";
import { useTranslation } from 'react-i18next';
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
import pdfIcon from '../../assets/pdfIcon.jpg'

import drainageSystem from '../../assets/drainageProduct.jpg';
import refrigerationSystem from '../../assets/CoolingProduct.jpg';
import controlledAirSystem from '../../assets/ControlledAirProduct.jpg';
import catalogoGeneral from '../../assets/catalogoGeneral.jpg';

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
  const { t } = useTranslation();

  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const [categorySelected, setCategorySelected] = useState(null);

  const handleSelectCategory = (newCategory) => {
    if(categorySelected && newCategory.id === categorySelected.id){
      setCategorySelected(null);
    }
    else{
      setCategorySelected(newCategory);
    }
  }

  const getCurrentCategoryList = () => {
    switch(categorySelected.id) {
      case 1:
        return drainageList;
      case 2:
        return refrigerationList;
      case 3:
        return airList;
      default:
        return null;
    }
  }

  const categoriesList = [
    {
      id: 1,
      imageUrl: drainageSystem,
      name: t('DRAINAGE_SYSTEM'),
    },
    {
      id: 2,
      imageUrl: refrigerationSystem,
      name: t('COOLING_SYSTEM'),
    },
    {
      id: 3,
      imageUrl: controlledAirSystem,
      name: t('CONTROLLED_AIR_SYSTEM'),
    },
    {
      id: 4,
      imageUrl: catalogoGeneral,
      name: t('GENERAL_CATALOGUE'),
    },
  ];

  const drainageList = [
    {
      title: t('DRAINS'),
      image: sumiderosCategory,
    },
    {
      title: t('GUTTERS'),
      image: canaletaCategories,
    },
    {
      title: t('GRATES'),
      image: rejillasCategories,
    },
    {
      title: t('INSPECTION_COVERS'),
      image: inspeccionCategories,
    },
    {
      title: t('FINISHING_PROFILES'),
      image: terminacionCategories,
    },
    {
      title: t('ACCESSORIES'),
      image: accesoriosCategories,
    },
  ];

  const refrigerationList = [
    {
      title: t('SANITIZATION'),
      image: higenizacion,
    },
    {
      title: t('CLEAN_ROOMS'),
      image: habitacionesLimpias,
    },
    {
      title: t('DAIRY_PRODUCTS'),
      image: productosLacteos,
    },
    {
      title: t('SALAMI_CURING'),
      image: curadoSalame,
    },
    {
      title: t('CURED_RAW_HAM'),
      image: curadoJamonCrudo,
    },
  ];
 
  const airList = [
    {
      title: t('AIR_BARRIER_TECHNOLOGY'),
      image: barreraAire,
    },
    {
      title: t('DESTRATIFICATION_FANS'),
      image: ventiladores,
    },
    {
      title: t('DRYING_SYSTEM'),
      image: sistemaSecado,
    },
    {
      title: t('RAPID_ACTION_DOORS'),
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
            {t('PRODUCTS')}
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
                        border: category.id === categorySelected?.id ? '4px solid #0a66c2' : 'none',
                        // filter: category.name === categorySelected?.name ? 'grayscale(0)' : 'grayscale(1)',
                        // opacity: category.name === categorySelected?.name ? 1 : 0.7,
                        cursor: 'pointer',
                        "&:hover": {
                          boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
                          // filter: 'grayscale(0)',
                          // opacity: 1,
                        },
                      }}
                      src={category.imageUrl}
                      component='img'
                      alt={category.name}
                      onClick={() => handleSelectCategory(category)}
                    />
                    <Box sx={{ mt: 3, display: 'flex', width: '100%', justifyContent: 'center'}}>
                      <h5 className="font-medium">{category.name}</h5>
                    </Box>
                    {category.id === categorySelected?.id && (
                      <Box sx={{ mt: 1.2, display: 'flex', width: '100%', justifyContent: 'center'}}>
                        <Divider sx={{ borderColor: '#A7B6E8', width: '50px', borderWidth: '1px'}} /> 
                      </Box>
                    )}
                    {category.id === categorySelected?.id && isSm && categorySelected.id !== 4 && (
                      <Box sx={{ mt: '50px' }}>
                        <Carousel
                          slidesPerView={isMobile ? 1 : isSm ? 2 : 4}
                          height={260}
                          carouselId='category-swiper'
                        >
                          {getCurrentCategoryList().map((categoryList) => (
                            <Box
                              sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                alignItems: 'center',
                              }}
                            >
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
                        </Carousel>
                      </Box>
                    )}
                  </Box>
                </Grid>
              ))}
            </Grid>
            {categorySelected
              && categorySelected.id !== 3 && categorySelected.id !== 4 && !isSm && (
              <Box sx={{ mt: '50px' }}>
                <Carousel
                  slidesPerView={isMobile ? 1 : isSm ? 2 : 4}
                  height={260}
                  carouselId='category-swiper'
                >
                  {getCurrentCategoryList().map((categoryList) => (
                    <Box
                      sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
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
                </Carousel>
              </Box>
            )}
            {categorySelected && categorySelected.id === 3 && !isSm && (
              <Box
                sx={{
                  mt: '50px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {getCurrentCategoryList().map((categoryList) => (
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
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
            {categorySelected && categorySelected.id === 4 && (
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
                              {t('DOWNLOAD_PDF')}
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
