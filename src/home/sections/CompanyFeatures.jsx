import React from "react";
import {
  Grid,
  Icon,
  useMediaQuery,
  Box,
  Typography,
} from "@mui/material";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { useTheme } from '@mui/material/styles';
import { Description } from "@mui/icons-material";

const CompanyFeatures = () => {
    const serviceList = [
        {
          icon: ConstructionOutlinedIcon,
          title: "Soluciones de calidad",
          description: 'Se trabaja con productos en acero inoxidable AISI 304 o 316, sistemas de refrigeración industrial de alta tecnología y soluciones de aire controlado y comprimido.',
        },
        {
          icon: WatchLaterOutlinedIcon,
          title: "Producción personalizada",
          description: 'Nuestro enfoque en el proceso de elaboración, respaldado por un equipo especializado en diseño constructivo, garantiza la velocidad y eficiencia en la fabricación.',
        },
        {
          icon: LocalShippingOutlinedIcon,
          title: "Logística de entrega",
          description: 'Gestionamos y coordinamos sus envíos con fábrica para realizar una pronta entrega.',
        },
        {
          icon: LanguageOutlinedIcon,
          title: "Calidad Europea",
          description: 'Nuestros productos son diseñados y fabricados bajo los estándares de la más alta calidad europea.',
        },
      ];
    
      return (
        <section className="section" id="companyFeatures">
          <div className="container">
            <Grid container spacing={6} justify="space-between">
              {serviceList.map((item, ind) => (
                <Grid key={ind} item sm={3} xs={12}>
                  <div className="text-center max-w-252 mx-auto">
                    <item.icon sx={{ color: "#A7B6E8" }} className="text-72" />
                    <h5
                      className="mt-4 font-medium"
                      style={{ textTransform: 'uppercase'}}
                    >
                      {item.title}
                    </h5>
                    <p className="max-w-400">
                      {item.description}
                    </p>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </section>
      );
};

export default CompanyFeatures;
