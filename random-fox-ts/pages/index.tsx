import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import Head from 'next/head'
import { LazyImage } from '../components/LazyImage'


const random = () => Math.floor(Math.random() * 123) + 1;
const generateId = () => Math.random().toString(36).substr(2, 9)

type ImageItem = { id: string, url: string }

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([])

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
    const newImageItem: ImageItem = {
      id: generateId(),
      url: `https://RandomFox.ca/images/${random()}.jpg`
    }
    setImages([...images, newImageItem])
  }

  return (
    <div>
      <Head>
        <title>Random Fox</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <button onClick={addNewFox}>Add new fox</button>
        {images.map((image, index) => (
          <div key={index} className='p-4'>
            <LazyImage
              src={image.url}
              width={320}
              height="auto"
              title="Random Fox"
              className='rounded bg-gray-300'
              onClick={() => console.log('console for image')}
            />
          </div>
        ))}
      </main>
      <footer>
      </footer>
    </div>
  )
}
