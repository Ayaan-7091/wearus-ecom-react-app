import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup, Radio } from '@headlessui/react'
import tshirtsData from '../../Data/Tshirts/tshirtsData'
import Rating from '@mui/material/Rating';
import { Grid,Box, LinearProgress } from '@mui/material';
import ProductReviewCard from '../components/productDetails/productReviewCard';
import ProductCard from '../components/product/productCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findProducts, findProductsById } from '../../State/Product/Action';
import { addItemToCart } from '../../State/Cart/Action';
import { toast, ToastContainer } from 'react-toastify';
import { getReview } from '../../State/Review/Action';

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleAddToCart=()=>{
    const data = {productId:params.productId,size:selectedSize.name}
    dispatch(addItemToCart(data))
 
    navigate('/cart')
  }

  const params = useParams()

  useEffect(() => {
    
    dispatch(findProductsById(params.productId))
    dispatch(getReview(params.productId))
    let reqData = {
      category:"",
      color:"",
      size:"",
      minPrice:0,
      maxPrice:10000,
      sort:"",
      stock:"",
      pageNumber:'',
      pageSize:''
    }
    dispatch(findProducts(reqData))
  }, [params.productId]);
  const {products,auth,reviews} = useSelector(store=>store)


  // console.log(reviews)

  const alertLogin = (event) => {
    event.preventDefault();  // Prevent form submission
    toast.warning("Login or Create account to add item")
  }

  const reviewsArray = reviews?.reviews
  const reviewsCount = reviewsArray.length

  let totalRating = 0

  let ratingRatio = {
    excellent:0,
    veryGood:0,
    good:0,
    average:0,
    poor:0
  }

  //avg ratings
  for(let review of reviews?.reviews){
      let rating = review.rating
      totalRating = totalRating + rating

      if(rating == 5){
        ratingRatio.excellent += 1
            }
        else if(rating == 4){
          ratingRatio.veryGood +=1
        }
        else if(rating == 3){
          ratingRatio.good +=1
        }
        else if(rating == 2 || rating ==1){
          ratingRatio.average +=1
        }
        else if(rating == 0){
          ratingRatio.poor +=1
        }
  }

  let totalReviews = reviewsCount || 1; // Avoid division by zero
ratingRatio.excellent = (ratingRatio.excellent / totalReviews) * 100;
ratingRatio.veryGood = (ratingRatio.veryGood / totalReviews) * 100;
ratingRatio.good = (ratingRatio.good / totalReviews) * 100;
ratingRatio.average = (ratingRatio.average / totalReviews) * 100;
ratingRatio.poor = (ratingRatio.poor / totalReviews) * 100;

let avgRating = 0
if(totalRating>=1&&reviewsCount>=1){
  avgRating = totalRating/reviewsCount
}
 


  return (
    <div className="bg-white lg:px-10">
     
       <ToastContainer
        position="top-right"
        autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
       />
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
       
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                // src={product.images[0].src}
                // alt={product.images[0].alt}
                src={products.product?.imageUrl}
                className="h-full w-full object-cover object-center"
              />
            </div>
            {/* <div className="flex flex-wrap space-x-5 justify-center mt-4">
              {product.images.slice(1).map((item) => (
                <div key={item.src} className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem]">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div> */}
          </div>

          {/* Product info */}
          <div className=" lg:col-span-1 max-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2 ">
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900">{products.product?.title}</h1>
              <h1 className="text-md lg:text-md  opacity-60 pt-1">{products.product?.category.name}</h1>

            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              
              <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6'>
                <p className='font-semibold'>₹ {products.product?.discountedPrice}</p>
                <p className=' opacity-50 line-through'>₹ {products.product?.price}</p>
                <p className='text-green-600 font-semibold'>{products.product?.discountPresent}% off</p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
               <div className='flex items-center space-x-3'>
                <Rating name="read-only" value={avgRating} precision={0.5} readOnly />
                <p className='ml-3 text-sm font-medium text-gray-400'>  {avgRating.toFixed(1)} Avg Rating - </p>
                <p className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'>  {reviewsCount} Reviews</p>

               </div>
              </div>

              <form className="mt-10">
                {/* Colors */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>

                  <fieldset aria-label="Choose a color" className="mt-4">
                    <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <Radio
                          key={color.name}
                          value={color}
                          aria-label={color.name}
                          className={({ focus, checked }) =>
                            classNames(
                              color.selectedClass,
                              focus && checked ? 'ring ring-offset-1' : '',
                              !focus && checked ? 'ring-2' : '',
                              'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                            )
                          }
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.class,
                              'h-8 w-8 rounded-full border border-black border-opacity-10'
                            )}
                          />
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      Size guide
                    </a>
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-4">
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                    >
                      {products?.product?.sizes.map((size) => (
                        <Radio
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ focus }) =>
                            classNames(
                              size.inStock
                                ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                : 'cursor-not-allowed bg-gray-50 text-gray-200',
                              focus ? 'ring-2 ring-indigo-500' : '',
                              'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                            )
                          }
                        >
                          {({ checked, focus }) => (
                            <>
                              <span>{size.name}</span>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    checked ? 'border-indigo-500' : 'border-transparent',
                                    focus ? 'border' : 'border-2',
                                    'pointer-events-none absolute -inset-px rounded-md'
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>

                <button
  onClick={auth?.user_data === null ? alertLogin : handleAddToCart}
  type="button"
  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
>
  Add to cart
</button>



              
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">{product.description}</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* {rating & reviews} */}
        <section className='px-10'>
          <h1 className='font-semibold text-lg pb-4'>Recent Review & Rating </h1>

          <div className='border p-5 '>

            <Grid container spacing={5}>

                    <Grid item xs={12} md={6}>

                     {reviews.reviews == "" ? <h1>No Reviews</h1> : <h1></h1>}   
                      <div className='space-y-5'>
                        
                        {reviews.reviews.map((item)=> <ProductReviewCard review={item} />)}
                      </div>

                    </Grid>

                    <Grid item xs={12} md={6}>
                      <h1 className='text-xl font-semibold pb-2'>Product Ratings</h1>

                      <div className='flex items-center space-x-3'>
                        <Rating readOnly value={avgRating} precision={0.5}/>
                        <p className='opacity-50'>{avgRating.toFixed(1)} Ratings</p>
                      </div>


                    {/* rating Bar */}
                      <Box className='mt-5 space-y-3'>
                        <Grid container alignItems={'center'} gap={2}>
                          <Grid item xs={3}>
                            <p>Excellent</p>
                          </Grid>
                          <Grid item xs={7}>
                            <LinearProgress variant='determinate' value={ratingRatio.excellent} color='success' sx={{backgroundColor:'#d0d0d0',borderRadius:4,height:7}}/>
                          </Grid>
                        </Grid>

                        <Grid container alignItems={'center'} gap={2}>
                          <Grid item xs={3}>
                            <p>Very Good</p>
                          </Grid>
                          <Grid item xs={7}>
                            <LinearProgress variant='determinate' value={ratingRatio.veryGood} color='success' sx={{backgroundColor:'#d0d0d0',borderRadius:4,height:7}}/>
                          </Grid>
                        </Grid>

                        <Grid container alignItems={'center'} gap={2}>
                          <Grid item xs={3} >
                            <p>Good</p>
                          </Grid>
                          <Grid item xs={7}>
                            <LinearProgress variant='determinate' value={ratingRatio.good}  sx={{backgroundColor:'#d0d0d0',borderRadius:4,height:7,color:'yellow'}}/>
                          </Grid>
                        </Grid>

                        <Grid container alignItems={'center'} gap={2}>
                          <Grid item xs={3}>
                            <p>Average</p>
                          </Grid>
                          <Grid item xs={7}>
                            <LinearProgress variant='determinate' value={ratingRatio.average} color='warning' sx={{backgroundColor:'#d0d0d0',borderRadius:4,height:7}}/>
                          </Grid>
                        </Grid>

                        <Grid container alignItems={'center'} gap={2}>
                          <Grid item xs={3}>
                            <p>Poor</p>
                          </Grid>
                          <Grid item xs={7}>
                            <LinearProgress variant='determinate' value={ratingRatio.poor} color='error' sx={{backgroundColor:'#d0d0d0',borderRadius:4,height:7}}/>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
              </Grid>
          </div>
        </section>

        {/* Similar Products Section  */}
        <section className='pt-10 pl-8' >

          <h1 className='font-semibold text-xl'>Similar Products</h1>
          <div className='flex flex-wrap '>
          {products?.products?.content?.map((item)=>(<ProductCard item={item} />))}
          </div>
        </section>
      </div>
    </div>
  )
}
