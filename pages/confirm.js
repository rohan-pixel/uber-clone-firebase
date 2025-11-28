import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'

const Confirm = () => {

    const router = useRouter();
    const { pickup, dropoff } = router.query;

    const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

    const getPickupCoordinates = (pickup) => {
        
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiZGl2anlvdDMxMTIiLCJhIjoiY2t5NmU3MTUxMHV6dzJubWxseTA2bGt3ZCJ9.JlIK34STp0iZ_GudoHqK2Q",
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => setPickupCoordinates(data.features[0].center))
    }

    const getDropoffCoordinates = (dropoff) => {
        // const dropoff = "Los Angeles";
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiZGl2anlvdDMxMTIiLCJhIjoiY2t5NmU3MTUxMHV6dzJubWxseTA2bGt3ZCJ9.JlIK34STp0iZ_GudoHqK2Q",
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => setDropoffCoordinates(data.features[0].center))
    }

    useEffect(() => {
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup, dropoff]);

    return (
        <Wrapper>
            <Link href="/search">
                <BackButtonContainer>
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </BackButtonContainer>
            </Link>
            <Map
                pickupCoordinates = {pickupCoordinates}
                dropoffCoordinates = {dropoffCoordinates}
            />
            <RideContainer>
                {/* Ride Selector */}
                <RideSelector
                    pickupCoordinates = {pickupCoordinates}
                    dropoffCoordinates = {dropoffCoordinates}
                />
                {/* Confirm Button */}
                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm UberX
                    </ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
h-screen flex flex-col
`

const BackButtonContainer = tw.div`
absolute z-10 rounded-full bg-white top-4 left-4 shadow-md cursor-pointer 
`

const BackButton = tw.img`
h-12
`

const RideContainer = tw.div`
flex-1 flex flex-col h-1
`

const ConfirmButtonContainer = tw.div`
border-t-2
`

const ConfirmButton = tw.div`
bg-black text-white text-center my-4 mx-4 py-4 text-xl
`