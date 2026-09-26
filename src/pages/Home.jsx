import React from 'react';
import Hero from "../components/hero";
import CardGrid from '../components/CardGrid';

function Home({fitur}) {
    return (
        <div className="text-green-500">Home

        <section>
                <Hero />
        </section>
        <section>
            <CardGrid features={fitur} />
        </section>
        </div>
    )
}

export default Home;