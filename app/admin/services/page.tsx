import { GetService } from "@/services/service";
import Link from "next/link"

const ServicesPage = async() => {
    const {data} = await GetService();
    console.log(data);
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Admin Services</h1>    
            <p className=" mb-4">Manage your services here.</p>
            <Link className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600" 
            href="#">Tambah Service</Link>
            <div className="grid grid-cols-5 gap-4 mt-4">
                {data && data.map((service)=>(
                    <div key={service.id} className="border p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
                        <p>Min Usage: {service.min_usage}</p>   
                        <p>Max Usage: {service.max_usage}</p>
                        <p>Price: {service.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}   
export default ServicesPage