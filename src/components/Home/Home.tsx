import { useState } from 'react'
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { cn } from "../..//lib/utils";
import { ChevronRight } from "lucide-react";
import AnimatedGradientText from "../magicui/animated-gradient-text";
import AnimatedGridPattern from "../magicui/animated-grid-pattern";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog"

export default function LandingPage() {

        const [isDialogOpen, setIsDialogOpen] = useState(false)

return (
        <div className="min-h-screen flex flex-col">

        <div className="absolute flex h-[100vh] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
                className={cn(
                "[mask-image:radial-gradient(100vh_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-45 z-[-1]",
                )}
            />
        </div>



        <header className="py-[0.6rem] border-[1px] rounded-full w-[90vw] mx-auto mt-2 bg-white z-40">
            <nav className="flex justify-between items-center px-8">
            <h1 className="text-2xl font-bold">SKILLNOVA</h1>
            <ul className="flex space-x-4">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Courses</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">About</a></li>
            </ul>
            </nav>
        </header>

        
        <main className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">

            <div className="z-10 flex mb-10 md:mb-14 items-center justify-center">
                <AnimatedGradientText>
                    🦄 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                    <span
                    className={cn(
                        `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                    )}
                    >
                    Redefining excellence
                    </span>
                    <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedGradientText>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">Unlock Your Potential with SkillNova</h2>
            <p className="text-xl mb-8 md:mt-8 text-gray-600 max-w-2xl">
            Discover a world of knowledge at your fingertips. Join our community of learners today and transform your future.
            </p>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
                <Button className="bg-black flex items-center cursor-pointer text-white rounded-[8px] hover:bg-black hover:text-white text-lg px-8 py-6">
                    Get started
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Sign Up for EduLearn</DialogTitle>
                <DialogDescription>
                    Enter your details below to create your account and start learning.
                </DialogDescription>
                </DialogHeader>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" />
                </div>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                </div>
                <Button type="submit" className="w-full">Create Account</Button>
                </form>
            </DialogContent>
            </Dialog>
        </main>
        </div>
)
}