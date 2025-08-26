import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, BookOpen, FileText, ClipboardList, TrendingUp, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const HeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const trendingCategories = [
    { name: 'Engineering', icon: BookOpen, count: '2.5k+', color: 'text-primary' },
    { name: 'Medical', icon: FileText, count: '1.8k+', color: 'text-secondary' },
    { name: 'Competitive Exams', icon: ClipboardList, count: '3.2k+', color: 'text-accent' },
    { name: 'School', icon: TrendingUp, count: '4.1k+', color: 'text-success' },
    { name: 'College', icon: Star, count: '2.9k+', color: 'text-warning' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-10" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="fade-in">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight">
              Your <span className="gradient-text">Academic Success</span> Starts Here
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              Discover thousands of books, notes, and previous exam papers from top institutions. 
              Study smarter, score higher, and achieve your academic goals.
            </p>
          </div>

          {/* Search Bar */}
          <div className="slide-up hero-card max-w-2xl mx-auto">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search books, notes, exam papers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input pl-12 h-14 text-lg"
                />
              </div>
              <Button type="submit" className="btn-hero h-14 px-8 text-lg glow-on-hover">
                Search
              </Button>
            </form>
          </div>

          {/* Call to Action Buttons */}
          <div className="bounce-in flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="btn-hero"
              onClick={() => navigate('/categories')}
            >
              Explore Categories
            </Button>
            <Button className="btn-outline">
              Upload & Earn
            </Button>
          </div>
        </div>

        {/* Trending Categories */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="slide-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl font-playfair font-semibold mb-8">
              Trending Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {trendingCategories.map((category, index) => (
                <div
                  key={category.name}
                  className="academic-card group cursor-pointer"
                  style={{ animationDelay: `${0.1 * index}s` }}
                  onClick={() => navigate('/categories')}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className={`${category.color} transition-transform duration-300 group-hover:scale-110`}>
                      <category.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.count} resources</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: '15K+', label: 'Resources' },
            { number: '5K+', label: 'Students' },
            { number: '500+', label: 'Institutions' },
            { number: '98%', label: 'Success Rate' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center fade-in" style={{ animationDelay: `${0.2 + 0.1 * index}s` }}>
              <div className="text-3xl md:text-4xl font-playfair font-bold gradient-text">
                {stat.number}
              </div>
              <div className="text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;