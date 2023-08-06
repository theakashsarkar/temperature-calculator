import { useState } from "react";
import { convert, toCelsius, toFahrenheit } from '../lib/converter';
import TemperatureInput from "./TemperatureInput";
export default function Calclator(){
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');

   function handleChange(e, scale) {
        setTemperature(e.target.value);
        setScale(scale);
    }

    const celsius = scale === 'f' ? convert(temperature, toCelsius): temperature;
    const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit): temperature;

    return (
        <>
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleChange}/>
            <TemperatureInput scale="c" temperature={fahrenheit} onTemperatureChange={handleChange}/>
        </>
            
    
    )

}