
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StoryForm from "@/components/StoryForm";
import StoriesView from "@/components/StoriesView";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-neutral-200 rounded-full text-sm text-neutral-700 mb-4">
            Bildungsgutschein Stories
          </div>
          <h1 className="text-4xl font-semibold mb-4">
            Bildungsgutschein Community
          </h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Share and learn from others' experiences with Bildungsgutschein
            applications at the Agentur für Arbeit.
          </p>
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
