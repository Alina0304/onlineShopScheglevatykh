const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const products = [{
        id: 0,
        name: "La robe Draggiu",
        price: 1950,
        coming_soon: true,
        image_url: "https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dw409ab3d0/22H223DR017-1107-1CT_1_main.jpg?sw=475&sh=633&q=100",
        sizes: [32, 34, 36, 40, 42, 44, 46],
        colors: [],
        sold: true
    }, {
            id: 1,
            name: "La veste Baccala",
            price: 840,
            coming_soon: false,
            image_url: "https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dw0dac8821/22H223JA021-1075-100_4.jpg?sw=475&sh=633&q=100",
            sizes: [32, 34, 36, 40, 42, 44, 46],
            colors: ["#ffffff", "#b3a25f", "#000000"],
            sold: false
        }, {
            id: 2,
            name: "La jupe Notte",
            price: 515,
            coming_soon: false,
            image_url: "https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dw472e832a/22H213SK009-1000-110_2.jpg?sw=475&sh=633&q=100",
            sizes: [32, 34, 36, 40, 42, 44, 46],
            colors: ["#ffffff", "#000000", "#ff70f8"],
            sold: false
        }, {
            id: 3,
            name: "La jupe Baccala",
            price: 485,
            coming_soon: true,
            image_url: "https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dwbac37040/22H223SK020-1075-100_1_main.jpg?sw=475&sh=633&q=100",
            sizes: [32, 34, 36, 40, 42, 44, 46],
            colors: ["#ffffff", "#000000"],
            sold: true
        }, {
            id: 4,
            name: "Le manteau Filu",
            price: 785,
            coming_soon: false,
            image_url: "https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dw5c0c7789/22H223CO019-1085-130_4.jpg?sw=475&sh=633&q=100",
            sizes: [32, 34, 36, 40, 42, 44, 46],
            colors: ["#e6d6a8", "#5b3c11", "#ffffff"],
            sold: false
        }, {
            id: 5,
            name: "Le pantalon Camargue",
            price: 575,
            coming_soon: false,
            image_url: "https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dw8c0fa9d2/22H223PA018-1059-130_1_main.jpg?sw=475&sh=633&q=100",
            sizes: [32, 34, 36, 40, 42, 44, 46],
            colors: ["#e6d6a8", "#5b3c11", "#ffffff", "#000000", "#ff70f8"],
            sold: false
        }, {
            id: 6,
            name: "Le Chiquito moyen",
            price: 575,
            coming_soon: false,
            image_url: "https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dwcdec1215/22H213BA002-3071-140_1_main.jpg?sw=475&sh=633&q=100",
            sizes: [32, 34, 36, 40, 42, 44, 46],
            colors: ["#e6d6a8", "#b07ffa", "ffffff", "000000", "#ba7730", "#edb2dd", "#d6a94f", "000000", "ffffff", "#f7ff00", "#c9ebf5", "#9cc7e6", "000000", "#ff70f8"],
            sold: false
        }, {
            id: 7,
            name: "La robe Biasi",
            price: 825,
            coming_soon: true,
            image_url: "https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dw92ca21e8/22H223DR029-1086-110_1_main.jpg?sw=475&sh=633&q=100",
            sizes: [32, 34, 36, 40, 42, 44, 46],
            colors: ["#ffffff"],
            sold: true
        }];

    res.json(products);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);