/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            '\'MS Serif\'': '@font-face { font-family: \'Sanchezextralight\'; font-weight: bold; src: url(\'fonts/Sanchezextralight.otf\');}',
            'Sanchez': '<link href=\'https://fonts.googleapis.com/css?family=Sanchez&subset=latin\' rel=\'stylesheet\' type=\'text/css\'>'        },
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
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'intersection2-1',
                            type: 'image',
                            rect: ['392px', '79px', '152px', '121px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"intersection2-1.png",'0px','0px']
                        },
                        {
                            id: 'arrowB',
                            type: 'image',
                            rect: ['190px', '104px', '283px', '283px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"arrowB.png",'0px','0px']
                        },
                        {
                            id: 'Antitrust',
                            type: 'image',
                            rect: ['317px', '75px', '305px', '283px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"Antitrust.png",'0px','0px']
                        },
                        {
                            id: 'Intellectual_Property',
                            type: 'image',
                            rect: ['241px', '-14px', '283px', '283px', 'auto', 'auto'],
                            opacity: 0.97000002861023,
                            fill: ["rgba(0,0,0,0)",im+"Intellectual_Property.png",'0px','0px']
                        },
                        {
                            id: 'Trade',
                            type: 'image',
                            rect: ['421px', '-14px', '283px', '283px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"Trade.png",'0px','0px']
                        },
                        {
                            id: 'highlight',
                            type: 'image',
                            rect: ['444px', '104px', '54px', '90px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"highlight.png",'0px','0px']
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['-1px', '353px', '921px', '80px', 'auto', 'auto'],
                            opacity: 0,
                            text: "We analyze, solve and testify about economic problems at the intersection of antitrust, intellectual property, and international trade.",
                            align: "center",
                            font: ['Sanchez', [26, "px"], "rgba(30,74,136,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '920px', '480px'],
                            sizeRange: ['','920px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: true,
                    data: [
                        [
                            "eid82",
                            "left",
                            2150,
                            0,
                            "linear",
                            "${Text3}",
                            '-1px',
                            '-1px'
                        ],
                        [
                            "eid9",
                            "width",
                            2150,
                            2000,
                            "linear",
                            "${Trade}",
                            '400px',
                            '283px'
                        ],
                        [
                            "eid80",
                            "height",
                            2150,
                            0,
                            "linear",
                            "${Text3}",
                            '80px',
                            '80px'
                        ],
                        [
                            "eid20",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${Antitrust}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            2150,
                            2000,
                            "linear",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "top",
                            0,
                            2000,
                            "linear",
                            "${Trade}",
                            '-12px',
                            '-19px'
                        ],
                        [
                            "eid8",
                            "top",
                            2150,
                            2000,
                            "linear",
                            "${Trade}",
                            '-19px',
                            '-14px'
                        ],
                        [
                            "eid13",
                            "height",
                            2150,
                            2000,
                            "linear",
                            "${Intellectual_Property}",
                            '400px',
                            '283px'
                        ],
                        [
                            "eid68",
                            "height",
                            6000,
                            0,
                            "linear",
                            "${Intellectual_Property}",
                            '283px',
                            '283px'
                        ],
                        [
                            "eid84",
                            "top",
                            2150,
                            0,
                            "linear",
                            "${Text3}",
                            '353px',
                            '353px'
                        ],
                        [
                            "eid79",
                            "font-size",
                            2150,
                            0,
                            "linear",
                            "${Text3}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid1",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${Trade}",
                            '781px',
                            '385px'
                        ],
                        [
                            "eid6",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${Trade}",
                            '385px',
                            '385px'
                        ],
                        [
                            "eid10",
                            "left",
                            2150,
                            2000,
                            "linear",
                            "${Trade}",
                            '385px',
                            '421px'
                        ],
                        [
                            "eid22",
                            "top",
                            0,
                            2000,
                            "linear",
                            "${Antitrust}",
                            '366px',
                            '106px'
                        ],
                        [
                            "eid24",
                            "top",
                            2150,
                            2000,
                            "linear",
                            "${Antitrust}",
                            '106px',
                            '75px'
                        ],
                        [
                            "eid62",
                            "left",
                            4150,
                            0,
                            "linear",
                            "${highlight}",
                            '444px',
                            '444px'
                        ],
                        [
                            "eid63",
                            "left",
                            6000,
                            0,
                            "linear",
                            "${highlight}",
                            '444px',
                            '444px'
                        ],
                        [
                            "eid12",
                            "top",
                            0,
                            2000,
                            "linear",
                            "${Intellectual_Property}",
                            '-2px',
                            '-19px'
                        ],
                        [
                            "eid14",
                            "top",
                            2150,
                            2000,
                            "linear",
                            "${Intellectual_Property}",
                            '-19px',
                            '-14px'
                        ],
                        [
                            "eid11",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${Intellectual_Property}",
                            '-269px',
                            '135px'
                        ],
                        [
                            "eid15",
                            "left",
                            2150,
                            2000,
                            "linear",
                            "${Intellectual_Property}",
                            '135px',
                            '241px'
                        ],
                        [
                            "eid71",
                            "left",
                            6000,
                            0,
                            "linear",
                            "${Intellectual_Property}",
                            '241px',
                            '241px'
                        ],
                        [
                            "eid57",
                            "height",
                            4150,
                            0,
                            "linear",
                            "${highlight}",
                            '90px',
                            '90px'
                        ],
                        [
                            "eid60",
                            "width",
                            4150,
                            0,
                            "linear",
                            "${highlight}",
                            '54px',
                            '54px'
                        ],
                        [
                            "eid61",
                            "opacity",
                            4150,
                            1850,
                            "linear",
                            "${highlight}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "top",
                            4150,
                            0,
                            "linear",
                            "${highlight}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid38",
                            "top",
                            6000,
                            0,
                            "linear",
                            "${highlight}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid7",
                            "height",
                            2150,
                            2000,
                            "linear",
                            "${Trade}",
                            '400px',
                            '283px'
                        ],
                        [
                            "eid31",
                            "left",
                            4150,
                            0,
                            "linear",
                            "${arrowB}",
                            '190px',
                            '190px'
                        ],
                        [
                            "eid32",
                            "left",
                            6000,
                            0,
                            "linear",
                            "${arrowB}",
                            '190px',
                            '190px'
                        ],
                        [
                            "eid67",
                            "opacity",
                            6000,
                            1000,
                            "linear",
                            "${intersection2-1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16",
                            "width",
                            2150,
                            2000,
                            "linear",
                            "${Intellectual_Property}",
                            '400px',
                            '283px'
                        ],
                        [
                            "eid72",
                            "width",
                            6000,
                            0,
                            "linear",
                            "${Intellectual_Property}",
                            '283px',
                            '283px'
                        ],
                        [
                            "eid26",
                            "width",
                            2150,
                            2000,
                            "linear",
                            "${Antitrust}",
                            '400px',
                            '305px'
                        ],
                        [
                            "eid28",
                            "opacity",
                            4150,
                            1850,
                            "linear",
                            "${arrowB}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid23",
                            "height",
                            2150,
                            2000,
                            "linear",
                            "${Antitrust}",
                            '400px',
                            '283px'
                        ],
                        [
                            "eid74",
                            "color",
                            2150,
                            0,
                            "linear",
                            "${Text3}",
                            'rgba(30,74,136,1.00)',
                            'rgba(30,74,136,1.00)'
                        ],
                        [
                            "eid30",
                            "top",
                            4150,
                            1850,
                            "linear",
                            "${arrowB}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid4",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${Trade}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${Antitrust}",
                            '260px',
                            '254px'
                        ],
                        [
                            "eid25",
                            "left",
                            2150,
                            2000,
                            "linear",
                            "${Antitrust}",
                            '254px',
                            '317px'
                        ],
                        [
                            "eid18",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${Intellectual_Property}",
                            '0',
                            '1'
                        ],
                        [
                            "eid65",
                            "opacity",
                            2000,
                            4000,
                            "linear",
                            "${Intellectual_Property}",
                            '1',
                            '0.97000002861023'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("newanimation_edgeActions.js");
})("EDGE-78790044");
