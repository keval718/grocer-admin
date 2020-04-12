import React from 'react';
import axios from "axios"
const NewComponent = props => {
    // const [redirect, setRedirect] = useState(false);
    // const [token, setToken] = useState();
    console.log("new ma aave che" + props.data);

    // axios.get(props.data)
    //     .then(response => {
    //         // this.setState({
    //         //     product: response.data
    //         // });
    //         // setRedirect(true);
    //     });

// let url=props.data;
//     fetch(url, {
//         method: 'HEAD',
//         mode: 'no-cors'
//     }).then(function(res) {return res}).then(function (data) {
// console.log(data.body)
//     }).catch(err => console.log(err));

    // .then(data => console.log(data))

    // if (redirect) {
    //     console.log("Redirect ma");
    //     return <Redirect to='/no'/>;
    // } else {
    return (
        <div>
            <div>
                <a href={props.data}>Lai le</a>
            </div>
        </div>
    )
    // }
};
export default NewComponent;