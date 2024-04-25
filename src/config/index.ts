export const PRODUCT_CATEGORIES = [
    {
        label: "UI kits",
        value: "ui_kits" as const,
        featured: [
            {
                name: "Our favourites",
                href: "#",
                imageSrc: "/nav/src/ui-kits/mixed.jpg"
            },
            {
                name: "New arrivals",
                href: "#",
                imageSrc: "/nav/src/ui-kits/blue.jpg"
            },
            {
                name: "Bestsellers",
                href: "#",
                imageSrc: "/nav/src/ui-kits/purple.jpg"
            },
        ],
    },
    {
        label: "Icons",
        value: "icons" as const,
        featured: [
            {
                name: "Our favourites",
                href: "#",
                imageSrc: "/nav/src/icons/picks.jpg"
            },
            {
                name: "New arrivals",
                href: "#",
                imageSrc: "/nav/src/icons/new.jpg"
            },
            {
                name: "Bestsellers",
                href: "#",
                imageSrc: "/nav/src/icons/bestsellers.jpg"
            },
        ],
    },
]