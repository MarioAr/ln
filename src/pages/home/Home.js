import React from 'react';
// import { Header } from '../../components/header';
import { Header } from './header';
import Footer from './footer';
// import { Tags, GridTitle } from '../../components/feedback';
import { Content } from '../../components/layout';
import { SidebarAside, SidebarMain } from './sidebar';

// const Footer = () => <div>"Footer"</div>;

export default function Home(props) {

    const { Routing } = props;
    
    return (
        <div id="wrap">
            <Header />

            <Content>
                    <SidebarMain>
                        
                            <Routing />

                    </SidebarMain>

                    <SidebarAside >

                    </SidebarAside>
             </Content>

            <Footer />
        </div>
    )
}