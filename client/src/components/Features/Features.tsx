import { HoverEffect } from "@/components/ui/card-hover-effect";


export function Features() {
    return (
        <div className="max-w-5xl mx-auto px-8 mt-12">
            <h1 className="text-3xl font-bold text-center">Features</h1>
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "Chat with AI",
        description:
            "A mathematics expert chatbot providing step-by-step solutions to math problems with detailed explanations and interactive chat features.",
        link: "home",
    },
    {
        title: "Function Plotter",
        description:
            "An interactive tool for plotting mathematical functions, allowing users to visualize and analyze graphs with ease.",
        link: "plot",
    },
    {
        title: "Decentralized Problem-Solving ",
        description:
            "A technology  that focuses on exchange knowledge and earn rewards for their expertise.",
    },
    {
        title: "AI-Enhanced Solver",
        description:
            "step-by-step explanations for every problem the AI solves, making it easier for users to understand the solution process.",
    },
    {
        title: "World Chat",
        description:
            "a space where users can invite their friends to discuss and solve problems together in real time.",
    },
    {
        title: "Blockchain AI Math Competitions",
        description:
            "Host math competitions with on-chain solution submissions for transparency, where AI evaluates answers and provides real-time feedback.",
    },
].map(project => ({
    ...project,
    link: project.link || "https://quantica-v1.vercel.app" 
}));
