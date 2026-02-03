import Link from "next/link"

const ServicesPage = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Admin Services</h1>    
            <p>Manage your services here.</p>
            <Link className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600" href="/admin/services/add">Tambah Service</Link>
        </div>
    )
}   
export default ServicesPage