const { dogDetail } = require("../../Desktop/PI-Dogs-Andrea-Carvajal-Osorio/PI-Dogs-main/api/src/routes/controllers")

// const rootReducer = (state = initialState, action) => {
    //     switch (action.type) {
    //         case GET_ALL_DOGS:
    //             return{
    //                 ...state,
    //                 dogs: action.payload,
    //                 allDogs: action.payload
    //             }
    //         case GET_DOG_DETAIL:
    //         case CLEAR_DOG_DETAIL:
    //         case CREATE_DOG:
    //         case SEARCH_DOG:
    //         case GET_TEMPERAMENTS:
    //         case FILTER_BY_CREATED_DOGS:
    //         case FILTER_BY_TEMPERAMENT:
    //         case SORT_BY:
    //             // {type: SORT_BY, payload: type(el tipo de orden que escoje el cliente)}
    //             let sorteredDogs = []
    //             if(action.payload == "nameAsc") {
                    
    //             }
    //             if(action.payload == "nameDesc") {
    
    //             }
    //             if(action.payload == "weightAsc") {
    
    //             }
    //             if(action.payload == "weightDesc") {
    
    //             }
    //             return {
    //                 ...state,
    //                 dogs: action.payload == "all" ? state.dogs : sorteredDogs,
    //                 sortFilter: {
    //                     ...state.sortFilter,
    //                     sortType: action.payload
    //             }
    //         default: 
    //             return {...state};
    //     };
    // };

// PERROS PARA AGREGAR:
{
  "name": "My doggie",
  "minHeight": 8,
  "maxHeight": 12,
  "minWeight": 2,
  "maxWeight": 5,
  "lifeSpanMin": 10,
  "lifeSpanMax": 12,
  "temperament": "Happy, Alert, Bright, Intelligent, Protective"
}
{
  "name": "Doggie",
  "minHeight": 10,
  "maxHeight": 14,
  "minWeight": 5,
  "maxWeight": 8,
  "lifeSpanMin": 10,
  "lifeSpanMax": 12,
  "temperament": "Cooperative, Active, Affectionate"
}
{
  "name": "Mine",
  "minHeight": 20,
  "maxHeight": 25,
  "minWeight": 15,
  "maxWeight": 25,
  "lifeSpanMin": 12,
  "lifeSpanMax": 14,
  "temperament": "Bubbly, Adaptable, Adventurous"
}



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
    temp = temp.sort();
    console.log(temp)

    let noRepeat = [];
        
        for (let i = 0; i < temp.length; i++) {
            const currentTemp = temp[i];
            if(!noRepeat.includes(currentTemp)) {
                noRepeat.push(currentTemp)
            }
        }
        const fullTemps = noRepeat.filter(Boolean) // elimino los strings vacios de mi array
    console.log(fullTemps)
        console.log(fullTemps.length)
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


[
    {
      id: 1,
      name: "Affenpinscher",
      min_height: 23,
      max_height: 29,
      min_weight: 3,
      max_weight: 6,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
      img: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
    },
    {
      id: 2,
      name: "Afghan Hound",
      min_height: 64,
      max_height: 69,
      min_weight: 23,
      max_weight: 27,
      life_span_min: 10,
      life_span_max: 13,
      temperament: "Aloof, Clownish, Dignified, Independent, Happy",
      img: "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg"
    },
    {
      id: 3,
      name: "African Hunting Dog",
      min_height: 76,
      max_height: 0,
      min_weight: 20,
      max_weight: 30,
      life_span_min: 11,
      life_span_max: 11,
      temperament: "Wild, Hardworking, Dutiful",
      img: "https://cdn2.thedogapi.com/images/rkiByec47.jpg"
    },
    {
      id: 4,
      name: "Airedale Terrier",
      min_height: 53,
      max_height: 58,
      min_weight: 18,
      max_weight: 29,
      life_span_min: 10,
      life_span_max: 13,
      temperament: "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous",
      img: "https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg"
    },
    {
      id: 5,
      name: "Akbash Dog",
      min_height: 71,
      max_height: 86,
      min_weight: 41,
      max_weight: 54,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Loyal, Independent, Intelligent, Brave",
      img: "https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg"
    },
    {
      id: 6,
      name: "Akita",
      min_height: 61,
      max_height: 71,
      min_weight: 29,
      max_weight: 52,
      life_span_min: 10,
      life_span_max: 14,
      temperament: "Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous",
      img: "https://cdn2.thedogapi.com/images/BFRYBufpm.jpg"
    },
    {
      id: 7,
      name: "Alapaha Blue Blood Bulldog",
      min_height: 46,
      max_height: 61,
      min_weight: 25,
      max_weight: 41,
      life_span_min: 12,
      life_span_max: 13,
      temperament: "Loving, Protective, Trainable, Dutiful, Responsible",
      img: "https://cdn2.thedogapi.com/images/33mJ-V3RX.jpg"
    },
    {
      id: 8,
      name: "Alaskan Husky",
      min_height: 58,
      max_height: 66,
      min_weight: 17,
      max_weight: 23,
      life_span_min: 10,
      life_span_max: 13,
      temperament: "Friendly, Energetic, Loyal, Gentle, Confident",
      img: "https://cdn2.thedogapi.com/images/-HgpNnGXl.jpg"
    },
    {
      id: 9,
      name: "Alaskan Malamute",
      min_height: 58,
      max_height: 64,
      min_weight: 29,
      max_weight: 45,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Friendly, Affectionate, Devoted, Loyal, Dignified, Playful",
      img: "https://cdn2.thedogapi.com/images/dW5UucTIW.jpg"
    },
    {
      id: 10,
      name: "American Bulldog",
      min_height: 56,
      max_height: 69,
      min_weight: 27,
      max_weight: 54,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant",
      img: "https://cdn2.thedogapi.com/images/pk1AAdloG.jpg"
    },
    {
      id: 11,
      name: "American Bully",
      min_height: 36,
      max_height: 43,
      min_weight: 14,
      max_weight: 68,
      life_span_min: 8,
      life_span_max: 15,
      temperament: "Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous",
      img: "https://cdn2.thedogapi.com/images/sqQJDtbpY.jpg"
    },
    {
      id: 12,
      name: "American Eskimo Dog",
      min_height: 38,
      max_height: 48,
      min_weight: 9,
      max_weight: 18,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Friendly, Alert, Reserved, Intelligent, Protective",
      img: "https://cdn2.thedogapi.com/images/Bymjyec4m.jpg"
    },
    {
      id: 13,
      name: "American Eskimo Dog (Miniature)",
      min_height: 23,
      max_height: 30,
      min_weight: 3,
      max_weight: 5,
      life_span_min: 13,
      life_span_max: 15,
      temperament: "Friendly, Alert, Reserved, Intelligent, Protective",
      img: "https://cdn2.thedogapi.com/images/_gn8GLrE6.jpg"
    },
    {
      id: 14,
      name: "American Foxhound",
      min_height: 53,
      max_height: 71,
      min_weight: 29,
      max_weight: 34,
      life_span_min: 8,
      life_span_max: 15,
      temperament: "Kind, Sweet-Tempered, Loyal, Independent, Intelligent, Loving",
      img: "https://cdn2.thedogapi.com/images/S14n1x9NQ.jpg"
    },
    {
      id: 15,
      name: "American Pit Bull Terrier",
      min_height: 43,
      max_height: 53,
      min_weight: 14,
      max_weight: 27,
      life_span_min: 10,
      life_span_max: 15,
      temperament: "Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous",
      img: "https://cdn2.thedogapi.com/images/HkC31gcNm.png"
    },
    {
      id: 16,
      name: "American Staffordshire Terrier",
      min_height: 43,
      max_height: 48,
      min_weight: 23,
      max_weight: 27,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Tenacious, Friendly, Devoted, Loyal, Attentive, Courageous",
      img: "https://cdn2.thedogapi.com/images/rJIakgc4m.jpg"
    },
    {
      id: 17,
      name: "American Water Spaniel",
      min_height: 38,
      max_height: 46,
      min_weight: 11,
      max_weight: 20,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Friendly, Energetic, Obedient, Intelligent, Protective, Trainable",
      img: "https://cdn2.thedogapi.com/images/SkmRJl9VQ.jpg"
    },
    {
      id: 18,
      name: "Anatolian Shepherd Dog",
      min_height: 69,
      max_height: 74,
      min_weight: 36,
      max_weight: 68,
      life_span_min: 11,
      life_span_max: 13,
      temperament: "Steady, Bold, Independent, Confident, Intelligent, Proud",
      img: "https://cdn2.thedogapi.com/images/BJT0Jx5Nm.jpg"
    },
    {
      id: 19,
      name: "Appenzeller Sennenhund",
      min_height: 51,
      max_height: 56,
      min_weight: 22,
      max_weight: 25,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Reliable, Fearless, Energetic, Lively, Self-assured",
      img: "https://cdn2.thedogapi.com/images/HkNkxlqEX.jpg"
    },
    {
      id: 21,
      name: "Australian Cattle Dog",
      min_height: 43,
      max_height: 51,
      min_weight: 20,
      max_weight: 28,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Cautious, Energetic, Loyal, Obedient, Protective, Brave",
      img: "https://cdn2.thedogapi.com/images/IBkYVm4v1.jpg"
    },
    {
      id: 22,
      name: "Australian Kelpie",
      min_height: 43,
      max_height: 51,
      min_weight: 14,
      max_weight: 21,
      life_span_min: 10,
      life_span_max: 13,
      temperament: "Friendly, Energetic, Alert, Loyal, Intelligent, Eager",
      img: "https://cdn2.thedogapi.com/images/Hyq1ge9VQ.jpg"
    },
    {
      id: 23,
      name: "Australian Shepherd",
      min_height: 46,
      max_height: 58,
      min_weight: 16,
      max_weight: 29,
      life_span_min: 12,
      life_span_max: 16,
      temperament: "Good-natured, Affectionate, Intelligent, Active, Protective",
      img: "https://cdn2.thedogapi.com/images/B1-llgq4m.jpg"
    },
    {
      id: 24,
      name: "Australian Terrier",
      min_height: 25,
      max_height: 28,
      min_weight: 6,
      max_weight: 7,
      life_span_min: 15,
      life_span_max: 15,
      temperament: "Spirited, Alert, Loyal, Companionable, Even Tempered, Courageous",
      img: "https://cdn2.thedogapi.com/images/r1Ylge5Vm.jpg"
    },
    {
      id: 25,
      name: "Azawakh",
      min_height: 58,
      max_height: 74,
      min_weight: 15,
      max_weight: 25,
      life_span_min: 10,
      life_span_max: 13,
      temperament: "Aloof, Affectionate, Attentive, Rugged, Fierce, Refined",
      img: "https://cdn2.thedogapi.com/images/SkvZgx94m.jpg"
    },
    {
      id: 26,
      name: "Barbet",
      min_height: 51,
      max_height: 66,
      min_weight: 18,
      max_weight: 29,
      life_span_min: 13,
      life_span_max: 15,
      temperament: "Obedient, Companionable, Intelligent, Joyful",
      img: "https://cdn2.thedogapi.com/images/HyWGexcVQ.jpg"
    },
    {
      id: 28,
      name: "Basenji",
      min_height: 41,
      max_height: 43,
      min_weight: 10,
      max_weight: 11,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Affectionate, Energetic, Alert, Curious, Playful, Intelligent",
      img: "https://cdn2.thedogapi.com/images/H1dGlxqNQ.jpg"
    },
    {
      id: 29,
      name: "Basset Bleu de Gascogne",
      min_height: 33,
      max_height: 38,
      min_weight: 16,
      max_weight: 18,
      life_span_min: 10,
      life_span_max: 14,
      temperament: "Affectionate, Lively, Agile, Curious, Happy, Active",
      img: "https://cdn2.thedogapi.com/images/BkMQll94X.jpg"
    },
    {
      id: 30,
      name: "Basset Hound",
      min_height: 36,
      max_height: 0,
      min_weight: 23,
      max_weight: 29,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Tenacious, Friendly, Affectionate, Devoted, Sweet-Tempered, Gentle",
      img: "https://cdn2.thedogapi.com/images/Sy57xx9EX.jpg"
    },
    {
      id: 31,
      name: "Beagle",
      min_height: 33,
      max_height: 38,
      min_weight: 9,
      max_weight: 16,
      life_span_min: 13,
      life_span_max: 16,
      temperament: "Amiable, Even Tempered, Excitable, Determined, Gentle, Intelligent",
      img: "https://cdn2.thedogapi.com/images/Syd4xxqEm.jpg"
    },
    {
      id: 32,
      name: "Bearded Collie",
      min_height: 51,
      max_height: 56,
      min_weight: 20,
      max_weight: 25,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Self-confidence, Hardy, Lively, Alert, Intelligent, Active",
      img: "https://cdn2.thedogapi.com/images/A09F4c1qP.jpg"
    },
    {
      id: 33,
      name: "Beauceron",
      min_height: 61,
      max_height: 70,
      min_weight: 36,
      max_weight: 50,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Fearless, Friendly, Intelligent, Protective, Calm",
      img: "https://cdn2.thedogapi.com/images/HJQ8ge5V7.jpg"
    },
    {
      id: 34,
      name: "Bedlington Terrier",
      min_height: 38,
      max_height: 41,
      min_weight: 8,
      max_weight: 10,
      life_span_min: 14,
      life_span_max: 16,
      temperament: "Affectionate, Spirited, Intelligent, Good-tempered",
      img: "https://cdn2.thedogapi.com/images/ByK8gx947.jpg"
    },
    {
      id: 36,
      name: "Belgian Malinois",
      min_height: 56,
      max_height: 66,
      min_weight: 18,
      max_weight: 36,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Watchful, Alert, Stubborn, Friendly, Confident, Hard-working, Active, Protective",
      img: "https://cdn2.thedogapi.com/images/r1f_ll5VX.jpg"
    },
    {
      id: 38,
      name: "Belgian Tervuren",
      min_height: 56,
      max_height: 66,
      min_weight: 18,
      max_weight: 29,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Energetic, Alert, Loyal, Intelligent, Attentive, Protective",
      img: "https://cdn2.thedogapi.com/images/B1KdxlcNX.jpg"
    },
    {
      id: 41,
      name: "Bernese Mountain Dog",
      min_height: 58,
      max_height: 70,
      min_weight: 29,
      max_weight: 54,
      life_span_min: 7,
      life_span_max: 10,
      temperament: "Affectionate, Loyal, Intelligent, Faithful",
      img: "https://cdn2.thedogapi.com/images/S1fFlx5Em.jpg"
    },
    {
      id: 42,
      name: "Bichon Frise",
      min_height: 24,
      max_height: 29,
      min_weight: 5,
      max_weight: 8,
      life_span_min: 15,
      life_span_max: 15,
      temperament: "Feisty, Affectionate, Cheerful, Playful, Gentle, Sensitive",
      img: "https://cdn2.thedogapi.com/images/HkuYlxqEQ.jpg"
    },
    {
      id: 43,
      name: "Black and Tan Coonhound",
      min_height: 58,
      max_height: 69,
      min_weight: 29,
      max_weight: 45,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Easygoing, Gentle, Adaptable, Trusting, Even Tempered, Lovable",
      img: "https://cdn2.thedogapi.com/images/HJAFgxcNQ.jpg"
    },
    {
      id: 45,
      name: "Bloodhound",
      min_height: 58,
      max_height: 69,
      min_weight: 36,
      max_weight: 50,
      life_span_min: 8,
      life_span_max: 10,
      temperament: "Stubborn, Affectionate, Gentle, Even Tempered",
      img: "https://cdn2.thedogapi.com/images/Skdcgx9VX.jpg"
    },
    {
      id: 47,
      name: "Bluetick Coonhound",
      min_height: 53,
      max_height: 69,
      min_weight: 20,
      max_weight: 36,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Friendly, Intelligent, Active",
      img: "https://cdn2.thedogapi.com/images/rJxieg9VQ.jpg"
    },
    {
      id: 48,
      name: "Boerboel",
      min_height: 56,
      max_height: 69,
      min_weight: 50,
      max_weight: 91,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Obedient, Confident, Intelligent, Dominant, Territorial",
      img: "https://cdn2.thedogapi.com/images/HyOjge5Vm.jpg"
    },
    {
      id: 50,
      name: "Border Collie",
      min_height: 46,
      max_height: 56,
      min_weight: 14,
      max_weight: 20,
      life_span_min: 12,
      life_span_max: 16,
      temperament: "Tenacious, Keen, Energetic, Responsive, Alert, Intelligent",
      img: "https://cdn2.thedogapi.com/images/sGQvQUpsp.jpg"
    },
    {
      id: 51,
      name: "Border Terrier",
      min_height: 28,
      max_height: 41,
      min_weight: 5,
      max_weight: 7,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Fearless, Affectionate, Alert, Obedient, Intelligent, Even Tempered",
      img: "https://cdn2.thedogapi.com/images/HJOpge9Em.jpg"
    },
    {
      id: 53,
      name: "Boston Terrier",
      min_height: 41,
      max_height: 43,
      min_weight: 5,
      max_weight: 11,
      life_span_min: 11,
      life_span_max: 13,
      temperament: "Friendly, Lively, Intelligent",
      img: "https://cdn2.thedogapi.com/images/rkZRggqVX.jpg"
    },
    {
      id: 54,
      name: "Bouvier des Flandres",
      min_height: 60,
      max_height: 70,
      min_weight: 32,
      max_weight: 50,
      life_span_min: 10,
      life_span_max: 15,
      temperament: "Protective, Loyal, Gentle, Intelligent, Familial, Rational",
      img: "https://cdn2.thedogapi.com/images/Byd0xl5VX.jpg"
    },
    {
      id: 55,
      name: "Boxer",
      min_height: 55,
      max_height: 64,
      min_weight: 23,
      max_weight: 32,
      life_span_min: 8,
      life_span_max: 10,
      temperament: "Devoted, Fearless, Friendly, Cheerful, Energetic, Loyal, Playful, Confident, Intelligent, Bright, Brave, Calm",
      img: "https://cdn2.thedogapi.com/images/ry1kWe5VQ.jpg"
    },
    {
      id: 56,
      name: "Boykin Spaniel",
      min_height: 36,
      max_height: 46,
      min_weight: 11,
      max_weight: 18,
      life_span_min: 10,
      life_span_max: 14,
      temperament: "Friendly, Energetic, Companionable, Intelligent, Eager, Trainable",
      img: "https://cdn2.thedogapi.com/images/ryHJZlcNX.jpg"
    },
    {
      id: 57,
      name: "Bracco Italiano",
      min_height: 55,
      max_height: 67,
      min_weight: 25,
      max_weight: 40,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Stubborn, Affectionate, Loyal, Playful, Companionable, Trainable",
      img: "https://cdn2.thedogapi.com/images/S13yZg5VQ.jpg"
    },
    {
      id: 58,
      name: "Briard",
      min_height: 56,
      max_height: 69,
      min_weight: 32,
      max_weight: 41,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Fearless, Loyal, Obedient, Intelligent, Faithful, Protective",
      img: "https://cdn2.thedogapi.com/images/rkVlblcEQ.jpg"
    },
    {
      id: 59,
      name: "Brittany",
      min_height: 44,
      max_height: 52,
      min_weight: 14,
      max_weight: 20,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Agile, Adaptable, Quick, Intelligent, Attentive, Happy",
      img: "https://cdn2.thedogapi.com/images/HJWZZxc4X.jpg"
    },
    {
      id: 61,
      name: "Bull Terrier",
      min_height: 53,
      max_height: 56,
      min_weight: 23,
      max_weight: 32,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Trainable, Protective, Sweet-Tempered, Keen, Active",
      img: "https://cdn2.thedogapi.com/images/VSraIEQGd.jpg"
    },
    {
      id: 62,
      name: "Bull Terrier (Miniature)",
      min_height: 25,
      max_height: 36,
      min_weight: 11,
      max_weight: 15,
      life_span_min: 11,
      life_span_max: 14,
      temperament: "Trainable, Protective, Sweet-Tempered, Keen, Active, Territorial",
      img: "https://cdn2.thedogapi.com/images/BkKZWlcVX.jpg"
    },
    {
      id: 64,
      name: "Bullmastiff",
      min_height: 61,
      max_height: 69,
      min_weight: 45,
      max_weight: 59,
      life_span_min: 8,
      life_span_max: 12,
      temperament: "Docile, Reliable, Devoted, Alert, Loyal, Reserved, Loving, Protective, Powerful, Calm, Courageous",
      img: "https://cdn2.thedogapi.com/images/r1ifZl5E7.jpg"
    },
    {
      id: 65,
      name: "Cairn Terrier",
      min_height: 23,
      max_height: 25,
      min_weight: 6,
      max_weight: 6,
      life_span_min: 14,
      life_span_max: 15,
      temperament: "Hardy, Fearless, Assertive, Gay, Intelligent, Active",
      img: "https://cdn2.thedogapi.com/images/Sk7Qbg9E7.jpg"
    },
    {
      id: 67,
      name: "Cane Corso",
      min_height: 60,
      max_height: 70,
      min_weight: 40,
      max_weight: 54,
      life_span_min: 10,
      life_span_max: 11,
      temperament: "Trainable, Reserved, Stable, Quiet, Even Tempered, Calm",
      img: "https://cdn2.thedogapi.com/images/r15m-lc4m.jpg"
    },
    {
      id: 68,
      name: "Cardigan Welsh Corgi",
      min_height: 27,
      max_height: 32,
      min_weight: 11,
      max_weight: 17,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Affectionate, Devoted, Alert, Companionable, Intelligent, Active",
      img: "https://cdn2.thedogapi.com/images/SyXN-e9NX.jpg"
    },
    {
      id: 69,
      name: "Catahoula Leopard Dog",
      min_height: 51,
      max_height: 66,
      min_weight: 23,
      max_weight: 43,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Energetic, Inquisitive, Independent, Gentle, Intelligent, Loving",
      img: "https://cdn2.thedogapi.com/images/BJcNbec4X.jpg"
    },
    {
      id: 70,
      name: "Caucasian Shepherd (Ovcharka)",
      min_height: 61,
      max_height: 85,
      min_weight: 36,
      max_weight: 45,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Alert, Quick, Dominant, Powerful, Calm, Strong",
      img: "https://cdn2.thedogapi.com/images/r1rrWe5Em.jpg"
    },
    {
      id: 71,
      name: "Cavalier King Charles Spaniel",
      min_height: 30,
      max_height: 33,
      min_weight: 6,
      max_weight: 8,
      life_span_min: 10,
      life_span_max: 14,
      temperament: "Fearless, Affectionate, Sociable, Patient, Playful, Adaptable",
      img: "https://cdn2.thedogapi.com/images/HJRBbe94Q.jpg"
    },
    {
      id: 76,
      name: "Chesapeake Bay Retriever",
      min_height: 53,
      max_height: 66,
      min_weight: 25,
      max_weight: 36,
      life_span_min: 10,
      life_span_max: 13,
      temperament: "Affectionate, Intelligent, Quiet, Dominant, Happy, Protective",
      img: "https://cdn2.thedogapi.com/images/9BXwUeCc2.jpg"
    },
    {
      id: 78,
      name: "Chinese Crested",
      min_height: 28,
      max_height: 33,
      min_weight: 5,
      max_weight: 6,
      life_span_min: 10,
      life_span_max: 14,
      temperament: "Affectionate, Sweet-Tempered, Lively, Alert, Playful, Happy",
      img: "https://cdn2.thedogapi.com/images/B1pDZx9Nm.jpg"
    },
    {
      id: 79,
      name: "Chinese Shar-Pei",
      min_height: 46,
      max_height: 51,
      min_weight: 20,
      max_weight: 27,
      life_span_min: 10,
      life_span_max: 10,
      temperament: "Suspicious, Affectionate, Devoted, Reserved, Independent, Loving",
      img: "https://cdn2.thedogapi.com/images/B1ruWl94Q.jpg"
    },
    {
      id: 80,
      name: "Chinook",
      min_height: 56,
      max_height: 66,
      min_weight: 23,
      max_weight: 41,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Friendly, Alert, Dignified, Intelligent, Calm",
      img: "https://cdn2.thedogapi.com/images/Sypubg54Q.jpg"
    },
    {
      id: 81,
      name: "Chow Chow",
      min_height: 43,
      max_height: 51,
      min_weight: 18,
      max_weight: 32,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Aloof, Loyal, Independent, Quiet",
      img: "https://cdn2.thedogapi.com/images/ry8KWgqEQ.jpg"
    },
    {
      id: 84,
      name: "Clumber Spaniel",
      min_height: 43,
      max_height: 51,
      min_weight: 25,
      max_weight: 39,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Affectionate, Loyal, Dignified, Gentle, Calm, Great-hearted",
      img: "https://cdn2.thedogapi.com/images/rkeqWgq4Q.jpg"
    },
    {
      id: 86,
      name: "Cocker Spaniel",
      min_height: 36,
      max_height: 38,
      min_weight: 9,
      max_weight: 14,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Trainable, Friendly, Affectionate, Playful, Quiet, Faithful",
      img: "https://cdn2.thedogapi.com/images/1lFmrzECl.jpg"
    },
    {
      id: 87,
      name: "Cocker Spaniel (American)",
      min_height: 36,
      max_height: 38,
      min_weight: 9,
      max_weight: 14,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Outgoing, Sociable, Trusting, Joyful, Even Tempered, Merry",
      img: "https://cdn2.thedogapi.com/images/HkRcZe547.jpg"
    },
    {
      id: 89,
      name: "Coton de Tulear",
      min_height: 23,
      max_height: 28,
      min_weight: 4,
      max_weight: 7,
      life_span_min: 13,
      life_span_max: 16,
      temperament: "Affectionate, Lively, Playful, Intelligent, Trainable, Vocal",
      img: "https://cdn2.thedogapi.com/images/SyviZlqNm.jpg"
    },
    {
      id: 92,
      name: "Dalmatian",
      min_height: 48,
      max_height: 58,
      min_weight: 23,
      max_weight: 25,
      life_span_min: 10,
      life_span_max: 13,
      temperament: "Outgoing, Friendly, Energetic, Playful, Sensitive, Intelligent, Active",
      img: "https://cdn2.thedogapi.com/images/SkJ3blcN7.jpg"
    },
    {
      id: 94,
      name: "Doberman Pinscher",
      min_height: 61,
      max_height: 71,
      min_weight: 30,
      max_weight: 40,
      life_span_min: 10,
      life_span_max: 10,
      temperament: "Fearless, Energetic, Alert, Loyal, Obedient, Confident, Intelligent",
      img: "https://cdn2.thedogapi.com/images/HyL3bl94Q.jpg"
    },
    {
      id: 95,
      name: "Dogo Argentino",
      min_height: 60,
      max_height: 69,
      min_weight: 36,
      max_weight: 45,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Friendly, Affectionate, Cheerful, Loyal, Tolerant, Protective",
      img: "https://cdn2.thedogapi.com/images/S1nhWx94Q.jpg"
    },
    {
      id: 98,
      name: "Dutch Shepherd",
      min_height: 56,
      max_height: 62,
      min_weight: 23,
      max_weight: 32,
      life_span_min: 15,
      life_span_max: 15,
      temperament: "Reliable, Affectionate, Alert, Loyal, Obedient, Trainable",
      img: "https://cdn2.thedogapi.com/images/BkE6Wg5E7.jpg"
    },
    {
      id: 101,
      name: "English Setter",
      min_height: 61,
      max_height: 64,
      min_weight: 20,
      max_weight: 36,
      life_span_min: 12,
      life_span_max: 12,
      temperament: "Strong Willed, Mischievous, Affectionate, Energetic, Playful, Companionable, Gentle, Hard-working, Intelligent, Eager, People-Oriented",
      img: "https://cdn2.thedogapi.com/images/By4A-eqVX.jpg"
    },
    {
      id: 102,
      name: "English Shepherd",
      min_height: 46,
      max_height: 58,
      min_weight: 20,
      max_weight: 30,
      life_span_min: 10,
      life_span_max: 13,
      temperament: "Kind, Energetic, Independent, Adaptable, Intelligent, Bossy",
      img: "https://cdn2.thedogapi.com/images/H1QyMe5EQ.jpg"
    },
    {
      id: 103,
      name: "English Springer Spaniel",
      min_height: 48,
      max_height: 51,
      min_weight: 16,
      max_weight: 23,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Affectionate, Cheerful, Alert, Intelligent, Attentive, Active",
      img: "https://cdn2.thedogapi.com/images/Hk0Jfe5VQ.jpg"
    },
    {
      id: 104,
      name: "English Toy Spaniel",
      min_height: 25,
      max_height: 0,
      min_weight: 4,
      max_weight: 6,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Affectionate, Reserved, Playful, Gentle, Happy, Loving",
      img: "https://cdn2.thedogapi.com/images/SkIgzxqNQ.jpg"
    },
    {
      id: 105,
      name: "English Toy Terrier",
      min_height: 25,
      max_height: 30,
      min_weight: 3,
      max_weight: 4,
      life_span_min: 12,
      life_span_max: 13,
      temperament: "Stubborn, Alert, Companionable, Intelligent, Cunning, Trainable",
      img: "https://cdn2.thedogapi.com/images/SJ6eMxqEQ.jpg"
    },
    {
      id: 107,
      name: "Eurasier",
      min_height: 52,
      max_height: 60,
      min_weight: 18,
      max_weight: 32,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Alert, Reserved, Intelligent, Even Tempered, Watchful, Calm",
      img: "https://cdn2.thedogapi.com/images/S1VWGx9Nm.jpg"
    },
    {
      id: 108,
      name: "Field Spaniel",
      min_height: 43,
      max_height: 46,
      min_weight: 16,
      max_weight: 23,
      life_span_min: 11,
      life_span_max: 15,
      temperament: "Docile, Cautious, Sociable, Sensitive, Adaptable, Familial",
      img: "https://cdn2.thedogapi.com/images/SkJfGecE7.jpg"
    },
    {
      id: 110,
      name: "Finnish Lapphund",
      min_height: 41,
      max_height: 53,
      min_weight: 15,
      max_weight: 24,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Friendly, Keen, Faithful, Calm, Courageous",
      img: "https://cdn2.thedogapi.com/images/S1KMGg5Vm.jpg"
    },
    {
      id: 111,
      name: "Finnish Spitz",
      min_height: 39,
      max_height: 51,
      min_weight: 10,
      max_weight: 13,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Playful, Loyal, Independent, Intelligent, Happy, Vocal",
      img: "https://cdn2.thedogapi.com/images/3PjHlQbkV.jpg"
    },
    {
      id: 113,
      name: "French Bulldog",
      min_height: 28,
      max_height: 30,
      min_weight: 13,
      max_weight: 0,
      life_span_min: 9,
      life_span_max: 11,
      temperament: "Playful, Affectionate, Keen, Sociable, Lively, Alert, Easygoing, Patient, Athletic, Bright",
      img: "https://cdn2.thedogapi.com/images/HyWNfxc47.jpg"
    },
    {
      id: 114,
      name: "German Pinscher",
      min_height: 43,
      max_height: 51,
      min_weight: 11,
      max_weight: 20,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Spirited, Lively, Intelligent, Loving, Even Tempered, Familial",
      img: "https://cdn2.thedogapi.com/images/B1u4zgqE7.jpg"
    },
    {
      id: 115,
      name: "German Shepherd Dog",
      min_height: 56,
      max_height: 66,
      min_weight: 23,
      max_weight: 41,
      life_span_min: 10,
      life_span_max: 13,
      temperament: "Alert, Loyal, Obedient, Curious, Confident, Intelligent, Watchful, Courageous",
      img: "https://cdn2.thedogapi.com/images/SJyBfg5NX.jpg"
    },
    {
      id: 116,
      name: "German Shorthaired Pointer",
      min_height: 53,
      max_height: 64,
      min_weight: 20,
      max_weight: 32,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Boisterous, Bold, Affectionate, Intelligent, Cooperative, Trainable",
      img: "https://cdn2.thedogapi.com/images/SJqBMg5Nm.jpg"
    },
    {
      id: 119,
      name: "Giant Schnauzer",
      min_height: 60,
      max_height: 70,
      min_weight: 29,
      max_weight: 41,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Strong Willed, Kind, Loyal, Intelligent, Dominant, Powerful",
      img: "https://cdn2.thedogapi.com/images/H1NIzlcV7.jpg"
    },
    {
      id: 120,
      name: "Glen of Imaal Terrier",
      min_height: 32,
      max_height: 36,
      min_weight: 15,
      max_weight: 18,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Spirited, Agile, Loyal, Gentle, Active, Courageous",
      img: "https://cdn2.thedogapi.com/images/H1oLMe94m.jpg"
    },
    {
      id: 121,
      name: "Golden Retriever",
      min_height: 55,
      max_height: 61,
      min_weight: 25,
      max_weight: 34,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Intelligent, Kind, Reliable, Friendly, Trustworthy, Confident",
      img: "https://cdn2.thedogapi.com/images/HJ7Pzg5EQ.jpg"
    },
    {
      id: 123,
      name: "Gordon Setter",
      min_height: 58,
      max_height: 69,
      min_weight: 20,
      max_weight: 36,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Fearless, Alert, Loyal, Confident, Gay, Eager",
      img: "https://cdn2.thedogapi.com/images/SJ5vzx5NX.jpg"
    },
    {
      id: 124,
      name: "Great Dane",
      min_height: 71,
      max_height: 81,
      min_weight: 50,
      max_weight: 86,
      life_span_min: 7,
      life_span_max: 10,
      temperament: "Friendly, Devoted, Reserved, Gentle, Confident, Loving",
      img: "https://cdn2.thedogapi.com/images/B1Edfl9NX.jpg"
    },
    {
      id: 125,
      name: "Great Pyrenees",
      min_height: 64,
      max_height: 81,
      min_weight: 39,
      max_weight: 52,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Strong Willed, Fearless, Affectionate, Patient, Gentle, Confident",
      img: "https://cdn2.thedogapi.com/images/B12uzg9V7.png"
    },
    {
      id: 127,
      name: "Greyhound",
      min_height: 69,
      max_height: 76,
      min_weight: 23,
      max_weight: 32,
      life_span_min: 10,
      life_span_max: 13,
      temperament: "Affectionate, Athletic, Gentle, Intelligent, Quiet, Even Tempered",
      img: "https://cdn2.thedogapi.com/images/ryNYMx94X.jpg"
    },
    {
      id: 128,
      name: "Griffon Bruxellois",
      min_height: 23,
      max_height: 28,
      min_weight: 5,
      max_weight: 0,
      life_span_min: 10,
      life_span_max: 15,
      temperament: "Self-important, Inquisitive, Alert, Companionable, Sensitive, Watchful",
      img: "https://cdn2.thedogapi.com/images/ryoYGec4Q.jpg"
    },
    {
      id: 129,
      name: "Harrier",
      min_height: 46,
      max_height: 56,
      min_weight: 18,
      max_weight: 27,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Outgoing, Friendly, Cheerful, Sweet-Tempered, Tolerant, Active",
      img: "https://cdn2.thedogapi.com/images/B1IcfgqE7.jpg"
    },
    {
      id: 130,
      name: "Havanese",
      min_height: 22,
      max_height: 29,
      min_weight: 3,
      max_weight: 6,
      life_span_min: 14,
      life_span_max: 15,
      temperament: "Affectionate, Responsive, Playful, Companionable, Gentle, Intelligent",
      img: "https://cdn2.thedogapi.com/images/rkXiGl9V7.jpg"
    },
    {
      id: 134,
      name: "Irish Setter",
      min_height: 61,
      max_height: 69,
      min_weight: 16,
      max_weight: 32,
      life_span_min: 10,
      life_span_max: 11,
      temperament: "Affectionate, Energetic, Lively, Independent, Playful, Companionable",
      img: "https://cdn2.thedogapi.com/images/S1osGeqVm.jpg"
    },
    {
      id: 135,
      name: "Irish Terrier",
      min_height: 46,
      max_height: 0,
      min_weight: 11,
      max_weight: 12,
      life_span_min: 12,
      life_span_max: 16,
      temperament: "Respectful, Lively, Intelligent, Dominant, Protective, Trainable",
      img: "https://cdn2.thedogapi.com/images/By-hGecVX.jpg"
    },
    {
      id: 137,
      name: "Irish Wolfhound",
      min_height: 76,
      max_height: 89,
      min_weight: 48,
      max_weight: 82,
      life_span_min: 6,
      life_span_max: 8,
      temperament: "Sweet-Tempered, Loyal, Dignified, Patient, Thoughtful, Generous",
      img: "https://cdn2.thedogapi.com/images/Hyd2zgcEX.jpg"
    },
    {
      id: 138,
      name: "Italian Greyhound",
      min_height: 33,
      max_height: 38,
      min_weight: 3,
      max_weight: 7,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Mischievous, Affectionate, Agile, Athletic, Companionable, Intelligent",
      img: "https://cdn2.thedogapi.com/images/SJAnzg9NX.jpg"
    },
    {
      id: 140,
      name: "Japanese Chin",
      min_height: 20,
      max_height: 28,
      min_weight: 2,
      max_weight: 4,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Alert, Loyal, Independent, Intelligent, Loving, Cat-like",
      img: "https://cdn2.thedogapi.com/images/r1H6feqEm.jpg"
    },
    {
      id: 141,
      name: "Japanese Spitz",
      min_height: 30,
      max_height: 38,
      min_weight: 7,
      max_weight: 9,
      life_span_min: 10,
      life_span_max: 16,
      temperament: "Affectionate, Obedient, Playful, Companionable, Intelligent, Proud",
      img: "https://cdn2.thedogapi.com/images/HksaMxqNX.jpg"
    },
    {
      id: 142,
      name: "Keeshond",
      min_height: 43,
      max_height: 46,
      min_weight: 16,
      max_weight: 20,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Agile, Obedient, Playful, Quick, Sturdy, Bright",
      img: "https://cdn2.thedogapi.com/images/S1GAGg9Vm.jpg"
    },
    {
      id: 144,
      name: "Komondor",
      min_height: 65,
      max_height: 70,
      min_weight: 36,
      max_weight: 45,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Steady, Fearless, Affectionate, Independent, Gentle, Calm",
      img: "https://cdn2.thedogapi.com/images/Bko0fl547.jpg"
    },
    {
      id: 145,
      name: "Kooikerhondje",
      min_height: 36,
      max_height: 41,
      min_weight: 9,
      max_weight: 14,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Benevolent, Agile, Alert, Intelligent, Active, Territorial",
      img: "https://cdn2.thedogapi.com/images/kOMy84GQE.jpg"
    },
    {
      id: 147,
      name: "Kuvasz",
      min_height: 66,
      max_height: 76,
      min_weight: 32,
      max_weight: 52,
      life_span_min: 8,
      life_span_max: 10,
      temperament: "Clownish, Loyal, Patient, Independent, Intelligent, Protective",
      img: "https://cdn2.thedogapi.com/images/BykZ7ecVX.jpg"
    },
    {
      id: 149,
      name: "Labrador Retriever",
      min_height: 55,
      max_height: 62,
      min_weight: 25,
      max_weight: 36,
      life_span_min: 10,
      life_span_max: 13,
      temperament: "Kind, Outgoing, Agile, Gentle, Intelligent, Trusting, Even Tempered",
      img: "https://cdn2.thedogapi.com/images/B1uW7l5VX.jpg"
    },
    {
      id: 151,
      name: "Lagotto Romagnolo",
      min_height: 41,
      max_height: 48,
      min_weight: 11,
      max_weight: 16,
      life_span_min: 14,
      life_span_max: 16,
      temperament: "Keen, Loyal, Companionable, Loving, Active, Trainable",
      img: "https://cdn2.thedogapi.com/images/ryzzmgqE7.jpg"
    },
    {
      id: 153,
      name: "Lancashire Heeler",
      min_height: 25,
      max_height: 30,
      min_weight: 3,
      max_weight: 6,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Clever, Friendly, Alert, Intelligent",
      img: "https://cdn2.thedogapi.com/images/S1RGml5Em.jpg"
    },
    {
      id: 155,
      name: "Leonberger",
      min_height: 65,
      max_height: 80,
      min_weight: 54,
      max_weight: 77,
      life_span_min: 6,
      life_span_max: 8,
      temperament: "Obedient, Fearless, Loyal, Companionable, Adaptable, Loving",
      img: "https://cdn2.thedogapi.com/images/ByrmQlqVm.jpg"
    },
    {
      id: 156,
      name: "Lhasa Apso",
      min_height: 25,
      max_height: 28,
      min_weight: 5,
      max_weight: 8,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Steady, Fearless, Friendly, Devoted, Assertive, Spirited, Energetic, Lively, Alert, Obedient, Playful, Intelligent",
      img: "https://cdn2.thedogapi.com/images/SJp7Qe5EX.jpg"
    },
    {
      id: 161,
      name: "Maltese",
      min_height: 20,
      max_height: 25,
      min_weight: 2,
      max_weight: 3,
      life_span_min: 15,
      life_span_max: 18,
      temperament: "Playful, Docile, Fearless, Affectionate, Sweet-Tempered, Lively, Responsive, Easygoing, Gentle, Intelligent, Active",
      img: "https://cdn2.thedogapi.com/images/B1SV7gqN7.jpg"
    },
    {
      id: 165,
      name: "Miniature American Shepherd",
      min_height: 33,
      max_height: 46,
      min_weight: 9,
      max_weight: 18,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Energetic, Loyal, Intelligent, Trainable",
      img: "https://cdn2.thedogapi.com/images/BkHHQgcN7.jpg"
    },
    {
      id: 167,
      name: "Miniature Pinscher",
      min_height: 25,
      max_height: 32,
      min_weight: 4,
      max_weight: 5,
      life_span_min: 15,
      life_span_max: 15,
      temperament: "Clever, Outgoing, Friendly, Energetic, Responsive, Playful",
      img: "https://cdn2.thedogapi.com/images/Hy3H7g94X.jpg"
    },
    {
      id: 168,
      name: "Miniature Schnauzer",
      min_height: 30,
      max_height: 36,
      min_weight: 5,
      max_weight: 9,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Fearless, Friendly, Spirited, Alert, Obedient, Intelligent",
      img: "https://cdn2.thedogapi.com/images/SJIUQl9NX.jpg"
    },
    {
      id: 171,
      name: "Newfoundland",
      min_height: 66,
      max_height: 71,
      min_weight: 45,
      max_weight: 68,
      life_span_min: 8,
      life_span_max: 10,
      temperament: "Sweet-Tempered, Gentle, Trainable",
      img: "https://cdn2.thedogapi.com/images/Sk4DXl54m.jpg"
    },
    {
      id: 172,
      name: "Norfolk Terrier",
      min_height: 23,
      max_height: 25,
      min_weight: 5,
      max_weight: 5,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Self-confidence, Fearless, Spirited, Companionable, Happy, Lovable",
      img: "https://cdn2.thedogapi.com/images/B1ADQg94X.jpg"
    },
    {
      id: 176,
      name: "Norwich Terrier",
      min_height: 25,
      max_height: 0,
      min_weight: 5,
      max_weight: 5,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Hardy, Affectionate, Energetic, Sensitive, Intelligent",
      img: "https://cdn2.thedogapi.com/images/BkgKXlqE7.jpg"
    },
    {
      id: 177,
      name: "Nova Scotia Duck Tolling Retriever",
      min_height: 43,
      max_height: 53,
      min_weight: 16,
      max_weight: 23,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Outgoing, Alert, Patient, Intelligent, Loving",
      img: "https://cdn2.thedogapi.com/images/SyYtQe5V7.jpg"
    },
    {
      id: 178,
      name: "Old English Sheepdog",
      min_height: 53,
      max_height: 0,
      min_weight: 27,
      max_weight: 45,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Sociable, Bubbly, Playful, Adaptable, Intelligent, Loving",
      img: "https://cdn2.thedogapi.com/images/HkZ57lq4m.jpg"
    },
    {
      id: 179,
      name: "Olde English Bulldogge",
      min_height: 38,
      max_height: 48,
      min_weight: null,
      max_weight: 0,
      life_span_min: 9,
      life_span_max: 14,
      temperament: "Friendly, Alert, Confident, Loving, Courageous, Strong",
      img: "https://cdn2.thedogapi.com/images/B1d5me547.jpg"
    },
    {
      id: 181,
      name: "Papillon",
      min_height: 20,
      max_height: 28,
      min_weight: 1,
      max_weight: 5,
      life_span_min: 13,
      life_span_max: 17,
      temperament: "Hardy, Friendly, Energetic, Alert, Intelligent, Happy",
      img: "https://cdn2.thedogapi.com/images/SkJj7e547.jpg"
    },
    {
      id: 183,
      name: "Pekingese",
      min_height: 15,
      max_height: 23,
      min_weight: 6,
      max_weight: 0,
      life_span_min: 14,
      life_span_max: 18,
      temperament: "Opinionated, Good-natured, Stubborn, Affectionate, Aggressive, Intelligent",
      img: "https://cdn2.thedogapi.com/images/ByIiml9Nm.jpg"
    },
    {
      id: 184,
      name: "Pembroke Welsh Corgi",
      min_height: 25,
      max_height: 30,
      min_weight: 11,
      max_weight: 14,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Tenacious, Outgoing, Friendly, Bold, Playful, Protective",
      img: "https://cdn2.thedogapi.com/images/rJ6iQeqEm.jpg"
    },
    {
      id: 185,
      name: "Perro de Presa Canario",
      min_height: 56,
      max_height: 65,
      min_weight: 40,
      max_weight: 50,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Strong Willed, Suspicious, Gentle, Dominant, Calm",
      img: "https://cdn2.thedogapi.com/images/S1V3Qeq4X.jpg"
    },
    {
      id: 188,
      name: "Pharaoh Hound",
      min_height: 53,
      max_height: 64,
      min_weight: 18,
      max_weight: 27,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Affectionate, Sociable, Playful, Intelligent, Active, Trainable",
      img: "https://cdn2.thedogapi.com/images/Byz6mgqEQ.jpg"
    },
    {
      id: 189,
      name: "Plott",
      min_height: 51,
      max_height: 64,
      min_weight: 18,
      max_weight: 27,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Bold, Alert, Loyal, Intelligent",
      img: "https://cdn2.thedogapi.com/images/B1i67l5VQ.jpg"
    },
    {
      id: 193,
      name: "Pomeranian",
      min_height: 20,
      max_height: 30,
      min_weight: 1,
      max_weight: 3,
      life_span_min: 15,
      life_span_max: 15,
      temperament: "Extroverted, Friendly, Sociable, Playful, Intelligent, Active",
      img: "https://cdn2.thedogapi.com/images/HJd0XecNX.jpg"
    },
    {
      id: 196,
      name: "Poodle (Miniature)",
      min_height: 28,
      max_height: 38,
      min_weight: 7,
      max_weight: 8,
      life_span_min: 12,
      life_span_max: 15,
      img: "https://cdn2.thedogapi.com/images/Hkxk4ecVX.jpg"
    },
    {
      id: 197,
      name: "Poodle (Toy)",
      min_height: 23,
      max_height: 28,
      min_weight: 3,
      max_weight: 4,
      life_span_min: 18,
      life_span_max: 18,
      img: "https://cdn2.thedogapi.com/images/rJFJVxc4m.jpg"
    },
    {
      id: 201,
      name: "Pug",
      min_height: 25,
      max_height: 30,
      min_weight: 6,
      max_weight: 8,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Docile, Clever, Charming, Stubborn, Sociable, Playful, Quiet, Attentive",
      img: "https://cdn2.thedogapi.com/images/HyJvcl9N7.jpg"
    },
    {
      id: 204,
      name: "Puli",
      min_height: 41,
      max_height: 43,
      min_weight: 11,
      max_weight: 16,
      life_span_min: 12,
      life_span_max: 16,
      temperament: "Energetic, Agile, Loyal, Obedient, Intelligent, Faithful",
      img: "https://cdn2.thedogapi.com/images/ryPgVl5N7.jpg"
    },
    {
      id: 205,
      name: "Pumi",
      min_height: 38,
      max_height: 47,
      min_weight: 8,
      max_weight: 15,
      life_span_min: 13,
      life_span_max: 15,
      temperament: "Lively, Reserved, Intelligent, Active, Protective, Vocal",
      img: "https://cdn2.thedogapi.com/images/SyRe4xcN7.jpg"
    },
    {
      id: 207,
      name: "Rat Terrier",
      min_height: 25,
      max_height: 33,
      min_weight: 4,
      max_weight: 11,
      life_span_min: 12,
      life_span_max: 18,
      temperament: "Affectionate, Lively, Inquisitive, Alert, Intelligent, Loving",
      img: "https://cdn2.thedogapi.com/images/HkXWNl9E7.jpg"
    },
    {
      id: 208,
      name: "Redbone Coonhound",
      min_height: 53,
      max_height: 69,
      min_weight: 20,
      max_weight: 36,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Affectionate, Energetic, Independent, Companionable, Familial, Unflappable",
      img: "https://cdn2.thedogapi.com/images/HJMzEl5N7.jpg"
    },
    {
      id: 209,
      name: "Rhodesian Ridgeback",
      min_height: 61,
      max_height: 69,
      min_weight: 34,
      max_weight: 36,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Strong Willed, Mischievous, Loyal, Dignified, Sensitive, Intelligent",
      img: "https://cdn2.thedogapi.com/images/By9zNgqE7.jpg"
    },
    {
      id: 210,
      name: "Rottweiler",
      min_height: 56,
      max_height: 69,
      min_weight: 34,
      max_weight: 50,
      life_span_min: 8,
      life_span_max: 10,
      temperament: "Steady, Good-natured, Fearless, Devoted, Alert, Obedient, Confident, Self-assured, Calm, Courageous",
      img: "https://cdn2.thedogapi.com/images/r1xXEgcNX.jpg"
    },
    {
      id: 211,
      name: "Russian Toy",
      min_height: 19,
      max_height: 27,
      min_weight: 1,
      max_weight: 3,
      life_span_min: 10,
      life_span_max: 12,
      img: "https://cdn2.thedogapi.com/images/HkP7Vxc4Q.jpg"
    },
    {
      id: 212,
      name: "Saint Bernard",
      min_height: 65,
      max_height: 70,
      min_weight: 59,
      max_weight: 82,
      life_span_min: 7,
      life_span_max: 10,
      temperament: "Friendly, Lively, Gentle, Watchful, Calm",
      img: "https://cdn2.thedogapi.com/images/_Qf9nfRzL.png"
    },
    {
      id: 213,
      name: "Saluki",
      min_height: 58,
      max_height: 71,
      min_weight: 16,
      max_weight: 29,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Aloof, Reserved, Intelligent, Quiet",
      img: "https://cdn2.thedogapi.com/images/fjFIuehNo.jpg"
    },
    {
      id: 214,
      name: "Samoyed",
      min_height: 48,
      max_height: 60,
      min_weight: 23,
      max_weight: 27,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Stubborn, Friendly, Sociable, Lively, Alert, Playful",
      img: "https://cdn2.thedogapi.com/images/S1T8Ee9Nm.jpg"
    },
    {
      id: 216,
      name: "Schipperke",
      min_height: 25,
      max_height: 33,
      min_weight: 5,
      max_weight: 7,
      life_span_min: 13,
      life_span_max: 15,
      temperament: "Fearless, Agile, Curious, Independent, Confident, Faithful",
      img: "https://cdn2.thedogapi.com/images/SyBvVgc47.jpg"
    },
    {
      id: 218,
      name: "Scottish Deerhound",
      min_height: 71,
      max_height: 81,
      min_weight: 32,
      max_weight: 59,
      life_span_min: 8,
      life_span_max: 10,
      temperament: "Docile, Friendly, Dignified, Gentle",
      img: "https://cdn2.thedogapi.com/images/SkNjqx9NQ.jpg"
    },
    {
      id: 219,
      name: "Scottish Terrier",
      min_height: 25,
      max_height: 0,
      min_weight: 8,
      max_weight: 10,
      life_span_min: 11,
      life_span_max: 13,
      temperament: "Feisty, Alert, Independent, Playful, Quick, Self-assured",
      img: "https://cdn2.thedogapi.com/images/Bklnce5NX.jpg"
    },
    {
      id: 221,
      name: "Shetland Sheepdog",
      min_height: 33,
      max_height: 41,
      min_weight: 14,
      max_weight: 0,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Affectionate, Lively, Responsive, Alert, Loyal, Reserved, Playful, Gentle, Intelligent, Active, Trainable, Strong",
      img: "https://cdn2.thedogapi.com/images/rJa29l9E7.jpg"
    },
    {
      id: 222,
      name: "Shiba Inu",
      min_height: 34,
      max_height: 42,
      min_weight: 8,
      max_weight: 10,
      life_span_min: 12,
      life_span_max: 16,
      temperament: "Charming, Fearless, Keen, Alert, Confident, Faithful",
      img: "https://cdn2.thedogapi.com/images/Zn3IjPX3f.jpg"
    },
    {
      id: 223,
      name: "Shih Tzu",
      min_height: 20,
      max_height: 28,
      min_weight: 4,
      max_weight: 7,
      life_span_min: 10,
      life_span_max: 18,
      temperament: "Clever, Spunky, Outgoing, Friendly, Affectionate, Lively, Alert, Loyal, Independent, Playful, Gentle, Intelligent, Happy, Active, Courageous",
      img: "https://cdn2.thedogapi.com/images/BkrJjgcV7.jpg"
    },
    {
      id: 225,
      name: "Shiloh Shepherd",
      min_height: 66,
      max_height: 76,
      min_weight: 54,
      max_weight: 64,
      life_span_min: 9,
      life_span_max: 14,
      temperament: "Outgoing, Loyal, Companionable, Gentle, Loving, Trainable",
      img: "https://cdn2.thedogapi.com/images/SJJxjecEX.jpg"
    },
    {
      id: 226,
      name: "Siberian Husky",
      min_height: 51,
      max_height: 60,
      min_weight: 16,
      max_weight: 27,
      life_span_min: 12,
      life_span_max: 12,
      temperament: "Outgoing, Friendly, Alert, Gentle, Intelligent",
      img: "https://cdn2.thedogapi.com/images/S17ZilqNm.jpg"
    },
    {
      id: 228,
      name: "Silky Terrier",
      min_height: 23,
      max_height: 25,
      min_weight: 4,
      max_weight: 5,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Friendly, Responsive, Inquisitive, Alert, Quick, Joyful",
      img: "https://cdn2.thedogapi.com/images/ByzGsl5Nm.jpg"
    },
    {
      id: 232,
      name: "Smooth Fox Terrier",
      min_height: 39,
      max_height: 0,
      min_weight: null,
      max_weight: null,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Fearless, Affectionate, Alert, Playful, Intelligent, Active",
      img: "https://cdn2.thedogapi.com/images/Syszjx9Em.jpg"
    },
    {
      id: 233,
      name: "Soft Coated Wheaten Terrier",
      min_height: 41,
      max_height: 46,
      min_weight: 14,
      max_weight: 18,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Affectionate, Spirited, Energetic, Playful, Intelligent, Faithful",
      img: "https://cdn2.thedogapi.com/images/HJHmix5NQ.jpg"
    },
    {
      id: 235,
      name: "Spanish Water Dog",
      min_height: 41,
      max_height: 51,
      min_weight: 14,
      max_weight: 23,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Trainable, Diligent, Affectionate, Loyal, Athletic, Intelligent",
      img: "https://cdn2.thedogapi.com/images/HJf4jl9VX.jpg"
    },
    {
      id: 236,
      name: "Spinone Italiano",
      min_height: 57,
      max_height: 70,
      min_weight: 28,
      max_weight: 39,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Docile, Friendly, Affectionate, Loyal, Patient, Gentle",
      img: "https://cdn2.thedogapi.com/images/rk5Eoe5Nm.jpg"
    },
    {
      id: 238,
      name: "Staffordshire Bull Terrier",
      min_height: 36,
      max_height: 41,
      min_weight: 11,
      max_weight: 17,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Reliable, Fearless, Bold, Affectionate, Loyal, Intelligent, Courageous",
      img: "https://cdn2.thedogapi.com/images/H1zSie9V7.jpg"
    },
    {
      id: 239,
      name: "Standard Schnauzer",
      min_height: 44,
      max_height: 50,
      min_weight: 14,
      max_weight: 23,
      life_span_min: 13,
      life_span_max: 15,
      temperament: "Trainable, Good-natured, Devoted, Lively, Playful, Intelligent",
      img: "https://cdn2.thedogapi.com/images/tmzeu6ID_.jpg"
    },
    {
      id: 242,
      name: "Swedish Vallhund",
      min_height: 29,
      max_height: 34,
      min_weight: 9,
      max_weight: 14,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Fearless, Friendly, Energetic, Alert, Intelligent, Watchful",
      img: "https://cdn2.thedogapi.com/images/HJ-Dix94Q.jpg"
    },
    {
      id: 243,
      name: "Thai Ridgeback",
      min_height: 51,
      max_height: 61,
      min_weight: 16,
      max_weight: 25,
      life_span_min: 10,
      life_span_max: 12,
      temperament: "Protective, Loyal, Independent, Intelligent, Loving, Familial",
      img: "https://cdn2.thedogapi.com/images/zv89hR-O8.jpg"
    },
    {
      id: 244,
      name: "Tibetan Mastiff",
      min_height: 61,
      max_height: 66,
      min_weight: 39,
      max_weight: 64,
      life_span_min: 10,
      life_span_max: 14,
      temperament: "Strong Willed, Tenacious, Aloof, Stubborn, Intelligent, Protective",
      img: "https://cdn2.thedogapi.com/images/SkM9sec47.jpg"
    },
    {
      id: 245,
      name: "Tibetan Spaniel",
      min_height: 25,
      max_height: 0,
      min_weight: 4,
      max_weight: 7,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Willful, Aloof, Assertive, Independent, Playful, Intelligent, Happy",
      img: "https://cdn2.thedogapi.com/images/Hyjcol947.jpg"
    },
    {
      id: 246,
      name: "Tibetan Terrier",
      min_height: 36,
      max_height: 43,
      min_weight: 9,
      max_weight: 11,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Affectionate, Energetic, Amiable, Reserved, Gentle, Sensitive",
      img: "https://cdn2.thedogapi.com/images/6f5n_42mB.jpg"
    },
    {
      id: 248,
      name: "Toy Fox Terrier",
      min_height: 20,
      max_height: 28,
      min_weight: 2,
      max_weight: 4,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Friendly, Spirited, Alert, Loyal, Playful, Intelligent",
      img: "https://cdn2.thedogapi.com/images/B17ase9V7.jpg"
    },
    {
      id: 250,
      name: "Treeing Walker Coonhound",
      min_height: 51,
      max_height: 69,
      min_weight: 20,
      max_weight: 36,
      life_span_min: 10,
      life_span_max: 13,
      temperament: "Clever, Affectionate, Confident, Intelligent, Loving, Trainable",
      img: "https://cdn2.thedogapi.com/images/SkRpsgc47.jpg"
    },
    {
      id: 251,
      name: "Vizsla",
      min_height: 53,
      max_height: 61,
      min_weight: 23,
      max_weight: 29,
      life_span_min: 10,
      life_span_max: 14,
      temperament: "Affectionate, Energetic, Loyal, Gentle, Quiet",
      img: "https://cdn2.thedogapi.com/images/r1o0jx9Em.jpg"
    },
    {
      id: 253,
      name: "Weimaraner",
      min_height: 58,
      max_height: 69,
      min_weight: 25,
      max_weight: 41,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Steady, Aloof, Stubborn, Energetic, Alert, Intelligent, Powerful, Fast",
      img: "https://cdn2.thedogapi.com/images/SyU12l9V7.jpg"
    },
    {
      id: 254,
      name: "Welsh Springer Spaniel",
      min_height: 43,
      max_height: 48,
      min_weight: 16,
      max_weight: 25,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Stubborn, Friendly, Affectionate, Loyal, Playful, Active",
      img: "https://cdn2.thedogapi.com/images/BJ1gnx5Vm.jpg"
    },
    {
      id: 256,
      name: "West Highland White Terrier",
      min_height: 25,
      max_height: 28,
      min_weight: 7,
      max_weight: 10,
      life_span_min: 15,
      life_span_max: 20,
      temperament: "Hardy, Friendly, Alert, Independent, Gay, Active, Courageous",
      img: "https://cdn2.thedogapi.com/images/Bkdx2g5Em.jpg"
    },
    {
      id: 257,
      name: "Whippet",
      min_height: 46,
      max_height: 56,
      min_weight: 11,
      max_weight: 16,
      life_span_min: 12,
      life_span_max: 15,
      temperament: "Friendly, Affectionate, Lively, Gentle, Intelligent, Quiet",
      img: "https://cdn2.thedogapi.com/images/Hyv-ne94m.jpg"
    },
    {
      id: 258,
      name: "White Shepherd",
      min_height: 56,
      max_height: 64,
      min_weight: 27,
      max_weight: 39,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Self-confidence, Aloof, Fearless, Alert, Companionable, Eager",
      img: "https://cdn2.thedogapi.com/images/r14M3e9E7.jpg"
    },
    {
      id: 259,
      name: "Wire Fox Terrier",
      min_height: 33,
      max_height: 41,
      min_weight: 7,
      max_weight: 9,
      life_span_min: 13,
      life_span_max: 14,
      temperament: "Fearless, Friendly, Bold, Keen, Alert, Quick",
      img: "https://cdn2.thedogapi.com/images/SJ6f2g9EQ.jpg"
    },
    {
      id: 260,
      name: "Wirehaired Pointing Griffon",
      min_height: 51,
      max_height: 61,
      min_weight: 20,
      max_weight: 32,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Loyal, Gentle, Vigilant, Trainable, Proud",
      img: "https://cdn2.thedogapi.com/images/Bkam2l9Vm.jpg"
    },
    {
      id: 261,
      name: "Wirehaired Vizsla",
      min_height: 55,
      max_height: 64,
      min_weight: 20,
      max_weight: 29,
      life_span_min: 12,
      life_span_max: 14,
      img: "https://cdn2.thedogapi.com/images/r1I4hl5Em.jpg"
    },
    {
      id: 262,
      name: "Xoloitzcuintli",
      min_height: 25,
      max_height: 58,
      min_weight: 4,
      max_weight: 14,
      life_span_min: 12,
      life_span_max: 14,
      temperament: "Cheerful, Alert, Companionable, Intelligent, Protective, Calm",
      img: "https://cdn2.thedogapi.com/images/HkNS3gqEm.jpg"
    },
    {
      id: 264,
      name: "Yorkshire Terrier",
      min_height: 20,
      max_height: 23,
      min_weight: 2,
      max_weight: 3,
      life_span_min: 12,
      life_span_max: 16,
      temperament: "Bold, Independent, Confident, Intelligent, Courageous",
      img: "https://cdn2.thedogapi.com/images/B12BnxcVQ.jpg"
    }
  ]