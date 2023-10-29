<script setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark({
    onChanged(isDark) {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
});
const toggleDark = useToggle(isDark);
</script>

<template>
    <div>
        <template v-if="!isDark">
            <font-awesome-icon 
                icon="sun" 
                @click="toggleDark()"
                class="w-5 ml-5 bg-azul texto-azul"/>
        </template>
        <template v-else>
            <font-awesome-icon 
                icon="moon" 
                @click="toggleDark()"
                class="w-5 ml-5 bg-azul texto-azul"
            />
        </template>
    </div>
</template>

<style scoped>
    .bg-azul {
        padding: 5px;
        border-radius: 50%;
        border: 2px solid #3b82f6;
        box-shadow: 1px 1px 3px black;
    }
</style>