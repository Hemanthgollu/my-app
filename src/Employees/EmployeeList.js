import {useState,useEffect} from 'react';
import Employee from './Employee';
function EmployeeList() {
    const [employees,setEmployees] = useState();
    useEffect(() => {
        setEmployees([
            {
              "id": 1001,
              "imageUrl": "https://hub.dummyapis.com/Image?text=BF&height=120&width=120",
              "firstName": "Brenden",
              "lastName": "Ferry",
              "email": "Brenden.Ferry@dummyapis.com",
              "contactNumber": "4978790965",
              "age": 70,
              "dob": "25/01/1953",
              "salary": 1.0,
              "address": "Address1"
            },
            {
              "id": 1002,
              "imageUrl": "https://hub.dummyapis.com/Image?text=EB&height=120&width=120",
              "firstName": "Elaine",
              "lastName": "Beer",
              "email": "Elaine.Beer@dummyapis.com",
              "contactNumber": "4325892874",
              "age": 44,
              "dob": "06/03/1979",
              "salary": 2.0,
              "address": "Address2"
            },
            {
              "id": 1003,
              "imageUrl": "https://hub.dummyapis.com/Image?text=IW&height=120&width=120",
              "firstName": "Ismael",
              "lastName": "Windler",
              "email": "Ismael.Windler@dummyapis.com",
              "contactNumber": "4455993053",
              "age": 64,
              "dob": "04/10/1959",
              "salary": 3.0,
              "address": "Address3"
            },
            {
              "id": 1004,
              "imageUrl": "https://hub.dummyapis.com/Image?text=LC&height=120&width=120",
              "firstName": "Lana",
              "lastName": "Considine",
              "email": "Lana.Considine@dummyapis.com",
              "contactNumber": "4604195357",
              "age": 82,
              "dob": "30/07/1941",
              "salary": 4.0,
              "address": "Address4"
            },
            {
              "id": 1005,
              "imageUrl": "https://hub.dummyapis.com/Image?text=JE&height=120&width=120",
              "firstName": "Jose",
              "lastName": "Emmerich",
              "email": "Jose.Emmerich@dummyapis.com",
              "contactNumber": "4937596171",
              "age": 67,
              "dob": "07/09/1956",
              "salary": 5.0,
              "address": "Address5"
            },
            {
              "id": 1006,
              "imageUrl": "https://hub.dummyapis.com/Image?text=TB&height=120&width=120",
              "firstName": "Tierra",
              "lastName": "Brakus",
              "email": "Tierra.Brakus@dummyapis.com",
              "contactNumber": "4501297506",
              "age": 61,
              "dob": "09/10/1962",
              "salary": 6.0,
              "address": "Address6"
            },
            {
              "id": 1007,
              "imageUrl": "https://hub.dummyapis.com/Image?text=JH&height=120&width=120",
              "firstName": "Janessa",
              "lastName": "Hammes",
              "email": "Janessa.Hammes@dummyapis.com",
              "contactNumber": "4896799491",
              "age": 22,
              "dob": "14/04/2001",
              "salary": 7.0,
              "address": "Address7"
            },
            {
              "id": 1008,
              "imageUrl": "https://hub.dummyapis.com/Image?text=KL&height=120&width=120",
              "firstName": "Korbin",
              "lastName": "Leffler",
              "email": "Korbin.Leffler@dummyapis.com",
              "contactNumber": "4658092331",
              "age": 52,
              "dob": "01/12/1971",
              "salary": 8.0,
              "address": "Address8"
            },
            {
              "id": 1009,
              "imageUrl": "https://hub.dummyapis.com/Image?text=MB&height=120&width=120",
              "firstName": "Manuel",
              "lastName": "Beahan",
              "email": "Manuel.Beahan@dummyapis.com",
              "contactNumber": "4723891988",
              "age": 79,
              "dob": "11/11/1944",
              "salary": 9.0,
              "address": "Address9"
            },
            {
              "id": 1010,
              "imageUrl": "https://hub.dummyapis.com/Image?text=KM&height=120&width=120",
              "firstName": "Kenny",
              "lastName": "Moen",
              "email": "Kenny.Moen@dummyapis.com",
              "contactNumber": "4831494440",
              "age": 57,
              "dob": "05/09/1966",
              "salary": 10.0,
              "address": "Address10"
            }
          ]);
    },[]);
    return (
        <div className = 'container'>
            <div className = 'row'>
                <div className = 'col-sm'>
                    <h3 className='text-center'>Employee List</h3>
                    <div className='row'>
                        {employees?.map(hemu => (
                            <div className='col-sm-4'>
                                  <Employee hemu={hemu}></Employee>
                            </div>
                        ))}
                    </div>             
                </div>
            </div>
        </div>
    )
}
export default EmployeeList;