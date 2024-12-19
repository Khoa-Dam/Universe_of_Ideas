'use client'

import { useRef, useState } from 'react';
import { createIdea } from '../types/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function IdeaForm({ onIdeaCreated }: { onIdeaCreated: () => void }) {
    const formRef = useRef<HTMLFormElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    async function handleSubmit(formData: FormData) {
        const result = await createIdea(formData);
        if (result.success) {
            formRef.current?.reset();
            setIsVisible(false);
            onIdeaCreated();
        } else {
            alert(result.error);
        }
    }

    if (!isVisible) {
        return (
            <Button onClick={() => setIsVisible(true)}>New Idea</Button>
        );
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Post a New Idea</CardTitle>
            </CardHeader>
            <form ref={formRef} action={handleSubmit}>
                <CardContent className="space-y-4">
                    <div>
                        <Input type="text" name="title" placeholder="Title" required />
                    </div>
                    <div>
                        <Textarea name="description" placeholder="Description" required />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setIsVisible(false)}>Cancel</Button>
                    <Button type="submit">Post Idea</Button>
                </CardFooter>
            </form>
        </Card>
    );
}

