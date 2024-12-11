import { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { InitialMenu } from "../types/types";
import axios from "../axios/axios";
import { GlobalContext } from "./GlobalStateProvider";
import { menuItems } from "../types/types";

type props = {
  menu: InitialMenu;
  close: () => void;
};

const AddMenuItems = ({ menu, close }: props) => {
  const context = useContext(GlobalContext);
  const [selecteditems, setSelecteditems] = useState<menuItems[]>([]);
  if (!context) return;
  const {setMenus } = context;
  const [items, setItem] = useState({
    name: "",
    price: "",
    description: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (selecteditems.length === 0) {
      alert("Please select items before saving.");
      return;
    }

    const data = {
      selecteditems,
      menu,
    };

    try {
      const response: any = await axios.post("/menu", { data });
      if (response) {
        setMenus((prev) => [...prev, response.data.menu]);
        close();
      }
    } catch (error) {
      close();
      console.error(error);
    }
  };

  return (
    <div className="bg-black bg-opacity-50 fixed inset-0 flex justify-center items-center z-10">
      <div className="max-w-[500px] w-full bg-white p-8 rounded-lg relative shadow-lg">
        <button onClick={close} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          <IoMdClose size={20} />
        </button>
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Add Menu Items</h2>

        <div className="flex gap-2 flex-wrap mb-4">
          {selecteditems.map((elem, index) => (
            <span
              key={index}
              className="bg-indigo-600 text-white px-4 py-1 rounded-lg text-sm"
            >
              {elem.name}
            </span>
          ))}
        </div>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-900 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={items.name}
              onChange={handleFormChange}
              className="w-full rounded-md border px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-900 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={items.description}
              onChange={handleFormChange}
              className="w-full rounded-md border px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-900 mb-1"
            >
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              value={items.price}
              onChange={handleFormChange}
              className="w-full rounded-md border px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => {
                setSelecteditems((prev) => [
                  ...prev,
                  { ...items },
                ]);
                setItem({
                  name: "",
                  description: "",
                  price: "",
                });
              }}
              className="flex-1 rounded-md bg-indigo-600 text-white py-2 px-4 hover:bg-indigo-500 transition"
            >
              Select
            </button>

            <button
              type="button"
              onClick={handleSubmit}
              className="flex-1 rounded-md bg-green-600 text-white py-2 px-4 hover:bg-green-500 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMenuItems;
