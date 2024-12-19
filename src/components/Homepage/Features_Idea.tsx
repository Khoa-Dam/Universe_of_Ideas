import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ideas } from "@/data/ideas";

export function FeaturedIdeas() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">Featured Ideas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ideas.map((idea) => (
          <Card key={idea.title}>
            <CardHeader>
              <CardTitle>{idea.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {idea.description}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src={idea.avatar} />
                  <AvatarFallback>{idea.author[0]}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{idea.author}</span>
              </div>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
