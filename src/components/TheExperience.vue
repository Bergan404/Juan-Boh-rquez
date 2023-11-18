<script setup lang="ts">
import { type ShallowRef, shallowRef } from 'vue';
import { Stars, OrbitControls } from '@tresjs/cientos';
import { TresCanvas } from '@tresjs/core';
import { useRenderLoop } from '@tresjs/core';
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three/src/constants.js';

const gl = {
    clearColor: "#181c3E",
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
        groupRef.value.rotation.y += 0.01
    }

})

</script>
<template>
    <div class="tres-container">
        <TresCanvas>
            <!-- Camera Postion in the X Y Z -->
            <TresPerspectiveCamera :position="[0, 0, 5]" :fov="45" :aspect="1" :near="0.1" :far="1000" />
            <TresGroup ref="groupRef">
                <TresScene>
                    <TresMesh ref="boxRef" :scale="1" cast-shadow>
                        <TresBoxGeometry :args="[1, 1, 1]" />
                        <TresMeshNormalMaterial />
                    </TresMesh>
                </TresScene>
                <Stars ref="starRef" />
            </TresGroup>
            <OrbitControls />
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
