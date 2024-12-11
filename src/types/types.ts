export type InitialMenu = {
    _id?: string;
    name: string;
    description: string;
  };

  export type menu = {
    _id: string;
    name: string;
    description: string;
    items: menuItems[];
};

export type menuItems = {
    name: string;
    price: number | string;
    description: string;
};
