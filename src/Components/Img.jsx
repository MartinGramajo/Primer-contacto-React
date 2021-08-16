import React from 'react'
import "./box.css"
import { Button } from 'react-bootstrap'

export default function Img() {
    return (
        <div>
            <div className="container mt-4">
                <div className="box fondo text-center p-4">
                    <h1 className="text-white bg-dark">Award-winning custom designs and digital branding solutions</h1>
                    <p className="text-dark bg-white">With over 10 years in the industry, we are experienced in creating fully responsibe websites, app desing, and engaging brand experiences. Find out more about our services.</p>
                    <Button variant="outline-dark" size="lg">
                        LEARN MORE
                    </Button>
            </div>
            </div>
        </div>
    )
}
