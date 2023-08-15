import { useState } from "react";
import { useTranslation } from 'react-i18next';
import {
  Grid,
  useMediaQuery,
  Box,
  CardMedia,
  Divider,
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Carousel from "../common/Carousel";

import cotidianeImage from '../../assets/cotidiane.jpg';
import cellarImage from '../../assets/cellarsAndLiquids.jpg';
import kitchenImage from '../../assets/professionalKitchens.jpg';
import butchersImage from '../../assets/butchers.jpg';
import breweriesImage from '../../assets/breweries.jpg';

import dairyIndustry from '../../assets/dairyIndustry.jpg';
import butcherIndustry from '../../assets/butcherIndustry.jpg';
import bakingIndustry from '../../assets/bakingIndustry.jpg';

import airports from '../../assets/airports.jpg';
import foodIndustry from '../../assets/foodIndustry.jpg';
import pharmaceuticalIndustry from '../../assets/pharmaceuticalIndustry.jpg';
import manufacturingIndustry from '../../assets/manufacturingIndustry.jpg';
import retail from '../../assets/retail.jpg';
import warehouse from '../../assets/warehouse.jpg';


import drainageSystem from '../../assets/drainageSystem.jpg';
import refrigerationSystem from '../../assets/refrigerationSystem.jpg';
import controlledAirSystem from '../../assets/controlledAirSystem.jpg';


const IntegralSolutions = () => {
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
        return drainageSystemList;
      case 2:
        return refrigerationSystemList;
      case 3:
        return controlledAirSystemList;
      default:
        return null;
    }
  }

  const categoriesSolutions = [
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
  ];

  const drainageSystemList = [
    {
      imageUrl: cotidianeImage,
      name: t('EVERYDAT_USES'),
    },
    {
      imageUrl: cellarImage,
      name: t('WINERIES'),
    },
    {
      imageUrl: kitchenImage,
      name: t('PROFESSIONAL_KITCHENS'),
    },
    {
      imageUrl: butchersImage,
      name: t('COLD_STORAGE'),
    },
    {
      imageUrl: breweriesImage,
      name: t('BREWERIES'),
    }
  ];

  const refrigerationSystemList = [
    {
      imageUrl: dairyIndustry,
      name: t('DAIRY_INDUSTRY'),
    },
    {
      imageUrl: butcherIndustry,
      name: t('MEAT_INDUSTRY'),
    },
    {
      imageUrl: bakingIndustry,
      name: t('BAKING_INDUSTRY'),
    },
  ];

  const controlledAirSystemList = [
    {
      imageUrl: airports,
      name: t('AIRPORTS'),
    },
    {
      imageUrl: foodIndustry,
      name: t('FOOD_INDUSTRY'),
    },
    {
      imageUrl: pharmaceuticalIndustry,
      name: t('PHARMACEUTICAL_INDUSTRY'),
    },
    {
      imageUrl: manufacturingIndustry,
      name: t('MANUFACTURING_INDUSTRY'),
    },
    {
      imageUrl: retail,
      name: t('REATIL'),
    },
    {
      imageUrl: warehouse,
      name: t('WAREHOUSE'),
    },
  ];

  return (
    <section className="section bg-light-gray" id="integralSolutions">
      <div className="container">
        <Box spacing={isMobile ? 4 : 10}>
          <h2 className="mt-0 mb-0 inline-block">
            {t('APPLICABLE_SOLUTIONS')}
          </h2>
          <Box sx={{ mt: '50px'}}>
            <Grid container spacing='60px' sx={{ justifyContent: 'space-around'}}>
              {categoriesSolutions.map((category, index) => (
                <Grid item md={4} sm={4} key={index}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', width: '300px'}}>
                    <CardMedia
                      loading="lazy"
                      sx={{
                        height: '240px',
                        width: '300px',
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
                    {category.id === categorySelected?.id && isSm && (
                      <Box sx={{ mt: '50px' }}>
                        <Carousel
                          slidesPerView={isMobile ? 1 : isSm ? 2 : 4}
                          height={260}
                          carouselId='solutions-swiper'
                        >
                          {getCurrentCategoryList().map((categoryList) => (
                            <Box
                              key={categoryList.name}
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
                                src={categoryList.imageUrl}
                                component='img'
                                alt={categoryList.name}
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
                                <h5 className="font-medium">{categoryList.name}</h5>
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
            {categorySelected && categorySelected.id !== 2 && !isSm && (
              <Box sx={{ mt: '50px' }}>
                <Carousel
                  slidesPerView={isMobile ? 1 : isSm ? 2 : 4}
                  height={260}
                  carouselId='solutions-swiper'
                >
                  {getCurrentCategoryList().map((categoryList) => (
                    <Box
                      key={categoryList.name}
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
                        src={categoryList.imageUrl}
                        component='img'
                        alt={categoryList.name}
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
                        <h5 className="font-medium">{categoryList.name}</h5>
                      </Box>
                    </Box>
                  ))}
              </Carousel>
            </Box>
            )}
            {categorySelected && categorySelected.id === 2 && !isSm && (
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
                      src={categoryList.imageUrl}
                      component='img'
                      alt={categoryList.name}
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
                      <h5 className="font-medium">{categoryList.name}</h5>
                    </Box>
                  </Box>
                ))}
            </Box>
            )}
          </Box>
        </Box>
      </div>
    </section>
  );
};

export default IntegralSolutions;
