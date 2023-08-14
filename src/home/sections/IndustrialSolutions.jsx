import React from "react";
import { useTranslation } from 'react-i18next';
import {
  Grid,
  Box,
  Typography,
  useMediaQuery,
  CardMedia,
} from "@mui/material";
import { useTheme } from '@mui/material/styles';

import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
// import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';

import industrialSolution1 from '../../assets/industrialSolution1.jpg'
import industrialSolution2 from '../../assets/industrialSolution2.jpg'


const IndustrialSolutions = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

    const firstColumn = [
        {
          icon: EmojiObjectsOutlinedIcon,
          description: t('INDUSTRIAL_SOLUTIONS_1'),
        },
        {
          icon: ConstructionOutlinedIcon,
          description: t('INDUSTRIAL_SOLUTIONS_2'),
        },
        {
          icon: ManageSearchOutlinedIcon,
          description: t('INDUSTRIAL_SOLUTIONS_3'),
        },
        {
          icon: TextSnippetOutlinedIcon,
          description: t('INDUSTRIAL_SOLUTIONS_4'),
        },
        {
          icon: LocalShippingOutlinedIcon,
          description: t('INDUSTRIAL_SOLUTIONS_5'),
        },
        {
          icon: EngineeringOutlinedIcon,
          description: t('INDUSTRIAL_SOLUTIONS_6'),
        },
      ];

      const secondColumn = [
        {
          icon: SettingsOutlinedIcon,
          description: t('INDUSTRIAL_SOLUTIONS_7'),
        },
        {
          icon: SettingsOutlinedIcon,
          description: t('INDUSTRIAL_SOLUTIONS_8'),
        },
        {
          icon: DiamondOutlinedIcon,
          description: t('INDUSTRIAL_SOLUTIONS_9'),
        },
        {
          icon: LanguageOutlinedIcon,
          description: t('INDUSTRIAL_SOLUTIONS_10'),
        },
        {
          icon: GppGoodOutlinedIcon,
          description: t('INDUSTRIAL_SOLUTIONS_11'),
        },
        {
          icon: GppGoodOutlinedIcon,
          description: t('INDUSTRIAL_SOLUTIONS_12'),
        },
      ];


      return (
        <section className="section" id="industrialSolutions">
          <div className="container">
            <h2 className="mt-0 mb-0 inline-block">
              {t('INDUSTRIAL_SOLUTIONS')}
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
                      {t('INDUSTRIAL_SOLUTION_SUBTITLE_1')}
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
                {!isSm && (
                  <>
                    <Grid item xs={12} md={6} sx={{ pr: '40px' }}>
                      <Box sx={{ mb: 3 }}>
                        <CardMedia
                          loading="lazy"
                          sx={{
                            width: '100%',
                            borderRadius: '16px',
                            objectFit: 'cover',
                          }}
                          src={industrialSolution1}
                          component='img'
                          alt='Soluciones industriales'
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ pr: '40px' }}>
                      <Box sx={{ mb: 3 }}>
                        <CardMedia
                          loading="lazy"
                          sx={{
                            width: '100%',
                            borderRadius: '16px',
                            objectFit: 'cover',
                          }}
                          src={industrialSolution2}
                          component='img'
                          alt='Soluciones industriales'
                        />
                      </Box>
                    </Grid>
                  </>
                )}
                <Grid item xs={12} md={6} sx={{ pl: isSm ? '16px !important' : '40px !important', pr: isSm ? '40px' : '0px' }}>
                  <Box sx={{ mb: 3 }}>
                    <Typography 
                      sx={{ color: '#666 !important', fontWeight: 500, fontSize: '16px' }}
                      variant="h5"
                    >
                      {t('INDUSTRIAL_SOLUTION_SUBTITLE_2')}
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
