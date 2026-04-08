import { Category, Finish } from "../backend";
import type { Product } from "../backend";

export type ProductWithImages = Product & {
  image: string;
  images?: string[];
  slug: string;
  fullDescription: string;
  applications: string[];
};

export const marbleProducts: ProductWithImages[] = [
  {
    name: "Makrana White Marble",
    origin: "Makrana, Rajasthan",
    description:
      "Known worldwide for its pure white colour and exceptional durability, Makrana marble is the crown jewel of Indian stone. Its fine grain and brilliant lustre make it ideal for flooring, wall cladding, and sculptures.",
    fullDescription:
      "Makrana White Marble is the most celebrated natural stone in India, quarried for over 2,000 years from the ancient mines of Makrana, Rajasthan. The same stone used to build the iconic Taj Mahal, it is prized for its extraordinary purity, uniform white surface, and near-flawless texture. Its resistance to weathering and staining makes it suitable for the most demanding architectural applications. Available at Khushi Marble, Kishangarh — MOQ: 2000 sqft (outside Rajasthan). Contact: 7300373111.",
    applications: [
      "Flooring",
      "Wall Cladding",
      "Sculptures",
      "Temple Work",
      "Staircase",
      "Exterior Facade",
    ],
    finishes: [Finish.polished, Finish.honed],
    sizes: [],
    category: Category.marble,
    slug: "makrana-white-marble",
    image: "/assets/generated/marble-makrana.dim_800x600.jpg",
    images: ["/assets/generated/marble-makrana.dim_800x600.jpg"],
  },
  {
    name: "Green Marble",
    origin: "Rajasthan",
    description:
      "A striking natural stone with rich green tones and contrasting white veining. Perfect for feature walls, countertops, and decorative elements that demand a bold presence.",
    fullDescription:
      "Green Marble from Rajasthan is a visually stunning stone characterised by its deep forest-green hue offset by contrasting white and cream veining. Each slab is unique, making it a coveted choice for feature walls, statement countertops, and luxury interior accents. Its natural beauty and durability ensure lasting elegance in both residential and commercial spaces. Available at Khushi Marble, Kishangarh — MOQ: 2000 sqft (outside Rajasthan). Contact: 7300373111.",
    applications: [
      "Feature Walls",
      "Countertops",
      "Flooring",
      "Bathroom Vanity",
      "Wall Cladding",
    ],
    finishes: [Finish.polished, Finish.honed],
    sizes: [],
    category: Category.marble,
    slug: "green-marble",
    image: "/assets/generated/marble-green.dim_800x600.jpg",
    images: ["/assets/generated/marble-green.dim_800x600.jpg"],
  },
  {
    name: "Black Marble",
    origin: "Kishangarh, Rajasthan",
    description:
      "Elegant and dramatic, Black Marble from Kishangarh delivers a sophisticated aesthetic. Ideal for luxury interiors, bathrooms, and statement flooring.",
    fullDescription:
      "Black Marble from Kishangarh is a stone of pure drama and refinement. Its deep, uniform black surface with occasional gold or white veining creates a contrast that elevates any interior to a luxury level. Perfect for modern and contemporary designs, it works beautifully in bathrooms, kitchens, and high-end commercial lobbies. Available at Khushi Marble, Kishangarh — MOQ: 2000 sqft (outside Rajasthan). Contact: 7300373111.",
    applications: [
      "Flooring",
      "Bathroom Vanity",
      "Wall Cladding",
      "Countertops",
      "Commercial Spaces",
    ],
    finishes: [Finish.polished, Finish.leathered],
    sizes: [],
    category: Category.marble,
    slug: "black-marble",
    image: "/assets/generated/marble-black.dim_800x600.jpg",
    images: ["/assets/generated/marble-black.dim_800x600.jpg"],
  },
  {
    name: "Statuario Marble",
    origin: "Italy (imported)",
    description:
      "One of the most coveted marbles in the world, Statuario features dramatic grey veining on a bright white background. Reserved for the most prestigious architectural projects.",
    fullDescription:
      "Statuario Marble is sourced from the famous Carrara quarries of Italy and represents the pinnacle of marble luxury. Its striking white background with bold, flowing grey veins has graced the world's most prestigious buildings and sculptures for centuries. Every slab is a work of natural art, making it the ultimate choice for high-end residential and architectural projects. Available at Khushi Marble, Kishangarh — Contact: 7300373111.",
    applications: [
      "Feature Walls",
      "Flooring",
      "Countertops",
      "Bathroom Vanity",
      "Sculptures",
      "Staircase",
    ],
    finishes: [Finish.polished],
    sizes: [],
    category: Category.marble,
    slug: "statuario-marble",
    image: "/assets/generated/marble-statuario.dim_800x600.jpg",
    images: ["/assets/generated/marble-statuario.dim_800x600.jpg"],
  },
  {
    name: "Banswara White Marble",
    origin: "Banswara, Rajasthan",
    description:
      "Quarried from the Banswara region, this pure white marble offers an affordable yet elegant option for residential and commercial projects.",
    fullDescription:
      "Banswara White Marble is quarried from the mineral-rich Banswara district of southern Rajasthan. This stone offers a clean white surface with subtle grey veining, providing a cost-effective yet premium solution for large-scale flooring and wall cladding projects. Its consistent colouring and good workability make it popular for temples, residences, and commercial buildings alike. Available at Khushi Marble, Kishangarh — MOQ: 2000 sqft (outside Rajasthan). Contact: 7300373111.",
    applications: [
      "Flooring",
      "Wall Cladding",
      "Temple Work",
      "Staircase",
      "Countertops",
    ],
    finishes: [Finish.polished, Finish.honed, Finish.sandblasted],
    sizes: [],
    category: Category.marble,
    slug: "banswara-white-marble",
    image: "/assets/generated/marble-banswara.dim_800x600.jpg",
    images: ["/assets/generated/marble-banswara.dim_800x600.jpg"],
  },
  {
    name: "Aspur Marble",
    origin: "Aspur, Rajasthan",
    description:
      "Aspur Marble is a unique and visually striking stone from Rajasthan, featuring bold orange-red hues with distinctive dark green and black streaking. Ideal for accent walls, feature flooring, and luxury interiors.",
    fullDescription:
      "Aspur Marble is one of the most distinctive stones sourced from the Aspur region of Rajasthan. Its vivid orange-red base is dramatically contrasted by dark green and black serpentine streaks, creating a bold visual statement unlike any other Indian marble. This stone has gained popularity in luxury hospitality design, high-end residential feature walls, and premium flooring where a truly unique aesthetic is desired. MOQ: 2000 sqft (outside Rajasthan). Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Feature Walls",
      "Flooring",
      "Bathroom Vanity",
      "Countertops",
      "Staircase",
    ],
    finishes: [Finish.polished, Finish.honed],
    sizes: [],
    category: Category.marble,
    slug: "aspur-marble",
    image: "/assets/generated/marble-aspur.dim_800x600.jpg",
    images: [
      "/assets/generated/marble-aspur.dim_800x600.jpg",
      "/assets/generated/marble-aspur-2.dim_800x600.jpg",
      "/assets/generated/marble-aspur-3.dim_800x600.jpg",
    ],
  },
  {
    name: "Pink Marble",
    origin: "Rajasthan",
    description:
      "Pink Marble from Rajasthan is an exquisite stone known for its soft salmon-pink base and elegant grey-black veining. Perfect for bedrooms, bathrooms, and decorative panels.",
    fullDescription:
      "Pink Marble is quarried from the hills of Rajasthan and is celebrated for its gentle salmon-pink tones and graceful grey-black veining. The warmth of this stone creates a welcoming, romantic atmosphere, making it a favourite for master bedrooms, luxury bathrooms, and decorative wall panels. Its fine texture takes a mirror polish beautifully, enhancing the natural colour depth. MOQ: 2000 sqft (outside Rajasthan). Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Bathroom Vanity",
      "Flooring",
      "Wall Cladding",
      "Bedroom Flooring",
      "Decorative Panels",
    ],
    finishes: [Finish.polished, Finish.honed],
    sizes: [],
    category: Category.marble,
    slug: "pink-marble",
    image: "/assets/generated/marble-pink.dim_800x600.jpg",
    images: [
      "/assets/generated/marble-pink.dim_800x600.jpg",
      "/assets/generated/marble-pink-2.dim_800x600.jpg",
      "/assets/generated/marble-pink-3.dim_800x600.jpg",
    ],
  },
  {
    name: "Torrent Marble",
    origin: "Rajasthan",
    description:
      "Torrent Marble showcases dramatic flowing veins of brown, grey, and cream — resembling a river in motion. A premium choice for luxury flooring, wall cladding, and countertops.",
    fullDescription:
      "Torrent Marble earns its name from the spectacular river-like veining patterns that cascade across its surface in shades of brown, grey, and cream. Sourced from the quarries of Rajasthan, this marble creates a sense of movement and energy in any space it adorns. It is particularly striking in large-format floor slabs or feature walls where the continuity of the veining pattern can be fully appreciated. MOQ: 2000 sqft (outside Rajasthan). Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Flooring",
      "Wall Cladding",
      "Countertops",
      "Feature Walls",
      "Staircase",
    ],
    finishes: [Finish.polished, Finish.honed],
    sizes: [],
    category: Category.marble,
    slug: "torrent-marble",
    image: "/assets/generated/marble-torrent.dim_800x600.jpg",
    images: [
      "/assets/generated/marble-torrent.dim_800x600.jpg",
      "/assets/generated/marble-torrent-2.dim_800x600.jpg",
      "/assets/generated/marble-torrent-3.dim_800x600.jpg",
    ],
  },
  {
    name: "Vietnam White Marble",
    origin: "Vietnam (Imported)",
    description:
      "Vietnam White Marble is a pristine white stone with subtle cream veining, imported for premium residential and commercial projects. Ideal for flooring, bathrooms, and architectural facades.",
    fullDescription:
      "Vietnam White Marble is imported from the finest quarries of northern Vietnam and is renowned for its exceptional whiteness and purity. The stone features a clean white background with barely-there cream veining, making it one of the most sought-after white marbles for high-end projects where minimalism and luxury converge. Its consistent quality across slabs ensures seamless installations in large spaces. MOQ: 2000 sqft (outside Rajasthan). Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Flooring",
      "Bathroom Vanity",
      "Exterior Facade",
      "Wall Cladding",
      "Countertops",
    ],
    finishes: [Finish.polished, Finish.honed],
    sizes: [],
    category: Category.marble,
    slug: "vietnam-white-marble",
    image: "/assets/generated/marble-vietnam-white.dim_800x600.jpg",
    images: [
      "/assets/generated/marble-vietnam-white.dim_800x600.jpg",
      "/assets/generated/marble-vietnam-white-2.dim_800x600.jpg",
      "/assets/generated/marble-vietnam-white-3.dim_800x600.jpg",
    ],
  },
  {
    name: "Morwad White Marble",
    origin: "Morwad, Rajasthan",
    description:
      "Morwad White Marble from Rajasthan delivers a clean, bright white surface with fine grey veining. A cost-effective premium option for flooring, walls, and temple work.",
    fullDescription:
      "Morwad White Marble is quarried from the Morwad area of Rajasthan and offers a bright white surface with delicate grey veining. It is a preferred choice for temple work, residential flooring, and wall cladding projects due to its accessible pricing without compromising on aesthetic quality. The stone works well in both traditional and contemporary design settings. MOQ: 2000 sqft (outside Rajasthan). Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Flooring",
      "Wall Cladding",
      "Temple Work",
      "Staircase",
      "Countertops",
    ],
    finishes: [Finish.polished, Finish.honed],
    sizes: [],
    category: Category.marble,
    slug: "morwad-white-marble",
    image: "/assets/generated/marble-morwad-white.dim_800x600.jpg",
    images: [
      "/assets/generated/marble-morwad-white.dim_800x600.jpg",
      "/assets/generated/marble-morwad-white-2.dim_800x600.jpg",
    ],
  },
  {
    name: "Indian Marble",
    origin: "Rajasthan, India",
    description:
      "Indian Marble encompasses the rich variety of natural stone quarried across India. Known for durability, natural beauty, and versatility in flooring, cladding, and decorative applications.",
    fullDescription:
      "Indian Marble is a broad category representing the finest natural stones quarried across the Indian subcontinent. From the white quarries of Rajasthan to the exotic stones of Gujarat, Indian marble offers unmatched variety in colour, texture, and character. Known for its durability and natural beauty, it is the backbone of India's architectural heritage and continues to be the material of choice for premium construction projects. MOQ: 2000 sqft (outside Rajasthan). Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Flooring",
      "Wall Cladding",
      "Temple Work",
      "Countertops",
      "Staircase",
      "Exterior Facade",
    ],
    finishes: [Finish.polished, Finish.honed],
    sizes: [],
    category: Category.marble,
    slug: "indian-marble",
    image: "/assets/generated/marble-indian.dim_800x600.jpg",
    images: [
      "/assets/generated/marble-indian.dim_800x600.jpg",
      "/assets/generated/marble-indian-2.dim_800x600.jpg",
      "/assets/generated/marble-indian-3.dim_800x600.jpg",
    ],
  },
  {
    name: "Jaisalmer Yellow Marble",
    origin: "Jaisalmer, Rajasthan",
    description:
      "Jaisalmer Yellow Marble radiates warm golden-yellow tones, characteristic of the sandstone-rich region of Jaisalmer. Perfect for exterior facades, garden paths, and warm-toned interiors.",
    fullDescription:
      "Jaisalmer Yellow Marble, also known as Jaisalmer Stone, radiates the warmth of the Thar Desert with its golden-yellow tones and fine granular texture. Quarried from the limestone-rich region of Jaisalmer, Rajasthan, this stone has been used in the historic forts and havelis of Rajasthan for centuries. It is highly weather-resistant and particularly suited for exterior applications, garden landscaping, and warm-toned interiors. MOQ: 2000 sqft (outside Rajasthan). Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Exterior Facade",
      "Flooring",
      "Garden Landscape",
      "Wall Cladding",
      "Staircase",
      "Pool Surround",
    ],
    finishes: [Finish.polished, Finish.honed],
    sizes: [],
    category: Category.marble,
    slug: "jaisalmer-yellow-marble",
    image: "/assets/generated/marble-jaisalmer-yellow.dim_800x600.jpg",
    images: [
      "/assets/generated/marble-jaisalmer-yellow.dim_800x600.jpg",
      "/assets/generated/marble-jaisalmer-yellow-2.dim_800x600.jpg",
      "/assets/generated/marble-jaisalmer-yellow-3.dim_800x600.jpg",
    ],
  },
  {
    name: "Marmara White Marble",
    origin: "Turkey (Imported)",
    description:
      "Marmara White Marble is a Turkish-origin stone offering brilliant white surfaces with subtle grey veins. Revered for centuries, it brings a classical elegance to any space.",
    fullDescription:
      "Marmara White Marble is imported from the Sea of Marmara region of Turkey and has been prized since antiquity for its exceptional whiteness and fine crystalline texture. Used in Ottoman palaces and classical European architecture, this stone carries centuries of luxury heritage. Its brilliant white surface with the most delicate grey veining makes it a first choice for designers seeking classical elegance in modern settings. MOQ: 2000 sqft (outside Rajasthan). Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Flooring",
      "Wall Cladding",
      "Bathroom Vanity",
      "Countertops",
      "Sculptures",
      "Temple Work",
    ],
    finishes: [Finish.polished, Finish.honed],
    sizes: [],
    category: Category.marble,
    slug: "marmara-white-marble",
    image: "/assets/generated/marble-marmara-white.dim_800x600.jpg",
    images: [
      "/assets/generated/marble-marmara-white.dim_800x600.jpg",
      "/assets/generated/marble-marmara-white-2.dim_800x600.jpg",
      "/assets/generated/marble-marmara-white-3.dim_800x600.jpg",
    ],
  },
  {
    name: "White Marble",
    origin: "Rajasthan, India",
    description:
      "Pure White Marble is the timeless choice for luxury spaces. Its pristine surface and fine texture make it ideal for flooring, staircases, and grand foyers.",
    fullDescription:
      "Pure White Marble from Rajasthan is the quintessential choice for timeless luxury. Its bright, unblemished white surface and fine crystalline texture create an atmosphere of grandeur and purity. Widely used in temples, palaces, and premium residences, this stone is equally at home in contemporary minimalist interiors as it is in classical architectural settings. Its high reflectivity enhances the light in any space. MOQ: 2000 sqft (outside Rajasthan). Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Flooring",
      "Staircase",
      "Wall Cladding",
      "Temple Work",
      "Bathroom Vanity",
      "Countertops",
    ],
    finishes: [Finish.polished, Finish.honed],
    sizes: [],
    category: Category.marble,
    slug: "white-marble",
    image: "/assets/generated/marble-white.dim_800x600.jpg",
    images: [
      "/assets/generated/marble-white.dim_800x600.jpg",
      "/assets/generated/marble-white-2.dim_800x600.jpg",
      "/assets/generated/marble-white-3.dim_800x600.jpg",
    ],
  },
  {
    name: "Alaska White Marble",
    origin: "Rajasthan, India",
    description:
      "Alaska White Marble features a beautiful blend of white and grey tones with flowing patterns. Perfect for modern interiors, bathroom vanities, and kitchen countertops.",
    fullDescription:
      "Alaska White Marble from Rajasthan offers a sophisticated interplay of white, light grey, and occasional dark mineral patterns that create a dynamic, cloud-like aesthetic. Its contemporary appeal makes it a leading choice for modern kitchen countertops, bathroom vanities, and feature walls in minimalist interiors. The stone is durable, takes an excellent polish, and its neutral palette pairs well with a wide range of design styles. MOQ: 2000 sqft (outside Rajasthan). Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Countertops",
      "Bathroom Vanity",
      "Flooring",
      "Wall Cladding",
      "Feature Walls",
    ],
    finishes: [Finish.polished, Finish.honed],
    sizes: [],
    category: Category.marble,
    slug: "alaska-white-marble",
    image: "/assets/generated/marble-alaska-white.dim_800x600.jpg",
    images: [
      "/assets/generated/marble-alaska-white.dim_800x600.jpg",
      "/assets/generated/marble-alaska-white-2.dim_800x600.jpg",
      "/assets/generated/marble-alaska-white-3.dim_800x600.jpg",
    ],
  },
  {
    name: "Rainforest Green Marble",
    origin: "Rajasthan, India",
    description:
      "Rainforest Green Marble captivates with its deep forest-green base and interwoven golden veining, evoking the lush canopies of a tropical rainforest.",
    fullDescription:
      "Rainforest Green Marble is a spectacular stone sourced from Rajasthan that draws immediate attention with its rich green base interlaced with golden-yellow veining. The dramatic contrast between the deep green and warm gold tones creates an organic, nature-inspired aesthetic that transforms any surface into a work of art. It is particularly favoured for feature walls, luxury bathroom designs, and statement countertops. MOQ: 2000 sqft (outside Rajasthan). Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Flooring",
      "Wall Cladding",
      "Feature Walls",
      "Bathroom Vanity",
      "Countertops",
    ],
    finishes: [Finish.polished, Finish.honed],
    sizes: [],
    category: Category.marble,
    slug: "rainforest-green-marble",
    image: "/assets/generated/marble-rainforest-green.dim_800x600.jpg",
    images: [
      "/assets/generated/marble-rainforest-green.dim_800x600.jpg",
      "/assets/generated/marble-rainforest-green.dim_800x600.jpg",
      "/assets/generated/marble-rainforest-green.dim_800x600.jpg",
    ],
  },
  {
    name: "Rainforest Brown Marble",
    origin: "Rajasthan, India",
    description:
      "Rainforest Brown Marble showcases earthy warm-brown tones with organic green-gold veining, bringing the depth of nature's palette into sophisticated interiors.",
    fullDescription:
      "Rainforest Brown Marble is the warmer sibling of Rainforest Green, featuring a rich chocolate-brown base laced with green and gold organic veining patterns. This stone creates a deeply grounded, nature-inspired atmosphere that pairs beautifully with timber elements and warm-toned interiors. It works equally well as a feature wall, bathroom centrepiece, or kitchen countertop, offering warmth and character in any application. MOQ: 2000 sqft (outside Rajasthan). Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Flooring",
      "Feature Walls",
      "Bathroom Vanity",
      "Kitchen Countertops",
      "Wall Cladding",
    ],
    finishes: [Finish.polished, Finish.honed],
    sizes: [],
    category: Category.marble,
    slug: "rainforest-brown-marble",
    image: "/assets/generated/marble-rainforest-brown.dim_800x600.jpg",
    images: [
      "/assets/generated/marble-rainforest-brown.dim_800x600.jpg",
      "/assets/generated/marble-rainforest-brown.dim_800x600.jpg",
      "/assets/generated/marble-rainforest-brown.dim_800x600.jpg",
    ],
  },
  {
    name: "Katni Marble",
    origin: "Katni, Madhya Pradesh",
    description:
      "Katni Marble from Madhya Pradesh is renowned for its warm creamy-beige tones and brown veining, offering an earthy sophistication for residential and temple applications.",
    fullDescription:
      "Katni Marble, sourced from the mineral-rich Katni district of Madhya Pradesh, is one of the most widely used marbles in Indian residential and religious construction. Its warm creamy-beige base with natural brown and golden veining provides an earthy sophistication that is both timeless and accessible. The stone is workable, durable, and takes a good polish, making it ideal for large-scale flooring, wall panelling, and intricate temple carvings. MOQ: 2000 sqft (outside Rajasthan). Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Flooring",
      "Wall Panels",
      "Temple Work",
      "Residential Buildings",
      "Staircase",
    ],
    finishes: [Finish.polished, Finish.honed],
    sizes: [],
    category: Category.marble,
    slug: "katni-marble",
    image: "/assets/generated/marble-katni.dim_800x600.jpg",
    images: [
      "/assets/generated/marble-katni.dim_800x600.jpg",
      "/assets/generated/marble-katni.dim_800x600.jpg",
      "/assets/generated/marble-katni.dim_800x600.jpg",
    ],
  },
  {
    name: "Udaipur Marble",
    origin: "Udaipur, Rajasthan",
    description:
      "Udaipur Marble from the lake city of Rajasthan offers a serene white-grey palette with flowing veins, perfect for staircases, sculptures, and temple work.",
    fullDescription:
      "Udaipur Marble is quarried near the historic lake city of Udaipur, Rajasthan, and reflects the refined aesthetic of the region's royal architectural legacy. Its white-grey surface with elegant flowing veins conveys a sense of tranquillity and classical beauty. It has been used extensively in temples, sculptures, and heritage renovations across Rajasthan. Suitable for both indoor luxury applications and heritage-inspired architectural projects. MOQ: 2000 sqft (outside Rajasthan). Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Flooring",
      "Staircase",
      "Wall Cladding",
      "Temple Work",
      "Sculptures",
    ],
    finishes: [Finish.polished, Finish.honed],
    sizes: [],
    category: Category.marble,
    slug: "udaipur-marble",
    image: "/assets/generated/marble-udaipur.dim_800x600.jpg",
    images: [
      "/assets/generated/marble-udaipur.dim_800x600.jpg",
      "/assets/generated/marble-udaipur.dim_800x600.jpg",
      "/assets/generated/marble-udaipur.dim_800x600.jpg",
    ],
  },
];

export const graniteProducts: ProductWithImages[] = [
  {
    name: "Kashmir Gold Granite",
    origin: "Rajasthan",
    description:
      "A warm and inviting granite with golden tones and dark mineral flecks. Highly popular for kitchen countertops, exterior cladding, and flooring.",
    fullDescription:
      "Kashmir Gold Granite from Rajasthan is celebrated for its warm golden-yellow base punctuated by dark brown, black, and cream mineral flecks that create a rich, inviting texture. One of the most popular granites for kitchen countertops, it combines aesthetic warmth with the exceptional hardness granite is known for. Its resistance to scratches, heat, and staining makes it the ideal workhorse stone for premium kitchens and exterior cladding. Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Kitchen Countertops",
      "Exterior Cladding",
      "Flooring",
      "Bathroom Vanity",
      "Wall Cladding",
    ],
    finishes: [Finish.polished, Finish.flamed, Finish.leathered],
    sizes: [],
    category: Category.granite,
    slug: "kashmir-gold-granite",
    image: "/assets/generated/granite-kashmir-gold.dim_800x600.jpg",
    images: ["/assets/generated/granite-kashmir-gold.dim_800x600.jpg"],
  },
  {
    name: "Black Galaxy Granite",
    origin: "Andhra Pradesh",
    description:
      "One of India's most iconic granites, Black Galaxy features a midnight black background studded with gold and silver mineral crystals. Exceptional for premium kitchens and commercial spaces.",
    fullDescription:
      "Black Galaxy Granite, sourced from Andhra Pradesh, is one of the most internationally recognised Indian granites. Its jet-black background is dramatically illuminated by shimmering gold and bronze mineral crystals that catch light like distant stars. This stone has been specified by leading architects worldwide for premium kitchen countertops, luxury bathrooms, and high-end commercial reception areas. Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Kitchen Countertops",
      "Bathroom Vanity",
      "Flooring",
      "Commercial Spaces",
      "Wall Cladding",
    ],
    finishes: [Finish.polished],
    sizes: [],
    category: Category.granite,
    slug: "black-galaxy-granite",
    image: "/assets/generated/granite-black-galaxy.dim_800x600.jpg",
    images: ["/assets/generated/granite-black-galaxy.dim_800x600.jpg"],
  },
  {
    name: "Red Multicolor Granite",
    origin: "Rajasthan",
    description:
      "A bold and vibrant granite with a rich red base and multi-coloured crystal patterns. Ideal for exterior facades, garden features, and statement flooring.",
    fullDescription:
      "Red Multicolor Granite from Rajasthan is a bold, energetic stone featuring a rich red base layered with cream, grey, and black crystal patterns. Its vibrant character makes it a favourite for exterior facades, garden walls, and statement flooring where durability and visual impact are both essential. The stone weathers beautifully outdoors, making it suitable for landscaping and paving applications. Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Exterior Facade",
      "Garden Landscape",
      "Flooring",
      "Monuments",
      "Paving",
    ],
    finishes: [Finish.polished, Finish.flamed, Finish.bushHammered],
    sizes: [],
    category: Category.granite,
    slug: "red-multicolor-granite",
    image: "/assets/generated/granite-red.dim_800x600.jpg",
    images: ["/assets/generated/granite-red.dim_800x600.jpg"],
  },
  {
    name: "Absolute Black Granite",
    origin: "Tamil Nadu",
    description:
      "The most versatile black stone, Absolute Black Granite provides a sleek, uniform look. Perfect for modern kitchen countertops, bathroom flooring, and architectural detailing.",
    fullDescription:
      "Absolute Black Granite from Tamil Nadu is the definitive choice for contemporary design. Its deep, consistent jet-black colour with no visible crystal patterns creates the sleekest possible aesthetic for kitchen countertops, bathroom floors, and architectural details. It polishes to a near-mirror finish, amplifying the drama of its colour. A go-to stone for minimalist, industrial, and modern luxury design schemes. Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Kitchen Countertops",
      "Bathroom Flooring",
      "Wall Cladding",
      "Commercial Spaces",
      "Pool Surround",
    ],
    finishes: [Finish.polished, Finish.honed, Finish.leathered],
    sizes: [],
    category: Category.granite,
    slug: "absolute-black-granite",
    image: "/assets/generated/granite-absolute-black.dim_800x600.jpg",
    images: ["/assets/generated/granite-absolute-black.dim_800x600.jpg"],
  },
  {
    name: "Lakha Red Granite",
    origin: "Rajasthan, India",
    description:
      "Lakha Red Granite is a vibrant deep-red stone from Rajasthan, prized for its bold colour and uniform texture. Ideal for flooring, countertops, and exterior cladding.",
    fullDescription:
      "Lakha Red Granite is a distinctive Rajasthani stone prized for its deep crimson-red colour with a uniformly fine-grained texture. Its striking colour has made it popular not only for flooring and countertops but also for monuments, memorials, and exterior cladding on public buildings. The stone is extremely hard-wearing and resistant to weathering, making it a practical as well as beautiful choice. MOQ: 2000 sqft (outside Rajasthan). Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Flooring",
      "Countertops",
      "Exterior Cladding",
      "Monuments",
      "Staircase",
    ],
    finishes: [Finish.polished, Finish.flamed],
    sizes: [],
    category: Category.granite,
    slug: "lakha-red-granite",
    image: "/assets/generated/granite-red.dim_800x600.jpg",
    images: [
      "/assets/generated/granite-red.dim_800x600.jpg",
      "/assets/generated/granite-red.dim_800x600.jpg",
      "/assets/generated/granite-red.dim_800x600.jpg",
    ],
  },
  {
    name: "Markino Black Granite",
    origin: "South India",
    description:
      "Markino Black Granite offers a deep, uniform black surface with a premium polished finish. Perfect for modern kitchens, luxury bathrooms, and high-end commercial spaces.",
    fullDescription:
      "Markino Black Granite sourced from South India is a premium dark stone known for its deep black surface and fine uniform texture. It polishes to an exceptional mirror finish, making it the perfect choice for modern kitchen countertops, sleek bathroom designs, and high-traffic commercial floors. Its hardness rating ensures superior resistance to scratches and impacts, ensuring long-term beauty and performance. MOQ: 2000 sqft (outside Rajasthan). Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Kitchen Countertops",
      "Bathroom Vanity",
      "Commercial Spaces",
      "Flooring",
      "Wall Cladding",
    ],
    finishes: [Finish.polished, Finish.flamed],
    sizes: [],
    category: Category.granite,
    slug: "markino-black-granite",
    image: "/assets/generated/granite-absolute-black.dim_800x600.jpg",
    images: [
      "/assets/generated/granite-absolute-black.dim_800x600.jpg",
      "/assets/generated/granite-absolute-black.dim_800x600.jpg",
      "/assets/generated/granite-black-galaxy.dim_800x600.jpg",
    ],
  },
  {
    name: "Teakwood Granite",
    origin: "Rajasthan, India",
    description:
      "Teakwood Granite features warm brown and beige tones resembling natural teak wood grain. A popular choice for flooring, wall panels, and landscape applications.",
    fullDescription:
      "Teakwood Granite from Rajasthan is uniquely admired for its warm brown, beige, and cream tonal range that mimics the look of natural teak wood. This organic aesthetic bridges the gap between stone and timber, making it a popular choice for homeowners who desire the warmth of wood with the durability of granite. Excellent for exterior garden walls, landscape paving, and indoor feature walls. MOQ: 2000 sqft (outside Rajasthan). Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Flooring",
      "Wall Panels",
      "Garden Landscape",
      "Exterior Facade",
      "Paving",
    ],
    finishes: [Finish.polished, Finish.flamed],
    sizes: [],
    category: Category.granite,
    slug: "teakwood-granite",
    image: "/assets/generated/granite-kashmir-gold.dim_800x600.jpg",
    images: [
      "/assets/generated/granite-kashmir-gold.dim_800x600.jpg",
      "/assets/generated/granite-kashmir-gold.dim_800x600.jpg",
      "/assets/generated/granite-kashmir-gold.dim_800x600.jpg",
    ],
  },
  {
    name: "Steel Grey Granite",
    origin: "Karnataka, India",
    description:
      "Steel Grey Granite from Karnataka is known for its consistent steel-grey colour and fine texture. A versatile stone for flooring, staircases, kitchen countertops, and exterior facades.",
    fullDescription:
      "Steel Grey Granite from Karnataka is one of India's most exported stones, valued globally for its consistent grey colour and fine, even texture. Its neutral palette integrates seamlessly with a wide range of interior and exterior design schemes. Extremely hard and weather-resistant, it is used extensively for flooring in airports, malls, and corporate buildings, as well as for premium residential kitchen countertops and staircases. MOQ: 2000 sqft (outside Rajasthan). Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Flooring",
      "Kitchen Countertops",
      "Staircase",
      "Exterior Facade",
      "Commercial Spaces",
    ],
    finishes: [Finish.polished, Finish.flamed],
    sizes: [],
    category: Category.granite,
    slug: "steel-grey-granite",
    image: "/assets/generated/granite-absolute-black.dim_800x600.jpg",
    images: [
      "/assets/generated/granite-absolute-black.dim_800x600.jpg",
      "/assets/generated/granite-absolute-black.dim_800x600.jpg",
      "/assets/generated/granite-black-galaxy.dim_800x600.jpg",
    ],
  },
  {
    name: "Steel Grey Lapatro Granite",
    origin: "Karnataka, India",
    description:
      "Steel Grey Lapatro is a premium leathered-finish variant of Steel Grey Granite, with a textured surface that adds depth and character. Ideal for outdoor paving, pool surrounds, and feature walls.",
    fullDescription:
      "Steel Grey Lapatro Granite is a specially processed variant of Steel Grey from Karnataka, featuring a distinctive leathered or brushed surface finish. This textured surface not only adds a contemporary tactile quality but also enhances slip-resistance, making it ideal for pool surrounds, outdoor terraces, and commercial feature walls. The matte sheen of the Lapatro finish gives it a more understated sophistication compared to its polished counterpart. MOQ: 2000 sqft (outside Rajasthan). Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Pool Surround",
      "Outdoor Paving",
      "Feature Walls",
      "Bathroom Flooring",
      "Garden Landscape",
    ],
    finishes: [Finish.polished, Finish.flamed],
    sizes: [],
    category: Category.granite,
    slug: "steel-grey-lapatro-granite",
    image: "/assets/generated/granite-absolute-black.dim_800x600.jpg",
    images: [
      "/assets/generated/granite-absolute-black.dim_800x600.jpg",
      "/assets/generated/granite-absolute-black.dim_800x600.jpg",
      "/assets/generated/granite-black-galaxy.dim_800x600.jpg",
    ],
  },
  {
    name: "Titanium Black Granite",
    origin: "South India",
    description:
      "Titanium Black Granite is a sophisticated dark stone with subtle silver and grey mineral specks. Its striking appearance makes it ideal for premium countertops, wall cladding, and luxury flooring.",
    fullDescription:
      "Titanium Black Granite from South India commands attention with its near-black background illuminated by subtle silver and grey mineral inclusions that catch light to create a metallic shimmer. This stone offers the drama of black granite combined with a distinctive character that differentiates it from uniform black options. It is ideal for premium kitchen countertops, corporate reception walls, and luxury residential flooring. MOQ: 2000 sqft (outside Rajasthan). Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Kitchen Countertops",
      "Wall Cladding",
      "Flooring",
      "Bathroom Vanity",
      "Commercial Spaces",
    ],
    finishes: [Finish.polished, Finish.flamed],
    sizes: [],
    category: Category.granite,
    slug: "titanium-black-granite",
    image: "/assets/generated/granite-black-galaxy.dim_800x600.jpg",
    images: [
      "/assets/generated/granite-black-galaxy.dim_800x600.jpg",
      "/assets/generated/granite-black-galaxy.dim_800x600.jpg",
      "/assets/generated/granite-absolute-black.dim_800x600.jpg",
    ],
  },
  {
    name: "Classic Red Granite",
    origin: "Rajasthan, India",
    description:
      "Classic Red Granite is a timeless stone featuring rich red tones with natural crystal patterns. Widely used for exterior facades, garden features, monuments, and residential flooring.",
    fullDescription:
      "Classic Red Granite from Rajasthan is a heritage stone with enduring appeal, featuring rich red tones embedded with natural cream and grey crystal formations. Its warm, earthy colour makes it particularly popular for exterior cladding on heritage buildings, garden walls, and monuments where a bold, confident aesthetic is desired. Despite its traditional associations, it adapts well to contemporary residential and commercial design contexts. MOQ: 2000 sqft (outside Rajasthan). Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Exterior Facade",
      "Garden Features",
      "Monuments",
      "Flooring",
      "Staircase",
    ],
    finishes: [Finish.polished, Finish.flamed],
    sizes: [],
    category: Category.granite,
    slug: "classic-red-granite",
    image: "/assets/generated/granite-red.dim_800x600.jpg",
    images: [
      "/assets/generated/granite-red.dim_800x600.jpg",
      "/assets/generated/granite-red.dim_800x600.jpg",
      "/assets/generated/granite-kashmir-gold.dim_800x600.jpg",
    ],
  },
  {
    name: "Alaska Pink Granite",
    origin: "Rajasthan, India",
    description:
      "Alaska Pink Granite is a distinctive stone with soft pink and white tones, creating a warm and welcoming aesthetic. Perfect for bathroom vanities, kitchen countertops, and decorative flooring.",
    fullDescription:
      "Alaska Pink Granite from Rajasthan is a softer, more feminine stone featuring gentle pink tones blended with white and light grey mineral patterns. Its warmth and elegance have made it a popular choice for bathroom vanities, kitchen countertops in residential settings, and decorative flooring where a light, welcoming aesthetic is desired. The stone is hard-wearing and takes an excellent polished finish. MOQ: 2000 sqft (outside Rajasthan). Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Bathroom Vanity",
      "Kitchen Countertops",
      "Flooring",
      "Wall Cladding",
      "Decorative Panels",
    ],
    finishes: [Finish.polished, Finish.flamed],
    sizes: [],
    category: Category.granite,
    slug: "alaska-pink-granite",
    image: "/assets/generated/granite-kashmir-gold.dim_800x600.jpg",
    images: [
      "/assets/generated/granite-kashmir-gold.dim_800x600.jpg",
      "/assets/generated/granite-kashmir-gold.dim_800x600.jpg",
      "/assets/generated/granite-red.dim_800x600.jpg",
    ],
  },
  {
    name: "Juprana White Granite",
    origin: "Rajasthan, India",
    description:
      "Juprana White Granite offers a pristine white base with delicate grey and black mineral flecks. A versatile stone ideal for kitchen countertops, bathroom surfaces, and modern flooring.",
    fullDescription:
      "Juprana White Granite from Rajasthan is a contemporary favourite, offering a predominantly white surface with fine grey and black mineral speckles that add subtle texture and depth. This stone bridges the visual gap between white marble and traditional granite, offering the cleanliness of white marble with the superior hardness and durability of granite. It is an excellent choice for kitchen countertops, bathroom vanities, and modern flooring projects. MOQ: 2000 sqft (outside Rajasthan). Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Kitchen Countertops",
      "Flooring",
      "Wall Cladding",
      "Bathroom Vanity",
      "Staircase",
    ],
    finishes: [Finish.polished, Finish.honed],
    sizes: [],
    category: Category.granite,
    slug: "juprana-white-granite",
    image: "/assets/generated/granite-juprana-white.dim_800x600.jpg",
    images: [
      "/assets/generated/granite-juprana-white.dim_800x600.jpg",
      "/assets/generated/granite-juprana-white.dim_800x600.jpg",
      "/assets/generated/granite-juprana-white.dim_800x600.jpg",
    ],
  },
  {
    name: "Desert Brown Granite",
    origin: "Rajasthan, India",
    description:
      "Desert Brown Granite reflects the warm hues of the Rajasthan desert, with sandy brown tones and darker mineral patterns suited for exterior and landscape applications.",
    fullDescription:
      "Desert Brown Granite captures the warm, sandy palette of the Rajasthan landscape, featuring rich sandy-brown tones interspersed with darker brown and cream mineral patterns. This stone's natural, earthy character makes it an outstanding choice for outdoor applications where it harmonises with natural environments. Its superior weather resistance and slip-resistant surface options make it ideal for garden paths, exterior facades, and landscape features. MOQ: 2000 sqft (outside Rajasthan). Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Exterior Facades",
      "Flooring",
      "Garden Landscape",
      "Paving",
      "Pool Surround",
    ],
    finishes: [Finish.polished, Finish.flamed, Finish.bushHammered],
    sizes: [],
    category: Category.granite,
    slug: "desert-brown-granite",
    image: "/assets/generated/granite-desert-brown.dim_800x600.jpg",
    images: [
      "/assets/generated/granite-desert-brown.dim_800x600.jpg",
      "/assets/generated/granite-desert-brown.dim_800x600.jpg",
      "/assets/generated/granite-desert-brown.dim_800x600.jpg",
    ],
  },
  {
    name: "Ruby Red Granite",
    origin: "Rajasthan, India",
    description:
      "Ruby Red Granite dazzles with its deep ruby-red surface and sparkling crystal formations, bringing bold luxury to flooring, monuments, and exterior cladding.",
    fullDescription:
      "Ruby Red Granite from Rajasthan is among the most visually striking granites available, featuring a deep ruby-red body suffused with sparkling white and silver crystal formations. This stone radiates energy and luxury, making it a premier choice for monument construction, premium commercial flooring, and exterior cladding on landmark buildings. Its extreme hardness ensures longevity even in the most demanding exterior environments. MOQ: 2000 sqft (outside Rajasthan). Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Monuments",
      "Flooring",
      "Exterior Cladding",
      "Garden Features",
      "Commercial Spaces",
    ],
    finishes: [Finish.polished, Finish.flamed],
    sizes: [],
    category: Category.granite,
    slug: "ruby-red-granite",
    image: "/assets/generated/granite-ruby-red.dim_800x600.jpg",
    images: [
      "/assets/generated/granite-ruby-red.dim_800x600.jpg",
      "/assets/generated/granite-ruby-red.dim_800x600.jpg",
      "/assets/generated/granite-ruby-red.dim_800x600.jpg",
    ],
  },
  {
    name: "Kotda Black Granite",
    origin: "Rajasthan, India",
    description:
      "Kotda Black Granite delivers a jet-black uniform surface with a premium polished finish, perfect for modern kitchen countertops, commercial spaces, and pool surrounds.",
    fullDescription:
      "Kotda Black Granite from Rajasthan is a locally quarried black stone that offers a deep, uniform jet-black surface rivalling the best South Indian black granites. Its fine grain and consistent colour make it an excellent choice for modern kitchen countertops, upscale bathroom floors, and sleek commercial spaces. The stone also performs exceptionally well in pool surrounds and outdoor applications due to its excellent weather and moisture resistance. MOQ: 2000 sqft (outside Rajasthan). Available at Khushi Marble, Kishangarh. Contact: 7300373111.",
    applications: [
      "Kitchen Countertops",
      "Modern Flooring",
      "Bathroom Vanity",
      "Commercial Spaces",
      "Pool Surround",
    ],
    finishes: [Finish.polished, Finish.honed, Finish.leathered],
    sizes: [],
    category: Category.granite,
    slug: "kotda-black-granite",
    image: "/assets/generated/granite-kotda-black.dim_800x600.jpg",
    images: [
      "/assets/generated/granite-kotda-black.dim_800x600.jpg",
      "/assets/generated/granite-kotda-black.dim_800x600.jpg",
      "/assets/generated/granite-kotda-black.dim_800x600.jpg",
    ],
  },
];

export const exoticProducts: ProductWithImages[] = [
  {
    name: "Blue Bahia Granite",
    origin: "Brazil (imported)",
    slug: "blue-bahia-granite",
    category: Category.exotic,
    finishes: [Finish.polished],
    sizes: [],
    description:
      "An extraordinarily rare stone from Brazil, Blue Bahia captivates with its intense blue colour and shimmering silver crystal formations. Each slab is one-of-a-kind, making it the ultimate luxury statement.",
    fullDescription:
      "Blue Bahia Granite is one of the rarest and most exclusive natural stones in the world, quarried from a single source in Bahia, Brazil. Its intensely saturated blue colour, interwoven with silver, grey, and white crystal formations, creates a mesmerising effect that no other stone can replicate. Each slab is completely unique. Reserved for the most prestigious architectural statements. MOQ: 2000 sqft (outside Rajasthan). Contact: 7300373111.",
    applications: [
      "Feature Walls",
      "Countertops",
      "Luxury Flooring",
      "Reception Areas",
      "Bespoke Furniture",
    ],
    image: "/assets/generated/exotic-blue-bahia.dim_800x600.jpg",
    images: [
      "/assets/generated/exotic-blue-bahia.dim_800x600.jpg",
      "/assets/generated/exotic-blue-bahia-detail.dim_800x600.jpg",
      "/assets/generated/exotic-blue-agate-detail.dim_800x600.jpg",
    ],
  },
  {
    name: "Honey Onyx",
    origin: "Iran (imported)",
    slug: "honey-onyx",
    category: Category.exotic,
    finishes: [Finish.polished, Finish.honed],
    sizes: [],
    description:
      "Prized for its translucent quality, Honey Onyx glows when backlit, creating an unparalleled visual effect. Perfect for feature walls, bar counters, and luxury reception areas.",
    fullDescription:
      "Honey Onyx from Iran is one of the most ethereally beautiful natural stones available. Its warm amber and honey tones carry a natural translucency that, when backlit, creates a glowing, luminescent effect unlike any other stone. MOQ: 2000 sqft (outside Rajasthan). Contact: 7300373111.",
    applications: [
      "Backlit Feature Walls",
      "Bar Counters",
      "Reception Areas",
      "Room Dividers",
      "Luxury Flooring",
    ],
    image: "/assets/generated/exotic-onyx.dim_800x600.jpg",
    images: [
      "/assets/generated/exotic-onyx.dim_800x600.jpg",
      "/assets/generated/exotic-onyx-detail.dim_800x600.jpg",
      "/assets/generated/exotic-calacatta-gold.dim_800x600.jpg",
    ],
  },
  {
    name: "Emerald Pearl Granite",
    origin: "Norway (imported)",
    slug: "emerald-pearl-granite",
    category: Category.exotic,
    finishes: [Finish.polished],
    sizes: [],
    description:
      "Emerald Pearl is a rare Norwegian granite with a deep forest-green base shimmering with silver and gold mineral crystals. Truly one of the most distinctive stones in the world.",
    fullDescription:
      "Emerald Pearl Granite from Norway is quarried from one of the world's most exclusive stone deposits. Its deep, lustrous green base is illuminated by thousands of shimmering silver, grey, and gold mineral crystals. MOQ: 2000 sqft (outside Rajasthan). Contact: 7300373111.",
    applications: [
      "Feature Walls",
      "Kitchen Countertops",
      "Luxury Flooring",
      "Bar Tops",
      "Reception Areas",
    ],
    image: "/assets/generated/exotic-emerald-pearl.dim_800x600.jpg",
    images: [
      "/assets/generated/exotic-emerald-pearl.dim_800x600.jpg",
      "/assets/generated/exotic-emerald-pearl-detail.dim_800x600.jpg",
      "/assets/generated/exotic-verde-guatemala-detail.dim_800x600.jpg",
    ],
  },
  {
    name: "Blue Agate Stone",
    origin: "Brazil (imported)",
    slug: "blue-agate-stone",
    category: Category.exotic,
    finishes: [Finish.polished],
    sizes: [],
    description:
      "Blue Agate is a breathtaking semi-precious stone with vivid electric blue and white banding. Its translucent quality makes it spectacular for backlit panels and luxury feature walls.",
    fullDescription:
      "Blue Agate from Brazil is a semi-precious stone of extraordinary beauty, featuring vivid electric blue and white concentric banding patterns. Its natural translucency makes it ideal for backlit installations. MOQ: 2000 sqft (outside Rajasthan). Contact: 7300373111.",
    applications: [
      "Backlit Feature Walls",
      "Luxury Panels",
      "Bar Counters",
      "Decorative Inlay",
      "Statement Pieces",
    ],
    image: "/assets/generated/exotic-blue-agate.dim_800x600.jpg",
    images: [
      "/assets/generated/exotic-blue-agate.dim_800x600.jpg",
      "/assets/generated/exotic-blue-agate-detail.dim_800x600.jpg",
      "/assets/generated/exotic-blue-bahia-detail.dim_800x600.jpg",
    ],
  },
  {
    name: "Calacatta Gold Marble",
    origin: "Italy (imported)",
    slug: "calacatta-gold-marble",
    category: Category.exotic,
    finishes: [Finish.polished, Finish.honed],
    sizes: [],
    description:
      "The world's most coveted white marble, Calacatta Gold features a brilliant white background with bold gold and brown veining. The pinnacle of Italian luxury stone.",
    fullDescription:
      "Calacatta Gold Marble from Carrara, Italy is the most prestigious white marble in existence. Its brilliant white background adorned with dramatic gold and warm brown veining creates an iconic luxury aesthetic. MOQ: 2000 sqft (outside Rajasthan). Contact: 7300373111.",
    applications: [
      "Bathroom Vanity",
      "Kitchen Countertops",
      "Feature Walls",
      "Flooring",
      "Staircases",
    ],
    image: "/assets/generated/exotic-calacatta-gold.dim_800x600.jpg",
    images: [
      "/assets/generated/exotic-calacatta-gold.dim_800x600.jpg",
      "/assets/generated/exotic-calacatta-gold-detail.dim_800x600.jpg",
      "/assets/generated/exotic-super-white-detail.dim_800x600.jpg",
    ],
  },
  {
    name: "Red Dragon Marble",
    origin: "China (imported)",
    slug: "red-dragon-marble",
    category: Category.exotic,
    finishes: [Finish.polished],
    sizes: [],
    description:
      "Red Dragon Marble from China commands attention with its deep crimson base and dramatic white-silver veining. A bold, powerful statement stone for prestigious projects.",
    fullDescription:
      "Red Dragon Marble, imported from China, is one of the most striking exotic stones available. Its deep crimson-red body is traversed by dramatic white and silver veining. MOQ: 2000 sqft (outside Rajasthan). Contact: 7300373111.",
    applications: [
      "Feature Walls",
      "Luxury Flooring",
      "Reception Areas",
      "Bar Counters",
      "Decorative Panels",
    ],
    image: "/assets/generated/exotic-red-dragon.dim_800x600.jpg",
    images: [
      "/assets/generated/exotic-red-dragon.dim_800x600.jpg",
      "/assets/generated/exotic-red-dragon-detail.dim_800x600.jpg",
      "/assets/generated/exotic-multicolor-red-detail.dim_800x600.jpg",
    ],
  },
  {
    name: "Labradorite Stone",
    origin: "Madagascar (imported)",
    slug: "labradorite-stone",
    category: Category.exotic,
    finishes: [Finish.polished],
    sizes: [],
    description:
      "Labradorite displays a magical iridescent phenomenon called labradorescence — shifting blues, greens, and golds that change with the light. Truly a stone unlike any other.",
    fullDescription:
      "Labradorite from Madagascar is perhaps the most magical of all exotic stones. Its dark base is suffused with a spectacular iridescent optical phenomenon that produces shifting blue, green, gold, and violet colour displays as light changes angle. MOQ: 2000 sqft (outside Rajasthan). Contact: 7300373111.",
    applications: [
      "Feature Walls",
      "Statement Countertops",
      "Luxury Panels",
      "Bespoke Furniture",
      "Art Installations",
    ],
    image: "/assets/generated/exotic-labradorite.dim_800x600.jpg",
    images: [
      "/assets/generated/exotic-labradorite.dim_800x600.jpg",
      "/assets/generated/exotic-labradorite-detail.dim_800x600.jpg",
      "/assets/generated/exotic-emerald-pearl-detail.dim_800x600.jpg",
    ],
  },
  {
    name: "Fusion Quartzite",
    origin: "Brazil (imported)",
    slug: "fusion-quartzite",
    category: Category.exotic,
    finishes: [Finish.polished, Finish.honed],
    sizes: [],
    description:
      "Fusion Quartzite explodes with vibrant swirling purples, pinks, oranges, blues, and whites. The most colourful exotic quartzite, offering unmatched visual drama.",
    fullDescription:
      "Fusion Quartzite from Brazil is the most vivid and colourful exotic stone available. Its surface is a riot of swirling purples, pinks, oranges, blues, and creams — no two slabs are alike. MOQ: 2000 sqft (outside Rajasthan). Contact: 7300373111.",
    applications: [
      "Feature Walls",
      "Kitchen Countertops",
      "Bathroom Vanity",
      "Statement Flooring",
      "Bar Tops",
    ],
    image: "/assets/generated/exotic-fusion-quartzite.dim_800x600.jpg",
    images: [
      "/assets/generated/exotic-fusion-quartzite.dim_800x600.jpg",
      "/assets/generated/exotic-fusion-quartzite-detail.dim_800x600.jpg",
      "/assets/generated/exotic-multicolor-red.dim_800x600.jpg",
    ],
  },
  {
    name: "Fantasy Brown Quartzite",
    origin: "India",
    slug: "fantasy-brown-quartzite",
    category: Category.exotic,
    finishes: [Finish.polished, Finish.honed],
    sizes: [],
    description:
      "Fantasy Brown Quartzite features mesmerising swirling brown, white, and cream patterns. A uniquely beautiful stone that bridges marble aesthetics with granite durability.",
    fullDescription:
      "Fantasy Brown Quartzite combines the flowing organic aesthetic of marble with the superior hardness of quartzite. Its flowing brown, chocolate, cream, and white patterns create a dream-like quality. MOQ: 2000 sqft (outside Rajasthan). Contact: 7300373111.",
    applications: [
      "Kitchen Countertops",
      "Bathroom Vanity",
      "Feature Walls",
      "Flooring",
      "Staircases",
    ],
    image: "/assets/generated/exotic-fantasy-brown.dim_800x600.jpg",
    images: [
      "/assets/generated/exotic-fantasy-brown.dim_800x600.jpg",
      "/assets/generated/exotic-fantasy-brown-detail.dim_800x600.jpg",
      "/assets/generated/exotic-tiger-skin-detail.dim_800x600.jpg",
    ],
  },
  {
    name: "Portoro Black Marble",
    origin: "Italy (imported)",
    slug: "portoro-black-marble",
    category: Category.exotic,
    finishes: [Finish.polished],
    sizes: [],
    description:
      "Portoro Black Marble features a jet-black background with spectacular bright gold veining. Quarried in Italy, it is one of the rarest and most valuable marbles in the world.",
    fullDescription:
      "Portoro Black Marble from the island of Portovenere in Italy is among the most sought-after luxury marbles globally. Its intensely deep black background is dramatically lit by bold, bright gold veining. MOQ: 2000 sqft (outside Rajasthan). Contact: 7300373111.",
    applications: [
      "Feature Walls",
      "Bathroom Vanity",
      "Countertops",
      "Luxury Flooring",
      "Commercial Spaces",
    ],
    image: "/assets/generated/exotic-portoro-black.dim_800x600.jpg",
    images: [
      "/assets/generated/exotic-portoro-black.dim_800x600.jpg",
      "/assets/generated/exotic-portoro-black-detail.dim_800x600.jpg",
      "/assets/generated/exotic-red-dragon-detail.dim_800x600.jpg",
    ],
  },
  {
    name: "Verde Guatemala Marble",
    origin: "Guatemala (imported)",
    slug: "verde-guatemala-marble",
    category: Category.exotic,
    finishes: [Finish.polished, Finish.honed],
    sizes: [],
    description:
      "Verde Guatemala is a striking tropical green marble with contrasting white cream veining. Its rich forest-green colour brings the lushness of nature into luxury interiors.",
    fullDescription:
      "Verde Guatemala Marble, imported from Central America, is prized for its deep tropical green base contrasted by elegant white and cream veining. MOQ: 2000 sqft (outside Rajasthan). Contact: 7300373111.",
    applications: [
      "Feature Walls",
      "Bathroom Vanity",
      "Flooring",
      "Countertops",
      "Decorative Panels",
    ],
    image: "/assets/generated/exotic-verde-guatemala.dim_800x600.jpg",
    images: [
      "/assets/generated/exotic-verde-guatemala.dim_800x600.jpg",
      "/assets/generated/exotic-verde-guatemala-detail.dim_800x600.jpg",
      "/assets/generated/exotic-labradorite-detail.dim_800x600.jpg",
    ],
  },
  {
    name: "Tiger Skin Quartzite",
    origin: "Brazil (imported)",
    slug: "tiger-skin-quartzite",
    category: Category.exotic,
    finishes: [Finish.polished],
    sizes: [],
    description:
      "Tiger Skin Quartzite displays bold amber-orange and black striped patterns reminiscent of tiger markings. A rare and powerful statement stone for luxury projects.",
    fullDescription:
      "Tiger Skin Quartzite from Brazil captivates with its bold amber-orange base crossed with dramatic black mineral bands that evoke the markings of a tiger. MOQ: 2000 sqft (outside Rajasthan). Contact: 7300373111.",
    applications: [
      "Feature Walls",
      "Statement Countertops",
      "Luxury Flooring",
      "Bar Tops",
      "Reception Areas",
    ],
    image: "/assets/generated/exotic-tiger-skin.dim_800x600.jpg",
    images: [
      "/assets/generated/exotic-tiger-skin.dim_800x600.jpg",
      "/assets/generated/exotic-tiger-skin-detail.dim_800x600.jpg",
      "/assets/generated/exotic-fantasy-brown-detail.dim_800x600.jpg",
    ],
  },
  {
    name: "Super White Quartzite",
    origin: "Brazil (imported)",
    slug: "super-white-quartzite",
    category: Category.exotic,
    finishes: [Finish.polished, Finish.honed],
    sizes: [],
    description:
      "Super White Quartzite offers a pristine white surface with the faintest grey veining and the durability of quartzite. The ultimate white stone for those who demand perfection.",
    fullDescription:
      "Super White Quartzite from Brazil delivers the clean, bright white aesthetic of Carrara marble combined with the superior hardness and stain-resistance of quartzite. MOQ: 2000 sqft (outside Rajasthan). Contact: 7300373111.",
    applications: [
      "Kitchen Countertops",
      "Bathroom Vanity",
      "Flooring",
      "Feature Walls",
      "Staircases",
    ],
    image: "/assets/generated/exotic-super-white.dim_800x600.jpg",
    images: [
      "/assets/generated/exotic-super-white.dim_800x600.jpg",
      "/assets/generated/exotic-super-white-detail.dim_800x600.jpg",
      "/assets/generated/exotic-calacatta-gold-detail.dim_800x600.jpg",
    ],
  },
  {
    name: "Calacatta Viola Marble",
    origin: "Italy (imported)",
    slug: "calacatta-viola-marble",
    category: Category.exotic,
    finishes: [Finish.polished],
    sizes: [],
    description:
      "Calacatta Viola features a white marble base with dramatic purple-violet veining — one of the rarest Italian marbles available. Extraordinary and utterly unique.",
    fullDescription:
      "Calacatta Viola is one of the rarest marbles quarried in Italy, distinguished by its white background traversed by dramatic purple and violet veining patterns. MOQ: 2000 sqft (outside Rajasthan). Contact: 7300373111.",
    applications: [
      "Feature Walls",
      "Bathroom Vanity",
      "Luxury Flooring",
      "Statement Countertops",
      "Art Installations",
    ],
    image: "/assets/generated/exotic-calacatta-viola.dim_800x600.jpg",
    images: [
      "/assets/generated/exotic-calacatta-viola.dim_800x600.jpg",
      "/assets/generated/exotic-calacatta-viola-detail.dim_800x600.jpg",
      "/assets/generated/exotic-calacatta-gold.dim_800x600.jpg",
    ],
  },
  {
    name: "Multicolor Red Quartzite",
    origin: "Brazil (imported)",
    slug: "multicolor-red-quartzite",
    category: Category.exotic,
    finishes: [Finish.polished],
    sizes: [],
    description:
      "Multicolor Red Quartzite from Brazil bursts with vibrant reds, oranges, pinks, and creams in flowing organic patterns. A rare and energetic statement stone.",
    fullDescription:
      "Multicolor Red Quartzite from the quarries of Brazil is a high-energy stone featuring vivid reds, oranges, pinks, and cream in flowing, organic swirling patterns. MOQ: 2000 sqft (outside Rajasthan). Contact: 7300373111.",
    applications: [
      "Feature Walls",
      "Kitchen Countertops",
      "Bathroom Vanity",
      "Statement Flooring",
      "Bar Tops",
    ],
    image: "/assets/generated/exotic-multicolor-red.dim_800x600.jpg",
    images: [
      "/assets/generated/exotic-multicolor-red.dim_800x600.jpg",
      "/assets/generated/exotic-multicolor-red-detail.dim_800x600.jpg",
      "/assets/generated/exotic-fusion-quartzite-detail.dim_800x600.jpg",
    ],
  },
];

export const allProducts: ProductWithImages[] = [
  ...marbleProducts,
  ...graniteProducts,
  ...exoticProducts,
];
