import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Gem, Leaf, Truck } from "lucide-react";
import ProductReel from "@/components/ProductReel";


const perks = [
  {
    name: "Fast Delivery",
    Icon: Truck,
    description: "We offer next-day handling for all in-stock products."
  },
  {
    name: "Guaranteed Quality",
    Icon: Gem,
    description: "Every item is triple-checked before shipment. Still don't like it? We offer 14-day return."
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description: "We pledge 1% of profits to the preservation and restoration of natural environment."
  }
]

export default function Home() {
  return (
  <>
  <div className="border-y bg-zinc-100">
    <MaxWidthWrapper >
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Your Marketplace for e-chassis{' '}
        <span className="text-red-600">goodies</span>
        .
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">Welcome to EKRacing. Where Quality meets Performance on Every drive.</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products" className={buttonVariants()} >Browse Trending</Link>
          <Button variant='ghost'>Browse Merch &rarr;</Button>
        </div>
      </div>
    </MaxWidthWrapper>
  </div>

  <div className="">
    <MaxWidthWrapper>
      <ProductReel query={{sort: "desc", limit: 4}} title="Newest additions" href="/products" />
    </MaxWidthWrapper>
  </div>


  <section className="border-t border-gray-200 bg-gray-50">
    <MaxWidthWrapper className="py-20">
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
        {perks.map((perk) => (
          <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
            <div className="md:flex-shrink-0 flex justify-center">
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-red-100 text-red-900">
                {<perk.Icon className="w-1/3 h-1/3" />}
              </div>
            </div>

            <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
              <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
            </div>
          </div>
        ))}
      </div>

    </MaxWidthWrapper>
  </section>

  </>
  )
}
