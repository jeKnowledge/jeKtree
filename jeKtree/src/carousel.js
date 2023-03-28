import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, ContainerLogo, ContainerImg, EventTitle, ContDots, SubTitle, SubTitleMobile, ContainerMobile, ContainerLogoMobile, ContainerImgMobile, EventTitleMobile, ContDotsMobile } from './Events'

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
                    <ContainerMobile onMouseEnter={this.HoverTrue} onMouseLeave={this.HoverFalse} onClick={() => window.open(this.props.data.Events[this.state.slideIndex].link, "_self")}>
                        <ContainerLogoMobile>
                            {this.props.data.Events.map((Image, index) => {
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
                                {this.props.data.Events.map((item, index) => (
                                    <div key={index}>
                                        <img src={item.pathImg} alt="" width="70%" />
                                    </div>
                                ))}
                            </Slider>
                        </ContainerImgMobile>
                    </ContainerMobile >
                    <EventTitleMobile>{this.props.data.Events[this.state.slideIndex].name}</EventTitleMobile>

                    <ContDotsMobile>
                        {Array.from({ length: this.props.data.Events.length }).map((item, index) => (
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
        return (
            <div>
                <SubTitle >Our Events</SubTitle>
                <Container onMouseEnter={this.HoverTrue} onMouseLeave={this.HoverFalse} onClick={() => window.open(this.props.data.Events[this.state.slideIndex].link, "_self")}>
                    <ContainerLogo>
                        {this.props.data.Events.map((Image, index) => {
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
                            {this.props.data.Events.map((item, index) => (
                                <div key={index}>
                                    <img src={item.pathImg} alt="" width="95%" />
                                </div>
                            ))}
                        </Slider>
                    </ContainerImg>

                </Container >
                <EventTitle>{this.props.data.Events[this.state.slideIndex].name}</EventTitle>

                <ContDots>
                    {Array.from({ length: this.props.data.Events.length }).map((item, index) => (
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