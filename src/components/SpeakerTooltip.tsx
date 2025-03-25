import * as Tooltip from '@radix-ui/react-tooltip';

interface SpeakerTooltipProps {
  name: string;
  title: string;
  bio: string;
  children: React.ReactNode;
}

export function SpeakerTooltip({ name, title, bio, children }: SpeakerTooltipProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          {children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="bg-white rounded-lg shadow-lg p-4 max-w-sm animate-fadeIn z-50"
            sideOffset={5}
          >
            <h3 className="font-bold text-lg text-gray-900 mb-1">{name}</h3>
            <p className="text-sm text-gray-600 mb-2">{title}</p>
            <p className="text-sm text-gray-700">{bio}</p>
            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}