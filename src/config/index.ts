export const PRODUCT_CATEGORIES = [
    {
        label: "IU Kits",
        value: "ui_kits" as const,
        featured: [
            {
                name: "Editor picks",
                href: "#",
                imgSrc: "/nav/ui-kits/mixed.jpg",
            },
            {
                name: "New Arrivals",
                href: "#",
                imgSrc: "/nav/ui-kits/blue.jpg",
            },
            {
                name: "Best Sellers",
                href: "#",
                imgSrc: "/nav/ui-kits/purple.jpg",
            },
        ],
    },
    {
        label: "Icons",
        value: "icons" as const,
        featured: [
            {
                name: "Favorite Icon Picks",
                href: "#",
                imgSrc: "/nav/icons/picks.jpg",
            },
            {
                name: "New Arrivals",
                href: "#",
                imgSrc: "/nav/icons/new.jpg",
            },
            {
                name: "Best Selling Icons",
                href: "#",
                imgSrc: "/nav/icons/bestsellers.jpg",
            },
        ],
    },
];
