import { omit } from "lodash";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:4000"

const randId = () => {
    return Math.floor(Math.random() * 1000)
};

const initState = {
    id:randId(),
    name : "",
    image : "",
    rate : "",
    title  : ""
};

// useForm => form validate custom hook
function UserForm(){
    const [contact, setContact] = useState(initState);
    const [errors, setError] = useState({});

    // useNavigate Refrence, Internal Navigate
    const navigate = useNavigate();

    // Error Printing
    const errPrint = (prop,msg) => {
        setError({...errors , [prop]:msg});
    }

    // Validation function
    const validate = (event,name,value) => {
        switch (name) {
            case "productName":
                if (value.length === 0) {
                    errPrint(name,"Name field must be filled");
                } else if(value.length < 3){
                    errPrint(name, "Name at least 3 letters")
                }else if(!new RegExp(/^[a-zA-Z\s]+$/).test(value)){
                    errPrint(name,"Invalid Name")
                }else{
                    let newOb = omit(errors,name);
                    setError(newOb)
                }
                break;
            
            case "email": 
                if (value.length === 0) {
                    errPrint(name,"Email field must be filled");
                } else if(!new RegExp(/^[a-zA-Z0-9\S]+@[a-zA-Z\S]+.[a-zA-Z\S]+$/).test(value)){
                    errPrint(name,"Invalid Email Format.")
                }else{
                    let newOb = omit(errors,name);
                    setError(newOb)
                }
                break;

            case "image":
                if (value.length === 0) {
                    errPrint(name,"Image field must be filled");
                } else if(!new RegExp(/^\S+$/).test(value)){
                    errPrint(name,"Invalid Image URL.")
                }else{
                    let newOb = omit(errors,name);
                    setError(newOb)
                }
                break;

            case "mobile":
                if (value.length === 0) {
                    errPrint(name,"Mobile field must be filled");
                } else if(!new RegExp(/^[6-9]\d{9}$/).test(value)){
                    errPrint(name,"Invalid Mobile Number.")
                }else{
                    let newOb = omit(errors, name);
                    setError(newOb)
                }
                break;
            case "rate":
                if (value.length === 0) {
                    errPrint(name,"Price field must be filled");
                } else if(!new RegExp(/^[0-9]\d{4}$/).test(value)){
                    errPrint(name,"Invalid Price Number.")
                }else{
                    let newOb = omit(errors, name);
                    setError(newOb)
                }
                break;
            case "password":
                if (value.length === 0) {
                    errPrint(name,"Password field must be filled");
                } else if(!new RegExp(/^([a-zA-Z0-9/\\''(),-/#\s]{2,255})$/).test(value)){
                    errPrint(name,"Invalid Password.")
                }else{
                    let newOb = omit(errors, name);
                    setError(newOb)
                }
                break;
            case "address":
                if (value.length === 0) {
                    errPrint(name,"Address field must be filled");
                } else if(!new RegExp(/^([a-zA-Z0-9/\\''(),-/#\s]{2,255})$/).test(value)){
                    errPrint(name,"Invalid Address.")
                }else{
                    let newOb = omit(errors,name);
                    setError(newOb)
                }
                break;
            case "title":
                if (value.length === 0) {
                    errPrint(name,"title field must be filled");
                } else if(!new RegExp(/^([a-zA-Z0-9/\\''(),-/#\s]{2,255})$/).test(value)){
                    errPrint(name,"Invalid Title.")
                }else{
                    let newOb = omit(errors,name);
                    setError(newOb)
                }
                break;

            default:
                break;
        }
    };

    const readValue = (e) => {
        //console.log("Input Value = ", e.target.name + "-" + e.target.value)
        const  {name,value} = e.target;
        validate(e, name,value);
        setContact({...contact, [name]:value});
    };

    // For Submit The value
    const submitHandler =async (e) => {
        e.preventDefault(); // avoide page refresh
        // console.log("New Contact = ",contact);
        if(Object.keys(errors).length === 0 && Object.keys(contact).length !== 0){
            console.log("New Contact = ",contact);

            // Post Handler
           await axios
            .post(`${baseUrl}/contacts`, contact)
            .then((res)=>{
                console.log(res)
                setContact(initState);
                toast.success("User Created");

                navigate("/")
            })
            .catch((err)=>toast.error(err.message));
        }else{
            toast("Some Errors are in from or Fields are empty")
        }
    }

    return {
        contact,
        errors,
        readValue,
        submitHandler,
        setContact,
        validate
    }
}

export default UserForm;
