import { redirect } from 'next/navigation'

export default function Home() {
  redirect(`${process.env.WEBSITE}`)
}
