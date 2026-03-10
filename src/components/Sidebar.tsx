import React from 'react';
import { LayoutDashboard, PlusCircle, FileText, Users, BarChart2, Settings, Landmark } from 'lucide-react';

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

export default function Sidebar({ currentView, setCurrentView }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', name: '대시보드', icon: LayoutDashboard },
    { id: 'new_case', name: '새 투자 케이스', icon: PlusCircle },
    { id: 'case_brief', name: 'AI 분석 리포트', icon: BarChart2 },
    { id: 'agent_room', name: '에이전트 룸', icon: Users },
    { id: 'decision', name: '의사결정 결과', icon: FileText },
    { id: 'board_report', name: '이사회 보고서', icon: FileText },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col shrink-0 h-full z-20">
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
            <Landmark size={20} />
          </div>
          <div>
            <h1 className="font-serif text-xl font-bold text-blue-600 leading-tight">BoardRoom AI</h1>
            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Investment Tool</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <div className="px-3 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4">Main Menu</div>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                isActive 
                  ? 'bg-blue-600 text-white font-medium shadow-sm shadow-blue-600/20' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Icon size={20} className={isActive ? 'text-white' : 'text-slate-400'} />
              <span className="text-sm">{item.name}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-slate-100">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
          <Settings size={20} className="text-slate-400" />
          <span className="text-sm">설정</span>
        </button>
        <div className="mt-4 px-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 overflow-hidden">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSGDdBglAfgS_dZzwNGxOmP_y2Ly_1MilXKPw5zC8_ZRzAx-8jIpR4nWtqU6z8_CLtRRCvzzMV7H2YAQrNQDRa-EM-fdTFSv_B0lXL0pH0zFMIOL66Lwsk-fY1Kxh8z9ODUZbK6aK8P6k9wpvkoKFvd5h58DzJCOzrOx5LS5bHaansPjAJ8VtwVBpehAYeEmw3R_TTVWTEiFie_4zQid5T0H_RqNbehhYNXX-Y7FIBnh1pSNuoXwSWYxqT_MSIZUGPKKj7qYbSNvw" alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden text-left">
            <p className="text-xs font-bold truncate text-slate-800">김투자 심사역</p>
            <p className="text-[10px] text-slate-500 truncate">운용본부</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
