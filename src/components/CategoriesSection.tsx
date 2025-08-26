import React from 'react';
import { 
  BookOpen, 
  Calculator, 
  Microscope, 
  Code, 
  PenTool, 
  Globe, 
  GraduationCap,
  TrendingUp,
  Award,
  Users
} from 'lucide-react';

const CategoriesSection: React.FC = () => {
  const categories = [
    {
      id: 1,
      name: 'Engineering',
      description: 'Technical notes, projects, and exam papers',
      icon: Calculator,
      count: '2,500+ resources',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      subcategories: ['Computer Science', 'Mechanical', 'Electrical', 'Civil']
    },
    {
      id: 2,
      name: 'Medical',
      description: 'Medical books, research papers, and study guides',
      icon: Microscope,
      count: '1,800+ resources',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      subcategories: ['MBBS', 'Nursing', 'Pharmacy', 'Dentistry']
    },
    {
      id: 3,
      name: 'Computer Science',
      description: 'Programming, algorithms, and software engineering',
      icon: Code,
      count: '3,200+ resources',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      subcategories: ['Data Structures', 'AI/ML', 'Web Dev', 'Mobile Dev']
    },
    {
      id: 4,
      name: 'Arts & Design',
      description: 'Creative arts, design principles, and portfolios',
      icon: PenTool,
      count: '950+ resources',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      subcategories: ['Graphic Design', 'Fine Arts', 'Architecture', 'Fashion']
    },
    {
      id: 5,
      name: 'Business Studies',
      description: 'Management, economics, and business analytics',
      icon: TrendingUp,
      count: '1,400+ resources',
      color: 'text-success',
      bgColor: 'bg-success/10',
      subcategories: ['MBA', 'Economics', 'Marketing', 'Finance']
    },
    {
      id: 6,
      name: 'Social Sciences',
      description: 'Psychology, sociology, and political science',
      icon: Users,
      count: '1,100+ resources',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      subcategories: ['Psychology', 'Sociology', 'Political Science', 'History']
    },
    {
      id: 7,
      name: 'Competitive Exams',
      description: 'JEE, NEET, CAT, GATE, and other entrance exams',
      icon: Award,
      count: '2,900+ resources',
      color: 'text-destructive',
      bgColor: 'bg-destructive/10',
      subcategories: ['JEE', 'NEET', 'CAT', 'GATE']
    },
    {
      id: 8,
      name: 'Language & Literature',
      description: 'Literature, linguistics, and language studies',
      icon: Globe,
      count: '800+ resources',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      subcategories: ['English', 'Hindi', 'Foreign Languages', 'Literature']
    },
    {
      id: 9,
      name: 'School Education',
      description: 'K-12 study materials and exam preparations',
      icon: GraduationCap,
      count: '4,100+ resources',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      subcategories: ['Class 10', 'Class 12', 'CBSE', 'ICSE']
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            Explore by <span className="gradient-text">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you need from our comprehensive collection of academic resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="academic-card group cursor-pointer h-full fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`${category.bgColor} p-3 rounded-xl transition-transform duration-300 group-hover:scale-110`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.count}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 flex-1">
                  {category.description}
                </p>

                {/* Subcategories */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Popular Topics:</p>
                  <div className="flex flex-wrap gap-2">
                    {category.subcategories.map((sub) => (
                      <span
                        key={sub}
                        className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Explore Category</span>
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="hero-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-playfair font-semibold mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-muted-foreground mb-6">
              Request specific materials or contribute your own notes and earn rewards
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-outline">
                Request Material
              </button>
              <button className="btn-secondary">
                Upload & Earn
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;