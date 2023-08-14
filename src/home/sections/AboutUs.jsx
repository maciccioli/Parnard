import React from "react";
import { useTranslation } from 'react-i18next';
import {
  Grid,
  useMediaQuery,
  Box,
  Typography,
  CardMedia,
} from "@mui/material";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { useTheme } from '@mui/material/styles';
import backgroudImage from '../../assets/sobreNosotros.jpg'
import backgroudImage2 from '../../assets/sobreNosotros2.jpg'

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  return (
    <section className="section bg-light-gray" id="aboutUs">
      <div className="container">
        <Box spacing={isMobile ? 4 : 10}>
          <h2 className="mt-0 mb-0 inline-block">
            {t('ABOUT_US')}
          </h2>
          <Grid
            container
            spacing='50px'
            sx={{ mt: '50px'}}
          >
            <Grid item xs={12} md={6} sx={{ paddingTop: '0px !important'}}>
              <Box>
                <Typography sx={{ letterSpacing: '0.015em', textAlign: 'justify'}}>
                    {t('ABOUT_US_DESCRIPTION_1')}
                </Typography>
                <Typography sx={{ mt: 2, letterSpacing: '0.015em', textAlign: 'justify' }}>
                  {t('ABOUT_US_DESCRIPTION_2')}
                </Typography>
              </Box>
            </Grid>
            {!isMobile && (
              <>
                <Grid item xs={6} sx={{ paddingTop: '0px !important'}}>
                  <CardMedia
                    loading="lazy"
                    sx={{
                      width: '100%',
                      borderRadius: '16px',
                      objectFit: 'cover',
                    }}
                    src={backgroudImage}
                    component='img'
                    alt='Sobre Nosotros'
                  />
                </Grid>
                <Box sx={{ display: 'flex', alignItems: 'center'}}>
                  <Grid item xs={6} sx={{ pt: '16px !important', pl: '50px' }}>
                    <CardMedia
                      loading="lazy"
                      sx={{
                        width: '100%',
                        borderRadius: '16px',
                        objectFit: 'cover',
                      }}
                      src={backgroudImage2}
                      component='img'
                      alt='Sobre Nosotros'
                    />
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ pl: '50px'}}>
                    <Box sx={{ display: 'flex', mt: 4 }}>
                      <Box
                        sx={{
                          minWidth: '48px',
                          height: '48px',
                          borderRadius: '6px',
                          transition: '0.5s',
                          backgroundColor: '#A7B6E8',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                        }}
                      >
                        <BusinessCenterIcon sx={{ color: '#FFFFFF', width: '24px', height: '24px'}} />
                      </Box>
                      <Typography sx={{ textAlign: 'justify'}}>
                        {t('ABOUT_US_ITEM_1')}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', mt: 3 }}>
                      <Box
                        sx={{
                          minWidth: '48px',
                          height: '48px',
                          borderRadius: '6px',
                          transition: '0.5s',
                          backgroundColor: '#A7B6E8',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                        }}
                      >
                        <EngineeringIcon sx={{ color: '#FFFFFF', width: '24px', height: '24px'}} />
                      </Box>
                      <Typography sx={{ textAlign: 'justify'}}>
                        {t('ABOUT_US_ITEM_2')}
                      </Typography>
                    </Box>
                  </Grid>
                </Box>
              </>
            )}
            {isMobile && (
              <Grid item xs={12} md={6} sx={{ pt: '16px'}}>
                <Box sx={{ display: 'flex', mt: 4 }}>
                  <Box
                    sx={{
                      minWidth: '48px',
                      height: '48px',
                      borderRadius: '6px',
                      transition: '0.5s',
                      backgroundColor: '#A7B6E8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2,
                    }}
                  >
                    <BusinessCenterIcon sx={{ color: '#FFFFFF', width: '24px', height: '24px'}} />
                  </Box>
                  <Typography sx={{ textAlign: 'justify'}}>
                    {t('ABOUT_US_ITEM_1')}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', mt: 3 }}>
                  <Box
                    sx={{
                      minWidth: '48px',
                      height: '48px',
                      borderRadius: '6px',
                      transition: '0.5s',
                      backgroundColor: '#A7B6E8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2,
                    }}
                  >
                    <EngineeringIcon sx={{ color: '#FFFFFF', width: '24px', height: '24px'}} />
                  </Box>
                  <Typography sx={{ textAlign: 'justify'}}>
                    {t('ABOUT_US_ITEM_2')}
                  </Typography>
                </Box>
              </Grid>
            )}
          </Grid>
          <Box sx={{ display: 'flex', mt: '50px', justifyContent: 'space-between' }}>
          </Box>
        </Box>
      </div>
    </section>
  );
};

export default AboutUs;
