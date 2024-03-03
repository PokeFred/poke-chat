<script lang="ts">
    import { io } from "socket.io-client"

    const socket = io()

    socket.on("hello", (message) => {
        console.log(message)
    })
</script>

<div>Hello World</div>
