import React, { useState } from 'react';
import { Search, Filter, FileText, Star, Download, Eye, Calendar, School } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ExamPapers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExam, setSelectedExam] = useState('all');

  const examTypes = [
    { id: 'all', name: 'All Exams' },
    { id: 'jee', name: 'JEE Main/Advanced' },
    { id: 'neet', name: 'NEET' },
    { id: 'cat', name: 'CAT' },
    { id: 'gate', name: 'GATE' },
    { id: 'cbse', name: 'CBSE Board' },
    { id: 'icse', name: 'ICSE Board' },
    { id: 'university', name: 'University Exams' },
  ];

  const mockPapers = [
    {
      id: 1,
      title: 'JEE Main 2023 Physics Paper',
      exam: 'jee',
      subject: 'Physics',
      year: '2023',
      session: 'January Session',
      difficulty: 'Hard',
      questions: 30,
      duration: '3 hours',
      rating: 4.8,
      downloads: 5200,
      solutions: true,
      thumbnail: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'NEET 2023 Biology Paper',
      exam: 'neet',
      subject: 'Biology',
      year: '2023',
      session: 'Main Exam',
      difficulty: 'Medium',
      questions: 50,
      duration: '3 hours',
      rating: 4.7,
      downloads: 4800,
      solutions: true,
      thumbnail: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'CAT 2022 Quantitative Aptitude',
      exam: 'cat',
      subject: 'Quantitative Aptitude',
      year: '2022',
      session: 'Slot 1',
      difficulty: 'Hard',
      questions: 22,
      duration: '2 hours',
      rating: 4.9,
      downloads: 3200,
      solutions: true,
      thumbnail: '/placeholder.svg'
    },
    {
      id: 4,
      title: 'GATE CSE 2023 Paper',
      exam: 'gate',
      subject: 'Computer Science',
      year: '2023',
      session: 'Morning Shift',
      difficulty: 'Hard',
      questions: 65,
      duration: '3 hours',
      rating: 4.6,
      downloads: 2800,
      solutions: true,
      thumbnail: '/placeholder.svg'
    },
    {
      id: 5,
      title: 'CBSE Class 12 Mathematics 2023',
      exam: 'cbse',
      subject: 'Mathematics',
      year: '2023',
      session: 'Board Exam',
      difficulty: 'Medium',
      questions: 38,
      duration: '3 hours',
      rating: 4.8,
      downloads: 6500,
      solutions: true,
      thumbnail: '/placeholder.svg'
    },
    {
      id: 6,
      title: 'ICSE Class 10 Science 2023',
      exam: 'icse',
      subject: 'Science',
      year: '2023',
      session: 'Board Exam',
      difficulty: 'Medium',
      questions: 45,
      duration: '2.5 hours',
      rating: 4.5,
      downloads: 4200,
      solutions: true,
      thumbnail: '/placeholder.svg'
    },
  ];

  const filteredPapers = mockPapers.filter(paper => {
    const matchesExam = selectedExam === 'all' || paper.exam === selectedExam;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesExam && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-playfair font-bold mb-4">
            Previous <span className="gradient-text">Exam Papers</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practice with authentic exam papers from top competitive exams and board examinations
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search exam papers by title or subject..."
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

        {/* Exam Type Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {examTypes.map((examType) => (
            <Button
              key={examType.id}
              variant={selectedExam === examType.id ? "default" : "outline"}
              onClick={() => setSelectedExam(examType.id)}
              className="rounded-full"
            >
              {examType.name}
            </Button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Found {filteredPapers.length} exam papers
          </p>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPapers.map((paper) => (
            <Card key={paper.id} className="academic-card group cursor-pointer h-full">
              <CardHeader className="p-4">
                <div className="aspect-[4/3] bg-muted rounded-lg mb-4 relative overflow-hidden">
                  <img 
                    src={paper.thumbnail} 
                    alt={paper.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-accent/10 text-accent">
                      <FileText className="h-3 w-3 mr-1" />
                      Exam Paper
                    </Badge>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge className={getDifficultyColor(paper.difficulty)}>
                      {paper.difficulty}
                    </Badge>
                  </div>
                  {paper.solutions && (
                    <div className="absolute bottom-2 left-2">
                      <Badge className="bg-green-100 text-green-800 text-xs">
                        Solutions Available
                      </Badge>
                    </div>
                  )}
                </div>
                <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                  {paper.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  {paper.subject} • {paper.session}
                </p>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{paper.year}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <School className="h-4 w-4" />
                    <span>{paper.questions}Q</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current text-yellow-500" />
                    <span className="text-sm font-medium">{paper.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Download className="h-4 w-4" />
                    <span className="text-sm">{paper.downloads}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
                
                {paper.solutions && (
                  <Button size="sm" variant="secondary" className="w-full mt-2">
                    View Solutions
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredPapers.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Papers
            </Button>
          </div>
        )}

        {/* Upload CTA */}
        <div className="text-center mt-16">
          <div className="hero-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-playfair font-semibold mb-4">
              Contribute Exam Papers
            </h3>
            <p className="text-muted-foreground mb-6">
              Help students by sharing exam papers and solutions from your institution
            </p>
            <Button size="lg">
              Upload Papers & Earn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamPapers;