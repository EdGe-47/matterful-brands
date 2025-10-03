import styles from './ProductCards.module.scss'
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import ImageCard from '@/components/ImageCard';
import SliderCard from '@/components/SliderCard';

const ProductCards = (props) => {
  const {} = props

  return (
    <Section
      className={styles['product-cards']}
      classNameBody={styles['product-cards-body']}
      title="Food & Beverage Spotlight"
      titleId="title-product-cards"
    >
      <h2 className="visually-hidden" htmlFor="title-product-cards" ></h2>
      <ImageCard
        emptyCard
      />
      <ProductCard
        size="large"
        imgSrc="src/assets/images/productImages/caulikids.jpg"
        title="Caulikids"
        subtitle="Branding, Packaging Design, Content, G2M Marketing"
        description={`CauliKids is a plant-based line of healthy snacks for kids!
Launching in Spring 2023`}
      />
      <ProductCard
        size="large"
        imgSrc="src/assets/images/productImages/amaya.jpg"
        title="Amayu"
        subtitle="Content, Website, Social Media, Amazon Design"
        description="Sustainably harvested from the Peruvian Amazon, Amayu is a superfruit juice packed with vitamins and antioxidants."
      />
      <ImageCard
        bnaCard
        imgBeforeSrc="src/assets/images/productImages/plant-magic-before.jpg"
        imgAfterSrc="src/assets/images/productImages/plant-magic-after.jpg"
      />
      <ImageCard
        onlyImage
        imgSrc="src/assets/images/productImages/weirdos.jpg"
      />
      <ProductCard
        size="large"
        imgSrc="src/assets/images/productImages/mezcla.jpg"
        title="Mezcla"
        subtitle="Branding, Packaging, Web & E-comm, Amazon, G2M"
        description="Mezcla is arguably the fastest growing plant protein bar in the better-for-you space. Each bar fuses art and food, featuring ingredients and designs from around the world."
      />
      <ProductCard
        size="large"
        imgSrc="src/assets/images/productImages/toum.jpg"
        title="Toum"
        subtitle="Branding, Packaging Design, Website"
        description="Toum is middle eastern garlic dip and spread made from all REAL ingredients. Suspiciously healthy and deliciously addictive, you’ll want to put it on everything. We do!"
      />
      <ImageCard
        emptyCard
      />
      <ImageCard
        bnaCard
        imgBeforeSrc="src/assets/images/productImages/plant-magic-before.jpg"
        imgAfterSrc="src/assets/images/productImages/plant-magic-after.jpg"
      />
      <ProductCard
        size="large"
        imgSrc="src/assets/images/productImages/two-good.jpg"
        title="Two Good"
        subtitle="Branding, Packaging Design, Illustration"
        description="Matterful is proud to have worked on this innovative new line of low-sugar yogurts from Danone’s Light and Fit portfolio. Full case study coming soon!"
      />
      <ProductCard
        size="large"
        imgSrc="src/assets/images/productImages/red-jacket.jpg"
        title="Packaging Design"
        subtitle="Branding, Packaging Design, Website"
        description="Matterful redesigned several of Red Jackets core packaging products; including their premium line of Stomps as well as Joe’s Half & Half and NY-style Lemonade. Full case study coming soon."
      />
      <SliderCard />
      <ProductCard
        size="medium"
        imgSrc="src/assets/images/productImages/love-beets.jpg"
        title="Love Beets"
        subtitle="Packaging Design"
        description="Matterful recently helped Love Beets design an eco-friendly version of packaging design for their popular Cooked Beets sku. Look-out for these fun and whimsical packs in Target, Costco and other high-profile retailers nationwide!"
      />
      <ImageCard
        largeImage
        imgSrc="src/assets/images/productImages/purpose-snackery.jpg"
      />
    </Section>
  )
}

export default ProductCards