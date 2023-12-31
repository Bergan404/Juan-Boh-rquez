<script setup lang="ts">
import { type ShallowRef, shallowRef } from 'vue';
import { Stars, OrbitControls, Levioso, MouseParallax } from '@tresjs/cientos';
import { TresCanvas } from '@tresjs/core';
import { useRenderLoop } from '@tresjs/core';
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three/src/constants.js';
import Box from "./box.vue";
import Error from './error.vue';

const gl = {
    clearColor: "#000000",
    shadows: true,
    alpha: false,
    shadowMapType: BasicShadowMap,
    outputColorSpace: SRGBColorSpace,
    toneMapping: NoToneMapping,
}
const boxRef = shallowRef(null)
const groupRef = shallowRef(null)

const { onLoop } = useRenderLoop()

onLoop(({ delta, elapsed }) => {
    // I will run at every frame ~ 60FPS (depending of your monitor)
    if (boxRef.value) {
        boxRef.value.rotation.y += delta
        boxRef.value.rotation.z = elapsed * 0.2
    }

    if (groupRef.value) {
        groupRef.value.rotation.y += 0.001
    }

})

</script>

<template>
    <div class="tres-container d-lg-block d-none">
        <TresCanvas v-bind="gl">
            <TresPerspectiveCamera :position="[0, 0, 45]" :fov="45" :aspect="1" :near="0.1" :far="1000" />
            <MouseParallax :factor="5" :ease="3" />
            <Levioso>
                <Suspense>
                    <Error :scale="[0.1, 0.1, 0.1]" :position="0" :rotate-x="0" />
                </Suspense>
            </Levioso>
            <TresGroup ref="groupRef">
                <Stars ref="starRef" />
            </TresGroup>
            <!-- <OrbitControls /> -->
            <TresAmbientLight :intensity="1" />
            <TresDirectionalLight :position="[-4, -2, 2]" :intensity="1" cast-shadow color="#00f0ff" />
            <TresDirectionalLight :position="[4, 6, 4]" :intensity="2" cast-shadow color="white" />
        </TresCanvas>
    </div>
    <div class="tres-container d-lg-none d-md-block">
        <TresCanvas v-bind="gl">
            <TresPerspectiveCamera :position="[0, 0, 15]" :fov="45" :aspect="1" :near="0.1" :far="1000" />
            <Levioso>
                <Suspense>
                    <Error :scale="[0.01, 0.01, 0.01]" :position="0" :rotate-x="0" />
                </Suspense>
            </Levioso>
            <TresGroup ref="groupRef">
                <Stars ref="starRef" />
            </TresGroup>
            <OrbitControls />
            <TresAmbientLight :intensity="1" />
            <TresDirectionalLight :position="[-4, -2, 2]" :intensity="1" cast-shadow color="#00f0ff" />
            <TresDirectionalLight :position="[4, 6, 4]" :intensity="2" cast-shadow color="white" />
        </TresCanvas>
    </div>
</template>

<style>
.tres-container {
    width: 100%;
    height: 100vh;
}

canvas {
    width: 100%;
    height: 100%;
}
</style>
