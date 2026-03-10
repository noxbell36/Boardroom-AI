import React from 'react';
import { Search, PlusSquare, BarChart2, CheckCircle2, Hourglass, XCircle, Car, Factory, Zap, Satellite, ChevronsRight, Ban, ThumbsUp, Info } from 'lucide-react';

export default function Dashboard({ setCurrentView }: { setCurrentView: (view: string) => void }) {
  return (
    <div className="flex-1 flex flex-col min-w-0 bg-slate-50/50 overflow-y-auto">
      <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-10 shrink-0">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">투자 관리 대시보드</h2>
          <p className="text-xs text-slate-500 font-medium">2025년 5월 투자 현황 요약</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-blue-600 transition-colors" />
            <input 
              type="text" 
              className="pl-10 pr-4 py-2 bg-slate-100 border-transparent rounded-full text-sm focus:ring-2 focus:ring-blue-600/20 focus:bg-white focus:border-blue-600/30 w-72 transition-all outline-none" 
              placeholder="투자 건명, ID 또는 담당자 검색" 
            />
          </div>
          <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
          <button onClick={() => setCurrentView('new_case')} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all shadow-md shadow-blue-600/20 active:scale-95">
            <PlusSquare size={18} />
            신규 케이스 생성
          </button>
        </div>
      </header>

      <div className="p-8 space-y-6 max-w-[1600px] mx-auto w-full">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">전체 투자 건수</p>
              <BarChart2 size={20} className="text-slate-300" />
            </div>
            <div className="flex items-baseline gap-2 mt-4">
              <h3 className="text-3xl font-bold text-slate-900">7</h3>
              <span className="text-xs font-medium text-slate-400">건</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-2 flex items-center gap-1">
              <span className="text-emerald-500 font-medium">+1</span> 지난달 대비
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">승인 완료</p>
              <CheckCircle2 size={20} className="text-emerald-400" />
            </div>
            <div className="flex items-baseline gap-2 mt-4">
              <h3 className="text-3xl font-bold text-slate-900">2</h3>
              <span className="text-xs font-medium text-slate-400">건</span>
            </div>
            <div className="w-full bg-slate-100 h-1 rounded-full mt-4">
              <div className="bg-emerald-500 h-full rounded-full" style={{ width: '28%' }}></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">검토 진행 중</p>
              <Hourglass size={20} className="text-amber-400" />
            </div>
            <div className="flex items-baseline gap-2 mt-4">
              <h3 className="text-3xl font-bold text-slate-900">3</h3>
              <span className="text-xs font-medium text-slate-400">건</span>
            </div>
            <div className="w-full bg-slate-100 h-1 rounded-full mt-4">
              <div className="bg-amber-500 h-full rounded-full" style={{ width: '43%' }}></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">보류/부결</p>
              <XCircle size={20} className="text-rose-400" />
            </div>
            <div className="flex items-baseline gap-2 mt-4">
              <h3 className="text-3xl font-bold text-slate-900">2</h3>
              <span className="text-xs font-medium text-slate-400">건</span>
            </div>
            <div className="w-full bg-slate-100 h-1 rounded-full mt-4">
              <div className="bg-rose-500 h-full rounded-full" style={{ width: '28%' }}></div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Case List */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <h4 className="font-bold text-slate-800">투자 케이스 목록</h4>
              <div className="flex gap-1">
                <button className="px-3 py-1.5 text-xs font-bold rounded-md bg-slate-100 text-slate-900">전체</button>
                <button className="px-3 py-1.5 text-xs font-bold rounded-md text-slate-500 hover:bg-slate-50">진행 중</button>
                <button className="px-3 py-1.5 text-xs font-bold rounded-md text-slate-500 hover:bg-slate-50">승인</button>
                <button className="px-3 py-1.5 text-xs font-bold rounded-md text-slate-500 hover:bg-slate-50">보류/부결</button>
              </div>
            </div>
            <div className="divide-y divide-slate-100">
              <div className="p-4 bg-blue-50/50 border-l-[3px] border-blue-600 flex items-center gap-4 cursor-pointer hover:bg-blue-50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-slate-200 flex items-center justify-center text-blue-600">
                  <Car size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm font-bold text-slate-900 truncate">커넥티드 카 데이터 플랫폼 JV</h5>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-200 text-slate-600 uppercase tracking-tighter">JV</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">자본 출자 • $24,500,000</p>
                </div>
                <div className="text-right">
                  <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-700 text-[9px] font-bold uppercase tracking-wider">검토 중</span>
                  <p className="text-[10px] text-slate-400 mt-1.5 font-medium">2시간 전</p>
                </div>
              </div>

              <div className="p-4 flex items-center gap-4 cursor-pointer hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                  <Factory size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm font-bold text-slate-800 truncate">스마트 물류 허브 시리즈 B</h5>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-200 text-slate-600 uppercase tracking-tighter">EQUITY</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">지분 투자 • $12,000,000</p>
                </div>
                <div className="text-right">
                  <span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[9px] font-bold uppercase tracking-wider">승인 완료</span>
                  <p className="text-[10px] text-slate-400 mt-1.5 font-medium">1일 전</p>
                </div>
              </div>

              <div className="p-4 flex items-center gap-4 cursor-pointer hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                  <Zap size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm font-bold text-slate-800 truncate">전고체 배터리 파일럿 프로젝트</h5>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-200 text-slate-600 uppercase tracking-tighter">PF</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">프로젝트 파이낸싱 • $8,200,000</p>
                </div>
                <div className="text-right">
                  <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-[9px] font-bold uppercase tracking-wider">조건부 승인</span>
                  <p className="text-[10px] text-slate-400 mt-1.5 font-medium">3일 전</p>
                </div>
              </div>

              <div className="p-4 flex items-center gap-4 cursor-pointer hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                  <Satellite size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm font-bold text-slate-800 truncate">저궤도 위성 통신 클러스터</h5>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-200 text-slate-600 uppercase tracking-tighter">M&A</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">전략적 M&A • $45,000,000</p>
                </div>
                <div className="text-right">
                  <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-600 text-[9px] font-bold uppercase tracking-wider">재검토 필요</span>
                  <p className="text-[10px] text-slate-400 mt-1.5 font-medium">4일 전</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-slate-50 text-center border-t border-slate-100">
              <button className="text-xs font-bold text-blue-600 hover:underline flex items-center justify-center gap-1 mx-auto">
                전체 목록 보기 <ChevronsRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Column: Case Detail & Activity */}
          <div className="lg:col-span-5 space-y-6">
            {/* Case Detail */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 tracking-tight leading-tight">커넥티드 카 데이터 플랫폼 JV</h4>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="px-1.5 py-0.5 bg-slate-100 text-slate-500 text-[9px] font-bold rounded uppercase">#2025-INV-004</span>
                      <span className="text-[10px] text-slate-400 font-medium italic">최종 업데이트: 2시간 전</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-rose-500 text-white text-[9px] font-bold rounded-full uppercase tracking-wider shadow-sm shadow-rose-200 shrink-0">High Priority</span>
                </div>
                
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[11px] font-bold text-slate-500">전략 정합성</span>
                      <span className="text-[11px] font-bold text-blue-600">88%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[11px] font-bold text-slate-500">시장 잠재력</span>
                      <span className="text-[11px] font-bold text-blue-600">72%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600" style={{ width: '72%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[11px] font-bold text-slate-500">재무 수익성</span>
                      <span className="text-[11px] font-bold text-blue-600">65%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[11px] font-bold text-slate-500">리스크 평가</span>
                      <span className="text-[11px] font-bold text-rose-500">42%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-rose-500" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Agent Stance */}
              <div className="p-6 bg-slate-50/50">
                <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">AI 분석가 의견 요약</h5>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">CFO 에이전트</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[11px] font-bold text-rose-600">조건부 반대</span>
                      <Ban size={14} className="text-rose-500" />
                    </div>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">전략 에이전트</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[11px] font-bold text-emerald-600">적극 찬성</span>
                      <ThumbsUp size={14} className="text-emerald-500" />
                    </div>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">CEO 에이전트</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[11px] font-bold text-emerald-600">찬성</span>
                      <CheckCircle2 size={14} className="text-emerald-500" />
                    </div>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">운영 에이전트</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[11px] font-bold text-blue-600">조건부 검토</span>
                      <Info size={14} className="text-blue-500" />
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 mt-6">
                  <button onClick={() => setCurrentView('case_brief')} className="flex-1 py-2 border border-slate-200 text-slate-700 rounded-lg text-sm font-bold bg-white hover:bg-slate-50 transition-colors">보고서 보기</button>
                  <button onClick={() => setCurrentView('agent_room')} className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors">이어서 검토</button>
                </div>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-slate-100">
                <h4 className="font-bold text-slate-800">최근 활동</h4>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-800"><span className="font-bold">CFO 에이전트</span>가 재무 감사 서류를 요청했습니다</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">15분 전</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-800"><span className="font-bold">시스템</span>이 경영진 보고서 v2.1을 생성했습니다</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">2시간 전</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-800"><span className="font-bold">담당자</span>가 리스크 요인 #4에 코멘트를 추가했습니다</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">5시간 전</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-slate-400 mt-1.5 shrink-0"></div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-800"><span className="font-bold">시스템</span>이 외부 시장 데이터를 동기화했습니다</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">어제</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
