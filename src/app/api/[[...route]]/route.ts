import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const runtime = 'edge'; // TODO: change it to nodejs when deploying on vercel

const app = new Hono().basePath('/api')

app.get('/hello', (c) => {
    return c.json({
        message: 'Hello Next.js!',
    })
})

export const GET = handle(app)
export const POST = handle(app)