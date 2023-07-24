import React from "react";
import {
  Grid,
  Icon,
  useMediaQuery,
  Box,
  Card,
  Divider,
  IconButton,
  TextField,
  InputAdornment,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Tooltip,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';
import { useTheme } from '@mui/material/styles';

const ProductsList = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const products = [
    {
      imageUrl: "./assets/images/sq-12.jpg",
      name: "Product One",
      description: `Adipisci quas repellat sed. Quasi quaerat aut nam
      possimus vitae dignissimos, sapiente est atque tenetur.`,
    },
    {
      imageUrl: "./assets/images/sq-10.jpg",
      name: "Prodcut Two",
      description: `Adipisci quas repellat sed. Quasi quaerat aut nam
      possimus vitae dignissimos, sapiente est atque tenetur.`,
    },
    {
      imageUrl: "./assets/images/sq-9.jpg",
      name: "Product Three",
      description: `Adipisci quas repellat sed. Quasi quaerat aut nam
      possimus vitae dignissimos, sapiente est atque tenetur.`,
    },
    {
      imageUrl: "./assets/images/sq-12.jpg",
      name: "Product One",
      description: `Adipisci quas repellat sed. Quasi quaerat aut nam
      possimus vitae dignissimos, sapiente est atque tenetur.`,
    },
    {
      imageUrl: "./assets/images/sq-10.jpg",
      name: "Product Two",
      description: `Adipisci quas repellat sed. Quasi quaerat aut nam
      possimus vitae dignissimos, sapiente est atque tenetur.`,
    },
    {
      imageUrl: "./assets/images/sq-9.jpg",
      name: "Product Three",
      description: `Adipisci quas repellat sed. Quasi quaerat aut nam
      possimus vitae dignissimos, sapiente est atque tenetur.`,
    },
  ];

  return (
    <section className="section bg-light-gray" id="aboutUs">
      <Box spacing={isMobile ? 4 : 10}>
        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={12} sm={2}>
            <Box sx={{ pl: 3, mt: '80px' }}>
              <h4>Categorías</h4>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Vino" />
                <FormControlLabel control={<Checkbox />} label="Frigorífico" />
                <FormControlLabel control={<Checkbox />} label="Alimentos" />
                <FormControlLabel control={<Checkbox />} label="Testing" />
              </FormGroup>
            </Box>
          </Grid>
          <Grid item xs={12} sm={10} sx={{ pr: 4 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 3,
              }}
            >
              <h2 className="mt-0 mb-0 inline-block">
                Productos
              </h2>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  minWidth: '300px',
                  '& .MuiOutlinedInput-input':{
                    paddingTop: '12px',
                    paddingBottom: '12px',
                  },
                }}
                placeholder='Buscar producto'
              />
            </Box>
            <Grid container spacing={2}>
              {products.map((product, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Card className="relative h-full card" key={index}>
                    <img
                      className="w-full"
                      src={product.imageUrl}
                      alt="portfolio"
                    />
                    <div className="flex-column justify-between">
                      <div className="px-4 pt-4">
                        <h5 className="m-0 text-16 font-bold">{product.name}</h5>
                        <p className="mb-4">{product.description}</p>
                        <Divider />
                      </div>
                      <Box
                        sx={{
                          display: 'flex',
                          width: '100%',
                          justifyContent: 'flex-end',
                          p: 2,
                        }}
                      >
                        <a href={product.imageUrl} download>
                          <Tooltip
                            title="Descargar producto"
                            placement="top"
                          >
                            <IconButton>
                              <DownloadIcon />
                            </IconButton>
                          </Tooltip>
                        </a>
                      </Box>
                    </div>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default ProductsList;
