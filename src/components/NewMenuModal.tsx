import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import AddMenuItems from "./NewMenuItems";
import { InitialMenu } from "../types/types";


type Props = {
  close: () => void;
};



const AddMenuModal = ({ close }: Props) => {
  const [nextModal, setNextModal] = useState<boolean>(false);
  const [menu, setMenu] = useState<InitialMenu>({
    name: "",
    description: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMenu((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {nextModal ? (
        <AddMenuItems close={close} menu={menu} />
      ) : (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center h-screen z-10">
          <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg relative">
            <button
              onClick={close}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
            >
              <IoMdClose size={24} />
            </button>
            <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
              Add New Menu
            </h2>
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Menu Name
                </label>
                <input
                  onChange={handleFormChange}
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full border rounded-lg px-4 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter menu name"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Description
                </label>
                <textarea
                  onChange={handleFormChange}
                  id="description"
                  name="description"
                  required
                  className="w-full border rounded-lg px-4 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Add a brief description"
                  rows={4}
                ></textarea>
              </div>
              <div>
                <button
                  onClick={() => setNextModal(true)}
                  type="button"
                  disabled={!menu.name || !menu.description}
                  className={`flex w-full justify-center items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold shadow-md transition ${
                    menu.name && menu.description
                      ? "bg-indigo-600 text-white hover:bg-indigo-500"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Next 
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddMenuModal;
