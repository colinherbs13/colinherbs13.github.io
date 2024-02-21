import { nghome, ngwidgets } from "../images" 
import { larry_clues, larry_idle, larry_puzzle, larry_title, larry_window } from "../images"
import { lottery_resources, lottery_settings, lottery_title, lottery_tower1, lottery_tower2 } from "../images"
import { mmm_house, mmm_intro, mmm_inventory, mmm_notebook, mmm_pier, mmm_well } from "../images"
import { tictactoe_tie } from "../images"
import { todo_deadline_passed } from "../images"
import { waterjug_input, waterjug_output } from "../images"
import { heart_api_get, heart_create_acct, heart_create_acct_fail, heart_title } from "../images"
import { hearts_1 } from "../images"

export default [
    {
        id: "nglvgse",
        img: [
            nghome,
            ngwidgets
        ],
        title: "Northrop Grumman Launch Vehicle Ground Support Equipment",
        description: "This is a software used by Northrop Grumman to perform diagnostic checks on launch vehicles before missions. \
        In this project I worked in a team of 5, and designed this product from the ground up. \
        The goal of this project was to rebuild an existing Java-based legacy software into a web-based frontend. \
        The team worked with Northrop Grumman engineers to gather system requirements and gain feedback on development progress once per week. \
        Custom widgets are contained in bootstrap tables and dynamically change based on information received from a simulated backend. \
        The frontend gathers incoming data at a rate of 5Hz, and populates the data instantaneously. \
        When a widget is clicked or changes state, a UDP packet is sent to the backend to alert if a value needs changing.",
        skills: [
            "HTML, CSS, JavaScript, Node.js, Bootstrap, Express",
            "XML Parsing",
            "UDP Packet Sending",
            "Custom reusable widgets",
            "Engineering Design Process",
            "System Block Diagrams, Technical Data Package, \
            Integration Status Review, Final Acceptance Review"
        ] 
    },
    {
        id: "heartmonitor",
        img: [
            heart_title,
            heart_create_acct,
            heart_create_acct_fail,
            heart_api_get
        ], 
        title: "Heart Monitor Device Website",
        description: "This program takes a heart monitor device that records data periodically, connects its output to a MongoDB database, \
        and displays those outputs in a webpage format. It allows for users to login to a webpage and view their own \
        metrics in their patient portal.",
        skills: [
            "HTML, CSS, JavaScript",
            "Express API Routing",
            "MongoDB",
            "API GET/POST",
            "Login Authentication",
            "Internet of Things"
        ]
    }, 
    {
        id: "larry",
        img: [
            larry_title,
            larry_idle,
            larry_window,
            larry_puzzle,
            larry_clues
        ],
        title: "Larry",
        description: "A puzzle-based horror game where players act as a detective trying to solve clues. \
        Clues must be connected together in the correct order to crack the case. \
        Players solve nonogram puzzles to gain new clues each day. \
        Keep an eye on Larry, or he will try to stop you in your tracks!",
        skills: [
            "Java",
            "JFrame and Clip libraries",
            "Object-Oriented Programming",
            "UML diagrams",
            "Serializing files for saving and loading data"
        ],
        link: "https://github.com/colinherbs13/Larry-Video-Game"
    },
    {
        id: "lottery",
        img: [
            lottery_title,
            lottery_settings,
            lottery_resources,
            lottery_tower1,
            lottery_tower2
        ],
        title: "The Lottery",
        description: "This is a 2D sprite-based tower defense game using Unity Engine. \
            In the first phase, players gather resources within the time limit. \
            After time expires, players use resources to build towers. \
            Players win by using towers to defeat every wave of rats.",
        skills: [
            "Unity/C#",
            "Aesprite for sprite design",
            "2D game design",
            "GUI design/implementation",
            "Object Oriented Programming"
        ],
        link: "https://lazyspace.itch.io/the-lottery"
    },
    {
        id: "mmm",
        img: [
            mmm_intro,
            mmm_house,
            mmm_inventory,
            mmm_notebook,
            mmm_pier,
            mmm_well
        ],
        title: "Mammal Murder Mayhem",
        description: "This is a 3D game where a player tries to find evidence \
        around the town to solve the murder mystery. Players can interact with items \
        and have conversations with villagers to populate their notebook to establish clues. \
        Dialog also changes based on the time of day and location of the conversation.",
        skills: [
            "Unity/C#",
            "Blender for modeling/shaders design",
            "3D game design",
            "Dialog trees",
            "Object Oriented Programming"
        ],
        link: "https://lazyspace.itch.io/mammal-murder-mayhem"
    },
    {
        id: "tictactoe",
        img: [
            tictactoe_tie,
        ],
        title: "Tic-Tac-Toe Game",
        description: "This is a basic, text-based tic-tac-toe game written in C++. \
        This game supports either one or two players, with a computer player's choices being dictated by the minimax algorithm.",
        skills: [
            "C++",
            "Minimax Algorithm",
        ],
        link: "https://github.com/colinherbs13/Text-Based-Game-Collection"
    }, 
    {
        id: "hearts",
        img: [
            hearts_1
        ],
        title: "Hearts Card Game", 
        description: "",
        skills: [
            "C++",
            "Object-Oriented Programming",
            "Functions"
        ], 
        link: "https://github.com/colinherbs13/Hearts-Card-Game"
    },
    {
        id: "waterjug",
        img: [
            waterjug_input,
            waterjug_output
        ],
        title: "Water Jug Problem",
        description: "This program solves the water jug program using a custom recursive algorithm. \
        The user can specify the initial state, goal state, and capacity of each of the water jugs using command line arguments. \
        If a path is successfully found, the program will output each step taken.",
        skills: [
            "C++",
            "Recursion",
            "Command line arguments"
        ],
        link: "https://github.com/colinherbs13/Waterjug-Problem"
    },
    {
        id: "todo",
        img: [
            todo_deadline_passed
        ],
        title: "To-Do List",
        description: "To-Do List application where users can create multiple lists, \
            set deadlines, and add and remove tasks from different lists. \
            Can also save and load lists from text files.",
        skills: [
            "Python",
            "Linked Lists (doubly linked)",
            "Tkinter library",
            "Writing and Reading from text files"
        ],
        link: "https://github.com/colinherbs13/To-Do-List-App"
    }
]