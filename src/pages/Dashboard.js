import React, { useState, useEffect } from "react";
import { Row, Col, Button } from 'reactstrap'

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { UserCard } from "../components/UserCard";


function Dashboard(){
    const [data, setData] = useState([]);

    useEffect(() => {
        getUsersWithFilter()
    }, [])
    
    async function fetchUsers(page) {
        const response = await fetch(`https://reqres.in/api/users?page=${page}`);
        const result = await response.json();
        return result;
    }
      
    async function getUsersWithFilter() {
        let page = 1;
        let totalUsers = [];
        
        while (page) {
            const result = await fetchUsers(page);
        
            const filteredUsers = result.data.filter(
                (user) => user.first_name.startsWith("G") || user.last_name.startsWith("W")
            );
        
            totalUsers = totalUsers.concat(filteredUsers);

            setData(totalUsers)
        
            page = result.page < result.total_pages ? result.page + 1 : null;
        }
        
    }
      

      
    const fetchData = (page) => {
        let URL = 'https://reqres.in/api/users?page=${page}'

        fetch(URL)
        .then(response => response.json())
        .then(resp => {
            

            let DATA = resp.data
            if(resp.data.length !== 0){
                let filteredData = DATA.filter(item => {
                    let firstName = item.first_name.toLowerCase();
                    let lastName = item.last_name.toLowerCase();
            
                    return firstName.startsWith('g') || lastName.startsWith('w');
                });
    
                // setData(prevData => [...prevData, ...filteredData]);

            }

            if (resp.page < resp.total) {
                fetchData(resp.page + 1);
              }
            
        })
        .catch(error => {
            console.log('Error:', error);
        });

    }

    const content = () => {
        console.log('ello', data);
        if (data.length === 0) {
            return <div>Loading...</div>;
        } else {
            return(
                <div className="content"> 
                <h4 className='mb-3 fw-bold'>Customer List</h4>

                    {data.map((item, index) => (
                        <UserCard key={index} data={item} />
                    ))}
                </div>
            )
        }

        
    }
    return(
        <div>
            <Header/>
            {content()}
            <Footer/>
        </div>
        
    )
}

export default Dashboard