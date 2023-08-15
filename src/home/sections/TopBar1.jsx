import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { debounce, classList } from "../../utils";
import {
  Box,
  Icon,
  IconButton,
  Link,
  Button,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ScrollTo from "../common/ScrollTo";
import logoEs from '../../assets/blackNavbarLogoEsp.png';
import logoEn from '../../assets/blackNavbarLogoEn.jpg';

const TopBar1 = () => {
  const [isTop, setIsTop] = useState(true);
  const [isClosed, setIsClosed] = useState(true);

  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language;

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let scrollableElement = document.querySelector(".scrollable-content");
  if (!scrollableElement) scrollableElement = window;

  let handleScrollRef = null;
  let toggleIcon = isClosed ? "menu" : "close";

  const handleScroll = () => {
    return debounce(({ target: { scrollTop } }) => {
      let isCurrentTop = scrollTop < 100 || scrollableElement.scrollY < 100;
      setIsTop(isCurrentTop);
    }, 20);
  };

  handleScrollRef = handleScroll();

  const close = () => {
    setIsClosed(false);
  };

  useEffect(() => {
    if (scrollableElement) {
      scrollableElement.addEventListener("scroll", handleScrollRef);
    }

    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener("scroll", handleScrollRef);
      }
    };
  }, [scrollableElement, handleScrollRef]);

  const message = 'Hola! Estoy interesado(a) en aprender más sobre sus servicios. ¿Podría recibir más información? Gracias.';
  const message_en = 'Hello! I am interested in learning more about your services. Could I receive more information? Thank you.';
  
  const encodedMessage = encodeURIComponent(i18n.language === 'es' ? message : message_en );

  const whatsappUrl = `https://wa.me/541136541997?text=${encodedMessage}`;

  return (
    <section
      className={classList({
        header: true,
        "header-fixed": !isTop,
        closed: isClosed,
      })}
      style={{ borderBottom: '1px solid #00000014', zIndex: 100}}
    >
      <Box
        className="container header-container"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1300px',
        }}
      >
        <Box>
          <Box className="brand" sx={{ display: 'flex', alignItems: 'center'}}>
            <img
              src={i18n.language === 'es' ? logoEs : logoEn}
              height='46px'
              alt="Parnard"
            />
          </Box>
        </Box>
        <Box>
          <ul className="navigation">
            <li>
              <ScrollTo to="aboutUs" onScroll={close}>
                {t('ABOUT_US')}
              </ScrollTo>
            </li>
            <li>
              <ScrollTo to="integralSolutions" onScroll={close}>
                {t('APPLICABLE_SOLUTIONS')}
              </ScrollTo>
            </li>
            <li>
              <ScrollTo to="products" onScroll={close}>
                {t('PRODUCTS')}
              </ScrollTo>
            </li>
            <li>
              <ScrollTo to="works" onScroll={close}>
                {t('JOBS')}
              </ScrollTo>
            </li>
            <li>
              <ScrollTo to="industrialSolutions" onScroll={close}>
              {t('INDUSTRIAL_SOLUTIONS')}
              </ScrollTo>
            </li>
            <li>
              <ScrollTo to="contact" onScroll={close}>
                {t('CONTACT')}
              </ScrollTo>
            </li>
          </ul>
          <IconButton
            className="header__toggle"
            onClick={() => {
              setIsClosed(!isClosed);
            }}
          >
            <Icon>{toggleIcon}</Icon>
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <IconButton
            component={Link}
            href="https://www.linkedin.com/company/parnard/about/"
            target="_blank"
            sx={{
              mr: 1,
              color: 'grey',
              transition: 'color 0.3s ease',
              ':hover': {
                color: '#0a66c2',
              },
            }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component={Link}
            href="https://www.youtube.com/@parnardsi/featured"
            target="_blank"
            sx={{
              mr: 1.6,
              cursor: 'pointer',
              color: 'grey',
              transition: 'color 0.3s ease',
              ':hover': {
                color: '#FF0000',
              }
            }}
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton
            component={Link}
            href="mailto:info@parnard.com"
            target="_blank"
            sx={{
              mr: 1,
              cursor: 'pointer',
              color: 'grey',
              transition: 'color 0.3s ease',
              ':hover': {
                color: 'blue',
              }
            }}
          >
            <EmailIcon />
          </IconButton>
          <IconButton
            component={Link}
            href={whatsappUrl}
            target="_blank"
            sx={{
              mr: 1,
              cursor: 'pointer',
              color: 'grey',
              transition: 'color 0.3s ease',
              ':hover': {
                color: '#23d366',
              }
            }}
          >
            <WhatsAppIcon />
          </IconButton>
          <Button
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <Box sx={{ display: 'flex', alignItems: 'center'}}>
              <Typography sx={{ fontSize: '14px', fontWeight: 500, letterSpacing: '0.5px'}}>
                {currentLanguage.toUpperCase()}
              </Typography>
              <ArrowDropDownOutlinedIcon fontSize="small" sx={{ color: '#9b9c9e' }} />
            </Box>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={() => handleLanguageChange('es')}>
              <Typography sx={{ fontSize: '14px'}}>
                ES
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange('en')}>
              <Typography sx={{ fontSize: '14px'}}>
                EN
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </section>
  );
};

export default TopBar1;
