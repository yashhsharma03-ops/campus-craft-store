import React, { useState } from 'react';
import { Search, Filter, BookOpen, FileText, Star, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'medical', name: 'Medical' },
    { id: 'computer-science', name: 'Computer Science' },
    { id: 'business', name: 'Business Studies' },
    { id: 'competitive', name: 'Competitive Exams' },
    { id: 'school', name: 'School Education' },
  ];

  const mockBooks = [
    {
      id: 1,
      title: 'Data Structures and Algorithms',
      author: 'Thomas H. Cormen',
      category: 'computer-science',
      type: 'book',
      rating: 4.8,
      downloads: 1200,
      preview: true,
      price: 'Free',
      thumbnail: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Engineering Mathematics Notes',
      author: 'Prof. Smith',
      category: 'engineering',
      type: 'notes',
      rating: 4.6,
      downloads: 890,
      preview: true,
      price: 'Free',
      thumbnail: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'JEE Main Physics Paper 2023',
      author: 'NTA Board',
      category: 'competitive',
      type: 'exam-paper',
      rating: 4.9,
      downloads: 2100,
      preview: true,
      price: 'Free',
      thumbnail: '/placeholder.svg'
    },
    {
      id: 4,
      title: 'Human Anatomy Textbook',
      author: 'Dr. Johnson',
      category: 'medical',
      type: 'book',
      rating: 4.7,
      downloads: 1500,
      preview: true,
      price: 'Free',
      thumbnail: '/placeholder.svg'
    },
    {
      id: 5,
      title: 'Financial Management Notes',
      author: 'Prof. Williams',
      category: 'business',
      type: 'notes',
      rating: 4.5,
      downloads: 650,
      preview: true,
      price: 'Free',
      thumbnail: '/placeholder.svg'
    },
    {
      id: 6,
      title: 'Class 12 Chemistry Board Papers',
      author: 'CBSE Board',
      category: 'school',
      type: 'exam-paper',
      rating: 4.8,
      downloads: 3200,
      preview: true,
      price: 'Free',
      thumbnail: '/placeholder.svg'
    },
  ];

  const filteredBooks = mockBooks.filter(book => {
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'book': return <BookOpen className="h-4 w-4" />;
      case 'notes': return <FileText className="h-4 w-4" />;
      case 'exam-paper': return <FileText className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'book': return 'bg-primary/10 text-primary';
      case 'notes': return 'bg-secondary/10 text-secondary';
      case 'exam-paper': return 'bg-accent/10 text-accent';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-playfair font-bold mb-4">
            Browse <span className="gradient-text">Categories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our vast collection of books, notes, and exam papers
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search books, notes, papers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12"
              />
            </div>
          </div>
          <Button variant="outline" className="lg:w-auto">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Found {filteredBooks.length} resources
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <Card key={book.id} className="academic-card group cursor-pointer h-full">
              <CardHeader className="p-4">
                <div className="aspect-[3/4] bg-muted rounded-lg mb-4 relative overflow-hidden">
                  <img 
                    src={book.thumbnail} 
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className={getTypeBadgeColor(book.type)}>
                      {getTypeIcon(book.type)}
                      <span className="ml-1 capitalize">{book.type.replace('-', ' ')}</span>
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                  {book.title}
                </CardTitle>
                <p className="text-muted-foreground">{book.author}</p>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current text-yellow-500" />
                    <span className="text-sm font-medium">{book.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Download className="h-4 w-4" />
                    <span className="text-sm">{book.downloads}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                  {book.preview && (
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredBooks.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Resources
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">No resources found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or category filters
            </p>
            <Button>
              Request this Resource
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;