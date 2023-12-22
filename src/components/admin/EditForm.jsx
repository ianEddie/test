import CreateItem from './CreateItem'

export default async function EditForm({ slug }) {
  const response = await fetch(`http://localhost:3000/api/detail/${slug}`, {
    cache: 'no-store'
  })
  // localhost:3000
  // ${process.env.VERCEL_URL}
  const product = await response.json()
  return <CreateItem title='Edit your product' initialValues={product} />
}