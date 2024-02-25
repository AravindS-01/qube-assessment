const mockData = [
    {
        serialNo: "JTD-512312",
        theatreName: "Kriplle Square",
        location: {
            city: "New Delhi",
            state: "Delhi",
            country: "India"
        },
        bandwidth: "1 Gbps",
        avgBandwidth: "812 Kbps",
        deviceStatus: "Offline",
        downloadStatus: "Failed",
        osVersion: "5.2.1.3"
    },
    {
        serialNo: "JTD-512313",
        theatreName: "Grand Cinema",
        location: {
            city: "Mumbai",
            state: "Maharashtra",
            country: "India"
        },
        bandwidth: "500 Mbps",
        avgBandwidth: "600 Kbps",
        deviceStatus: "Online",
        downloadStatus: "Cancelled",
        osVersion: "6.0.0"
    },
    {
        serialNo: "JTD-512314",
        theatreName: "Regal Movies",
        location: {
            city: "Kolkata",
            state: "West Bengal",
            country: "India"
        },
        bandwidth: "2 Gbps",
        avgBandwidth: "1.2 Mbps",
        deviceStatus: "Offline",
        downloadStatus: "Downloading",
        osVersion: "5.1.0"
    },
    {
        serialNo: "JTD-512315",
        theatreName: "Metroplex",
        location: {
            city: "Chennai",
            state: "Tamil Nadu",
            country: "India"
        },
        bandwidth: "800 Mbps",
        avgBandwidth: "700 Kbps",
        deviceStatus: "Online",
        downloadStatus: "Failed",
        osVersion: "5.3.2"
    },
    {
        serialNo: "JTD-512316",
        theatreName: "PVR Cinemas",
        location: {
            city: "Bangalore",
            state: "Karnataka",
            country: "India"
        },
        bandwidth: "1.5 Gbps",
        avgBandwidth: "900 Kbps",
        deviceStatus: "Online",
        downloadStatus: "Cancelled",
        osVersion: "5.2.1"
    },
    {
        serialNo: "JTD-512317",
        theatreName: "AMC Theatres",
        location: {
            city: "Hyderabad",
            state: "Telangana",
            country: "India"
        },
        bandwidth: "1.2 Gbps",
        avgBandwidth: "850 Kbps",
        deviceStatus: "Offline",
        downloadStatus: "Failed",
        osVersion: "5.2.3"
    },
    {
        serialNo: "JTD-512318",
        theatreName: "Cineplex",
        location: {
            city: "Ahmedabad",
            state: "Gujarat",
            country: "India"
        },
        bandwidth: "700 Mbps",
        avgBandwidth: "550 Kbps",
        deviceStatus: "Online",
        downloadStatus: "Downloading",
        osVersion: "5.0.1"
    },
    {
        serialNo: "JTD-512319",
        theatreName: "Golden Screen Cinemas",
        location: {
            city: "Kuala Lumpur",
            state: "Kuala Lumpur",
            country: "Malaysia"
        },
        bandwidth: "900 Mbps",
        avgBandwidth: "650 Kbps",
        deviceStatus: "Online",
        downloadStatus: "Downloaded",
        osVersion: "6.1.0"
    },
    {
        serialNo: "JTD-512320",
        theatreName: "Vue Cinemas",
        location: {
            city: "London",
            state: "England",
            country: "United Kingdom"
        },
        bandwidth: "1.8 Gbps",
        avgBandwidth: "1 Mbps",
        deviceStatus: "Offline",
        downloadStatus: "Failed",
        osVersion: "5.2.2"
    },
    {
        serialNo: "JTD-512321",
        theatreName: "Hoyts Cinemas",
        location: {
            city: "Sydney",
            state: "New South Wales",
            country: "Australia"
        },
        bandwidth: "1.3 Gbps",
        avgBandwidth: "950 Kbps",
        deviceStatus: "Online",
        downloadStatus: "Failed",
        osVersion: "5.1.2"
    },
    {
        serialNo: "JTD-512322",
        theatreName: "Palace Cinemas",
        location: {
            city: "Melbourne",
            state: "Victoria",
            country: "Australia"
        },
        bandwidth: "1.1 Gbps",
        avgBandwidth: "700 Kbps",
        deviceStatus: "Offline",
        downloadStatus: "Failed",
        osVersion: "5.2.0"
    },
    {
        serialNo: "JTD-512323",
        theatreName: "Gaumont Pathé",
        location: {
            city: "Paris",
            state: "Île-de-France",
            country: "France"
        },
        bandwidth: "1.6 Gbps",
        avgBandwidth: "1.1 Mbps",
        deviceStatus: "Online",
        downloadStatus: "Downloading",
        osVersion: "5.2.1"
    },
    {
        serialNo: "JTD-512324",
        theatreName: "UGC Ciné Cité",
        location: {
            city: "Lyon",
            state: "Auvergne-Rhône-Alpes",
            country: "France"
        },
        bandwidth: "1.4 Gbps",
        avgBandwidth: "950 Kbps",
        deviceStatus: "Online",
        downloadStatus: "Cancelled",
        osVersion: "5.1.3"
    },
    {
        serialNo: "JTD-512325",
        theatreName: "Cineworld",
        location: {
            city: "Dublin",
            state: "Leinster",
            country: "Ireland"
        },
        bandwidth: "1.7 Gbps",
        avgBandwidth: "1.2 Mbps",
        deviceStatus: "Offline",
        downloadStatus: "Failed",
        osVersion: "5.2.3"
    },
    {
        serialNo: "JTD-512326",
        theatreName: "ODEON Cinemas",
        location: {
            city: "Birmingham",
            state: "England",
            country: "United Kingdom"
        },
        bandwidth: "1.9 Gbps",
        avgBandwidth: "1.4 Mbps",
        deviceStatus: "Online",
        downloadStatus: "Downloading",
        osVersion: "6.0.0"
    },
    {
        serialNo: "JTD-512327",
        theatreName: "Everyman Cinemas",
        location: {
            city: "Bristol",
            state: "England",
            country: "United Kingdom"
        },
        bandwidth: "1.2 Gbps",
        avgBandwidth: "850 Kbps",
        deviceStatus: "Online",
        downloadStatus: "Scheduled",
        osVersion: "5.3.1"
    },
    {
        serialNo: "JTD-512328",
        theatreName: "Showcase Cinemas",
        location: {
            city: "Manchester",
            state: "England",
            country: "United Kingdom"
        },
        bandwidth: "1.3 Gbps",
        avgBandwidth: "900 Kbps",
        deviceStatus: "Offline",
        downloadStatus: "Failed",
        osVersion: "5.2.2"
    },
    {
        serialNo: "JTD-512329",
        theatreName: "Empire Cinemas",
        location: {
            city: "Glasgow",
            state: "Scotland",
            country: "United Kingdom"
        },
        bandwidth: "1.5 Gbps",
        avgBandwidth: "1 Mbps",
        deviceStatus: "Online",
        downloadStatus: "Failed",
        osVersion: "5.1.0"
    },
    {
        serialNo: "JTD-512330",
        theatreName: "VOX Cinemas",
        location: {
            city: "Dubai",
            state: "Dubai",
            country: "United Arab Emirates"
        },
        bandwidth: "1.8 Gbps",
        avgBandwidth: "1.2 Mbps",
        deviceStatus: "Online",
        downloadStatus: "Cancelled",
        osVersion: "5.0.2"
    },
    {
        serialNo: "JTD-512331",
        theatreName: "Reel Cinemas",
        location: {
            city: "Abu Dhabi",
            state: "Abu Dhabi",
            country: "United Arab Emirates"
        },
        bandwidth: "1.6 Gbps",
        avgBandwidth: "1 Mbps",
        deviceStatus: "Offline",
        downloadStatus: "Failed",
        osVersion: "5.2.3"
    },
    {
        serialNo: "JTD-512332",
        theatreName: "Novo Cinemas",
        location: {
            city: "Doha",
            state: "Ad Dawhah",
            country: "Qatar"
        },
        bandwidth: "1.7 Gbps",
        avgBandwidth: "1.1 Mbps",
        deviceStatus: "Online",
        downloadStatus: "Downloading",
        osVersion: "5.3.0"
    },
    {
        serialNo: "JTD-512333",
        theatreName: "Ster-Kinekor",
        location: {
            city: "Johannesburg",
            state: "Gauteng",
            country: "South Africa"
        },
        bandwidth: "1.9 Gbps",
        avgBandwidth: "1.3 Mbps",
        deviceStatus: "Online",
        downloadStatus: "Scheduled",
        osVersion: "6.0.1"
    },
    {
        serialNo: "JTD-512334",
        theatreName: "Nu Metro Cinemas",
        location: {
            city: "Cape Town",
            state: "Western Cape",
            country: "South Africa"
        },
        bandwidth: "2 Gbps",
        avgBandwidth: "1.5 Mbps",
        deviceStatus: "Offline",
        downloadStatus: "Failed",
        osVersion: "5.1.2"
    },
    {
        serialNo: "JTD-512335",
        theatreName: "Cineplexx Cinemas",
        location: {
            city: "Vienna",
            state: "Vienna",
            country: "Austria"
        },
        bandwidth: "1.6 Gbps",
        avgBandwidth: "1.1 Mbps",
        deviceStatus: "Online",
        downloadStatus: "Failed",
        osVersion: "5.2.0"
    },
    {
        serialNo: "JTD-512336",
        theatreName: "CinemaxX",
        location: {
            city: "Hamburg",
            state: "Hamburg",
            country: "Germany"
        },
        bandwidth: "1.4 Gbps",
        avgBandwidth: "950 Kbps",
        deviceStatus: "Offline",
        downloadStatus: "Failed",
        osVersion: "5.3.3"
    },
    {
        serialNo: "JTD-512337",
        theatreName: "UCI Kinowelt",
        location: {
            city: "Berlin",
            state: "Berlin",
            country: "Germany"
        },
        bandwidth: "1.8 Gbps",
        avgBandwidth: "1.3 Mbps",
        deviceStatus: "Online",
        downloadStatus: "Downloading",
        osVersion: "5.2.1"
    },
    {
        serialNo: "JTD-512338",
        theatreName: "CineStar",
        location: {
            city: "Munich",
            state: "Bavaria",
            country: "Germany"
        },
        bandwidth: "1.5 Gbps",
        avgBandwidth: "1 Mbps",
        deviceStatus: "Online",
        downloadStatus: "Cancelled",
        osVersion: "5.1.0"
    },
    {
        serialNo: "JTD-512339",
        theatreName: "Pathe Arena",
        location: {
            city: "Amsterdam",
            state: "North Holland",
            country: "Netherlands"
        },
        bandwidth: "1.9 Gbps",
        avgBandwidth: "1.4 Mbps",
        deviceStatus: "Offline",
        downloadStatus: "Failed",
        osVersion: "5.0.2"
    },
    {
        serialNo: "JTD-512340",
        theatreName: "CineMec",
        location: {
            city: "Utrecht",
            state: "Utrecht",
            country: "Netherlands"
        },
        bandwidth: "1.7 Gbps",
        avgBandwidth: "1.2 Mbps",
        deviceStatus: "Online",
        downloadStatus: "Failed",
        osVersion: "5.2.3"
    },
    {
        serialNo: "JTD-512341",
        theatreName: "Kinepolis",
        location: {
            city: "Antwerp",
            state: "Flanders",
            country: "Belgium"
        },
        bandwidth: "1.3 Gbps",
        avgBandwidth: "950 Kbps",
        deviceStatus: "Online",
        downloadStatus: "Downloading",
        osVersion: "5.3.0"
    },
    {
        serialNo: "JTD-512342",
        theatreName: "UGC De Brouckère",
        location: {
            city: "Brussels",
            state: "Brussels-Capital Region",
            country: "Belgium"
        },
        bandwidth: "1.6 Gbps",
        avgBandwidth: "1.1 Mbps",
        deviceStatus: "Offline",
        downloadStatus: "Scheduled",
        osVersion: "6.0.1"
    },
    {
        serialNo: "JTD-512343",
        theatreName: "Stereo 3D Kino",
        location: {
            city: "Zurich",
            state: "Zurich",
            country: "Switzerland"
        },
        bandwidth: "1.8 Gbps",
        avgBandwidth: "1.2 Mbps",
        deviceStatus: "Online",
        downloadStatus: "Failed",
        osVersion: "5.1.2"
    },
    {
        serialNo: "JTD-512344",
        theatreName: "Arena Cinemas",
        location: {
            city: "Geneva",
            state: "Geneva",
            country: "Switzerland"
        },
        bandwidth: "1.5 Gbps",
        avgBandwidth: "1 Mbps",
        deviceStatus: "Offline",
        downloadStatus: "Failed",
        osVersion: "5.2.0"
    },
    {
        serialNo: "JTD-512345",
        theatreName: "CineStar Kinotag",
        location: {
            city: "Hannover",
            state: "Lower Saxony",
            country: "Germany"
        },
        bandwidth: "1.7 Gbps",
        avgBandwidth: "1.1 Mbps",
        deviceStatus: "Online",
        downloadStatus: "Downloading",
        osVersion: "5.3.3"
    },
    {
        serialNo: "JTD-512346",
        theatreName: "UCI Kinowelt",
        location: {
            city: "Hamburg",
            state: "Hamburg",
            country: "Germany"
        },
        bandwidth: "1.9 Gbps",
        avgBandwidth: "1.3 Mbps",
        deviceStatus: "Offline",
        downloadStatus: "Failed",
        osVersion: "5.2.1"
    },
    {
        serialNo: "JTD-512347",
        theatreName: "CineStar",
        location: {
            city: "Munich",
            state: "Bavaria",
            country: "Germany"
        },
        bandwidth: "1.5 Gbps",
        avgBandwidth: "1 Mbps",
        deviceStatus: "Online",
        downloadStatus: "Cancelled",
        osVersion: "5.1.0"
    },
    {
        serialNo: "JTD-512348",
        theatreName: "Pathe Arena",
        location: {
            city: "Amsterdam",
            state: "North Holland",
            country: "Netherlands"
        },
        bandwidth: "1.9 Gbps",
        avgBandwidth: "1.4 Mbps",
        deviceStatus: "Offline",
        downloadStatus: "Failed",
        osVersion: "5.0.2"
    },
    {
        serialNo: "JTD-512349",
        theatreName: "CineMec",
        location: {
            city: "Utrecht",
            state: "Utrecht",
            country: "Netherlands"
        },
        bandwidth: "1.7 Gbps",
        avgBandwidth: "1.2 Mbps",
        deviceStatus: "Online",
        downloadStatus: "Failed",
        osVersion: "5.2.3"
    },
    {
        serialNo: "JTD-512350",
        theatreName: "Kinepolis",
        location: {
            city: "Antwerp",
            state: "Flanders",
            country: "Belgium"
        },
        bandwidth: "1.3 Gbps",
        avgBandwidth: "950 Kbps",
        deviceStatus: "Online",
        downloadStatus: "Downloading",
        osVersion: "5.3.0"
    }
]

export default mockData


