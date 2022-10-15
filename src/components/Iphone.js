import React ,{useState}from 'react';
import './iphone.css'
import { Image,Text,Input,Link } from '@chakra-ui/react'
import logos from './images/pack2779.png'
import facebookLogo from './images/facebook.png'
import instagramlogo from './images/instagram.png'
import twitterLogo from './images/twitter.png'
function Iphone() {
    const [show, setShow] = useState(false)

    return (
        <div className='iphone'>
            <div className='logos'>
                <Image src={logos} alt='Dan Abramov' />
                <div className='ImageAndName'>
                <Text className='name' fontSize='4xl'> ようこそ!</Text>
            <Text className='name' fontSize='lg'>Bem-vindo(a)!</Text>
            </div>

            <Input placeholder='Email' size='md' />
            <Input
                                    // pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Sneha'
                                />

            </div>

            <div className='xyz'>   usar social login   </div>
                



                    <div className='socialmedia'>
                        <Image className='logo' src={facebookLogo} alt='Dan Abramov' />
                        <Image className='logo' src={twitterLogo} alt='Dan Abramov' />
                        <Image className='logo' src={instagramlogo} alt='Dan Abramov' />


        </div>
        <div><Text className='name' fontSize='xl'>Já é membro?
                            <span ><Link>Faça Login</Link></span></Text></div>
                    
        </div>
    )
}

export default Iphone;