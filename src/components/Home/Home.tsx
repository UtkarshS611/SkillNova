import { useState } from 'react'
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { cn } from "../..//lib/utils";
import { ChevronRight } from "lucide-react";
import { MdAccountCircle } from "react-icons/md";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
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

    const [AccountBox , setAccountBox] = useState(false)
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = () => {
    }

    const handleAccountBox =() => {
        setAccountBox(!AccountBox)
    }

return (

        <div className="h-screen">
            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.15}
                duration={3}
                repeatDelay={1}
                className={cn(
                "[mask-image:radial-gradient(100vh_circle_at_center,white,transparent)]",
                "h-[100%] skew-y-45",
                "z-[-1]"
                )}
            />
            <header className="bg-primary-bg text-primary-text border rounded-full px-4 py-2 w-[85vw] mx-auto mt-[1rem]">
                <div className="container mx-auto flex justify-between items-center relative">
                    <div className="text-lg font-bold">SKILLNOVA</div>
                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-6">
                    <a href="#home" className="hover:text-gray-300">Home</a>
                    <a href="#about" className="hover:text-gray-300">About</a>
                    <a href="#services" className="hover:text-gray-300">Services</a>
                    <a href="#contact" className="hover:text-gray-300">Contact</a>
                    </nav>
                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden relative">
                    <button onClick={toggleMenu}>
                        {isOpen ? (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                        ) : (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                        )}
                    </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <nav className="md:hidden bg-primary-bg border h-[50vh] justify-center items-center flex flex-col font-semibold top-0 left-0 w-full absolute z-[101] space-y-4 p-4">
                        <svg
                            className="w-6 h-6 absolute top-[1.5rem] right-[5.5rem]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={toggleMenu}
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    <a href="#home" className="block hover:text-gray-300">Home</a>
                    <a href="#about" className="block hover:text-gray-300">About</a>
                    <a href="#services" className="block hover:text-gray-300">Services</a>
                    <a href="#contact" className="block hover:text-gray-300">Contact</a>
                    </nav>
                )}
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
                <DialogContent className='border-none py-16'>
                    <DialogHeader>
                    <DialogTitle>Sign Up for SkillNova</DialogTitle>
                    <DialogDescription>
                        Enter your details below to create your account and start learning.
                    </DialogDescription>
                    </DialogHeader>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input className='rounded-[10px]' id="name" placeholder="John Doe" />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input className='rounded-[10px]' id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input className='rounded-[10px]' id="password" type="password" />
                    </div>
                    <Button type="submit" className="w-full bg-black rounded-[10px] duration-200 text-white hover:bg-[#000000d8]">Create Account</Button>
                    </form>
                </DialogContent>
                </Dialog>
                
                <div className="flex gap-10 flex-wrap mt-10 items-center justify-center p-4">
                    <Card className="w-full max-w-md bg-primary-bg shadow-xl">
                        <CardHeader>
                        <CardTitle>Automatic Backups</CardTitle>
                        <CardDescription className= "text-secondary-text">Never lose your important data again</CardDescription>
                        </CardHeader>
                        <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Our automatic backup feature ensures that your data is always safe and secure. 
                            With hourly backups and easy restoration, you can focus on your work without 
                            worrying about data loss.
                        </p>
                        </CardContent>
                    </Card>
                    <Card className="w-full max-w-md bg-primary-bg shadow-xl">
                        <CardHeader>
                        <CardTitle>Automatic Backups</CardTitle>
                        <CardDescription className= "text-secondary-text">Never lose your important data again</CardDescription>
                        </CardHeader>
                        <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Our automatic backup feature ensures that your data is always safe and secure. 
                            With hourly backups and easy restoration, you can focus on your work without 
                            worrying about data loss.
                        </p>
                        </CardContent>
                    </Card>
                    <Card className="w-full max-w-md bg-primary-bg shadow-xl">
                        <CardHeader>
                        <CardTitle>Automatic Backups</CardTitle>
                        <CardDescription className= "text-secondary-text">Never lose your important data again</CardDescription>
                        </CardHeader>
                        <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Our automatic backup feature ensures that your data is always safe and secure. 
                            With hourly backups and easy restoration, you can focus on your work without 
                            worrying about data loss.
                        </p>
                        </CardContent>
                    </Card>
                    <Card className="w-full max-w-md bg-primary-bg shadow-xl">
                        <CardHeader>
                        <CardTitle>Automatic Backups</CardTitle>
                        <CardDescription className= "text-secondary-text">Never lose your important data again</CardDescription>
                        </CardHeader>
                        <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Our automatic backup feature ensures that your data is always safe and secure. 
                            With hourly backups and easy restoration, you can focus on your work without 
                            worrying about data loss.
                        </p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
)
}