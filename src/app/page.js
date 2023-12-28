"use client"
import React from "react";
import { Card, CardHeader, CardBody, Image, divider } from "@nextui-org/react";
import { NextUIProvider } from '@nextui-org/react'
import { Howl, Howler } from 'howler';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { useSound } from 'use-sound';
// import boopSfx from '/song.mp3';
export default function Page() {

  var myAudio = new Howl({
    src: ['/song2.mp3'],
    html5: true
  });
  function togglePlay() {
    if(myAudio.playing())
    {
      myAudio.pause();
    }
    else{
      myAudio.play();
    }

  };

  return (
    <NextUIProvider>
      <div className="bg-gradient-to-b from-rose-400 to-rose-700 min-h-screen min-w-screen flex justify-center items-center">
        <Card isPressable onPress={togglePlay} className="py-4 bg-opacity-20 text-transparent text-white focus:bg-opacity-0 hover:duration-300  hover:scale-105 focus:scale-125 focus:duration-2000 focus:-translate-x-unit-8xl cursor-pointer">

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
