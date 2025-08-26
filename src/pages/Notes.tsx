import React, { useState } from 'react';
import { Search, Filter, FileText, Star, Download, Eye, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Notes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const subjects = [
    { id: 'all', name: 'All Subjects' },
    { id: 'mathematics', name: 'Mathematics' },
    { id: 'physics', name: 'Physics' },
    { id: 'chemistry', name: 'Chemistry' },
    { id: 'computer-science', name: 'Computer Science' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'business', name: 'Business' },
  ];

  const mockNotes = [
    {
      id: 1,
      title: 'Calculus Complete Notes',
      subject: 'mathematics',
      author: 'Prof. Anderson',
      university: 'MIT',
      pages: 145,
      rating: 4.9,
      downloads: 2300,
      level: 'Advanced',
      year: '2023',
      preview: true,
      thumbnail: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Quantum Physics Fundamentals',
      subject: 'physics',
      author: 'Dr. Sarah Chen',
      university: 'Stanford',
      pages: 89,
      rating: 4.7,
      downloads: 1800,
      level: 'Intermediate',
      year: '2023',
      preview: true,
      thumbnail: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'Organic Chemistry Reactions',
      subject: 'chemistry',
      author: 'Prof. Williams',
      university: 'Harvard',
      pages: 234,
      rating: 4.8,
      downloads: 2100,
      level: 'Advanced',
      year: '2023',
      preview: true,
      thumbnail: '/placeholder.svg'
    },
    {
      id: 4,
      title: 'Data Structures & Algorithms',
      subject: 'computer-science',
      author: 'Prof. Kumar',
      university: 'IIT Delhi',
      pages: 187,
      rating: 4.9,
      downloads: 3200,
      level: 'Intermediate',
      year: '2023',
      preview: true,
      thumbnail: '/placeholder.svg'
    },
    {
      id: 5,
      title: 'Thermodynamics Notes',
      subject: 'engineering',
      author: 'Dr. Johnson',
      university: 'UC Berkeley',
      pages: 156,
      rating: 4.6,
      downloads: 1500,
      level: 'Intermediate',
      year: '2023',
      preview: true,
      thumbnail: '/placeholder.svg'
    },
    {
      id: 6,
      title: 'Financial Management',
      subject: 'business',
      author: 'Prof. Martinez',
      university: 'Wharton',
      pages: 123,
      rating: 4.5,
      downloads: 980,
      level: 'Beginner',
      year: '2023',
      preview: true,
      thumbnail: '/placeholder.svg'
    },
  ];

  const filteredNotes = mockNotes.filter(note => {
    const matchesSubject = selectedSubject === 'all' || note.subject === selectedSubject;
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         note.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         note.university.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-playfair font-bold mb-4">
            Study <span className="gradient-text">Notes</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access high-quality notes from top universities and experienced educators
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search notes by title, author, or university..."
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

        {/* Subject Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {subjects.map((subject) => (
            <Button
              key={subject.id}
              variant={selectedSubject === subject.id ? "default" : "outline"}
              onClick={() => setSelectedSubject(subject.id)}
              className="rounded-full"
            >
              {subject.name}
            </Button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Found {filteredNotes.length} notes
          </p>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note) => (
            <Card key={note.id} className="academic-card group cursor-pointer h-full">
              <CardHeader className="p-4">
                <div className="aspect-[4/3] bg-muted rounded-lg mb-4 relative overflow-hidden">
                  <img 
                    src={note.thumbnail} 
                    alt={note.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-primary/10 text-primary">
                      <FileText className="h-3 w-3 mr-1" />
                      Notes
                    </Badge>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge className={getLevelColor(note.level)}>
                      {note.level}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                  {note.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  by {note.author} • {note.university}
                </p>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{note.pages} pages</span>
                  </div>
                  <span>{note.year}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current text-yellow-500" />
                    <span className="text-sm font-medium">{note.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Download className="h-4 w-4" />
                    <span className="text-sm">{note.downloads}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                  {note.preview && (
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
        {filteredNotes.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Notes
            </Button>
          </div>
        )}

        {/* Upload CTA */}
        <div className="text-center mt-16">
          <div className="hero-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-playfair font-semibold mb-4">
              Share Your Knowledge
            </h3>
            <p className="text-muted-foreground mb-6">
              Upload your notes and help fellow students while earning rewards
            </p>
            <Button size="lg">
              Upload Notes & Earn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;