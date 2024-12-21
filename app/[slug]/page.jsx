'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useStore from "../store/store";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Alert, Button, Rating } from '@mui/material';
import LoadingComponent from "@/components/lodaring";


async function getData(x) {
    const res = await fetch('https://673fa428a9bc276ec4b93059.mockapi.io/prodoctShop/' + parseInt(x));
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default function Page({ params: paramsPromise }) {
    const { updateBasket } = useStore();
    const [params, setParams] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [showAlert, setShowAlert] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState('')
    const [alertSeverity, setAlertSeverity] = React.useState('success')
    const [transform, setTransform] = React.useState('scale(0.8) translate(0px , 0px)')
    const [randomRating, setRandomRating] = React.useState(Math.floor(Math.random() * 5) + 1)
    const [activeImage, setActiveImage] = useState('')

    // Unwrap `params`
    React.useEffect(() => {
        async function unwrapParams() {
            const resolvedParams = await paramsPromise;
            setParams(resolvedParams);
        }

        unwrapParams();
    }, [paramsPromise]);

    // Fetch data when params are available
    React.useEffect(() => {
        if (!params) return;


        async function fetchData() {
            try {
                const result = await getData(params.slug);
                setData(result);
                setActiveImage(result.avatar)
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        }

        fetchData();
    }, [params]);



    // Render loading states
    if (!params || !data) {
        return < >
            
            <LoadingComponent/>

        </>;
    }

    const alert = (data) => {

        const alertType = updateBasket(data)


        if (alertType === "success") {
            setAlertMessage("product added to cart!");
            setAlertSeverity("success");
        } else if (alertType === "error") {
            setAlertMessage("product is already in the cart!");
            setAlertSeverity("error");
        }

        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    };

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        const moveX = ((offsetX / rect.width) - .5) * 100;
        const moveY = ((offsetY / rect.height) - .5) * 100;

        setTransform(`scale(1.1) translate(${moveX}px, ${moveY}px)`);
    };

    const handleMouseLeave = () => {
        setTransform('scale(.8) translate(0px, 0px)');
    };

    const handleActiveImage = (imageUrl) => {
        setActiveImage(imageUrl);
    }
    return (
        <div className="flex flex-wrap w-full mt-36 justify-evenly">
            <span className="text-xl *:mx-2  w-full capitalize"> <button><Link href="./">Products</Link></button>{'>'}
                <strong className="font-bold">detail</strong></span>

            <figure
                className="relative w-full md:w-6/12 overflow-hidden border rounded-lg"
                style={{ height: '400px' }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <Image
                    src={activeImage}
                    width={500}
                    height={500}
                    alt="avatar"
                    className="object-contain w-full h-full "
                    style={{ transform }}
                />
            </figure>
            <article className="w-full md:w-5/12 *:my-5 text-center px-5 md:text-start border">
                <h2 className="font-bold text-2xl md:text-5xl my-2">${data.price}</h2>
                <h2 className="font-bold text-lg md:text-2xl"> {data.name}!</h2>
                <h3>{data.desc}</h3>
                <Rating name={`rating-${data.id}`} value={randomRating} readOnly className="w-full flex justify-start" />

                <Button variant="contained" color="success" sx={{ width: '150px', height: '40px' }}>
                    buy
                </Button>

                <button onClick={() => alert(data)} className="m-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                    <ShoppingCartIcon />

                    Add to Basket</button>
            </article>
            <div className="flex justify-center mt-4 space-x-2">
                {data.image && data.image.map((imageUrl, index) => (
                    <button key={index} onClick={() => handleActiveImage(imageUrl)}>
                        <Image
                            src={imageUrl}
                            width={80}
                            height={80}
                            alt={`Thumbnail ${index}`}
                            className="object-contain w-20 h-20 rounded-lg border"
                        />
                    </button>
                ))}
            </div>


            {showAlert && (
                <Alert
                    sx={{
                        height: '50px',
                        width: '300px',
                        position: 'absolute',
                        top: '150px',
                        right: '10px',
                    }}
                    className='md:top-[100px]'
                    severity={alertSeverity}
                >
                    {alertMessage}
                </Alert>
            )}
        </div>

    );
}
