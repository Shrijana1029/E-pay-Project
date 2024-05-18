
import Me from "./../img/Me.jpg"
import sushil from "./../img/sushil.jpg"
import jungali from "./../img/jungali.jpg"
import pandu from "./../img/pandu.jpg"
import React from 'react'

function Team() {
  return (
<div class="py-20 bg-gray-50">
    <div class="container mx-auto px-6 md:px-12 xl:px-32">
        <div class="mb-16 text-center">
            <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Team Members</h2>
            <p class="text-gray-600 lg:w-8/12 lg:mx-auto"></p>
        </div>
        <div class="grid gap-12 items-center md:grid-cols-4">
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80" 
                    src={Me} alt="woman" loading="lazy" width="640" height="667" />
                <div>
                    <h4 class="text-2xl">Shrijana Maharjan</h4>
                    <h5>201330 BECE</h5>
                </div>
            </div>
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80" 
                    src={sushil} alt="man" loading="lazy" width="1000" height="667" />
                <div>
                    <h4 class="text-2xl">Sushil Baral</h4>
                    <h5>201334 BECE</h5>
                    
                </div>
            </div>
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-64 lg:w-64 lg:h-80" 
                    src={jungali} alt="woman" loading="lazy" width="1000" height="667" />
                <div>
                    <h4 class="text-2xl">Saujanya Shrestha</h4>
                    <h5>201326 BECE</h5>
                </div>
            </div>
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-64 lg:w-64 lg:h-80" 
                    src={pandu} alt="woman" loading="lazy" width="1000" height="667" />
                <div>
                    <h4 class="text-2xl">Sameer Bhatt</h4>
                    <h5>201325 BECE</h5>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Team