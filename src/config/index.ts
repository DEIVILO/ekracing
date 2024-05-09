export const PRODUCT_CATEGORIES = [
    {
        label: "Shop by Category",
        value: "shop_by_category" as const,
        featured: [
            {
                name: "Bolts",
                href: "/bolts",
                imageSrc: "/nav/ui-kits/mixed.jpg"
            },
            {
                name: "Rebuild kits",
                href: "/rkits",
                imageSrc: "/nav/ui-kits/blue.jpg"
            },
            {
                name: "Weld-in parts",
                href: "/wi-parts",
                imageSrc: "/nav/ui-kits/purple.jpg"
            },
            {
                name: "Accesories and Stickers",
                href: "/accessories-stickers",
                imageSrc: "/nav/ui-kits/purple.jpg"
            },
        ],
    },
    {
        label: "Shop by Chassis",
        value: "shop_by_chassis" as const,
        featured: [
            {
                name: "e36",
                href: "/e36",
                imageSrc: "/nav/icons/picks.jpg"
            },
            {
                name: "e46",
                href: "/e46",
                imageSrc: "/nav/icons/new.jpg"
            },
            {
                name: "e34",
                href: "/e34",
                imageSrc: "/nav/icons/bestsellers.jpg"
            },
        ],
    },
    {
        label: "Featured",
        value: "featured" as const,                                 //TODO: UPDATE THIS TO BE A BUTTON, IMPROVE NAVBAR STYLING WITHT THE 180 FLIPPING ARROWS
        href: "/featured",
    },
]