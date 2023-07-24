import React from "react";
import {
  Grid,
  Icon,
  useMediaQuery,
  Box,
  Typography,
} from "@mui/material";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { useTheme } from '@mui/material/styles';

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <section className="section bg-light-gray" id="aboutUs">
      <div className="container">
        <Box spacing={isMobile ? 4 : 10}>
          <h2 className="mt-0 mb-0 inline-block">
            Nosotros
          </h2>
          <Grid
            container
            spacing='50px'
            sx={{ mt: '50px'}}
          >
            <Grid item xs={6} sx={{ paddingTop: '0px !important'}}>
              <img
                src="/assets/images/about-us-2.jpg"
                alt="aboutUs"
                className="max-w-full border-radius-12"
              />
            </Grid>
            <Grid item xs={6} sx={{ paddingTop: '0px !important'}}>
            <Box>
              <Typography sx={{ letterSpacing: '0.015em', textAlign: 'justify'}}>
              Bienvenidos a Parnard, una empresa dedicada a la ingeniería, asesoría técnica y venta de soluciones para el drenaje de líquidos, sistemas de refrigeración y productos de aire controlado. Gracias a nuestra alianza estratégica con Inoxsystem SRL, Standard Tech SRL y CPA Engineered Solutions , nos hemos convertido en los distribuidores y representantes exclusivos de sus servicios en América Latina, consolidando nuestra posición en el mercado.
              </Typography>
              <Typography sx={{ mt: 2, letterSpacing: '0.015em', textAlign: 'justify' }}>
              Nuestra principal fortaleza radica en la capacidad de proporcionar soluciones integrales a clientes de diversos sectores, incluyendo alimentación, farmacéutica, vitivinícola, cosmética e industrial. Trabajamos en estrecha colaboración con nuestros clientes, comprendiendo sus necesidades específicas y diseñando soluciones personalizadas que se adaptan a sus requerimientos.
              </Typography>
              <Box sx={{ display: 'flex', mt: 4}}>
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
                <Typography sx={{ fontSize: '14px', textAlign: 'justify'}}>
                Contamos con un equipo altamente capacitado que se dedica a brindar asesoramiento técnico especializado y a ofrecer productos de la más alta calidad. Nos complace poder ayudar a nuestros clientes a optimizar sus sistemas, garantizando la eficiencia y el rendimiento óptimo en sus operaciones.
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
                <Typography sx={{ fontSize: '14px', textAlign: 'justify'}}>
                  En Parnard, entendemos la importancia de contar con sistemas eficaces, innovadores y confiables en las industrias que servimos. Ofrecemos a nuestros clientes una experiencia segura, abordando sus necesidades varias a través de un único proveedor de confianza. 
                </Typography>
              </Box>
            </Box>
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', mt: '50px', justifyContent: 'space-between' }}>
          </Box>
        </Box>
      </div>
    </section>
  );
};

export default AboutUs;
