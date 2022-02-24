import React, { useState } from "react";

function Main() {
    let [punchline, setPunchline] = useState("Dad Joking hazard");
    let [setup, setSetup] = useState("Dad Joking hazard");
    // useEffect(() => {
    //     async function getData() {
    //         const req = await fetch(
    //             "https://dad-jokes.p.rapidapi.com/random/joke",
    //             {
    //                 method: "GET",
    //                 headers: {
    //                     "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
    //                     "x-rapidapi-key":
    //                         "65bf180e95mshf6b7f2f9c8a1f73p10898ejsn1b0aaa9fa303",
    //                 },
    //             }
    //         );
    //         const res = await req.json();
    //         console.log(res.body[0]);
    //         // punch.innerText = res.body[0].punchline;
    //         setPunchline(res.body[0].setup);
    //         setSetup(res.body[0].setup);
    //     }
    //     getData();
    // }, []);

    async function callAPI() {
        const req = await fetch(
            "https://dad-jokes.p.rapidapi.com/random/joke",
            {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
                    "x-rapidapi-key":
                        "65bf180e95mshf6b7f2f9c8a1f73p10898ejsn1b0aaa9fa303",
                },
            }
        );
        const res = await req.json();
        console.log(res);
        setPunchline(res.body[0].punchline);
        setSetup(res.body[0].setup);
    }
    return (
        <div className="m-16 hp:m-0 text-center">
            <div className="cards-container flex hp:flex hp:flex-col justify-evenly">
                <div className="bg-hitam hp:m-0 m-12">
                    <div className="setupCards w-80 hp:w-fit border-white border-4 rounded-md  hp:m-0 bg-hitam m-12 h-fit ">
                        <p
                            className="text-2xl hp:text-sm  text-center font-main hp:m-0 m-12 text-hijau"
                            id="setup"
                        >
                            {setup}
                        </p>
                    </div>
                </div>
                <div className="bg-hitam hp:m-0 m-12">
                <div className="setupCards w-80 hp:w-fit border-white border-4 rounded-md hp:m-0 hp:text-xs  bg-white m-12 h-fit ">
                        <p
                            className="text-2xl hp:text-xs  text-center font-main hp:m-0 m-12 text-hitam"
                            id="setup"
                        >
                            {punchline}
                        </p>
                    </div>
                </div>
            </div>
            <button
                id="btn"
                className="font-main text-white mt-8 bg-hijau shadow-lg rounded-md p-4 text-2xl "
                onClick={callAPI}
            >
                generate
            </button>
        </div>
    );
}

export default Main;
