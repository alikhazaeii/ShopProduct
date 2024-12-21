
"use client"
import React, { useState } from 'react'
import useStore from '../store/store'
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { IconButton, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
export default function page() {
    const { myPlus, myMinus } = useStore()
    const temp = useStore((state) => state.data)
    const [newPrices, setNewPrices] = useState({})
    const [totalItemsPrice, setTotalItemsPrice] = useState(0)
    const [tax, setTax] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [openDialog, setOpenDialog] = useState(false)
    const [userInfo, setUserInfo] = useState({
        Name: '',
        Adress: '',
        Phone: '',
    });

    useEffect(() => {
        const updatePrices = {};
        let total = 0

        temp.forEach(item => {
            updatePrices[item.id] = item.price * item.count
            total += item.price * item.count

        });

        const theTax = total * 0.1
        const totalPrices = total + theTax

        setNewPrices(updatePrices)
        setTotalItemsPrice(total);
        setTax(theTax);
        setTotalPrice(totalPrices);
    }, [temp]);

    const changePrice = (id, opration) => {
        const updatePrices = { ...newPrices }
        const item = temp.find(val => val.id === id)

        if (opration === 'increase') {
            updatePrices[id] = item.price * (item.count + 1)
        } else if (opration === 'decrease' && item.count > 0) {
            updatePrices[id] = item.price * (item.count - 1)
        }
        const total = Object.values(updatePrices).reduce((sum, price) => sum + price, 0);
        setNewPrices(updatePrices)
        setTotalItemsPrice(total);

    }

    const buyAll = () => {
        setOpenDialog(true)
    }

    const closeDialog = () => {
        setOpenDialog(false)
    };

    const submit = () => {
        console.log(userInfo);
        alert('pursches successfull')
        setOpenDialog(false)

    }


    return (
        <div className='mt-32  w-full text-xl text-center flex flex-wrap '>
            <span className='*:m-2 w-full'>
                <Link href='./'>Product</Link>
                {'>'} <strong>Cart</strong>
            </span>


            <article className='w-full lg:w-7/12'>
                {temp && temp.map((val, i) => {
                    return <div key={i} className='w-full flex flex-wrap justify-evenly my-5 border rounded-2xl shadow-xl' >

                        <figure className='w-full h-[20vh] lg:w-4/12 flex item-center justify-center' >
                            <Image width={100} height={50} src={val.avatar} alt='img' />
                        </figure>


                        <div className='w-full lg:w-6/12 *:my-2'>
                            <h2 className='w-full text-2xl'>{val.desc}</h2>
                            <h3 className='w-full text-xl ' >Price: ${newPrices[val.id] !== undefined ? newPrices[val.id] : (val.price * val.count)}.00</h3>

                            <div className='*:m-2 *:text-xl'>
                                <IconButton onClick={() => { myMinus(val.id), changePrice(val.id, 'decrease') }} color="error" aria-label="add to shopping cart">
                                    <RemoveShoppingCartIcon />
                                </IconButton>

                                <span>{val.count}</span>
                                <IconButton color="success" aria-label="add to shopping cart" onClick={() => { myPlus(val.id), changePrice(val.id, 'increase') }}>
                                    <AddShoppingCartIcon />
                                </IconButton>
                            </div>

                        </div>

                    </div>
                })}
            </article>
            <div className='w-full lg:w-3/12 lg:fixed lg:top-48 lg:right-10 text-center  lg:text-start border shadow-xl'>
                <h2 className=' text-lg lg:text-xl capitalize font-bold my-10 text-center'>cart shopping</h2>
                <h3 className='p-5 text-sm lg:text-lg'>Total Items Price: ${totalItemsPrice}.00</h3>
                <h3 className='p-5 text-sm lg:text-lg'>Tax: ${tax.toFixed(2)}</h3>
                <h3 className=' p-5 text-sm lg:text-lg font-bold border-t-2'>Total: ${totalPrice}</h3>
                <Button size='medium' sx={{ margin: '10px' }} variant='contained' color='primary' onClick={buyAll}>buy All</Button>
            </div>

            <Dialog open={openDialog} onClose={closeDialog}>
                <DialogTitle>Complete Your Purchase</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        label="Name"
                        margin='dense'
                        value={userInfo.Name}
                        onChange={(e) => setUserInfo({ ...userInfo, Name: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        label="Address"
                        margin='dense'
                        value={userInfo.Adress}
                        onChange={(e) => setUserInfo({ ...userInfo, Adress: e.target.value })}
                    />
                    <TextField fullWidth
                        label="Phone"
                        margin='dense'
                        value={userInfo.Phone}
                        onChange={(e) => setUserInfo({ ...userInfo, Phone: e.target.value })}
                    />

                </DialogContent>
                <DialogActions>
                    <Button color='secondary' onClick={closeDialog}>Cancel</Button>
                    <Button color='primary' onClick={submit}>Submit</Button>
                </DialogActions>
                <div className='w-12/12 text-center text-lg m-2 font-bold' >The console log is only used for storing information <br /> I know it's  <strong>not secure</strong></div>
            </Dialog>

        </div>



    )
}
