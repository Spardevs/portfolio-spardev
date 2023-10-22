<script setup>
import { useDark, useToggle } from '@vueuse/core';
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid'

const isDark = useDark({
    onChanged(isDark) {
        if (isDark) {
            document.documentElement.classList.toggle('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
});
const toggleDark = useToggle(isDark);
</script>

<template>
    <div>
        <template v-if="isDark">
            <MoonIcon 
                @click="toggleDark()"
                class="w-10 texto-azul"
            />
        </template>
        <template v-else>
            <SunIcon 
                @click="toggleDark()"
                class="w-10 texto-vermelho"
            />
        </template>
    </div>
</template>