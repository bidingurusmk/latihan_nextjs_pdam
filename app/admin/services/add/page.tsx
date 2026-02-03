const AddServicePage = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Add New Service</h1>    
            <p>Use this page to add a new service.</p>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="serviceName">Service Name</label>
                    <input type="text" id="serviceName" name="serviceName" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="MinUsage">Min Usage</label>
                    <input type="text" id="MinUsage" name="MinUsage" />
                </div>
                <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">Add Service</button>
            </form>
        </div>
    )
}   
export default AddServicePage