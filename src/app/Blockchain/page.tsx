'use client'

import { useState, useEffect } from 'react';
import { getIdeas, Idea } from '@/lib/idea';
import IdeaForm from '@/components/Blockchain/IdeaForm';
import IdeaCard from '@/components/Blockchain/IdeaCard';

export default function Home() {
    const [ideas, setIdeas] = useState<Idea[]>([]);

    useEffect(() => {
        setIdeas(getIdeas());
    }, []);

    const handleIdeaCreated = () => {
        setIdeas(getIdeas());
    };

    return (
        <main className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Idea Board</h1>
            <div className="mb-8">
                <IdeaForm onIdeaCreated={handleIdeaCreated} />
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-4">Recent Ideas</h2>
                <div className="space-y-4">
                    {ideas.map((idea) => (
                        <IdeaCard key={idea.id} idea={idea} />
                    ))}
                </div>
            </div>
        </main>
    );
}

