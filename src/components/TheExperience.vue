<script setup lang="ts">
import { Stars, OrbitControls } from '@tresjs/cientos';
import { TresCanvas } from '@tresjs/core';
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three/src/constants.js';

const gl = {
    clearColor: "#181c3E",
    shadows: true,
    alpha: false,
    shadowMapType: BasicShadowMap,
    outputColorSpace: SRGBColorSpace,
    toneMapping: NoToneMapping,
}

</script>
<template>
    <div class="tres-container">
        <TresCanvas v-bind="gl">
            <!-- Camera Postion in the X Y Z -->
            <TresPerspectiveCamera :position="[0, 0, 5]" />
            <TresMesh>
                <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
                <TresMeshBasicMaterial color="white" />
            </TresMesh>
            <Stars />
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
