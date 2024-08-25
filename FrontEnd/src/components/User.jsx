import { RadioGroup } from "@headlessui/react";

function User({ user, type }) {
  return (
    <RadioGroup.Option
      key={user.id + user.name.split(".")['0']}
      value={user}
      className={({ checked }) =>
        `${
          checked ? "bg-indigo-600 bg-opacity-75 text-white" : "bg-white"
        } relative flex cursor-pointer rounded-lg px-10 py-5 shadow-md focus:outline-none`
      }
    >
      {({ checked }) => (
        <div className="flex w-[100%] items-center justify-between gap-5 min-w-[250px]">
          <div className="flex items-center">
            <div className="text-sm">
              <RadioGroup.Label
                as="div"
                className={`flex items-center gap-x-6 font-medium  ${
                  checked ? "text-white" : "text-gray-900"
                }`}
              >
                <img
                  className="object-cover h-10 w-10 rounded-full"
                  src={user.picture}
                  alt={user.name}
                />
                {user.name}
              </RadioGroup.Label>
            </div>
          </div>
          {checked && (
            <div className="shrink-0 text-white">
              <CheckIcon className="h-6 w-6" />
            </div>
          )}
        </div>
      )}
    </RadioGroup.Option>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default User;
