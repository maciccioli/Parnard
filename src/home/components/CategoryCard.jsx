import { useState } from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
} from "@mui/material";

const CategoryCard= ({ category, key }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card
      className="px-6 card w-full h-full"
      key={key}
      sx={{ position: 'relative'}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent
        className="flex-column min-h-full"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}
      >
        <Box sx={{ width: '200px', height: '200px'}}>
          <img alt='category' src={category.url} style={{ width: '200px', height: '200px'}} />
        </Box>
      </CardContent>
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#1f354899',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s'
        }}
      >
        <Box sx={{ p: 3, width: '100%', height: '100%'}}>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              height: '100%',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h4" sx={{ color: '#ffffff !important', fontWeight: 500, textAlign: 'center' }}>
              Vinos
            </Typography>
            <Typography sx={{ color: '#ffffff !important', mt: 1.4, textAlign: 'center'}}>
              Productos relacionados con la industria del vino
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 4,
                backgroundColor: '#ffffff',
                color: '#00000099',
                ': hover':{
                  backgroundColor: '#d1d1cd',
                }
              }}
            >
              Ver categoría
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  )
};

export default CategoryCard;
