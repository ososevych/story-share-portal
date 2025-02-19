
import StoryForm from "@/components/StoryForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-neutral-200 rounded-full text-sm text-neutral-700 mb-4">
            Share Your Experience
          </div>
          <h1 className="text-4xl font-semibold mb-4">
            Bildungsgutschein Application Story
          </h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Share your experience applying for a Bildungsgutschein at the Agentur
            für Arbeit to help others in their journey.
          </p>
        </div>
        <StoryForm />
      </div>
    </div>
  );
};

export default Index;
