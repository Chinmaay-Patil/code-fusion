
import React ,{useState} from 'react';
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import logo from './images/logo.png'
import pack2818 from './images/pack2818 1.png'
import facebookLogo from './images/facebook.png'
import instagramlogo from './images/instagram.png'
import warriorImage from './images/ddkkrta-d3d6161c-7370-4ec7-a1e0-6a051999be0f.png'
import { Link } from '@chakra-ui/react'
import twitterLogo from './images/twitter.png'
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'


 function Webpage() {


    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return (
        <div className="App">
            <div className='leftpanel'>
                <div className='logoName'>
                    <div><Image src={logo} alt='Dan Abramov' /></div>
                    <div><Text className='name' fontSize='xl'>anime <span >yabu</span></Text></div>
                </div>


                <div className='form'>
                    <div className='ImageAndName'>
                        <Image className='pack2818' src={pack2818} alt='Dan Abramov' />
                        <Text className='name' fontSize='4xl'> ようこそ!</Text>
                        <Text className='name' fontSize='lg'>Bem-vindo(a)!</Text>
                    </div>

                    <div className='forminput'>
                        <InputGroup className='forminput'>
                            <Input placeholder='Email' size='md' />

                            <InputGroup className='input' size='md'>

                                <Input
                                    // pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Sneha'
                                />


                                <InputRightElement width='4.5rem'>
                                    <Button colorScheme='#CA38ED;' h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>

                            <InputGroup size='md'>

                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Confirmar Sneha'
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button colorScheme='#CA38ED;' h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>

                            </InputGroup>
                            <Button colorScheme='#CA38ED;' className='input' size='lg'>Registrar</Button>
                        </InputGroup>
                        <div className='xyz'>   Ou se registre com    </div>
                    </div>



                    <div className='socialmedia'>
                        <Image className='logo' src={facebookLogo} alt='Dan Abramov' />
                        <Image className='logo' src={twitterLogo} alt='Dan Abramov' />
                        <Image className='logo' src={instagramlogo} alt='Dan Abramov' />

                    </div>
                    <div className='loginlink'>

                        <div><Text className='name' fontSize='xl'>Já é membro?
                            <span ><Link>Faça Login</Link></span></Text></div>
                    </div>
                </div>
            </div>




            <div className='rightPanel'>
                <div className='dot'></div>
                <Image className='warriorimg' src={warriorImage} alt='Dan Abramov' />
                <div className='textt'>

                    <div>
                        <div><Text as='b' className='name' fontSize='6xl'>anime
                            <span >yabu.</span></Text></div>
                        <Text> Assista animes online em HD, legendado ou dublado,<br />
                            no seu celular ou computador.<br />
                            Animeyabu, o seu portal de animes online!</Text>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Webpage;