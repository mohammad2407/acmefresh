import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import "./Navbar.css"
export const Navbar = () => {
    return (
        <div>
            <NavDiv>



                <Sections>
                    <Link to={`/checkout`}>
                        Checkout
                    </Link>
                </Sections>

                <Sections>
                    <Link to={`/store`}>

                     <div className='dropdown'>
                        <button className='dropbtn'> Store</button>
                        <div className='dropdown-content'>
                          <Link to={`/hydroponics`}>
                          <button> Hydroponics </button>
                            </Link> 
                            <Link to={`/setup-kit/Farm-setup`}>
                                <button>Farm Setup</button>
                            </Link>

                            <Link to={`setup-kit/Home-setup`}>
                                <button>Home Setup</button>
                            </Link>

                            <Link to={`setup-kit/Services`}>
                                <button>Services</button>
                            </Link>
                            <Link to={`/hydroponic/indoor-setup`}>
                                <button>Indoor</button> 
                            </Link>
                        </div>
                     </div>
                    </Link> 
                </Sections>

                <Sections>
                    <Link to={`/`}>
                       Home
                    </Link>
                </Sections>

                <Sections>
                    
                </Sections>
            </NavDiv>

        </div>
    )
}


const NavDiv = styled.div`
    width:100%;
    height:120px;
    position:fixed;
    background: #e4fdcdfa;
    top:-0px;
    display:flex;
    flex-direction: row-reverse;
    box-shadow: 1px 1px 3px #c7cfbff9;
    z-index:5;
`

const Sections = styled.div`
    width:13%;
    padding:2%;
    border-right:1px solid gray;

`