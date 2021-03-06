/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'tube-back',
                            type: 'image',
                            rect: ['17px', '297px', '58px', '203px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tube-back.svg",'0px','0px']
                        },
                        {
                            id: 'red-ball',
                            type: 'image',
                            rect: ['25px', '577px', '23px', '23px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted.svg",'0px','0px']
                        },
                        {
                            id: 'horizontal-bar-grey',
                            type: 'image',
                            rect: ['0px', '70px', '100px', '14px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"horizontal-bar.svg",'0px','0px'],
                            transform: [[],['14']]
                        },
                        {
                            id: 'stopper',
                            type: 'image',
                            rect: ['0px', '84px', '33px', '6px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"stopper.svg",'0px','0px']
                        },
                        {
                            id: 'circle',
                            type: 'image',
                            rect: ['5px', '151px', '90px', '89px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"circle.svg",'0px','0px']
                        },
                        {
                            id: 'tube-front',
                            type: 'image',
                            rect: ['16px', '277px', '66px', '224px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tube-front.svg",'0px','0px']
                        },
                        {
                            id: 'horizontal-bar-red',
                            type: 'image',
                            rect: ['18px', '546px', '103px', '10px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"horizontal-bar-red.svg",'0px','0px']
                        },
                        {
                            id: 'curved-triangle',
                            type: 'image',
                            rect: ['0px', '567px', '43px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"curved-triangle.svg",'0px','0px']
                        },
                        {
                            id: 'banner',
                            type: 'image',
                            rect: ['77px', '371px', '35px', '243px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"banner.svg",'0px','0px']
                        },
                        {
                            id: 'ballon',
                            type: 'image',
                            rect: ['74px', '254px', '42px', '122px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ballon.svg",'0px','0px']
                        },
                        {
                            id: 'arrow-14',
                            type: 'image',
                            rect: ['2px', '3px', '23px', '29px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"arrow-14.svg",'0px','0px']
                        },
                        {
                            id: 'button-drop',
                            type: 'ellipse',
                            rect: ['8px', '41px', '35px', '35px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0.34927591463415',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'ad2',
                            type: 'image',
                            rect: ['0px', '-1px', '121px', '602px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"ad2.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '120px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 12884,
                    autoPlay: true,
                    data: [
                        [
                            "eid206",
                            "top",
                            6412,
                            182,
                            "linear",
                            "${ballon}",
                            '562px',
                            '522px'
                        ],
                        [
                            "eid212",
                            "top",
                            6594,
                            521,
                            "linear",
                            "${ballon}",
                            '522px',
                            '470px'
                        ],
                        [
                            "eid215",
                            "top",
                            7115,
                            385,
                            "linear",
                            "${ballon}",
                            '470px',
                            '335px'
                        ],
                        [
                            "eid220",
                            "top",
                            7500,
                            371,
                            "linear",
                            "${ballon}",
                            '335px',
                            '254px'
                        ],
                        [
                            "eid223",
                            "top",
                            7871,
                            629,
                            "linear",
                            "${ballon}",
                            '254px',
                            '117px'
                        ],
                        [
                            "eid228",
                            "top",
                            8500,
                            862,
                            "linear",
                            "${ballon}",
                            '117px',
                            '18px'
                        ],
                        [
                            "eid231",
                            "top",
                            9362,
                            1388,
                            "linear",
                            "${ballon}",
                            '18px',
                            '-53px'
                        ],
                        [
                            "eid236",
                            "top",
                            10750,
                            750,
                            "linear",
                            "${ballon}",
                            '-53px',
                            '-153px'
                        ],
                        [
                            "eid239",
                            "top",
                            11500,
                            313,
                            "linear",
                            "${ballon}",
                            '-153px',
                            '-306px'
                        ],
                        [
                            "eid245",
                            "top",
                            11813,
                            437,
                            "linear",
                            "${ballon}",
                            '-306px',
                            '-385px'
                        ],
                        [
                            "eid19",
                            "left",
                            0,
                            500,
                            "linear",
                            "${red-ball}",
                            '14px',
                            '50px'
                        ],
                        [
                            "eid23",
                            "left",
                            500,
                            500,
                            "linear",
                            "${red-ball}",
                            '50px',
                            '63px'
                        ],
                        [
                            "eid32",
                            "left",
                            1000,
                            1301,
                            "linear",
                            "${red-ball}",
                            '63px',
                            '61px'
                        ],
                        [
                            "eid35",
                            "left",
                            2301,
                            69,
                            "linear",
                            "${red-ball}",
                            '61px',
                            '57px'
                        ],
                        [
                            "eid39",
                            "left",
                            2370,
                            93,
                            "linear",
                            "${red-ball}",
                            '57px',
                            '47px'
                        ],
                        [
                            "eid40",
                            "left",
                            2463,
                            114,
                            "linear",
                            "${red-ball}",
                            '47px',
                            '33px'
                        ],
                        [
                            "eid42",
                            "left",
                            2577,
                            79,
                            "linear",
                            "${red-ball}",
                            '33px',
                            '21px'
                        ],
                        [
                            "eid44",
                            "left",
                            2656,
                            94,
                            "linear",
                            "${red-ball}",
                            '21px',
                            '12px'
                        ],
                        [
                            "eid46",
                            "left",
                            2750,
                            112,
                            "linear",
                            "${red-ball}",
                            '12px',
                            '10px'
                        ],
                        [
                            "eid48",
                            "left",
                            2862,
                            138,
                            "linear",
                            "${red-ball}",
                            '10px',
                            '16px'
                        ],
                        [
                            "eid85",
                            "left",
                            3000,
                            96,
                            "linear",
                            "${red-ball}",
                            '16px',
                            '25px'
                        ],
                        [
                            "eid87",
                            "left",
                            3096,
                            102,
                            "linear",
                            "${red-ball}",
                            '25px',
                            '45px'
                        ],
                        [
                            "eid131",
                            "left",
                            3198,
                            1207,
                            "linear",
                            "${red-ball}",
                            '45px',
                            '42px'
                        ],
                        [
                            "eid133",
                            "left",
                            4405,
                            206,
                            "linear",
                            "${red-ball}",
                            '42px',
                            '30px'
                        ],
                        [
                            "eid135",
                            "left",
                            4611,
                            213,
                            "linear",
                            "${red-ball}",
                            '30px',
                            '38px'
                        ],
                        [
                            "eid137",
                            "left",
                            4824,
                            426,
                            "linear",
                            "${red-ball}",
                            '38px',
                            '26px'
                        ],
                        [
                            "eid140",
                            "left",
                            5250,
                            250,
                            "linear",
                            "${red-ball}",
                            '26px',
                            '21px'
                        ],
                        [
                            "eid170",
                            "left",
                            5500,
                            750,
                            "linear",
                            "${red-ball}",
                            '21px',
                            '25px'
                        ],
                        [
                            "eid171",
                            "left",
                            6250,
                            162,
                            "linear",
                            "${red-ball}",
                            '25px',
                            '39px'
                        ],
                        [
                            "eid161",
                            "rotateZ",
                            5500,
                            385,
                            "linear",
                            "${horizontal-bar-red}",
                            '0deg',
                            '-18deg'
                        ],
                        [
                            "eid144",
                            "rotateZ",
                            5885,
                            365,
                            "linear",
                            "${horizontal-bar-red}",
                            '-18deg',
                            '-67deg'
                        ],
                        [
                            "eid145",
                            "rotateZ",
                            6250,
                            162,
                            "linear",
                            "${horizontal-bar-red}",
                            '-67deg',
                            '-87deg'
                        ],
                        [
                            "eid27",
                            "top",
                            0,
                            500,
                            "linear",
                            "${red-ball}",
                            '47px',
                            '48px'
                        ],
                        [
                            "eid24",
                            "top",
                            500,
                            500,
                            "linear",
                            "${red-ball}",
                            '48px',
                            '52px'
                        ],
                        [
                            "eid29",
                            "top",
                            1000,
                            750,
                            "linear",
                            "${red-ball}",
                            '52px',
                            '97px'
                        ],
                        [
                            "eid30",
                            "top",
                            1750,
                            250,
                            "linear",
                            "${red-ball}",
                            '97px',
                            '173px'
                        ],
                        [
                            "eid31",
                            "top",
                            2000,
                            250,
                            "linear",
                            "${red-ball}",
                            '173px',
                            '199px'
                        ],
                        [
                            "eid33",
                            "top",
                            2250,
                            51,
                            "linear",
                            "${red-ball}",
                            '199px',
                            '202px'
                        ],
                        [
                            "eid34",
                            "top",
                            2301,
                            69,
                            "linear",
                            "${red-ball}",
                            '202px',
                            '207px'
                        ],
                        [
                            "eid38",
                            "top",
                            2370,
                            93,
                            "linear",
                            "${red-ball}",
                            '207px',
                            '212px'
                        ],
                        [
                            "eid41",
                            "top",
                            2463,
                            193,
                            "linear",
                            "${red-ball}",
                            '212px',
                            '207px'
                        ],
                        [
                            "eid43",
                            "top",
                            2656,
                            94,
                            "linear",
                            "${red-ball}",
                            '207px',
                            '195px'
                        ],
                        [
                            "eid45",
                            "top",
                            2750,
                            112,
                            "linear",
                            "${red-ball}",
                            '195px',
                            '183px'
                        ],
                        [
                            "eid47",
                            "top",
                            2862,
                            138,
                            "linear",
                            "${red-ball}",
                            '183px',
                            '167px'
                        ],
                        [
                            "eid84",
                            "top",
                            3000,
                            96,
                            "linear",
                            "${red-ball}",
                            '167px',
                            '159px'
                        ],
                        [
                            "eid86",
                            "top",
                            3096,
                            102,
                            "linear",
                            "${red-ball}",
                            '159px',
                            '155px'
                        ],
                        [
                            "eid88",
                            "top",
                            3345,
                            601,
                            "linear",
                            "${red-ball}",
                            '155px',
                            '281px'
                        ],
                        [
                            "eid89",
                            "top",
                            3946,
                            139,
                            "linear",
                            "${red-ball}",
                            '281px',
                            '313px'
                        ],
                        [
                            "eid130",
                            "top",
                            4085,
                            165,
                            "linear",
                            "${red-ball}",
                            '313px',
                            '343px'
                        ],
                        [
                            "eid132",
                            "top",
                            4250,
                            155,
                            "linear",
                            "${red-ball}",
                            '343px',
                            '366px'
                        ],
                        [
                            "eid134",
                            "top",
                            4405,
                            206,
                            "linear",
                            "${red-ball}",
                            '366px',
                            '383px'
                        ],
                        [
                            "eid136",
                            "top",
                            4611,
                            213,
                            "linear",
                            "${red-ball}",
                            '383px',
                            '400px'
                        ],
                        [
                            "eid138",
                            "top",
                            4824,
                            426,
                            "linear",
                            "${red-ball}",
                            '400px',
                            '483px'
                        ],
                        [
                            "eid139",
                            "top",
                            5250,
                            250,
                            "linear",
                            "${red-ball}",
                            '483px',
                            '523px'
                        ],
                        [
                            "eid162",
                            "top",
                            5500,
                            385,
                            "linear",
                            "${red-ball}",
                            '523px',
                            '534px'
                        ],
                        [
                            "eid168",
                            "top",
                            5885,
                            235,
                            "linear",
                            "${red-ball}",
                            '534px',
                            '558px'
                        ],
                        [
                            "eid169",
                            "top",
                            6120,
                            130,
                            "linear",
                            "${red-ball}",
                            '558px',
                            '575px'
                        ],
                        [
                            "eid172",
                            "top",
                            6250,
                            162,
                            "linear",
                            "${red-ball}",
                            '575px',
                            '577px'
                        ],
                        [
                            "eid25",
                            "-webkit-transform-origin",
                            1000,
                            0,
                            "linear",
                            "${red-ball}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid466",
                            "-moz-transform-origin",
                            1000,
                            0,
                            "linear",
                            "${red-ball}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid467",
                            "-ms-transform-origin",
                            1000,
                            0,
                            "linear",
                            "${red-ball}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid468",
                            "msTransformOrigin",
                            1000,
                            0,
                            "linear",
                            "${red-ball}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid469",
                            "-o-transform-origin",
                            1000,
                            0,
                            "linear",
                            "${red-ball}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid470",
                            "transform-origin",
                            1000,
                            0,
                            "linear",
                            "${red-ball}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid208",
                            "top",
                            6412,
                            182,
                            "linear",
                            "${banner}",
                            '679px',
                            '639px'
                        ],
                        [
                            "eid214",
                            "top",
                            6594,
                            521,
                            "linear",
                            "${banner}",
                            '639px',
                            '587px'
                        ],
                        [
                            "eid216",
                            "top",
                            7115,
                            385,
                            "linear",
                            "${banner}",
                            '587px',
                            '452px'
                        ],
                        [
                            "eid222",
                            "top",
                            7500,
                            371,
                            "linear",
                            "${banner}",
                            '452px',
                            '371px'
                        ],
                        [
                            "eid225",
                            "top",
                            7871,
                            629,
                            "linear",
                            "${banner}",
                            '371px',
                            '234px'
                        ],
                        [
                            "eid230",
                            "top",
                            8500,
                            862,
                            "linear",
                            "${banner}",
                            '234px',
                            '135px'
                        ],
                        [
                            "eid233",
                            "top",
                            9362,
                            1388,
                            "linear",
                            "${banner}",
                            '135px',
                            '64px'
                        ],
                        [
                            "eid238",
                            "top",
                            10750,
                            750,
                            "linear",
                            "${banner}",
                            '64px',
                            '-36px'
                        ],
                        [
                            "eid241",
                            "top",
                            11500,
                            313,
                            "linear",
                            "${banner}",
                            '-36px',
                            '-189px'
                        ],
                        [
                            "eid247",
                            "top",
                            11813,
                            437,
                            "linear",
                            "${banner}",
                            '-189px',
                            '-268px'
                        ],
                        [
                            "eid213",
                            "left",
                            6594,
                            521,
                            "linear",
                            "${banner}",
                            '81px',
                            '80px'
                        ],
                        [
                            "eid218",
                            "left",
                            7115,
                            385,
                            "linear",
                            "${banner}",
                            '80px',
                            '79px'
                        ],
                        [
                            "eid221",
                            "left",
                            7500,
                            371,
                            "linear",
                            "${banner}",
                            '79px',
                            '77px'
                        ],
                        [
                            "eid226",
                            "left",
                            7871,
                            629,
                            "linear",
                            "${banner}",
                            '77px',
                            '81px'
                        ],
                        [
                            "eid229",
                            "left",
                            8500,
                            862,
                            "linear",
                            "${banner}",
                            '81px',
                            '73px'
                        ],
                        [
                            "eid234",
                            "left",
                            9362,
                            1388,
                            "linear",
                            "${banner}",
                            '73px',
                            '82px'
                        ],
                        [
                            "eid237",
                            "left",
                            10750,
                            750,
                            "linear",
                            "${banner}",
                            '82px',
                            '77px'
                        ],
                        [
                            "eid248",
                            "left",
                            11813,
                            437,
                            "linear",
                            "${banner}",
                            '77px',
                            '73px'
                        ],
                        [
                            "eid378",
                            "opacity",
                            12000,
                            334,
                            "linear",
                            "${ad2}",
                            '0.000000',
                            '0.08212381097561'
                        ],
                        [
                            "eid415",
                            "opacity",
                            12334,
                            166,
                            "linear",
                            "${ad2}",
                            '0.08212381097561',
                            '0.56461997560976'
                        ],
                        [
                            "eid399",
                            "opacity",
                            12500,
                            384,
                            "linear",
                            "${ad2}",
                            '0.56461997560976',
                            '1'
                        ],
                        [
                            "eid211",
                            "left",
                            6594,
                            521,
                            "linear",
                            "${ballon}",
                            '78px',
                            '77px'
                        ],
                        [
                            "eid217",
                            "left",
                            7115,
                            385,
                            "linear",
                            "${ballon}",
                            '77px',
                            '76px'
                        ],
                        [
                            "eid219",
                            "left",
                            7500,
                            371,
                            "linear",
                            "${ballon}",
                            '76px',
                            '74px'
                        ],
                        [
                            "eid224",
                            "left",
                            7871,
                            629,
                            "linear",
                            "${ballon}",
                            '74px',
                            '78px'
                        ],
                        [
                            "eid227",
                            "left",
                            8500,
                            862,
                            "linear",
                            "${ballon}",
                            '78px',
                            '70px'
                        ],
                        [
                            "eid232",
                            "left",
                            9362,
                            1388,
                            "linear",
                            "${ballon}",
                            '70px',
                            '79px'
                        ],
                        [
                            "eid235",
                            "left",
                            10750,
                            750,
                            "linear",
                            "${ballon}",
                            '79px',
                            '74px'
                        ],
                        [
                            "eid246",
                            "left",
                            11813,
                            437,
                            "linear",
                            "${ballon}",
                            '74px',
                            '70px'
                        ],
                        [
                            "eid22",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${horizontal-bar-grey}",
                            '0deg',
                            '6deg'
                        ],
                        [
                            "eid26",
                            "rotateZ",
                            500,
                            500,
                            "linear",
                            "${horizontal-bar-grey}",
                            '6deg',
                            '14deg'
                        ],
                        [
                            "eid28",
                            "rotateZ",
                            1000,
                            500,
                            "linear",
                            "${horizontal-bar-grey}",
                            '14deg',
                            '89deg'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("shy-banner_edgeActions.js");
})("EDGE-673647585");
