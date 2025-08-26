import React from 'react';
import { Star, Download, Eye, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const FeaturedSection: React.FC = () => {
  const featuredItems = [
    {
      id: 1,
      title: 'Advanced Calculus Notes',
      subject: 'Mathematics',
      author: 'Dr. Sarah Wilson',
      rating: 4.8,
      downloads: 1250,
      views: 3400,
      type: 'Notes',
      price: 'Free',
      thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop',
      tags: ['Engineering', 'Calculus', 'PDF'],
      institution: 'MIT'
    },
    {
      id: 2,
      title: 'Organic Chemistry Past Papers',
      subject: 'Chemistry',
      author: 'Prof. Michael Chen',
      rating: 4.9,
      downloads: 980,
      views: 2100,
      type: 'Exam Papers',
      price: '₹99',
      thumbnail: 'https://images.unsplash.com/photo-1554475901-e2ce5c68bf62?w=300&h=200&fit=crop',
      tags: ['Medical', 'Chemistry', 'Previous Year'],
      institution: 'Harvard'
    },
    {
      id: 3,
      title: 'Data Structures & Algorithms',
      subject: 'Computer Science',
      author: 'Alex Rodriguez',
      rating: 4.7,
      downloads: 2100,
      views: 5600,
      type: 'Book',
      price: '₹199',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop',
      tags: ['Programming', 'CS', 'Complete Guide'],
      institution: 'Stanford'
    },
    {
      id: 4,
      title: 'Physics Quantum Mechanics',
      subject: 'Physics',
      author: 'Dr. Lisa Park',
      rating: 4.6,
      downloads: 750,
      views: 1800,
      type: 'Notes',
      price: 'Free',
      thumbnail: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=300&h=200&fit=crop',
      tags: ['Physics', 'Quantum', 'Theory'],
      institution: 'Caltech'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            Featured <span className="gradient-text">Resources</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked by experts - top-rated books, notes, and exam papers from leading institutions
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <Button variant="outline" size="icon" className="rounded-full bg-background/80 backdrop-blur-sm">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
            <Button variant="outline" size="icon" className="rounded-full bg-background/80 backdrop-blur-sm">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Featured Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-12">
            {featuredItems.map((item, index) => (
              <div
                key={item.id}
                className="academic-card group cursor-pointer fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                      {item.type}
                    </Badge>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Button variant="ghost" size="icon" className="bg-background/80 backdrop-blur-sm hover:bg-background">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  {item.price !== 'Free' && (
                    <div className="absolute bottom-2 right-2">
                      <Badge className="bg-primary/90 text-primary-foreground">
                        {item.price}
                      </Badge>
                    </div>
                  )}
                  {item.price === 'Free' && (
                    <div className="absolute bottom-2 right-2">
                      <Badge className="bg-success/90 text-success-foreground">
                        FREE
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">by {item.author}</p>
                    <p className="text-xs text-muted-foreground">{item.institution}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-warning fill-current" />
                      <span>{item.rating}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Download className="h-3 w-3" />
                        <span>{item.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{item.views}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-3 w-3 mr-1" />
                      Preview
                    </Button>
                    <Button className="flex-1" size="sm">
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="btn-secondary">
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;