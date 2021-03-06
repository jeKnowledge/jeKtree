import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, ContainerLogo, ContainerImg, SetaDireita, SetaEsquerda, EventTitle, ContDots, SubTitle, SubTitleMobile, ContainerMobile, ContainerLogoMobile, ContainerImgMobile, EventTitleMobile, ContDotsMobile } from './Events'
import Data from './data.json'

export default class Carousel extends React.Component {
    handleClick = e => {
        e.stopPropagation();

    }



    state = {
        hover: 0,
        slideIndex: 0,
        updateCount: 0
    };


    HoverTrue = () => {
        this.setState({ hover: 1 })
    }

    HoverFalse = () => {
        this.setState({ hover: 0 })
    }

    render() {
        const settings = {
            arrows: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            beforeChange: (current, next) => this.setState({ slideIndex: next }),
            draggable: true,

        };
        const settingsDesktop = {
            arrows: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            beforeChange: (current, next) => this.setState({ slideIndex: next }),
            draggable: true,

        };
        const isMobile = window.screen.width < 600
        if (isMobile) {
            return (
                <div>
                    <SubTitleMobile>Our Events</SubTitleMobile>
                    <ContainerMobile onMouseEnter={this.HoverTrue} onMouseLeave={this.HoverFalse} onClick={() => window.open(Data.Events[this.state.slideIndex].link, "_self")}>
                        <ContainerLogoMobile>
                            {Data.Events.map((Image, index) => {
                                return (
                                    <div
                                        className={index === this.state.slideIndex ? 'logo ativo' : 'logo'}
                                        key={index}>
                                        {index === this.state.slideIndex && (
                                            <img src={Image.pathLogo}
                                                alt="" className='Imglogo' />)}
                                    </div>
                                );
                            })
                            }
                        </ContainerLogoMobile>
                        <ContainerImgMobile onClick={this.handleClick} >
                            <Slider ref={slider => (this.slider = slider)} {...settings}>
                                {Data.Events.map((item, index) => (
                                    <div key={index}>
                                        <img src={item.pathImg} alt="" width="70%" />
                                    </div>
                                ))}
                            </Slider>
                        </ContainerImgMobile>
                    </ContainerMobile >
                    <EventTitleMobile>{Data.Events[this.state.slideIndex].name}</EventTitleMobile>

                    <ContDotsMobile>
                        {Array.from({ length: Data.Events.length }).map((item, index) => (
                            <div
                                onClick={() => this.slider.slickGoTo(index)}
                                className={index === this.state.slideIndex ? "dot active" : "dot"}
                                key={index}
                            ></div>
                        ))}
                    </ContDotsMobile>
                </div>
            );
        }
        else {
            return (
                <div>
                    <SubTitle >Our Events</SubTitle>
                    <Container onMouseEnter={this.HoverTrue} onMouseLeave={this.HoverFalse} onClick={() => window.open(Data.Events[this.state.slideIndex].link, "_self")}>
                        <ContainerLogo>
                            {Data.Events.map((Image, index) => {
                                return (
                                    <div
                                        className={index === this.state.slideIndex ? 'logo ativo' : 'logo'}
                                        key={index}>
                                        {index === this.state.slideIndex && (
                                            <img src={this.state.hover ? Image.pathLogoHover : Image.pathLogo}
                                                alt="" className='Imglogo' />)}
                                    </div>
                                );
                            })
                            }
                        </ContainerLogo>
                        <ContainerImg onClick={this.handleClick} >
                            <Slider ref={slider => (this.slider = slider)} {...settingsDesktop}>
                                {Data.Events.map((item, index) => (
                                    <div key={index}>
                                        <img src={item.pathImg} alt="" width="95%" />
                                    </div>
                                ))}
                            </Slider>
                        </ContainerImg>

                    </Container >
                    <EventTitle>{Data.Events[this.state.slideIndex].name}</EventTitle>

                    <ContDots>
                        {Array.from({ length: Data.Events.length }).map((item, index) => (
                            <div
                                onClick={() => this.slider.slickGoTo(index)}
                                className={index === this.state.slideIndex ? "dot active" : "dot"}
                                key={index}
                            ></div>
                        ))}
                    </ContDots>
                </div>
            );
        }
    }
}