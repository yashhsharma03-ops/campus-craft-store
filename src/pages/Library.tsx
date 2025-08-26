import React, { useState } from 'react';
import { Search, Filter, BookOpen, FileText, Star, Download, Eye, Heart, Trash2, FolderOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Library = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock user library data
  const savedBooks = [
    {
      id: 1,
      title: 'Data Structures and Algorithms',
      author: 'Thomas H. Cormen',
      type: 'book',
      rating: 4.8,
      savedAt: '2023-12-15',
      progress: 65,
      thumbnail: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Engineering Mathematics Notes',
      author: 'Prof. Smith',
      type: 'notes',
      rating: 4.6,
      savedAt: '2023-12-10',
      progress: 100,
      thumbnail: '/placeholder.svg'
    },
  ];

  const downloadHistory = [
    {
      id: 1,
      title: 'JEE Main 2023 Physics Paper',
      author: 'NTA Board',
      type: 'exam-paper',
      downloadedAt: '2023-12-18',
      size: '2.5 MB',
      thumbnail: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Quantum Physics Fundamentals',
      author: 'Dr. Sarah Chen',
      type: 'notes',
      downloadedAt: '2023-12-17',
      size: '4.8 MB',
      thumbnail: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'Financial Management',
      author: 'Prof. Martinez',
      type: 'book',
      downloadedAt: '2023-12-16',
      size: '12.3 MB',
      thumbnail: '/placeholder.svg'
    },
  ];

  const uploadedContent = [
    {
      id: 1,
      title: 'My Computer Networks Notes',
      type: 'notes',
      uploadedAt: '2023-12-12',
      downloads: 245,
      rating: 4.7,
      earnings: '$24.50',
      status: 'approved',
      thumbnail: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Database Systems Assignment Solutions',
      type: 'notes',
      uploadedAt: '2023-12-08',
      downloads: 156,
      rating: 4.5,
      earnings: '$15.60',
      status: 'approved',
      thumbnail: '/placeholder.svg'
    },
  ];

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-playfair font-bold mb-4">
            My <span className="gradient-text">Library</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Manage your saved resources, downloads, and uploaded content
          </p>
        </div>

        {/* Library Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="academic-card text-center">
            <div className="text-2xl font-bold text-primary">{savedBooks.length}</div>
            <div className="text-muted-foreground">Saved Items</div>
          </div>
          <div className="academic-card text-center">
            <div className="text-2xl font-bold text-secondary">{downloadHistory.length}</div>
            <div className="text-muted-foreground">Downloads</div>
          </div>
          <div className="academic-card text-center">
            <div className="text-2xl font-bold text-accent">{uploadedContent.length}</div>
            <div className="text-muted-foreground">Uploads</div>
          </div>
          <div className="academic-card text-center">
            <div className="text-2xl font-bold text-success">$40.10</div>
            <div className="text-muted-foreground">Total Earnings</div>
          </div>
        </div>

        <Tabs defaultValue="saved" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="saved">Saved</TabsTrigger>
            <TabsTrigger value="downloads">Downloads</TabsTrigger>
            <TabsTrigger value="uploads">My Uploads</TabsTrigger>
            <TabsTrigger value="folders">Folders</TabsTrigger>
          </TabsList>

          <TabsContent value="saved" className="space-y-6">
            {/* Search */}
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search saved items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* Saved Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedBooks.map((item) => (
                <Card key={item.id} className="academic-card group">
                  <CardHeader className="p-4">
                    <div className="aspect-[4/3] bg-muted rounded-lg mb-4 relative overflow-hidden">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 bg-white/90">
                          <Heart className="h-4 w-4 fill-current text-red-500" />
                        </Button>
                      </div>
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="bg-white/90 rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all" 
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-lg font-semibold line-clamp-2">
                      {item.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">{item.author}</p>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={getTypeBadgeColor(item.type)}>
                        {getTypeIcon(item.type)}
                        <span className="ml-1 capitalize">{item.type}</span>
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-current text-yellow-500" />
                        <span className="text-sm">{item.rating}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Download className="h-4 w-4 mr-1" />
                        Continue
                      </Button>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="downloads" className="space-y-6">
            <div className="space-y-4">
              {downloadHistory.map((item) => (
                <Card key={item.id} className="academic-card">
                  <div className="flex items-center space-x-4 p-6">
                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                      {getTypeIcon(item.type)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.author}</p>
                      <p className="text-xs text-muted-foreground">
                        Downloaded on {new Date(item.downloadedAt).toLocaleDateString()} • {item.size}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Download Again
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="uploads" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Your Uploaded Content</h3>
              <Button>
                Upload New Content
              </Button>
            </div>
            
            <div className="space-y-4">
              {uploadedContent.map((item) => (
                <Card key={item.id} className="academic-card">
                  <div className="flex items-center space-x-4 p-6">
                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                      {getTypeIcon(item.type)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Uploaded on {new Date(item.uploadedAt).toLocaleDateString()}</span>
                        <span>{item.downloads} downloads</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-current text-yellow-500" />
                          <span>{item.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-success">{item.earnings}</div>
                      <Badge className={getStatusColor(item.status)}>
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="folders" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Organize with Folders</h3>
              <Button>
                Create New Folder
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Engineering', 'Medical', 'Competitive Exams', 'Personal Notes'].map((folder) => (
                <Card key={folder} className="academic-card cursor-pointer group hover:border-primary/50">
                  <CardContent className="p-6 text-center">
                    <FolderOpen className="h-12 w-12 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                    <h4 className="font-medium">{folder}</h4>
                    <p className="text-sm text-muted-foreground">
                      {Math.floor(Math.random() * 10) + 1} items
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Library;