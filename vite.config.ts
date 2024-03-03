import { defineConfig } from 'vite'
import type { CommonServerOptions, ViteDevServer } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import { Server } from 'socket.io'
import type { Socket } from 'socket.io'

const serverConfig: CommonServerOptions = {
    host: '127.0.0.1',
    port: 3000,
    strictPort: true,
}

export default defineConfig({
    server: serverConfig,
    preview: serverConfig,
    plugins: [sveltekit(), {
        name: "websocket-server",
        configureServer(server: ViteDevServer): void {
            if (!server.httpServer) return
            const io: Server = new Server(server.httpServer)

            io.on("connection", (socket: Socket) => {
                socket.emit("hello", "world")
            })
        }
    }],
})
