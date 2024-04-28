export const PRODUCT_CATEGORIES = [
    {
        label: "UI kits",
        value: "ui_kits" as const,
        featured: [
            {
                name: "Our favourites",
                href: "#",
                imageSrc: "/nav/ui-kits/mixed.jpg"
            },
            {
                name: "New arrivals",
                href: "#",
                imageSrc: "/nav/ui-kits/blue.jpg"
            },
            {
                name: "Bestsellers",
                href: "#",
                imageSrc: "/nav/ui-kits/purple.jpg"
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
                imageSrc: "/nav/icons/picks.jpg"
            },
            {
                name: "New arrivals",
                href: "#",
                imageSrc: "/nav/icons/new.jpg"
            },
            {
                name: "Bestsellers",
                href: "#",
                imageSrc: "/nav/icons/bestsellers.jpg"
            },
        ],
    },
]