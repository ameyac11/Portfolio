import { useEffect, useState } from "react";

interface LoadingScreenProps {
    onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Faster initial load time.
        const timer = setInterval(() => {
            setProgress((prev) => {
                const increment = Math.random() * 15;
                const newProgress = prev + increment;

                if (newProgress >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return newProgress;
            });
        }, 100);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (progress === 100) {
            // Delay before unmounting smoothly.
            const timeout = setTimeout(() => {
                onComplete();
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [progress, onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center transition-opacity duration-500">
            {/* Light dot grid background. */}
            <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{
                    backgroundImage: `
            radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)
          `,
                    backgroundSize: '60px 60px', // Increased dot spacing.
                    maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 90%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 90%)',
                }}
            />

            {/* Main content container. */}
            <div className="relative z-10 flex flex-col items-center justify-center">

                {/* Logo circle container. */}
                <div className="relative mb-12">
                    {/* Rotating outer ring. */}
                    <div className="absolute -inset-4 rounded-full border border-t-black border-r-transparent border-b-black/30 border-l-transparent animate-spin duration-1000" />

                    {/* Counter-rotating inner ring. */}
                    <div className="absolute -inset-2 rounded-full border border-t-transparent border-r-black/50 border-b-transparent border-l-black/50 animate-spin duration-1000 direction-reverse opacity-70" style={{ animationDirection: 'reverse', animationDuration: '2s' }} />

                    {/* Main circle element. */}
                    <div className="h-24 w-24 rounded-full bg-white border border-gray-100 shadow-2xl flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/5 animate-pulse" />
                        <img
                            src="/Porfolio_logo_black.png"
                            alt="Logo"
                            className="w-20 h-20 object-contain z-10"
                        />
                    </div>
                </div>

                {/* Text area. */}
                <div className="flex flex-col items-center gap-2 mb-8">
                    <h2 className="text-2xl font-light tracking-[0.3em] uppercase text-zinc-800">
                        Portfolio
                    </h2>
                    <div className="h-[1px] w-12 bg-black/50" />
                </div>

                {/* Loading bar container. */}
                <div className="w-64 flex flex-col gap-2">
                    <div className="h-[2px] w-full bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-black transition-all duration-200 ease-out relative"
                            style={{ width: `${progress}%` }}
                        >
                            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/50 to-transparent" />
                        </div>
                    </div>

                    <div className="flex justify-between text-xs text-gray-400 font-mono uppercase tracking-wider">
                        <span>Loading</span>
                        <span>{Math.round(progress)}%</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoadingScreen;
