import * as Tabs from '@radix-ui/react-tabs';
import { clsx } from 'clsx';

interface ScheduleItem {
  time: string;
  title: string;
  speakers?: Array<{
    name: string;
    affiliation: string;
  }>;
  duration?: string;
}

interface DaySchedule {
  date: string;
  items: ScheduleItem[];
}

const schedule: DaySchedule[] = [
  {
    date: 'Monday',
    items: [
      { time: '9:00–9:30am', title: 'Welcome and Orientation' },
      { time: '9:30–10:30am', title: 'What is AI? Past, Present, and Future' },
      { time: '10:30–11:30am', title: 'Key Concepts: ML, Deep Learning, Data Science' },
      { time: '11:30am–12:00pm', title: 'Icebreaker Activity: Meet Your Team!' },
      { time: '1:00–3:00pm', title: 'Hands-On Lab: Build Your First AI Model (Image Classification)' }
    ]
  },
  {
    date: 'Tuesday',
    items: [
      { time: '9:00–10:30am', title: 'Lecture: Emotional Analytics with AI' },
      { time: '10:30–11:30am', title: 'Intro to Deep Learning & Neural Networks' },
      { time: '1:00–2:30pm', title: 'Lab: Train Emotion Recognition Model' },
      { time: '2:30–3:30pm', title: 'Workshop: Python Libraries (Pandas, NumPy, Scikit-learn, TensorFlow)' }
    ]
  },
  {
    date: 'Wednesday',
    items: [
      { time: '9:00–10:30am', title: 'Lecture: Misinformation and AI’s Role' },
      { time: '10:30–11:30am', title: 'Intro to NLP: Preprocessing & Feature Extraction' },
      { time: '1:00–2:30pm', title: 'Lab: Fake News Detection System' },
      { time: '2:30–3:30pm', title: 'Group Discussion: Ethics & Challenges in AI Media' }
    ]
  },
  {
    date: 'Thursday',
    items: [
      { time: '9:00–10:30am', title: 'Lecture: Visualizing Data for Insight' },
      { time: '10:30–11:30am', title: 'Intro to Visual Analytics Tools' },
      { time: '1:00–2:00pm', title: 'Lab: Create Dashboards & Visual Stories' },
      { time: '2:00–3:30pm', title: 'Final Project: Team Work Begins' }
    ]
  },
  {
    date: 'Friday',
    items: [
      { time: '9:00–11:00am', title: 'Final Touches: Complete Your Project' },
      { time: '11:00am–1:00pm', title: 'Project Presentations' },
      { time: '1:00–2:00pm', title: 'Panel: Careers and Opportunities in AI' },
      { time: '2:00–3:00pm', title: 'Awards, Certificates & Closing Ceremony' }
    ]
  }
];

export function ProgramSchedule() {
  return (
    <div className="w-full">
      <h2 className="text-4xl font-bold text-center mb-12">PROGRAM</h2>
      <Tabs.Root defaultValue={schedule[0].date} className="w-full">
        <Tabs.List className="flex gap-2 mb-8 overflow-x-auto">
          {schedule.map((day) => (
            <Tabs.Trigger
              key={day.date}
              value={day.date}
              className={clsx(
                "flex-1 py-3 px-6 rounded-full text-lg font-semibold transition-colors whitespace-nowrap",
                "data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-600",
                "data-[state=active]:bg-[#8C1515] data-[state=active]:text-white"
              )}
            >
              {day.date}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {schedule.map((day) => (
          <Tabs.Content
            key={day.date}
            value={day.date}
            className="focus:outline-none"
          >
            <div className="space-y-6">
              {day.items.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-8 p-6 bg-white rounded-lg shadow-sm"
                >
                  <div className="w-48 flex-shrink-0">
                    <div className="text-gray-600">{item.time}</div>
                    {item.duration && (
                      <div className="text-sm text-gray-500">({item.duration})</div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    {item.speakers && (
                      <div className="space-y-1">
                        {item.speakers.map((speaker, idx) => (
                          <div key={idx} className="text-gray-600">
                            <span className="font-medium">{speaker.name}</span>
                            <span className="text-gray-500 text-sm ml-2">
                              {speaker.affiliation}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
}
