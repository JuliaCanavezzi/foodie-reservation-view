import { Plus, Calendar, Clock, Users, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const reservations = [
    {
      id: 1,
      date: "Wednesday, June 5th",
      time: "7:00 PM",
      people: 4,
      notes: "Anniversary dinner, window table preferred"
    },
    {
      id: 2,
      date: "Friday, June 14th",
      time: "6:30 PM",
      people: 2,
      notes: "Birthday celebration"
    },
    {
      id: 3,
      date: "Sunday, June 23rd",
      time: "1:00 PM",
      people: 6,
      notes: "Family lunch, high chairs needed"
    },
    {
      id: 4,
      date: "Tuesday, June 25th",
      time: "8:00 PM",
      people: 3,
      notes: "Business dinner"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navbar */}
      <nav className="bg-white border-b border-border px-4 py-3 shadow-sm">
        <div className="flex items-center justify-between">
          <Button variant="ghost" className="text-sm font-medium text-foreground hover:bg-accent">
            My Reservations
          </Button>
          
          <div className="flex-1"></div>
          
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground text-xs font-bold">R</span>
          </div>
        </div>
      </nav>

      {/* Content Area */}
      <div className="p-4">
        {/* History Button */}
        <div className="flex justify-end mb-4">
          <Button variant="outline" size="sm" className="text-muted-foreground">
            History
          </Button>
        </div>

        {/* Reservations Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Make a Reservation Card */}
          <Card className="border-dashed border-2 border-muted-foreground/30 hover:border-primary/50 transition-colors cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center p-6 h-40">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Plus className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground text-center">
                Make a Reservation
              </span>
            </CardContent>
          </Card>

          {/* Existing Reservations */}
          {reservations.map((reservation) => (
            <Card key={reservation.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{reservation.date}</span>
                  </div>
                  
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{reservation.time}</span>
                  </div>
                  
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Users className="w-3 h-3 mr-1" />
                    <span>{reservation.people} people</span>
                  </div>
                  
                  {reservation.notes && (
                    <div className="flex items-start text-xs text-muted-foreground">
                      <FileText className="w-3 h-3 mr-1 mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-2">{reservation.notes}</span>
                    </div>
                  )}
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                >
                  <X className="w-3 h-3 mr-1" />
                  Cancel
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
