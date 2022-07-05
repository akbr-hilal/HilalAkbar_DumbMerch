export const product = [
    {
        id: 1,
        title: "Keyboard RGB",
        description: "Keyboard RGB Gaming Wireless",
        price: "500.000",
        qty: "220", 
        category: "Keyboard",
        img: "https://baxtros.co.uk/wp-content/uploads/2020/10/Black-keyboard-LED-3.jpg"
    },
    {
        id: 2,
        title: "Mouse RGB",
        description: "Mouse RGB Gaming Wireless",
        price: "350.000",
        qty: "100",
        category: "Mouse",
        img: "https://th.bing.com/th/id/OIP.KCPhqyxMDFXrsdI3XGG_GAHaHa?pid=ImgDet&rs=1"
    },
    {
        id: 3,
        title: "Bag Eiger",
        description: "Mouse RGB Gaming Wireless",
        price: "250.000",
        qty: "149",
        category: "Bag",
        img: "https://s2.bukalapak.com/img/7899451071/w-1000/Tas_Selempang_Eiger_Shoulder_Bag_Expend_Black.jpg"
    }
]

export const transaction = [
    {
        id: 1,
        idTransaction: 20 + (Math.random() * 25),
        title: "Mouse RGB",
        img: "https://th.bing.com/th/id/OIP.KCPhqyxMDFXrsdI3XGG_GAHaHa?pid=ImgDet&rs=1",
        date: "2022-07-05",
        price: "350.000",
        subTotal: "350.000"
    },
    {
        id: 2,
        idTransaction: 20 + (Math.random() * 2),
        title: "Keyboard RGB",
        img: "https://baxtros.co.uk/wp-content/uploads/2020/10/Black-keyboard-LED-3.jpg",
        date: "2022-06-21",
        price: "500.000",
        subTotal: "500.000"
    }
]

export const category = [
    {
        id: 1,
        title: "Keyboard",
    },
    {
        id: 2,
        title: "Mouse",
    },
    {
        id: 3,
        title: "Bag",
    },
    {
        id: 4,
        title: "Monitor",
    },
    {
        id: 5,
        title: "Headset",
    }
]


export const account = [
    {
        id: 1,
        name: "Alamanda Rahamwati",
        email: "al@mail.com",
        password: "1212",
        img: "../assets/Admin.jpg",
        gender: "Female",
        phone: "0856-1320-1212",
        address: "Jalan Godean No. 11, RT 50 / RW 21, Slemean, Yogyakarta 55731",
        role: {
            admin: true,
            user: false
        }
    },
    {
        id: 2,
        name: "Rahmawati",
        email: "rah@mail.com",
        password: "rah121202",
        img: "../assets/Admin.jpg",
        phone: "0856-5544-1212",
        gender: "Female",
        address: "Jalan Mars No. 11, RT 12 / RW 05, Margahayu, Bandung, Jawa Barat 41123",
        role: {
            admin: true,
            user: false
        }
    },
    {
        id: 3,
        name: "Hilal Akbar",
        email: "hilal@mail.com",
        password: "hil121202",
        img: "../assets/Profile.jpg",
        phone: "0856-1320-1212",
        gender: "Male",
        address: "Jalan Peta No. 121, RT 02 / RW 01, Balokang, Banjar, Jawa Barat 46312",
        role: {
            admin: false,
            user: true
        }
    },
]

