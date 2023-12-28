"use client"
import React from "react";
import { Card, CardHeader, CardBody, Image, divider } from "@nextui-org/react";
import { NextUIProvider } from '@nextui-org/react'
import {Howl, Howler} from 'howler';
import { useState,useEffect } from 'react';
import { useRef } from 'react';
import { useSound } from 'use-sound';
// import boopSfx from '/song.mp3';
export default function Page() {
  // let audio = new Audio("/song.mp3")
  const [value,setValue] = useState(0);
  const [value2,setValue2] = useState(false);
  useEffect(()=>{
    var sound = new Howl({
      src: ['/song2.mp3'],
      html5: true
    });
    if(value==1 && value2==false)
    {
      // Howler.stop();
      sound.play();
      setValue2(true);
    }
    else if(value2 == true && value!=0)
    {
        // Howler.stop();
        sound.play();
        setValue2(false)
    }
    else {
      Howler.stop();
      setValue2(!value2);
    }
  },[value,value2])
  
  

  return (
    <NextUIProvider>

      <div className="bg-gradient-to-b from-rose-400 to-rose-700 min-h-screen min-w-screen flex justify-center items-center">
        {/* <div onClick={playAudio} className="h-24 w-24 bg-white cursor-pointer"> */}

        {/* </div> */}
        <Card isPressable onMouseEnter={()=>setValue(value+1)} onPress={()=>setValue(!value2)}  className="py-4 bg-opacity-20 text-transparent text-white focus:bg-opacity-0 hover:duration-300  hover:scale-105 focus:scale-125 focus:duration-2000 focus:-translate-x-unit-8xl cursor-pointer">

          <CardHeader className="pb-0  pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500  text-white">12 Tracks</small>
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://i.scdn.co/image/ab67616d0000b273f894be72a77b1488292672c7"
              width={270}
            />
          </CardBody>
        </Card>
      </div>
    </NextUIProvider>
  );
}
