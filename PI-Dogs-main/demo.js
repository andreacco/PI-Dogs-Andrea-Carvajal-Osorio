const { dogDetail } = require("../../Desktop/PI-Dogs-Andrea-Carvajal-Osorio/PI-Dogs-main/api/src/routes/controllers")

const obj = {
    weight: {
        imperial: "6 - 13",
        metric: "3 - 6"
        },
    height: {
        imperial: "9 - 11.5",
        metric: "23 - 29"
    },
}
// let indice = obj.height.metric.indexOf(" ")
// let longHeight = d.height.metric.lenght
// const num = Number(obj.height.metric.substring(0, indice))
// const max = Number(d.height.metric.substring(longHeight, indice))
// console.log(num)
// console.log(max)
const minH = Number(obj.height.metric.slice(0, 2));
console.log(minH);
const maxH = Number(obj.height.metric.slice(4));
console.log(maxH);
const minW = Number(obj.weight.metric.slice(0, 2));
console.log(minW);
const maxW = Number(obj.weight.metric.slice(4));
console.log(maxW);

    function listAllDogs() {
    // Va a concatenar los datos de listDogsApi y listDogsBd y mostrarlos.
    const apiDogs = [
        {
        id: 1,
        name: "Zuffenpinscher",
        min_weight: "3",
        max_weight: "6",
        min_height:"23",
        max_height: "29",
        life_span: "10 - 12 years",
        temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
        img: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
        },
        {
        id: 2,
        name: "Tafghan Hound",
        min_weight:"23",
        max_weight:"27",
        min_height:"64",
        max_height:"69",
        life_span: "10 - 13 years",
        temperament: "Aloof, Clownish, Dignified, Independent, Happy",
        img:"https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg"
        },
];
    const dbDogs = [
        {
            id: 3,
            name: "My Dog",
            min_weight:"20",
            max_weight:"38",
            min_height:"69",
            max_height:"80",
            life_span: "11 - 15 years",
            temperament: "Independent, Happy",
            img:"https://www.google.com/images/hMyT4CDXR.jpg"
        },
        {
            id: 4,
            name: "Roggy",
            min_weight:"13",
            max_weight:"17",
            min_height:"54",
            max_height:"59",
            life_span: "15 - 16 years",
            temperament: "Kind, Lovely",
            img:"https://www.google.com/images/BJa4kxc4X.jpg"
        }
    ];
    let completeInfo = apiDogs.concat(dbDogs)
    console.log(completeInfo);
    let complete = completeInfo.sort((a, b) => a > b ? 1 : -1);
    console.log(complete);
}
listAllDogs()

function dogDetail(id) {
    const dogsList = [{
            id: 1,
            name: "lucky",
            breed: "poodle"
        },
        {
            id: 2,
            name: "toby",
            breed: "husky"
        },
        {
            id: 3,
            name: "mia",
            breed: "samoyed"
        },
        {
            id: 4,
            name: "meli",
            breed: "pomsky"
        },
    ]
    const dogExists = dogsList.find((d) => d.id === id)
    if (dogExists) {
        return dogExists
    }
}
console.log(dogDetail(3))
console.log(dogDetail(1))


function listTemperamentsApi() {
    const api = [
        {
        weight: {
        imperial: "6 - 13",
        metric: "3 - 6"
        },
        height: {
        imperial: "9 - 11.5",
        metric: "23 - 29"
        },
        id: 1,
        name: "Affenpinscher",
        bred_for: "Small rodent hunting, lapdog",
        breed_group: "Toy",
        life_span: "10 - 12 years",
        temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
        origin: "Germany, France",
        reference_image_id: "BJa4kxc4X",
        image: {
        id: "BJa4kxc4X",
        width: 1600,
        height: 1199,
        url: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
        }
        },
        {
        weight: {
        imperial: "50 - 60",
        metric: "23 - 27"
        },
        height: {
        imperial: "25 - 27",
        metric: "64 - 69"
        },
        id: 2,
        name: "Afghan Hound",
        country_code: "AG",
        bred_for: "Coursing and hunting",
        breed_group: "Hound",
        life_span: "10 - 13 years",
        temperament: "Aloof, Clownish, Dignified, Independent, Happy",
        origin: "Afghanistan, Iran, Pakistan",
        reference_image_id: "hMyT4CDXR",
        image: {
        id: "hMyT4CDXR",
        width: 606,
        height: 380,
        url: "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg"
        }
        },
        {
        weight: {
        imperial: "44 - 66",
        metric: "20 - 30"
        },
        height: {
        imperial: "30",
        metric: "76"
        },
        id: 3,
        name: "African Hunting Dog",
        bred_for: "A wild pack animal",
        life_span: "11 years",
        temperament: "Wild, Hardworking, Dutiful",
        origin: "",
        reference_image_id: "rkiByec47",
        image: {
        id: "rkiByec47",
        width: 500,
        height: 335,
        url: "https://cdn2.thedogapi.com/images/rkiByec47.jpg"
        }
        },
        {
        weight: {
        imperial: "40 - 65",
        metric: "18 - 29"
        },
        height: {
        imperial: "21 - 23",
        metric: "53 - 58"
        },
        id: 4,
        name: "Airedale Terrier",
        bred_for: "Badger, otter hunting",
        breed_group: "Terrier",
        life_span: "10 - 13 years",
        temperament: "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous",
        origin: "United Kingdom, England",
        reference_image_id: "1-7cgoZSh",
        image: {
        id: "1-7cgoZSh",
        width: 645,
        height: 430,
        url: "https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg"
        }
        },
        {
        weight: {
        imperial: "90 - 120",
        metric: "41 - 54"
        },
        height: {
        imperial: "28 - 34",
        metric: "71 - 86"
        },
        id: 5,
        name: "Akbash Dog",
        bred_for: "Sheep guarding",
        breed_group: "Working",
        life_span: "10 - 12 years",
        temperament: "Loyal, Independent, Intelligent, Brave",
        origin: "",
        reference_image_id: "26pHT3Qk7",
        image: {
        id: "26pHT3Qk7",
        width: 600,
        height: 471,
        url: "https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg"
        }
        },
]
    let temp = api.map((d) => d.temperament)
    console.log(temp)
    temp = temp.join(", ")
    console.log(temp)
    temp = temp.split(", ")
    console.log(temp)

}
listTemperamentsApi();

router.get('/', async (req, res, next) => {
    const { name } = req.query;
    try {
        if(name) {
            try {
                const findDog = await searchDogs(name);
                if(findDog.length > 0) {
                    res.status(200).send(findDog);
                    }
            } catch(err){
                console.log(err)
                res.status(404).send({ error: err.message }); // REVISAR!!!
            }
        }
        const allDogs = await listAllDogs()
        res.status(200).send(allDogs);
    } catch(error) {
        next(error);
    }
});


router.get('/', async (req, res, next) => {
    try {
        const allDogs = await listAllDogs()
        res.status(200).send(allDogs);
    } catch(error) {
        next(error);
    }
});

router.get('/', async (req, res, next) => {
    const { name } = req.query;
    try {
            if(name) {
            const findDog = await searchDogs(name);
                if (findDog.length > 0){
            res.status(200).send(findDog);
                } else throw Error
            }
    } catch(err){
        console.log(err)
        res.status(404).send({ error: err.message }); // REVISAR!!!
    }
});