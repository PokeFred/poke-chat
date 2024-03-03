<script lang="ts">
    import '../app.css'

    import { writable } from 'svelte/store'
    import type { Writable } from 'svelte/store'
    type Theme = 'skeleton'
    const theme: Writable<Theme> = writable<Theme>('skeleton')
    const darkmode: Writable<boolean> = writable<boolean>(true)
</script>

<div data-theme={$theme} class={$darkmode ? 'dark' : 'light'}>
    <div class="bg-surface-50-900-token text-surface-800-100-token absolute left-0 top-0 h-screen w-screen overflow-hidden p-4">
        <slot />
    </div>
</div>
