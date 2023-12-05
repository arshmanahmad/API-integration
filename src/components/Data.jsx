import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'

const Data = () => {
    // const [data, setData] = useState([]);
    // const [show, setShow] = useState('')

    const fetchData = async (id) => {
        // https:arshman.com/cases/delete/12345
        // const res1 = axios.delete("https:arshman.com/cases/delete/12345", {
        // })

        const response = await axios.get('https://livescore6.p.rapidapi.com/matches/v2/list-live', {
            params: {
                Category: 'soccer',
                Timezone: '-7'
            },
            headers: {
                'X-RapidAPI-Key': '60a0e128b5msh2f22c7cefcda38dp13141bjsn65598cc1d4aa',
                'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'

            }
        });
        console.log(response)
        // setData(response);
    }
    // useEffect(() => {
    //     fetchData();
    // }, []);
    return (
        <>
            <div className='row'>
                <div className="col-lg-4 col-md-6 col-sm-12 one flex-box">
                    <h1>Api usage</h1>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-12 two flex-box">
                    <div className='col-md-4 row-md-12 three flex-box'>
                        <h3>Description to use in
                            a fluent way
                        </h3>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 one flex-box">
                    <h1>Data</h1>
                    <button onClick={() => { fetchData }}>Show Data</button>
                    {/* {show.map((totalData) => {
                        return (
                            <li>{totalData.data}</li>
                        )
                    })} */}
                </div>
            </div>
        </>
    )
}

export default Data