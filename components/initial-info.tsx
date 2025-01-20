import { MailIcon, MapPinIcon } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from './ui/badge'

export default function InitialInfo() {
    const personalInfo = {
        name: "Radhi Rasho",
        title: "Software Developer",
        location: "Lincoln, NE",
        email: "RadhiRasho@gmail.com",
    }

    return (
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mx-auto w-full max-w-[250px] md:mx-0"
            >
                <Image
                    src="/Radhi-Rasho.jpg"
                    alt="Radhi Rasho"
                    width={250}
                    height={250}
                    priority
                    className="h-auto w-full rounded-lg border-4"
                />
            </motion.div>
            <div className="flex h-full w-full flex-col justify-center text-center md:text-left">
                <h1 className="mb-2 font-bold text-3xl">{personalInfo.name}</h1>
                <p className="mb-4 text-muted-foreground text-xl">{personalInfo.title}</p>
                <div className="mb-4 flex flex-wrap justify-center gap-2 md:justify-start">
                    <Badge variant="default" className="flex items-center gap-1 px-4 py-2">
                        <MapPinIcon className="h-4 w-4 flex-shrink-0" />
                        {personalInfo.location}
                    </Badge>
                    <Badge variant="default" className="flex items-center gap-1 px-4 py-2">
                        <Link
                            className="inline-flex gap-2 font-normal"
                            as={`mailto:${personalInfo.email}`}
                            href={`mailto:${personalInfo.email}`}
                        >
                            <MailIcon className="h-4 w-4 flex-shrink-0" />
                            {personalInfo.email}
                        </Link>
                    </Badge>
                </div>
            </div>
        </div>
    )
}