import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import Head from 'next/head'
import { LazyImage } from '../components/LazyImage'


const random = () => Math.floor(Math.random() * 123) + 1;
const generateId = () => Math.random().toString(36).substr(2, 9)

export default function Home() {
  const [images, setImages] = useState<Array<IFoxImageItem>>([])

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
    const newImageItem: IFoxImageItem = {
      id: generateId(),
      url: `https://RandomFox.ca/images/${random()}.jpg`
    }
    setImages([...images, newImageItem])
    window.plausible("add_fox")
  }

  return (
    <div>
      <Head>
        <title>Random Fox</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
      </Head>

      <main className='my-5 text-center'>
        <p className='text-xl font-bold'>Click the button for show a new fox image</p>
        <button onClick={addNewFox} className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-3 px-4 my-3 rounded">Add new fox</button>
        {images.map((image, index) => (
          <div key={index} className='flex justify-center py-4'>
            <LazyImage
              src={image.url}
              width={320}
              height="auto"
              title="Random Fox"
              className='rounded bg-gray-300'
              onClick={() => console.log('Image clicked')}
              onLazyLoad={(img) => {
                console.log(`Image #${index + 1} loaded. Node:`, img);
              }}
            />
          </div>
        ))}
      </main>
      <footer>
      </footer>
    </div>
  )
}
