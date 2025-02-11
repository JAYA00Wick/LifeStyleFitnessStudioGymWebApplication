import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar";
import DropDownNavBar from "../../components/DropDownNavBar";
import backgroundImage from "../../assets/sim.jpg";
import { Link } from "react-router-dom";

function InventoryShow() {
  const [mobileView] = useState(window.innerWidth < 768);
  const [inventory, setInventory] = useState([]);
  const sidebarVisible = !mobileView; // Check if sidebar is visible

  useEffect(() => {
    // Fetch inventory data from your backend API
    const fetchInventory = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/inventory");
        if (!response.ok) {
          throw new Error("Failed to fetch inventory data");
        }
        const data = await response.json();
        setInventory(data.inventory);
      } catch (error) {
        console.error("Error fetching inventory data:", error);
      }
    };

    fetchInventory();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/inventory/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete inventory item");
      }
      // Filter out the deleted item from the inventory list
      setInventory(inventory.filter((item) => item._id !== id));
      alert("Inventory item deleted successfully");
    } catch (error) {
      console.error("Error deleting inventory item:", error);
      alert("Failed to delete inventory item. Please try again.");
    }
  };

  return (
    <div
      className={`relative flex ${mobileView ? "flex-col" : "flex-row"}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div>{mobileView ? <DropDownNavBar /> : <SideBar />}</div>
      <div className={`flex flex-col mx-auto`}>
        <div>
          <h2 className="m-8 font-bold text-5xl text-center text-black">
            Inventory
          </h2>
          <table
            className=" w-full max-w-2xl mt-4 text-black"
            style={{ border: "none" }}
          >
            <thead className="bg-black-200">
              <tr>
                <th className="border p-2">Item</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Description</th>
                <th className="border p-2">Downloads</th>
                <th className="border p-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => (
                <tr key={item._id}>
                  <td className="border p-2">{item.itemName}</td>
                  <td className="border p-2">{item.status}</td>
                  <td className="border p-2">{item.description}</td>
                  <td className="border p-2">Download Details</td>
                  <td className="border p-2 text-red-600">
                    <button onClick={() => handleDelete(item._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to="/add-inventory">
          <button
            className={`bg-green-500 text-white py-2 px-4 rounded mt-4 hover:bg-green-600`}
          >
            Add To Inventory
          </button>
        </Link>
      </div>
    </div>
  );
}

export default InventoryShow;
