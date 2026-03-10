import React from 'react';
import { ArrowLeft, Bell, Info, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function NewCase({ setCurrentView }: { setCurrentView: (view: string) => void }) {
  return (
    <div className="flex-1 flex flex-col min-w-0 bg-slate-50 overflow-y-auto">
      <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-8 sticky top-0 z-10 shrink-0">
        <div className="flex items-center gap-2">
          <button onClick={() => setCurrentView('dashboard')} className="text-slate-400 hover:text-slate-600">
            <ArrowLeft size={20} />
          </button>
          <h2 className="text-lg font-bold text-slate-800">새 투자 케이스 입력</h2>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-blue-600">워크스페이스</a>
            <a href="#" className="hover:text-blue-600">보관함</a>
          </div>
          <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
            <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
              <Bell size={20} />
            </button>
            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSGDdBglAfgS_dZzwNGxOmP_y2Ly_1MilXKPw5zC8_ZRzAx-8jIpR4nWtqU6z8_CLtRRCvzzMV7H2YAQrNQDRa-EM-fdTFSv_B0lXL0pH0zFMIOL66Lwsk-fY1Kxh8z9ODUZbK6aK8P6k9wpvkoKFvd5h58DzJCOzrOx5LS5bHaansPjAJ8VtwVBpehAYeEmw3R_TTVWTEiFie_4zQid5T0H_RqNbehhYNXX-Y7FIBnh1pSNuoXwSWYxqT_MSIZUGPKKj7qYbSNvw" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto py-10 px-6 max-w-5xl w-full">
        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">STEP 01 / 04</span>
              <h3 className="text-lg font-bold text-slate-800">기본 정보 입력</h3>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-xs font-bold text-slate-500 font-mono">진행률 25%</span>
              <div className="w-48 bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full w-1/4 rounded-full transition-all duration-500"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-0">
            <div className="flex flex-col gap-2 border-t-4 border-blue-600 pt-3">
              <span className="text-xs font-bold text-blue-600">01. 기본 정보</span>
            </div>
            <div className="flex flex-col gap-2 border-t-4 border-slate-200 pt-3">
              <span className="text-xs font-bold text-slate-400">02. 시장 정보</span>
            </div>
            <div className="flex flex-col gap-2 border-t-4 border-slate-200 pt-3">
              <span className="text-xs font-bold text-slate-400">03. 재무 정보</span>
            </div>
            <div className="flex flex-col gap-2 border-t-4 border-slate-200 pt-3">
              <span className="text-xs font-bold text-slate-400">04. 전략적 맥락</span>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="p-8 space-y-6">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">01</span>
                <h4 className="text-lg font-bold">기본 정보 (Basic Information)</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 flex items-center gap-1">
                    프로젝트 명
                    <Info size={14} className="text-slate-400 cursor-help" />
                  </label>
                  <input type="text" className="w-full rounded border-slate-200 focus:ring-1 focus:ring-blue-600 focus:border-blue-600 text-sm py-2 px-3 h-10 outline-none border" placeholder="예: 차세대 AI 반도체 벤처 투자" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600">산업 분야</label>
                  <select className="w-full rounded border-slate-200 focus:ring-1 focus:ring-blue-600 focus:border-blue-600 text-sm py-2 px-3 h-10 outline-none border bg-white">
                    <option>산업을 선택하세요</option>
                    <option>IT / 테크</option>
                    <option>제조 / 하드웨어</option>
                    <option>바이오 / 헬스케어</option>
                    <option>에너지 / 환경</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600">투자 지역</label>
                  <input type="text" className="w-full rounded border-slate-200 focus:ring-1 focus:ring-blue-600 focus:border-blue-600 text-sm py-2 px-3 h-10 outline-none border" placeholder="예: 대한민국, 미국 실리콘밸리 등" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600">투자 유형</label>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="flex items-center gap-2 px-3 h-10 border border-slate-200 rounded cursor-pointer hover:bg-slate-50 transition-colors">
                      <input type="radio" name="inv_type" className="w-3.5 h-3.5 text-blue-600 focus:ring-blue-600 border-slate-300" />
                      <span className="text-xs font-medium">Startup</span>
                    </label>
                    <label className="flex items-center gap-2 px-3 h-10 border border-slate-200 rounded cursor-pointer hover:bg-slate-50 transition-colors">
                      <input type="radio" name="inv_type" className="w-3.5 h-3.5 text-blue-600 focus:ring-blue-600 border-slate-300" />
                      <span className="text-xs font-medium">JV (합작법인)</span>
                    </label>
                    <label className="flex items-center gap-2 px-3 h-10 border border-slate-200 rounded cursor-pointer hover:bg-slate-50 transition-colors">
                      <input type="radio" name="inv_type" className="w-3.5 h-3.5 text-blue-600 focus:ring-blue-600 border-slate-300" />
                      <span className="text-xs font-medium">신사업</span>
                    </label>
                    <label className="flex items-center gap-2 px-3 h-10 border border-slate-200 rounded cursor-pointer hover:bg-slate-50 transition-colors">
                      <input type="radio" name="inv_type" className="w-3.5 h-3.5 text-blue-600 focus:ring-blue-600 border-slate-300" />
                      <span className="text-xs font-medium">M&A</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            <hr className="border-slate-100" />
            
            <div className="bg-slate-50 border border-slate-100 rounded-lg p-3.5 flex gap-3 items-center">
              <Info className="text-blue-600 shrink-0" size={20} />
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-blue-600 uppercase tracking-tight">입력 가이드</p>
                <p className="text-[11px] text-slate-600 leading-normal">다음 단계부터는 시장, 재무, 전략 정보를 입력합니다. AI가 입력된 데이터를 바탕으로 투자 타당성 보고서를 생성하므로 정확한 수치 입력이 권장됩니다.</p>
              </div>
            </div>
          </div>
          
          <div className="px-8 py-4 bg-white flex items-center justify-between border-t border-slate-100">
            <button className="px-4 py-2 text-slate-500 font-bold text-sm hover:text-slate-700 transition-colors">취소</button>
            <div className="flex items-center gap-3">
              <button className="px-5 py-2 bg-white border border-slate-200 rounded text-slate-700 text-sm font-bold hover:bg-slate-50 transition-colors flex items-center gap-2">
                <ChevronLeft size={18} /> 이전
              </button>
              <button onClick={() => setCurrentView('case_brief')} className="px-6 py-2 bg-blue-600 text-white rounded text-sm font-bold hover:bg-blue-700 transition-all shadow-sm flex items-center gap-2">
                다음 단계 <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Additional Preview Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 opacity-50 select-none">
          <div className="p-4 border border-slate-200 rounded-xl bg-white/50">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-1">Coming Next</p>
            <p className="text-sm font-bold text-slate-500">시장 정보 분석</p>
            <p className="text-xs text-slate-400 mt-1">CAGR, 경쟁사 현황...</p>
          </div>
          <div className="p-4 border border-slate-200 rounded-xl bg-white/50">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-1">Planned Step</p>
            <p className="text-sm font-bold text-slate-500">재무 타당성 검토</p>
            <p className="text-xs text-slate-400 mt-1">ROI, 투자 규모...</p>
          </div>
          <div className="p-4 border border-slate-200 rounded-xl bg-white/50">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-1">Final Step</p>
            <p className="text-sm font-bold text-slate-500">전략적 시너지 도출</p>
            <p className="text-xs text-slate-400 mt-1">리스크 및 적합성...</p>
          </div>
        </div>
      </div>

      {/* Floating Guide */}
      <div className="fixed bottom-8 right-8 w-72 bg-white border border-slate-200 rounded-xl shadow-xl p-4 hidden lg:block z-20">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={18} className="text-blue-600" />
          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500">AI 입력 가이드</h5>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed mb-4">
          데이터가 구체적일수록 더 정확한 **AI 브리프** 생성이 가능합니다. 재무 지표는 최소 3년치 전망치를 권장합니다.
        </p>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px] font-medium p-2 bg-slate-50 rounded">
            <span>현재 데이터 완성도</span>
            <span className="text-blue-600 font-bold font-mono">Low</span>
          </div>
        </div>
      </div>
    </div>
  );
}
