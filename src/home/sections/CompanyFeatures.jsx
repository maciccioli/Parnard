import React from "react";
import { useTranslation } from 'react-i18next';
import {
  Grid,
} from "@mui/material";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';

const CompanyFeatures = () => {
  const { t } = useTranslation();

  const serviceList = [
      {
        icon: ConstructionOutlinedIcon,
        title: t('QUALITY_SOLUTIONS'),
        description: t('QUALITY_SOLUTIONS_DESCRIPTION'),
      },
      {
        icon: WatchLaterOutlinedIcon,
        title: t('CUSTOMIZED_PRODUCTION'),
        description: t('CUSTOMIZED_PRODUCTION_DESCRIPTION'),
      },
      {
        icon: LocalShippingOutlinedIcon,
        title: t('DELIVERY_LOGISTICS'),
        description: t('DELIVERY_LOGISTICS_DESCRIPTION'),
      },
      {
        icon: LanguageOutlinedIcon,
        title: t('EUROPEAN_QUALITY'),
        description: t('EUROPEAN_QUALITY_DESCRIPTION'),
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
