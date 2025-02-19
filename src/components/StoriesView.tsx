
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { offices } from "@/data/offices";
import { dummyStories } from "@/data/dummy-stories";

const StoriesView = () => {
  const [selectedOffice, setSelectedOffice] = useState<string>("all_offices");
  const [selectedOutcome, setSelectedOutcome] = useState<string>("all_outcomes");

  const filteredStories = dummyStories.filter((story) => {
    if (selectedOffice !== "all_offices" && story.office.id !== selectedOffice) return false;
    if (selectedOutcome !== "all_outcomes" && story.outcome !== selectedOutcome) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex gap-4 bg-white p-4 rounded-lg shadow-sm">
        <div className="w-48">
          <Select
            value={selectedOffice}
            onValueChange={setSelectedOffice}
          >
            <SelectTrigger>
              <SelectValue placeholder="Filter by office" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all_offices">All offices</SelectItem>
              {offices.map((office) => (
                <SelectItem key={office.id} value={office.id}>
                  {office.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-48">
          <Select
            value={selectedOutcome}
            onValueChange={setSelectedOutcome}
          >
            <SelectTrigger>
              <SelectValue placeholder="Filter by outcome" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all_outcomes">All outcomes</SelectItem>
              <SelectItem value="received">Received</SelectItem>
              <SelectItem value="not_received">Did not receive</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-6">
        {filteredStories.map((story) => (
          <div
            key={story.id}
            className="bg-white p-6 rounded-lg shadow-sm space-y-4"
          >
            <div className="flex items-start gap-4">
              <img
                src={story.userImage}
                alt={story.userName}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">
                    <a
                      href={story.linkedinProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {story.userName}
                    </a>
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      story.outcome === "received"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {story.outcome === "received" ? "Received" : "Not received"}
                  </span>
                </div>
                <p className="text-sm text-neutral-600">
                  {story.office.name} Office
                </p>
              </div>
            </div>
            <p className="text-neutral-700 whitespace-pre-line">
              {story.description}
            </p>
            <div className="text-sm text-neutral-500">
              Posted on {story.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoriesView;
