import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      { icon: "/home.png", label: "Home", href: "/" },
      { icon: "/teacher.png", label: "Teachers", href: "/list/teachers" },
      { icon: "/student.png", label: "Students", href: "/list/students" },
      { icon: "/parent.png", label: "Parents", href: "/list/parents" },
      { icon: "/subject.png", label: "Subjects", href: "/list/subjects" },
      { icon: "/class.png", label: "Classes", href: "/list/classes" },
      { icon: "/lesson.png", label: "Lessons", href: "/list/lessons" },
      { icon: "/exam.png", label: "Exams", href: "/list/exams" },
      { icon: "/assignment.png", label: "Assignments", href: "/list/assignments" },
      { icon: "/result.png", label: "Results", href: "/list/results" },
      { icon: "/attendance.png", label: "Attendance", href: "/list/attendance" },
      { icon: "/calendar.png", label: "Events", href: "/list/events" },
      { icon: "/message.png", label: "Messages", href: "/list/messages" },
      { icon: "/announcement.png", label: "Announcements", href: "/list/announcements" },
    ],
  },
  {
    title: "OTHER",
    items: [
      { icon: "/profile.png", label: "Profile", href: "/profile" },
      { icon: "/setting.png", label: "Settings", href: "/settings" },
    ],
  },
];

const Menu = () => {
  return (
    <div className="flex flex-col justify-between h-full bg-green-500">
      {/* Menu Groups */}
      <div className="flex-1 overflow-y-auto">
        {menuItems.map((group) => (
          <div key={group.title} className="mb-6">
            <h2 className="text-white font-bold text-sm mb-2 px-4">{group.title}</h2>
            <div className="space-y-2">
              {group.items.map((item) => (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center gap-2 text-white hover:bg-green-600 p-2 rounded px-4"
                >
                  <Image src={item.icon} alt={item.label} width={20} height={20} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Logout Button */}
      <div className="px-4 pb-6">
        <Link
          href="/logout"
          className="flex items-center gap-0 text-white hover:bg-green-600 p-0 rounded"
        >
          <Image src="/logout.png" alt="Logout" width={20} height={20} />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
