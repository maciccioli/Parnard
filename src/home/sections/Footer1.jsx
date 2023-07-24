import React from "react";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";

import sewerage from '../../assets/sewerage.svg';
import cooling from '../../assets/cooling.svg';
import conditioner from '../../assets/conditioner.svg';
import general from '../../assets/general.svg'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer1 = () => {

  const categoriesList = [
    {
      title: 'Sistemas de Drenaje',
      img: sewerage,
    },
    {
      title: 'Sistemas de Refrigeración',
      img: cooling,
    },
    {
      title: 'Sistemas de Aire Controlado',
      img: conditioner,
    },
    {
      title: 'Catálogos Generales',
      img: general,
    },
  ];

  return (
    <Box sx={{ backgroundColor: '#3f50b5'}}>
      <div className="container">
        <Grid container>
          <Grid item lg={6} md={6} sm={12}>
            <div className="p-8 h-full">
              <h4 className="text-20 mb-6 relative" style={{ color: '#FFFFFF' }}>
                Sobre Nosotros
              </h4> 
              <p
                style={{
                  color: '#FFFFFF',
                  fontWeight: 300,
                  textAlign: 'justify',
                }}
              >
                Parnard es una empresa dedicada  a la ingeniería, asesoría técnica y venta de soluciones para el drenaje de líquidos, sistemas de refrigeración industrial y productos de aire controlado.  Brindando así, soluciones con la mejor tecnología del mercado a través de una alianza con tres de las empresas europeas más importantes del rubro, Inoxsystem Srl, Standard Tech SRL y CPA Engineered Solutions.
              </p>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={12}>
            <div className="p-8 h-full">
              <h4 className="text-20 mb-6 relative" style={{ color: '#FFFFFF' }}>
                Productos
              </h4>
              <Box>
                {categoriesList.map((category) => (
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.8 }}>
                    <img src={category.img} alt={category.title} />
                    <Typography
                      sx={{
                        color: '#ffffffb3 !important',
                        fontSize: '14px',
                        fontWeight: 400,
                        ml: 1,
                      }}
                    >
                      {category.title}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={12}>
            <Box sx={{ p: 4, pr: 0}}>
              <h4 className="text-20 mb-6 relative" style={{ color: '#FFFFFF' }}>
                Contacto
              </h4>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.8 }}>
                  <Typography
                    sx={{
                      color: '#FFFFFF !important',
                      fontSize: '14px',
                      fontWeight: 400,
                      mr: 1.6,
                    }}
                  >
                    Lucas Guido Hiernard
                  </Typography>
                  <WhatsAppIcon
                    sx={{
                      mr: 1.2,
                      width: '20px',
                      cursor: 'pointer',
                      color: 'grey',
                      transition: 'color 0.3s ease',
                      ':hover': {
                        color: '#23d366',
                      }
                    }}
                  />
                  <EmailIcon
                    sx={{
                      mr: 1.2,
                      width: '20px',
                      cursor: 'pointer',
                      color: 'grey',
                      transition: 'color 0.3s ease',
                      ':hover': {
                        color: 'red',
                      }
                    }}
                  />
                  <LinkedInIcon
                    sx={{
                      mr: 1.2,
                      width: '20px',
                      cursor: 'pointer',
                      color: 'grey',
                      transition: 'color 0.3s ease',
                      ':hover': {
                        color: '#0a66c2',
                      }
                    }}
                  />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.8 }}>
                  <Typography
                    sx={{
                      color: '#FFFFFF !important',
                      fontSize: '14px',
                      fontWeight: 400,
                      mr: 1.6,
                    }}
                  >
                    Agustín Parodi
                  </Typography>
                  <WhatsAppIcon
                    sx={{
                      mr: 1.2,
                      width: '20px',
                      cursor: 'pointer',
                      color: 'grey',
                      transition: 'color 0.3s ease',
                      ':hover': {
                        color: '#23d366',
                      }
                    }}
                  />
                  <EmailIcon
                    sx={{
                      mr: 1.2,
                      width: '20px',
                      cursor: 'pointer',
                      color: 'grey',
                      transition: 'color 0.3s ease',
                      ':hover': {
                        color: 'red',
                      }
                    }}
                  />
                  <LinkedInIcon
                    sx={{
                      mr: 1.2,
                      width: '20px',
                      cursor: 'pointer',
                      color: 'grey',
                      transition: 'color 0.3s ease',
                      ':hover': {
                        color: '#0a66c2',
                      }
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    color: '#FFFFFF !important',
                    fontSize: '14px',
                  }}
                >
                  Buenos Aires, Argentina
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default Footer1;
