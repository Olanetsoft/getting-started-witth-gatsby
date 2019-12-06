import React from 'react'
import {Link} from 'gatsby'

//components
import Layout from '../components/layout'
import SEO from '../components/seo'

class AboutPage extends React.Component {
    render(){
        return(
            <Layout title="Starter-Blog" subtitle="Built with React and Gatsby">
                <SEO title="About Page" />
                <div>
                    <p>Go to <Link to='/'>Home Page</Link></p>
                </div>
            </Layout>
        )
    }
}

export default AboutPage