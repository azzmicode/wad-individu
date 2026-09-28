import Card from "./card";
import { useEffect } from "react";
import { getData } from "../api/getData";


function CardGrid({ features }) {

useEffect(() => {
  const fetchData = async () => {
    const data = await getData();
    setDataProducts(data);
  }
  fetchData();
}, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-2 border-green-500 p-4">
         
           {features.map((data) => {
            return (
                    <Card key={data.id} icon={data.icon} title={data.title} description={data.subtitle}/>
            )
           })
        }
        </div>
    );
}
export default CardGrid;