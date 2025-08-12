import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface QuickNavCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionText: string;
  onClick?: () => void;
}

export function QuickNavCard({ 
  icon: Icon, 
  title, 
  description, 
  actionText,
  onClick 
}: QuickNavCardProps) {
  return (
    <Card 
      className="bg-white hover:shadow-xl transition-shadow cursor-pointer group" 
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="text-red-sail text-4xl mb-4">
          <Icon className="w-10 h-10" />
        </div>
        <h3 className="text-xl font-semibold text-neutral-dark mb-3">{title}</h3>
        <p className="text-neutral-medium mb-4">{description}</p>
        <div className="text-red-sail font-medium group-hover:translate-x-1 transition-transform">
          {actionText} <span className="ml-1">→</span>
        </div>
      </CardContent>
    </Card>
  );
}
