import React from "react";
import {
  Grid,
  useMediaQuery,
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { useTheme } from '@mui/material/styles';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <section className="section bg-light-gray" id="contact">
      <div className="container">
        <Box spacing={isMobile ? 4 : 10}>
          <h2 className="mt-0 mb-0 inline-block">
            Contacto
          </h2>
          <Grid container spacing={2} sx={{ mt: '50px' }}>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Box
                      sx={{
                        display: 'flex',
                        p: 1,
                        border: '2px dotted #3f51b5',
                        borderRadius: '50%',
                        width: '48px',
                        height: '48px',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <LocationOnOutlinedIcon sx={{ color: '#3f51b5', width: '24px', height: '24px' }} />
                    </Box>
                    <Typography sx={{ color: '#666 !important', fontSize: '20px !important', fontWeight: 500, mt: 1.4 }}>
                      Dirección
                    </Typography>
                    <Typography sx={{ color: '#000 !important', mt: 1.4, fontSize: '14px !important' }}>
                      Malvinas Argentinas 255 - (1406) CABA
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Box
                      sx={{
                        display: 'flex',
                        p: 1,
                        border: '2px dotted #3f51b5',
                        borderRadius: '50%',
                        width: '48px',
                        height: '48px',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <EmailOutlinedIcon sx={{ color: '#3f51b5', width: '24px', height: '24px' }} />
                    </Box>
                    <Typography sx={{ color: '#666 !important', fontSize: '20px !important', fontWeight: 500, mt: 1.4 }}>
                      Email
                    </Typography>
                    <Typography sx={{ color: '#000 !important', mt: 1.4, fontSize: '14px !important' }}>
                      info@parnard.com
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Box
                      sx={{
                        display: 'flex',
                        p: 1,
                        border: '2px dotted #3f51b5',
                        borderRadius: '50%',
                        width: '48px',
                        height: '48px',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <PhoneOutlinedIcon sx={{ color: '#3f51b5', width: '24px', height: '24px' }} />
                    </Box>
                    <Typography sx={{ color: '#666 !important', fontSize: '20px !important', fontWeight: 500, mt: 1.4 }}>
                      Teléfono
                    </Typography>
                    <Typography sx={{ color: '#000 !important', mt: 1.4, fontSize: '14px !important' }}>
                      +54 9 11 3654-1997
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', width: '100%', mt: 3 }}>
            <Card sx={{ width: '100%' }}>
              <CardContent sx={{ p: 4 }}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="standard"
                      label="Nombre"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="standard"
                      label="Email"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ mt: 1.4 }}>
                    <TextField
                      variant="standard"
                      label="Asunto"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ mt: 1.4 }}>
                    <TextField
                      variant="standard"
                      label="Mensaje"
                      fullWidth
                      multiline
                    />
                  </Grid>
                </Grid>
                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'flex-end', mt: 4 }}>
                  <Button
                    variant="contained"
                  >
                    Enviar Mensaje
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </div>
    </section>
  );
};

export default Contact;
