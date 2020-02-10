import React from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { Content } from '../../components/layout';
import { SidebarAside, SidebarMain } from './sidebar';
import { Navbar } from './nav';

export default function Home(props) {

    const { Routing } = props;
    
    return (
        <div id="wrap">
            <Header />

            <Navbar />

            <Content>
                    <SidebarMain>
                        
                            <Routing />
                    {/* <div className="banner --small --mobile"></div>
                    <div className="transparency" ></div> */}
                    
                    </SidebarMain>

                    <SidebarAside >

                    </SidebarAside>
             </Content>

            <Footer />
        </div>
    )
}