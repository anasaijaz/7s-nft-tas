// @ts-nocheck

import React, { useState } from 'react'
import Appbar from "../../components/UI/Appbar/Appbar";
import {Box, Button, Container, Grid, Icon, IconButton, Paper, Typography, useTheme} from "@mui/material";
import {FiShoppingCart, FiUsers} from "react-icons/all";
import 'react-vertical-timeline-component/style.min.css';
import Footer from "../../components/UI/Footer/Footer";
import RoadMapSVG from '../../assets/svg/roadmap.svg'
import CEO from '../../assets/svg/ceo.svg'
import {useNavigate} from "react-router-dom";
import Biometric from '../../assets/png/airplane.jpg'
import Metamask from '../../assets/svg/wallets/coinbase.svg'
import Carousel from "../../components/UI/Carousel/Carousel";
import usecaseA from '../../assets/png/usecases/img.png'
import usecaseB from '../../assets/png/usecases/img_1.png'
import usecaseC from '../../assets/png/usecases/img_2.png'
import usecaseD from '../../assets/png/usecases/img_3.png'
import usecaseE from '../../assets/png/usecases/img_4.png'
import usecaseF from '../../assets/png/usecases/img_5.png'
import usecaseG from '../../assets/png/usecases/img_6.png'

const map = [
    {
        url: usecaseA,
        text: 'Make sure that people are who they are'
    },
    {
        url: usecaseB,
        text: 'Deal with impostors and prevent identity fraud.'
    },
    {
        url: usecaseC,
        text: 'Allow for people to identify themselves, even in countries where formal identification is not possible at the time'
    },
    {
        url: usecaseD,
        text: 'Give people ownership of their ID'
    },
    {
        url: usecaseE,
        text: 'Help blockchain services struggling with identity issues'
    },
    {
        url: usecaseF,
        text: 'Remove middleman for the purpose of identification'
    }
]

function Index() {
    const theme = useTheme()

    return (
        <>
        <Container maxWidth="lg" component={Box}>

            <Appbar/>

            <Box style={theme.mixins.toolbar}/>

            <Hero/>

            <Divider/>

            <Typography paragraph variant='h5' fontWeight='bold'>
                What is Blockchain?
            </Typography>

            <Box>
                <Grid container spacing={5}>
                    <Grid item xs={3}>
                        <Box p={3} sx={{
                            borderRadius: '20px'
                        }}>
                      <Typography variant='body2'>
                          CAPITAL MANAGEMENT, ENTRY-INTO-SERVICE, PROTECTION AND LIQUIDATION OF AERO ASSETS AND EQUIPMENT
                      </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box p={3} sx={{
                            borderRadius: '20px'
                        }}>
                        <Typography variant='body2'>
                            EXPERT ANALYSIS, DIAGNOSIS, AND ADVICE OF COMPLEX ISSUES FOR AERO INDUSTRY
                        </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box p={3} sx={{
                            borderRadius: '20px'
                        }}>
                        <Typography variant='body2'>
                            TOTAL MATERIAL SUPPORT ON HARDWARES, CONSUMABLES, RAW MATERIALS, COMPOSITES AND MORE
                        </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box p={3} sx={{
                            borderRadius: '20px',
                        }}>
                        <Typography variant='body2'>
                            REPAIR MANAGEMENT OF AVIONIC, MECHANICAL AND PNEMATIC, HYDRAULIC, FUEL AND OIL COMPONENTS
                        </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>


            <Divider/>


            <Grid container spacing={3}>
            {
                map.map(value => <Grid xs={3} item>
                    <Box p={2} borderRadius='10px' bgcolor='white' minHeight='280px'>
                        <img src={value.url} width='100%' />
                        <Typography variant='body1' textAlign='center'>
                            {value.text}
                    </Typography>
                </Box>
                </Grid>)
            }
            </Grid>


            <Divider/>

            <Typography paragraph variant='h5' fontWeight='bold'>
                What is NFT?
            </Typography>

            <Box>
                <Grid container spacing={5}>
                    <Grid item xs>
                        <Box p={3} sx={{
                            borderRadius: '20px'
                        }}>
                            <Typography variant='body2'>
                                Non-Fungible Tokens (NFTs) are a “one-of-a-kind” unit of data stored on a blockchain, and because of its unique properties, NFT can neither be replaced nor interchanged and it serves as the most secure proof of ownership.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Divider/>

            <NFTList/>

            <Divider/>

            <Utilities/>

            <Divider/>

            <Paper variant='outlined'>
            <Box p={4} sx={{
                backgroundRepeat: 'no-repeat',
            }} className='history'>
                <Typography gutterBottom variant='h5' fontWeight='bold'>
                    Our History
                </Typography>
                <Typography variant='body1'>
                    TAS has assembled a team of highly skilled professionals with a combined industry experience of more than 50 years. These team members are A listers in Financing, Supply Chain, Parts Trading, Aircraft Technical, Business Development, Back To Birth Trace, Quality Standards, Regulatory Requirements etc... Together with a vast network of industry contacts and consultants, TAS primes itself being at the very best of the industry.
                </Typography>
            </Box>
            </Paper>

            <Divider/>

        </Container>

        </>
    )
}

const Divider = () => {
    return (<Box my={6}/>)
}

const Hero = () => {
    return (
        <Grid container mt={10} alignItems='center'>
            <Grid item xs={7}>
                <Box>
                    <Typography paragraph color='primary' fontWeight='700' variant='h3'>
                        Become a Fractional Owner of Our Intellectual Property
                    </Typography>
                    <Typography color='textSecondary' paragraph variant='subtitle1' maxWidth='60%'>
                        Transcend Aero Services is a company that specializes in providing professional, innovative and competent services for the aerospace and defense industry.
                    </Typography>
                    <Button variant='contained' size='large'>
                        Buy NFT
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={5}>
                <Box>
                    <img style={{
                        float: 'right',
                        borderRadius: '10px'
                    }}   width='80%' src={Biometric}/>
                </Box>
            </Grid>
        </Grid>
    )
}

const List = ({ListItem, xs=4}: {ListItem: any, xs?: number}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/product/2')
    }

    return (<Grid onClick={handleClick} container spacing={3}>
        {[1,2,3,4,5,6].map(item => <Grid item xs={12 / xs}>
            <ListItem/>
        </Grid>)}
    </Grid>)
}


export const Team = () => {
    return (
        <Box pb={6}>

            <Grid container>
                <Grid item xs={2}>
                    <img
                        style={{
                            borderRadius: '10px'
                        }}
                        height={'200px'}
                        src={'CEO'} />
                </Grid>
                <Grid item xs={9}>
                    <Box>
                        <Typography gutterBottom variant='h5' fontWeight='bold'>
                            Meet our team
                        </Typography>

                        <Typography fontWeight={600} color='primary' variant={'body1'}>
                            First name/Last name
                        </Typography>
                        <Typography fontWeight={600} color='secondary' variant={'subtitle1'}>
                            CEO
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}


const Utilities = () => {
    return (
        <Box>
            <Typography gutterBottom variant='h5' fontWeight='bold'>
                Benefits
            </Typography>

            <Typography paragraph variant='body1'>
                Yield and Dividends are pre-announced for NFT holders and shared monthly/quarterly.
            </Typography>

            {[{
                id: 1,
                title: 'Aviation News and -Join Aerospace -Community in SEA'
            },
                {
                    id: 2,
                    title: 'Whitelist slots to next fundraise project for future yield'
                }].map(item => (
                <Grid container alignItems='center' pb={2} width='550px' marginLeft={!(item.id % 2) ? 'auto' : 'none'}>
                    <Grid item xs={2} order={item.id % 2 ? 0 : 2}>
                        <Typography variant='h2' fontWeight={800} color={item.id % 2 ? 'secondary' : 'primary'} textAlign='center'>
                            {item.id}
                        </Typography>
                    </Grid>
                    <Grid item xs={10} order={1}>
                        <Typography variant='h6' >
                            {item.title}
                        </Typography>
                    </Grid>
                </Grid>
            ))}
        </Box>
    )
}

const RoadMap = () => {
    return (
        <Box>
            <img src={RoadMapSVG} width='100%'/>

            {/*<VerticalTimeline animate={false}>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--work"*/}
            {/*        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}*/}
            {/*        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}*/}
            {/*        date="2011 - present"*/}
            {/*        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Creative Director</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>*/}
            {/*        <p>*/}
            {/*            Creative Direction, User Experience, Visual Design, Project Management, Team Leading*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--work"*/}
            {/*        date="2010 - 2011"*/}
            {/*        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Art Director</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>*/}
            {/*        <p>*/}
            {/*            Creative Direction, User Experience, Visual Design, SEO, Online Marketing*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--work"*/}
            {/*        date="2008 - 2010"*/}
            {/*        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Web Designer</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>*/}
            {/*        <p>*/}
            {/*            User Experience, Visual Design*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--work"*/}
            {/*        date="2006 - 2008"*/}
            {/*        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Web Designer</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>*/}
            {/*        <p>*/}
            {/*            User Experience, Visual Design*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--education"*/}
            {/*        date="April 2013"*/}
            {/*        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>*/}
            {/*        <p>*/}
            {/*            Strategy, Social Media*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--education"*/}
            {/*        date="November 2012"*/}
            {/*        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">Certification</h4>*/}
            {/*        <p>*/}
            {/*            Creative Direction, User Experience, Visual Design*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        className="vertical-timeline-element--education"*/}
            {/*        date="2002 - 2006"*/}
            {/*        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}*/}
            {/*    >*/}
            {/*        <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>*/}
            {/*        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>*/}
            {/*        <p>*/}
            {/*            Creative Direction, Visual Design*/}
            {/*        </p>*/}
            {/*    </VerticalTimelineElement>*/}
            {/*    <VerticalTimelineElement*/}
            {/*        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}*/}
            {/*    />*/}
            {/*</VerticalTimeline>*/}
        </Box>
    )
}


export const NFTList =  ({disableTitle = false} : {disableTitle: boolean}) => {
    return (<Box>

        {!disableTitle && <>
            <Typography gutterBottom variant='h5' fontWeight='bold'>
            NFT List
            </Typography>

            <Typography paragraph variant='body1'>
            List of nfts
            </Typography>
        </>
        }
        <List ListItem={NFT}/>
    </Box>)
}


const SponsorsList = () => {
    return (
        <Box>
            <Typography gutterBottom variant='h5' fontWeight='bold'>
                Our Partners
            </Typography>

            <Carousel/>
        </Box>
    )
}

const Sponsor = () => {
    return (
        <Box>
            <img src={'https://www.w3schools.com/css/img_lights.jpg'} width='100%'/>
        </Box>
    )
}

export const NFT = () => {
    return (
        <Box bgcolor='white' sx={{
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;',
            borderRadius: '18px',
            overflow: 'hidden'
        }}>
            <Box minHeight='200px'>
                <img
                    height={'200px'}
                    width={'100%'}
                    style={{
                        objectFit: 'cover'
                    }}
                    src={'https://icons.veryicon.com/png/o/business/work-circle/smart-contracts.png'}
                />
            </Box>

            <Box p={2}>

            <Typography variant='body1'>
                NFT
            </Typography>

            <Typography paragraph variant='body2'>
                Tap NFT to fund raise US$5m to support Cargo Aircraft Engines
            </Typography>

            <Box display='flex' mt={3}>
                <Box sx={{
                    flexGrow: 1
                }}>
                <IconButton sx={{
                    backgroundColor: 'orange',
                    color: 'white'
                }}>
                   <FiShoppingCart/>
                </IconButton>
                </Box>
                <Box >
                    <Typography variant='body2' color='primary' fontWeight={600}>
                        Reserve Price
                    </Typography>
                    <Typography variant='body2' align='right'>
                        1500
                    </Typography>
                </Box>
            </Box>

        </Box>

            <Button
                variant='contained'
                sx={{
                    width: '100%',
                    borderRadius: '0%',
                    height: '50px'
                }}>
                Place bid
            </Button>

        </Box>
    )
}

export default Index
