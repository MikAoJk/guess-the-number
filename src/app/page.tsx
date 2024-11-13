import {Guessthenumber} from "@/components/Guessthenumber";
import React from "react";

export default function Home() {
    return (
        <main>
            <div className="flex min-h-screen flex-col items-center justify-between">
                <div className="z- items-center justify-between font-mono text-sm flex">
                    <Guessthenumber/>
                </div>
            </div>
        </main>
    )
}
