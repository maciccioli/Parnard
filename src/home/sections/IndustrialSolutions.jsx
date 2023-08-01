import React from "react";
import {
  Grid,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';

const IndustrialSolutions = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

    const firstColumn = [
        {
          icon: ConstructionOutlinedIcon,
          description: 'Primeros acercamientos y estudios de sus proyectos.',
        },
        {
          icon: WatchLaterOutlinedIcon,
          description: 'Materialización de sus ideas (croquis, dibujos técnicos, detalles constructivos).',
        },
        {
          icon: LocalShippingOutlinedIcon,
          description: 'Elección de los productos más apropiados para cada necesidad específica.',
        },
        {
          icon: LanguageOutlinedIcon,
          description: 'Elaboración y presentación de fichas técnicas a clientes.',
        },
        {
          icon: LocalShippingOutlinedIcon,
          description: 'Gestión, coordinación en la entrega de sus productos y servicio postventa.  ',
        },
        {
          icon: LanguageOutlinedIcon,
          description: 'Inspección bajo personal capacitado para garantizar el correcto funcionamiento de sus sistemas.',
        },
      ];

      const secondColumn = [
        {
          icon: ConstructionOutlinedIcon,
          description: 'Productos fabricados en acero inoxidable AISI 304/316, soluciones de refrigeración industrial de alta tecnología y sistemas de aire controlado.',
        },
        {
          icon: WatchLaterOutlinedIcon,
          description: 'Proyectos respaldados por empresas europeas de una sólida trayectoria y experiencia en el mercado .',
        },
        {
          icon: LocalShippingOutlinedIcon,
          description: 'Nuestros productos cumplen con los estándares de calidad del mercado.',
        },
        {
          icon: LanguageOutlinedIcon,
          description: 'Artículos diseñados y fabricados exclusivamente en Europa.',
        },
        {
          icon: LocalShippingOutlinedIcon,
          description: 'Funcionamiento de sistemas garantizados.',
        },
        {
          icon: LanguageOutlinedIcon,
          description: 'Capacitaciones constantes a cargo de técnicos experimentados en productos de Inoxsystem Srl, Standard Tech Srl y CPA Engineered Solutions.',
        },
      ];


      return (
        <section className="section" id="industrialSolutions">
          <div className="container">
            <h2 className="mt-0 mb-0 inline-block">
              Soluciones Industriales
            </h2>
              <Grid
                container
                spacing={2}
                sx={{ mt: '40px' }}
              >
                <Grid item xs={12} md={6} sx={{ pr: '40px' }}>
                  <Box sx={{ mb: 3 }}>
                    <Typography 
                      sx={{ color: '#666 !important', fontWeight: 500, fontSize: '16px' }}
                      variant="h5"
                    >
                      Asesoramiento Profesional
                    </Typography>
                  </Box>
                  {firstColumn.map((item, ind) => (
                    <Box sx={{ display: 'flex', mb: 1.4, alignItems: 'center' }}>
                      <Box
                        sx={{
                          minWidth: '32px',
                          height: '32px',
                          borderRadius: '6px',
                          transition: '0.5s',
                          backgroundColor: '#A7B6E8',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                        }}
                      >
                        <item.icon sx={{ color: '#FFFFFF', width: '18px', height: '18px'}} />
                      </Box>
                      <Typography sx={{ fontSize: '14px', textAlign: 'justify'}}>
                        {item.description}
                      </Typography>
                    </Box>
                  ))}
                </Grid>
                <Grid item xs={12} md={6} sx={{ pl: isSm ? '16px !important' : '40px !important', pr: isSm ? '40px' : '0px' }}>
                  <Box sx={{ mb: 3 }}>
                    <Typography 
                      sx={{ color: '#666 !important', fontWeight: 500, fontSize: '16px' }}
                      variant="h5"
                    >
                      Distribuidores y Representantes oficiales
                    </Typography>
                  </Box>
                  {secondColumn.map((item, ind) => (
                    <Box sx={{ display: 'flex', mb: 1.4, alignItems: 'center' }}>
                      <Box
                        sx={{
                          minWidth: '32px',
                          height: '32px',
                          borderRadius: '6px',
                          transition: '0.5s',
                          backgroundColor: '#A7B6E8',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                        }}
                      >
                        <item.icon sx={{ color: '#FFFFFF', width: '18px', height: '18px'}} />
                      </Box>
                      <Typography sx={{ fontSize: '14px', textAlign: 'justify'}}>
                        {item.description}
                      </Typography>
                    </Box>
                  ))}
                </Grid>
              </Grid>
          </div>
        </section>
      );
};

export default IndustrialSolutions;
