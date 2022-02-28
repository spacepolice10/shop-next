import React from "react";
import Image from "next/image";
import testData from "../testData";
import HeartIcon from "../../components/icons/HeartIcon";

function ListItem ({ listData }) {
    return (
        <div>
            <p>{ listData.name }</p>
            <p>{ listData.clothes.map(e => e) }</p>
        </div>
    )
}

export default function List ({ list }) {
    const images = [
        '/40e396fd-d909-49a1-9361-1b09b8efb358.jpg',
        '/013683ef-7510-4534-b8e2-c24b5a3725be.jpg',
        '/d32016e7-5a5d-44cc-87dc-9dc512b3338b.jpg',
        '/dee7f631-0799-4fec-8e43-433511ba3c13.jpg'
    ]
    return (
        <div className='list'>
            <div className='heading'>
                <h1>Loved</h1>
                <HeartIcon color={'black'} />
            </div>
            <div className='pictures'>
            { React.Children.toArray(
                images.map(x => (
                    <div className='picture'>
                    <Image
                    alt={x}
                    src={x}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                    quality={100}
                    />
                </div>
                ))
            ) }
            <div className='footer'>
                <h4>12 more items</h4>
            </div>
            </div>
        <style jsx>{`
            h1 {
                margin-right: 15px;
            }
            .heading {
                opacity: 60%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
            .footer {
                opacity: 60%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                background: var(--grey);
                border-radius: 100%;
                padding: 10px;
            }
            .list {
                box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
                padding: 10px;
                border-radius: 10px;
                min-width: 300px;
                width: 100%;
            }
            .picture {
                overflow: hidden;
                border-radius: 100%;
            }
            .pictures {
                display: grid;
				grid-template-columns: repeat(3, 2fr);
                gap: 25px;
            }
        `}</style> 
        </div>
    )
}