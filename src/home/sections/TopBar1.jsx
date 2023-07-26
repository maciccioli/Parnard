import React, { useState, useEffect } from "react";
import { debounce, classList } from "../../utils";
import {
  Box,
  Icon,
  IconButton,
  Link,
} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ScrollTo from "../common/ScrollTo";
import logo from '../../assets/blackNavbarLogo.jpg';

const TopBar1 = () => {
  const [isTop, setIsTop] = useState(true);
  const [isClosed, setIsClosed] = useState(true);

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
  const encodedMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/541136541997?text=${encodedMessage}`;

  return (
    <section
      className={classList({
        header: true,
        "header-fixed": !isTop,
        closed: isClosed,
      })}
      style={{ borderBottom: '1px solid #00000014', zIndex: 100 }}
    >
      <Box
        className="container header-container"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Box className="brand" sx={{ display: 'flex', alignItems: 'center'}}>
            <img src={logo} height='38px' alt="Parnard" />
          </Box>
        </Box>
        <Box>
          <ul className="navigation">
            <li>
              <ScrollTo to="aboutUs" onScroll={close}>
                Nosotros
              </ScrollTo>
            </li>
            <li>
              <ScrollTo to="integralSolutions" onScroll={close}>
                Soluciones Aplicables
              </ScrollTo>
            </li>
            <li>
              <ScrollTo to="products" onScroll={close}>
                Productos
              </ScrollTo>
            </li>
            <li>
              <ScrollTo to="works" onScroll={close}>
                Trabajos
              </ScrollTo>
            </li>
            <li>
              <ScrollTo to="industrialSolutions" onScroll={close}>
                Soluciones Industriales
              </ScrollTo>
            </li>
            <li>
              <ScrollTo to="contact" onScroll={close}>
                Contacto
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
        <Box sx={{ display: 'flex' }}>
          <IconButton
            component={Link}
            href="https://www.linkedin.com/in/parnard-soluciones-industriales-5a76a1272/"
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
            href="https://www.youtube.com"
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
        </Box>
      </Box>
    </section>
  );
};

export default TopBar1;
