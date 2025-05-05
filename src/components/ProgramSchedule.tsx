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
    date: 'Mar 28',
    items: [
      {
        time: '9:30-10:30am',
        title: 'Introduction',
        speakers: [
          {
            name: 'Dr. Sarah Chen',
            affiliation: 'Stanford University'
          }
        ],
        duration: '30 mins'
      },
      {
        time: '10:30-11:00am',
        title: 'Break'
      },
      {
        time: '11:00am-1:00pm',
        title: 'Machine Learning Fundamentals',
        speakers: [
          {
            name: 'Prof. Michael Zhang',
            affiliation: 'Stanford AI Lab'
          }
        ],
        duration: '2 hours'
      }
    ]
  },
  {
    date: 'Mar 29',
    items: [
      {
        time: '9:30-11:00am',
        title: 'Advanced AI Concepts',
        speakers: [
          {
            name: 'Dr. Emily Johnson',
            affiliation: 'Stanford University'
          }
        ],
        duration: '1.5 hours'
      },
      {
        time: '11:00-11:30am',
        title: 'Break'
      },
      {
        time: '11:30am-1:00pm',
        title: 'Practical Applications',
        speakers: [
          {
            name: 'Prof. David Lee',
            affiliation: 'Stanford AI Lab'
          }
        ],
        duration: '1.5 hours'
      }
    ]
  },
  {
    date: 'Mar 30',
    items: [
      {
        time: '9:30-11:00am',
        title: 'Future of AI',
        speakers: [
          {
            name: 'Dr. Rachel Brown',
            affiliation: 'Stanford University'
          }
        ],
        duration: '1.5 hours'
      },
      {
        time: '11:00-11:30am',
        title: 'Break'
      },
      {
        time: '11:30am-1:00pm',
        title: 'Closing Remarks',
        speakers: [
          {
            name: 'Prof. Thomas Wilson',
            affiliation: 'Stanford AI Lab'
          }
        ],
        duration: '1.5 hours'
      }
    ]
  }
];

export function ProgramSchedule() {
  return (
    <div className="w-full">
      <h2 className="text-4xl font-bold text-center mb-12">PROGRAM</h2>
      <Tabs.Root defaultValue={schedule[0].date} className="w-full">
        <Tabs.List className="flex gap-2 mb-8">
          {schedule.map((day) => (
            <Tabs.Trigger
              key={day.date}
              value={day.date}
              className={clsx(
                "flex-1 py-3 px-6 rounded-full text-lg font-semibold transition-colors",
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