import { useState } from "react";
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
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const [categorySelected, setCategorySelected] = useState(null);

  const getCurrentCategoryList = () => {
    switch(categorySelected.name) {
      case "Sistema de Drenaje":
        return drainageSystemList;
      case "Sistema de Refrigeración":
        return refrigerationSystemList;
      case "Sistema de Aire Controlado":
        return controlledAirSystemList;
      default:
        return null;
    }
  }

  const categoriesSolutions = [
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
  ];

  const drainageSystemList = [
    {
      imageUrl: cotidianeImage,
      name: "Usos cotidianos",
    },
    {
      imageUrl: cellarImage,
      name: "Bodegas y Líquidos varios",
    },
    {
      imageUrl: kitchenImage,
      name: "Cocinas profesionales",
    },
    {
      imageUrl: butchersImage,
      name: "Frígorificos y Carnicerías",
    },
    {
      imageUrl: breweriesImage,
      name: "Cervecerías",
    }
  ];

  const refrigerationSystemList = [
    {
      imageUrl: dairyIndustry,
      name: "Industria Láctea",
    },
    {
      imageUrl: butcherIndustry,
      name: "Industria Carnica",
    },
    {
      imageUrl: bakingIndustry,
      name: "Industria Panificadora",
    },
  ];

  const controlledAirSystemList = [
    {
      imageUrl: airports,
      name: "Aeropuertos",
    },
    {
      imageUrl: foodIndustry,
      name: "Industria Alimentaria",
    },
    {
      imageUrl: pharmaceuticalIndustry,
      name: "Industria Farmacéutica",
    },
    {
      imageUrl: manufacturingIndustry,
      name: "Industria Manufacturera",
    },
    {
      imageUrl: retail,
      name: "Retail",
    },
    {
      imageUrl: warehouse,
      name: "Almacén y Distribución",
    },
  ];

  return (
    <section className="section bg-light-gray" id="integralSolutions">
      <div className="container">
        <Box spacing={isMobile ? 4 : 10}>
          <h2 className="mt-0 mb-0 inline-block">
            Soluciones Aplicables
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
            {categorySelected && categorySelected.name !== 'Sistema de Refrigeración' && (
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
                    </>
                  ))}
              </Carousel>
            </Box>
            )}
            {categorySelected && categorySelected.name === 'Sistema de Refrigeración' && (
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
