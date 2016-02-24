import React from 'react';
import ReactDOM from 'react-dom';
import {Dropdown, Button, Card, CardTitle, Row, Col, Icon, Navbar, NavItem} from 'react-materialize';

var data = [
    {
        "is_claimed": true,
        "rating": 4.5,
        "mobile_url": "http://m.yelp.ca/biz/parker-place-meat-and-b-b-q-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "rating_img_url": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
        "review_count": 71,
        "name": "Parker Place Meat & B.B.Q",
        "rating_img_url_small": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
        "url": "http://www.yelp.ca/biz/parker-place-meat-and-b-b-q-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "categories": [
            [
                "Meat Shops",
                "meats"
            ],
            [
                "Barbeque",
                "bbq"
            ],
            [
                "Chinese",
                "chinese"
            ]
        ],
        "phone": "6042331138",
        "snippet_text": "stop everything! stop everything!   You need to bookmark this place!   Absolutely the best roast pork ever!   No joke. There is a consistent line for good...",
        "image_url": "http://s3-media3.fl.yelpcdn.com/bphoto/YXRh14r5F642eV6S3-ApSQ/ms.jpg",
        "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/CwgWh3T40Tc6fLQegQDtqQ/ms.jpg",
        "display_phone": "+1-604-233-1138",
        "rating_img_url_large": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
        "id": "parker-place-meat-and-b-b-q-richmond",
        "is_closed": false,
        "location": {
            "city": "Richmond",
            "display_address": [
                "1020 - 4380 No 3 Rd",
                "Golden Village",
                "Richmond, BC V6X 3V7"
            ],
            "geo_accuracy": 8.0,
            "neighborhoods": [
                "Golden Village"
            ],
            "postal_code": "V6X 3V7",
            "country_code": "CA",
            "address": [
                "1020 - 4380 No 3 Rd"
            ],
            "coordinate": {
                "latitude": 49.1819191,
                "longitude": -123.1363449
            },
            "state_code": "BC"
        }
    },
    {
        "is_claimed": false,
        "rating": 4.5,
        "mobile_url": "http://m.yelp.ca/biz/daddys-delight-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "rating_img_url": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
        "review_count": 32,
        "name": "Daddy's Delight",
        "rating_img_url_small": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
        "url": "http://www.yelp.ca/biz/daddys-delight-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "categories": [
            [
                "Halal",
                "halal"
            ],
            [
                "Persian/Iranian",
                "persian"
            ],
            [
                "Pizza",
                "pizza"
            ]
        ],
        "phone": "6042079091",
        "snippet_text": "One of the best Kabab I ever ate. Very friendly place. Just note that their time on Yelp is incorrect.\nOpening time as following:\nMonday:Close \nTuesday to...",
        "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/1WGpq5Bv22zZgTOJtpbVkQ/ms.jpg",
        "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/B1E_mk0of9jhzzA0PfnGhA/ms.jpg",
        "display_phone": "+1-604-207-9091",
        "rating_img_url_large": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
        "id": "daddys-delight-richmond",
        "is_closed": false,
        "location": {
            "city": "Richmond",
            "display_address": [
                "4020 No 5 Road",
                "Richmond, BC V6X 2V1"
            ],
            "geo_accuracy": 9.5,
            "postal_code": "V6X 2V1",
            "country_code": "CA",
            "address": [
                "4020 No 5 Road"
            ],
            "coordinate": {
                "latitude": 49.1842679432228,
                "longitude": -123.091404421526
            },
            "state_code": "BC"
        }
    },
    {
        "is_claimed": false,
        "rating": 4.0,
        "mobile_url": "http://m.yelp.ca/biz/l-a-chicken-richmond-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 128,
        "name": "L A Chicken",
        "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "http://www.yelp.ca/biz/l-a-chicken-richmond-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "categories": [
            [
                "Chicken Wings",
                "chicken_wings"
            ],
            [
                "Fast Food",
                "hotdogs"
            ]
        ],
        "phone": "6042784737",
        "snippet_text": "After a 2 month traveling jaunt through Vancouver (which I'm still on btw), we had to dig deep and find those local favorites that was neither a Cactus, a...",
        "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/9ijyi-Qgef4YBJBIY1x8fw/ms.jpg",
        "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/ZWjYPYqr6_6U2URFCm16tw/ms.jpg",
        "display_phone": "+1-604-278-4737",
        "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "id": "l-a-chicken-richmond-2",
        "is_closed": false,
        "location": {
            "city": "Richmond",
            "display_address": [
                "11780 Thorpe Road",
                "Suite 160",
                "Richmond, BC V6X 1J6"
            ],
            "geo_accuracy": 8.0,
            "postal_code": "V6X 1J6",
            "country_code": "CA",
            "address": [
                "11780 Thorpe Road",
                "Suite 160"
            ],
            "coordinate": {
                "latitude": 49.18297,
                "longitude": -123.09197
            },
            "state_code": "BC"
        }
    },
    {
        "is_claimed": false,
        "rating": 4.0,
        "mobile_url": "http://m.yelp.ca/biz/shanghai-river-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 365,
        "name": "Shanghai River",
        "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "http://www.yelp.ca/biz/shanghai-river-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "categories": [
            [
                "Chinese",
                "chinese"
            ]
        ],
        "phone": "6042338885",
        "snippet_text": "My hunt for the best XLB is over. I am a huge fan of Shanghai River. The restaurant is beautiful, the prices are reasonable, the service is decent (and much...",
        "image_url": "http://s3-media4.fl.yelpcdn.com/bphoto/r0OSW4sI9oBkW2vBkp4Lpg/ms.jpg",
        "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/wEZd1yOC7uDPlsj2wf2tJA/ms.jpg",
        "display_phone": "+1-604-233-8885",
        "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "id": "shanghai-river-richmond",
        "is_closed": false,
        "location": {
            "city": "Richmond",
            "display_address": [
                "7831 Westminster Highway",
                "Golden Village",
                "Richmond, BC V6X 4J4"
            ],
            "geo_accuracy": 8.0,
            "neighborhoods": [
                "Golden Village"
            ],
            "postal_code": "V6X 4J4",
            "country_code": "CA",
            "address": [
                "7831 Westminster Highway"
            ],
            "coordinate": {
                "latitude": 49.17074,
                "longitude": -123.13848
            },
            "state_code": "BC"
        }
    },
    {
        "is_claimed": true,
        "rating": 4.5,
        "mobile_url": "http://m.yelp.ca/biz/smokehouse-sandwich-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "rating_img_url": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
        "review_count": 87,
        "name": "Smokehouse Sandwich",
        "rating_img_url_small": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
        "url": "http://www.yelp.ca/biz/smokehouse-sandwich-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "categories": [
            [
                "Barbeque",
                "bbq"
            ],
            [
                "Sandwiches",
                "sandwiches"
            ]
        ],
        "phone": "6043704177",
        "snippet_text": "This unassuming, hole-in-the-wall puts out some of the most delicious sandwiches in town.\nAs a matter of fact it puts a lot of the trendy sandwich places...",
        "image_url": "http://s3-media3.fl.yelpcdn.com/bphoto/U5b8mvFM5eIZZfIdh4QAag/ms.jpg",
        "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/assets/srv0/yelp_styleguide/cc4afe21892e/assets/img/default_avatars/user_medium_square.png",
        "display_phone": "+1-604-370-4177",
        "rating_img_url_large": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
        "id": "smokehouse-sandwich-richmond",
        "is_closed": false,
        "location": {
            "city": "Richmond",
            "display_address": [
                "5188 Westminster Highway",
                "Suite 108",
                "Richmond, BC V7C 5S7"
            ],
            "geo_accuracy": 8.0,
            "postal_code": "V7C 5S7",
            "country_code": "CA",
            "address": [
                "5188 Westminster Highway",
                "Suite 108"
            ],
            "coordinate": {
                "latitude": 49.16984,
                "longitude": -123.16749
            },
            "state_code": "BC"
        }
    },
    {
        "is_claimed": false,
        "rating": 4.0,
        "mobile_url": "http://m.yelp.ca/biz/hk-bbq-master-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 148,
        "name": "HK BBQ Master",
        "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "http://www.yelp.ca/biz/hk-bbq-master-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "categories": [
            [
                "Chinese",
                "chinese"
            ],
            [
                "Barbeque",
                "bbq"
            ]
        ],
        "phone": "6042726568",
        "snippet_text": "I don't know when it became a tradition that whenever we want Hongkong-style BBQ we'd come to this place.  \n\nIt's not hard to understand why once you try...",
        "image_url": "http://s3-media3.fl.yelpcdn.com/bphoto/0i6LKO7AdNcLkiEOMlG6Gw/ms.jpg",
        "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/jAd3dUnusSnAqen47-wr8w/ms.jpg",
        "display_phone": "+1-604-272-6568",
        "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "id": "hk-bbq-master-richmond",
        "is_closed": false,
        "location": {
            "city": "Richmond",
            "display_address": [
                "4651 No 3 Rd",
                "Ste 145",
                "Golden Village",
                "Richmond, BC V6X"
            ],
            "geo_accuracy": 8.0,
            "neighborhoods": [
                "Golden Village"
            ],
            "postal_code": "V6X",
            "country_code": "CA",
            "address": [
                "4651 No 3 Rd",
                "Ste 145"
            ],
            "coordinate": {
                "latitude": 49.1796073,
                "longitude": -123.1368849
            },
            "state_code": "BC"
        }
    },
    {
        "is_claimed": true,
        "rating": 4.5,
        "mobile_url": "http://m.yelp.ca/biz/r-and-h-chinese-food-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "rating_img_url": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
        "review_count": 37,
        "name": "R & H Chinese Food",
        "rating_img_url_small": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
        "url": "http://www.yelp.ca/biz/r-and-h-chinese-food-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "categories": [
            [
                "Chinese",
                "chinese"
            ]
        ],
        "phone": "7782975668",
        "snippet_text": "Had the XLB and the pancake, both were excellent. Who would have thought you could get food this good in the food court of a mall?\n\nAm already thinking...",
        "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/5J2ICARywGyjqKsURuUVYw/ms.jpg",
        "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/assets/srv0/yelp_styleguide/cc4afe21892e/assets/img/default_avatars/user_medium_square.png",
        "display_phone": "+1-778-297-5668",
        "rating_img_url_large": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
        "id": "r-and-h-chinese-food-richmond",
        "is_closed": false,
        "location": {
            "city": "Richmond",
            "display_address": [
                "5300 No 3 Road",
                "Golden Village",
                "Richmond, BC V6X 2X9"
            ],
            "geo_accuracy": 8.0,
            "neighborhoods": [
                "Golden Village"
            ],
            "postal_code": "V6X 2X9",
            "country_code": "CA",
            "address": [
                "5300 No 3 Road"
            ],
            "coordinate": {
                "latitude": 49.1751518,
                "longitude": -123.1364746
            },
            "state_code": "BC"
        }
    },
    {
        "is_claimed": false,
        "rating": 4.0,
        "mobile_url": "http://m.yelp.ca/biz/fishermans-terrace-seafood-restaurant-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 249,
        "name": "Fisherman's Terrace Seafood Restaurant",
        "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "http://www.yelp.ca/biz/fishermans-terrace-seafood-restaurant-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "categories": [
            [
                "Seafood",
                "seafood"
            ],
            [
                "Dim Sum",
                "dimsum"
            ]
        ],
        "phone": "6043039739",
        "snippet_text": "Only been once, but it was fantastic.  You order off the menu, and the names are a little odd, but we managed to get our ha gow/shu mai/cheong fun/hum bow...",
        "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/1JAkHjQUv5SSnDBFpyN_rg/ms.jpg",
        "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/nohDaMpAemx0NJKxesvjDA/ms.jpg",
        "display_phone": "+1-604-303-9739",
        "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "id": "fishermans-terrace-seafood-restaurant-richmond",
        "is_closed": false,
        "location": {
            "city": "Richmond",
            "display_address": [
                "4151 Hazelbridge Way",
                "Suite 3580",
                "Golden Village",
                "Richmond, BC V6X 4J7"
            ],
            "geo_accuracy": 8.0,
            "neighborhoods": [
                "Golden Village"
            ],
            "postal_code": "V6X 4J7",
            "country_code": "CA",
            "address": [
                "4151 Hazelbridge Way",
                "Suite 3580"
            ],
            "coordinate": {
                "latitude": 49.18408,
                "longitude": -123.13404
            },
            "state_code": "BC"
        }
    },
    {
        "is_claimed": false,
        "rating": 3.5,
        "mobile_url": "http://m.yelp.ca/biz/dinesty-dumpling-house-richmond-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "rating_img_url": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/5ef3eb3cb162/ico/stars/v1/stars_3_half.png",
        "review_count": 189,
        "name": "Dinesty Dumpling House",
        "rating_img_url_small": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/2e909d5d3536/ico/stars/v1/stars_small_3_half.png",
        "url": "http://www.yelp.ca/biz/dinesty-dumpling-house-richmond-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "categories": [
            [
                "Chinese",
                "chinese"
            ]
        ],
        "phone": "6043037772",
        "snippet_text": "(XLB Score: 45.5/50) \n\nI've heard so many positive feedback about the Xiao Long Bao at this place that I had to try it out. Rumour has it that the chef from...",
        "image_url": "http://s3-media4.fl.yelpcdn.com/bphoto/Ifnu3cT32U7V2PwuOaXBKA/ms.jpg",
        "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/0BvstbA_zaIfe6fwtMm-Ow/ms.jpg",
        "display_phone": "+1-604-303-7772",
        "rating_img_url_large": "http://s3-media3.fl.yelpcdn.com/assets/2/www/img/bd9b7a815d1b/ico/stars/v1/stars_large_3_half.png",
        "id": "dinesty-dumpling-house-richmond-2",
        "is_closed": false,
        "location": {
            "city": "Richmond",
            "display_address": [
                "8111 Ackroyd Road",
                "Suite 160",
                "Golden Village",
                "Richmond, BC V6X 3J9"
            ],
            "geo_accuracy": 9.5,
            "neighborhoods": [
                "Golden Village"
            ],
            "postal_code": "V6X 3J9",
            "country_code": "CA",
            "address": [
                "8111 Ackroyd Road",
                "Suite 160"
            ],
            "coordinate": {
                "latitude": 49.172210377236,
                "longitude": -123.135687157085
            },
            "state_code": "BC"
        }
    },
    {
        "is_claimed": false,
        "rating": 4.0,
        "mobile_url": "http://m.yelp.ca/biz/shanghai-morning-restaurant-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 60,
        "name": "Shanghai Morning Restaurant",
        "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "http://www.yelp.ca/biz/shanghai-morning-restaurant-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "categories": [
            [
                "Chinese",
                "chinese"
            ]
        ],
        "phone": "7782976098",
        "snippet_text": "Came here with the family and really enjoyed both the food and the service! Focusing on the classic shanghainese dim sum like xlb and a plethora of noodle...",
        "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/etsDTfQDIlEJmiYHSuSRGg/ms.jpg",
        "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/M8Oe9xZ2X7sPtSWimQv56Q/ms.jpg",
        "display_phone": "+1-778-297-6098",
        "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "id": "shanghai-morning-restaurant-richmond",
        "is_closed": false,
        "location": {
            "city": "Richmond",
            "display_address": [
                "8291 Alexandra Road",
                "Suite 125",
                "Golden Village",
                "Richmond, BC V6X 1C3"
            ],
            "geo_accuracy": 9.5,
            "neighborhoods": [
                "Golden Village"
            ],
            "postal_code": "V6X 1C3",
            "country_code": "CA",
            "address": [
                "8291 Alexandra Road",
                "Suite 125"
            ],
            "coordinate": {
                "latitude": 49.1786768353282,
                "longitude": -123.131827985983
            },
            "state_code": "BC"
        }
    },
    {
        "is_claimed": true,
        "rating": 4.0,
        "mobile_url": "http://m.yelp.ca/biz/john-3-16-malaysian-delights-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 29,
        "name": "John 3:16 Malaysian Delights",
        "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "http://www.yelp.ca/biz/john-3-16-malaysian-delights-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "categories": [
            [
                "Malaysian",
                "malaysian"
            ]
        ],
        "phone": "6042148181",
        "snippet_text": "I grew up in Malaysia/Singapore so my tastes regarding food from this region are a bit more picky than some.\n\nThis place has the best hainanese chicken so...",
        "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/fDcaeRLAbbNn6LR9w0_7xQ/ms.jpg",
        "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/g9Zr6ye_-CFBOpGFvGJ9_Q/ms.jpg",
        "display_phone": "+1-604-214-8181",
        "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "id": "john-3-16-malaysian-delights-richmond",
        "is_closed": false,
        "location": {
            "city": "Richmond",
            "display_address": [
                "8151 Anderson Road",
                "Suite 170",
                "Richmond, BC V6Y 2V9"
            ],
            "geo_accuracy": 9.5,
            "postal_code": "V6Y 2V9",
            "country_code": "CA",
            "address": [
                "8151 Anderson Road",
                "Suite 170"
            ],
            "coordinate": {
                "latitude": 49.1639189934758,
                "longitude": -123.13412656591
            },
            "state_code": "BC"
        }
    },
    {
        "is_claimed": true,
        "rating": 4.5,
        "mobile_url": "http://m.yelp.ca/biz/steveston-pizza-company-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "rating_img_url": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
        "review_count": 103,
        "name": "Steveston Pizza Company",
        "rating_img_url_small": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
        "url": "http://www.yelp.ca/biz/steveston-pizza-company-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "categories": [
            [
                "Pizza",
                "pizza"
            ]
        ],
        "phone": "6042040777",
        "snippet_text": "Definitely one of the best pizzas I ever tasted. We ordered their Princess Pizza for $30, which was made up entirely of delicious, giant prawns. \n\nThe bread...",
        "image_url": "http://s3-media4.fl.yelpcdn.com/bphoto/ed5YWDjYeDifU3b6SLHrPQ/ms.jpg",
        "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/wWmQAsx9zwwDQDR9e1Zorg/ms.jpg",
        "display_phone": "+1-604-204-0777",
        "rating_img_url_large": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
        "id": "steveston-pizza-company-richmond",
        "is_closed": false,
        "location": {
            "city": "Richmond",
            "display_address": [
                "3400 Moncton Street",
                "Suite 100",
                "Steveston",
                "Richmond, BC V7E 3A2"
            ],
            "geo_accuracy": 9.5,
            "neighborhoods": [
                "Steveston"
            ],
            "postal_code": "V7E 3A2",
            "country_code": "CA",
            "address": [
                "3400 Moncton Street",
                "Suite 100"
            ],
            "coordinate": {
                "latitude": 49.1250589553541,
                "longitude": -123.185554660698
            },
            "state_code": "BC"
        }
    },
    {
        "is_claimed": false,
        "rating": 4.0,
        "mobile_url": "http://m.yelp.ca/biz/excellent-tofu-and-snacks-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 73,
        "name": "Excellent Tofu & Snacks",
        "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "http://www.yelp.ca/biz/excellent-tofu-and-snacks-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "categories": [
            [
                "Desserts",
                "desserts"
            ],
            [
                "Chinese",
                "chinese"
            ]
        ],
        "phone": "6042320268",
        "snippet_text": "This place is CASH ONLY!\n\nSo tofu fa is one of my favorite types of desserts and it isn't found very often in Chinese restaurants these days outside of dim...",
        "image_url": "http://s3-media3.fl.yelpcdn.com/bphoto/HH8uxW5d9Kc-SXGcEWN9rw/ms.jpg",
        "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/eJBMcaBthns65HgU_i-X0g/ms.jpg",
        "display_phone": "+1-604-232-0268",
        "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "id": "excellent-tofu-and-snacks-richmond",
        "is_closed": false,
        "location": {
            "city": "Richmond",
            "display_address": [
                "4231 Hazelbridge Way",
                "Ste 160",
                "Golden Village",
                "Richmond, BC V6X 3L7"
            ],
            "geo_accuracy": 8.0,
            "neighborhoods": [
                "Golden Village"
            ],
            "postal_code": "V6X 3L7",
            "country_code": "CA",
            "address": [
                "4231 Hazelbridge Way",
                "Ste 160"
            ],
            "coordinate": {
                "latitude": 49.1826553,
                "longitude": -123.1336212
            },
            "state_code": "BC"
        }
    },
    {
        "is_claimed": false,
        "rating": 4.0,
        "mobile_url": "http://m.yelp.ca/biz/deer-garden-signatures-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 111,
        "name": "Deer Garden Signatures",
        "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "http://www.yelp.ca/biz/deer-garden-signatures-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "categories": [
            [
                "Chinese",
                "chinese"
            ]
        ],
        "phone": "6042789229",
        "snippet_text": "4 for service and 4.8 for food rounded up to 5 for value.\nDeer Garden is not easy to find.  It is above Peaches.  You can take the dark, dingy stairs next...",
        "image_url": "http://s3-media4.fl.yelpcdn.com/bphoto/e398HcrJk0N2AmgQUPcFQw/ms.jpg",
        "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/mFTW_kcKVzGR-FiiWCjmqg/ms.jpg",
        "display_phone": "+1-604-278-9229",
        "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "id": "deer-garden-signatures-richmond",
        "is_closed": false,
        "location": {
            "city": "Richmond",
            "display_address": [
                "8580 Alexandra Road",
                "Suite 2015",
                "Golden Village",
                "Richmond, BC V6X 1C3"
            ],
            "geo_accuracy": 9.5,
            "neighborhoods": [
                "Golden Village"
            ],
            "postal_code": "V6X 1C3",
            "country_code": "CA",
            "address": [
                "8580 Alexandra Road",
                "Suite 2015"
            ],
            "coordinate": {
                "latitude": 49.1780903216696,
                "longitude": -123.12769887203
            },
            "state_code": "BC"
        }
    },
    {
        "is_claimed": true,
        "rating": 3.5,
        "mobile_url": "http://m.yelp.ca/biz/tsim-chai-noodle-restaurant-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "rating_img_url": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/5ef3eb3cb162/ico/stars/v1/stars_3_half.png",
        "review_count": 75,
        "name": "Tsim Chai Noodle Restaurant",
        "rating_img_url_small": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/2e909d5d3536/ico/stars/v1/stars_small_3_half.png",
        "url": "http://www.yelp.ca/biz/tsim-chai-noodle-restaurant-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "categories": [
            [
                "Chinese",
                "chinese"
            ]
        ],
        "phone": "6042736288",
        "snippet_text": "Wontons almost as large as golf balls!  That was my first impression almost 20 years ago when I was last at Tsim Chai Noodles. I haven't been there since my...",
        "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/_uoqdlcqRLPVlgVE3nXLmA/ms.jpg",
        "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/sT_e8ncvJydZAhStRp-A0g/ms.jpg",
        "display_phone": "+1-604-273-6288",
        "rating_img_url_large": "http://s3-media3.fl.yelpcdn.com/assets/2/www/img/bd9b7a815d1b/ico/stars/v1/stars_large_3_half.png",
        "id": "tsim-chai-noodle-restaurant-richmond",
        "is_closed": false,
        "location": {
            "city": "Richmond",
            "display_address": [
                "50 - 8251 Westminster Highway",
                "Golden Village",
                "Richmond, BC V6X 1A7"
            ],
            "geo_accuracy": 8.0,
            "neighborhoods": [
                "Golden Village"
            ],
            "postal_code": "V6X 1A7",
            "country_code": "CA",
            "address": [
                "50 - 8251 Westminster Highway"
            ],
            "coordinate": {
                "latitude": 49.1706886,
                "longitude": -123.1330185
            },
            "state_code": "BC"
        }
    },
    {
        "is_claimed": true,
        "rating": 4.0,
        "mobile_url": "http://m.yelp.ca/biz/zees-grilled-cheese-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 22,
        "name": "Zee's Grilled Cheese",
        "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "http://www.yelp.ca/biz/zees-grilled-cheese-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "categories": [
            [
                "Delis",
                "delis"
            ],
            [
                "Sandwiches",
                "sandwiches"
            ],
            [
                "Breakfast & Brunch",
                "breakfast_brunch"
            ]
        ],
        "phone": "6044470420",
        "snippet_text": "Delicious food, simple, but done very well!\n\nThe menu offers options for grilled sandwiches and house made soups.\n\nIts a great spot for comfort food.",
        "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/MBfYruYc2QlTKTRPzlAWzg/ms.jpg",
        "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/mvU4ti2XzUJ2O8i3qoWXVg/ms.jpg",
        "display_phone": "+1-604-447-0420",
        "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "id": "zees-grilled-cheese-richmond",
        "is_closed": false,
        "location": {
            "city": "Richmond",
            "display_address": [
                "12420 Number 1 Road",
                "Suite 160",
                "Steveston",
                "Richmond, BC V7E 6N2"
            ],
            "geo_accuracy": 5.0,
            "neighborhoods": [
                "Steveston"
            ],
            "postal_code": "V7E 6N2",
            "country_code": "CA",
            "address": [
                "12420 Number 1 Road",
                "Suite 160"
            ],
            "coordinate": {
                "latitude": 49.1240499,
                "longitude": -123.18117
            },
            "state_code": "BC"
        }
    },
    {
        "is_claimed": true,
        "rating": 4.0,
        "mobile_url": "http://m.yelp.ca/biz/cafe-loyal-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 17,
        "name": "Cafe Loyal",
        "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "http://www.yelp.ca/biz/cafe-loyal-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "categories": [
            [
                "Fast Food",
                "hotdogs"
            ]
        ],
        "phone": "6044474911",
        "snippet_text": "Fast. Cheap. Cafeteria style HK food. Everything on the board. Most of the items will fill you up fast. Even the $6 combos. Just place your order up front....",
        "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/g__HJM-xp1087aVZ4d2TYg/ms.jpg",
        "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/0IVUnWsm48Piom5EgxYbrg/ms.jpg",
        "display_phone": "+1-604-447-4911",
        "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "id": "cafe-loyal-richmond",
        "is_closed": false,
        "location": {
            "city": "Richmond",
            "display_address": [
                "11911 Bridgeport Road",
                "Suite 101",
                "Richmond, BC V6X 1T5"
            ],
            "geo_accuracy": 8.0,
            "postal_code": "V6X 1T5",
            "country_code": "CA",
            "address": [
                "11911 Bridgeport Road",
                "Suite 101"
            ],
            "coordinate": {
                "latitude": 49.19222,
                "longitude": -123.09208
            },
            "state_code": "BC"
        }
    },
    {
        "is_claimed": true,
        "rating": 4.0,
        "mobile_url": "http://m.yelp.ca/biz/pho-ten-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 53,
        "name": "Pho Ten",
        "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "http://www.yelp.ca/biz/pho-ten-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "categories": [
            [
                "Vietnamese",
                "vietnamese"
            ]
        ],
        "phone": "6044419699",
        "snippet_text": "Yes it's time to update my old review.  Especially since I come here often enough that this should warrant a dozen reviews.\n\nIt's our go to office staff...",
        "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/47yv9lArvIviIq1csB7dmA/ms.jpg",
        "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/ADwUGV05grhG2JuftEhB_Q/ms.jpg",
        "display_phone": "+1-604-441-9699",
        "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "id": "pho-ten-richmond",
        "is_closed": false,
        "location": {
            "city": "Richmond",
            "display_address": [
                "11080 No 5 Road",
                "Suite 130",
                "Richmond, BC V7A 4E7"
            ],
            "geo_accuracy": 9.5,
            "postal_code": "V7A 4E7",
            "country_code": "CA",
            "address": [
                "11080 No 5 Road",
                "Suite 130"
            ],
            "coordinate": {
                "latitude": 49.1320426607525,
                "longitude": -123.091545846558
            },
            "state_code": "BC"
        }
    },
    {
        "is_claimed": false,
        "rating": 4.0,
        "mobile_url": "http://m.yelp.ca/biz/takeya-sushi-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 37,
        "name": "Takeya Sushi",
        "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "http://www.yelp.ca/biz/takeya-sushi-richmond?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "categories": [
            [
                "Japanese",
                "japanese"
            ],
            [
                "Sushi Bars",
                "sushi"
            ]
        ],
        "phone": "6044485587",
        "snippet_text": "If Takeya was closer, I'd never leave. This place is a great go to place for sushi and their sashimi is always fresh and delicious. The prices here are also...",
        "image_url": "http://s3-media4.fl.yelpcdn.com/bphoto/WUhpv91M_2E_fApzfO5Sdg/ms.jpg",
        "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/LqnoTAkkroqbmvPEUn-m2g/ms.jpg",
        "display_phone": "+1-604-448-5587",
        "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "id": "takeya-sushi-richmond",
        "is_closed": false,
        "location": {
            "city": "Richmond",
            "display_address": [
                "Seafair Mall",
                "8671 No 1 Road, Suite 17",
                "Richmond, BC V7C 1V1"
            ],
            "geo_accuracy": 9.5,
            "postal_code": "V7C 1V1",
            "country_code": "CA",
            "address": [
                "Seafair Mall",
                "8671 No 1 Road, Suite 17"
            ],
            "coordinate": {
                "latitude": 49.1493113949576,
                "longitude": -123.182500943964
            },
            "state_code": "BC"
        }
    },
    {
        "is_claimed": false,
        "rating": 3.5,
        "mobile_url": "http://m.yelp.ca/biz/shibuyatei-richmond-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "rating_img_url": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/5ef3eb3cb162/ico/stars/v1/stars_3_half.png",
        "review_count": 50,
        "name": "Shibuyatei",
        "rating_img_url_small": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/2e909d5d3536/ico/stars/v1/stars_small_3_half.png",
        "url": "http://www.yelp.ca/biz/shibuyatei-richmond-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=tr5Sr-ombL8H1-lLRWuFdA",
        "categories": [
            [
                "Japanese",
                "japanese"
            ],
            [
                "Sushi Bars",
                "sushi"
            ]
        ],
        "phone": "7782971777",
        "snippet_text": "There are times when I see a great review and I put that place in the back of my mind, just in case I happen to visit that area or someone wants a...",
        "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/dKpJwQm0GPmNE2vychbiWA/ms.jpg",
        "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/yi8b9KWSOu4xt2WFVJU1bA/ms.jpg",
        "display_phone": "+1-778-297-1777",
        "rating_img_url_large": "http://s3-media3.fl.yelpcdn.com/assets/2/www/img/bd9b7a815d1b/ico/stars/v1/stars_large_3_half.png",
        "id": "shibuyatei-richmond-2",
        "is_closed": false,
        "location": {
            "city": "Richmond",
            "display_address": [
                "2971 Sexsmith Road",
                "Unit 125",
                "Richmond, BC V6X 2H4"
            ],
            "geo_accuracy": 9.5,
            "postal_code": "V6X 2H4",
            "country_code": "CA",
            "address": [
                "2971 Sexsmith Road",
                "Unit 125"
            ],
            "coordinate": {
                "latitude": 49.1915767569145,
                "longitude": -123.128242492676
            },
            "state_code": "BC"
        }
    }
];

class App extends React.Component {
    handleClick (e) {
        const $place = $('.place');
        var random = Math.floor(Math.random() * $place.length);
        e.preventDefault();
        $place.addClass('spin');
        console.log("starting loop");
        for (var i = 0; i < $place.length; i += 1) {
            let j = 1000 + (Math.random() * $place.length * 200);
            let k = i;
            setTimeout(() => $($place[k]).fadeOut(200).removeClass('spin'), j);
        }
        setTimeout(() => $($place[random]).fadeIn(), (1000 + i * 200));
    }
    handleClick2 (e) {
        e.preventDefault();
        $('.place').fadeIn();
    }
    render () {
        return (
            <div className="teal">
                <Navbar brand="TuGo Where to Eat" right>
                    <NavItem href='' className="waves-effect" onClick={this.handleClick2}>Reset</NavItem>
                    <NavItem href='' className="waves-effect" onClick={this.handleClick}>Random Place</NavItem>
                </Navbar>
                <PlaceList />
            </div>
        )

    }
}

class Place extends React.Component {
    render () {
        return (
            <Col m={6} s={12} l={4} className="place">
                <Card
                    className="medium"
                    header={<CardTitle image={this.props.image_url}>{this.props.name}</CardTitle>}
                    actions={[<a href={this.props.url}
                    target="_blank">Go to Website</a>]}>
                    <img src={this.props.rating_img_url} />
                    <br/>
                    <span>{this.props.snippet_text}</span>
                </Card>
            </Col>
        )
    }
}

class PlaceList extends React.Component {
    render () {
        var placeNodes = data.map((place) => {
            return (
                <Place name={place.name} url={place.url} snippet_text={place.snippet_text}
                       rating_img_url={place.rating_img_url} image_url={place.image_url} key={place.id}>
                    {place}
                </Place>
            );
        });
        return (
            <Row>
                {placeNodes}
            </Row>
        )
    }
}

ReactDOM.render(
  <App />, document.querySelector('.react-root')
);
