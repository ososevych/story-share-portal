
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StoryForm from "@/components/StoryForm";
import StoriesView from "@/components/StoriesView";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 relative rounded-2xl overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-top"
            style={{ 
              backgroundImage: 'url("/lovable-uploads/d8c011ff-5437-47ef-8770-d0c44e921bfe.png")',
              filter: 'brightness(0.9)',
            }}
          />
          <div className="relative px-6 py-12 bg-black/30 backdrop-blur-sm">
            <div className="inline-block px-3 py-1 bg-white/90 rounded-full text-sm text-neutral-700 mb-4">
              Bildungsgooseschein Stories
            </div>
            <h1 className="text-4xl font-semibold mb-4 text-white">
              Bildungsgooseschein Community
            </h1>
            <p className="text-neutral-100 max-w-2xl mx-auto">
              Share and learn from others' experiences with Bildungsgooseschein
              applications at the Agentur für Arbeit.
            </p>
          </div>
        </div>
        <Tabs defaultValue="stories" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="stories">View Stories</TabsTrigger>
            <TabsTrigger value="share">Share Your Story</TabsTrigger>
          </TabsList>
          <TabsContent value="stories">
            <StoriesView />
          </TabsContent>
          <TabsContent value="share">
            <StoryForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
