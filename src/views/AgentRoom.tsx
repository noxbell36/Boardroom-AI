import React from 'react';
import { Users, Settings, User, Send, Info } from 'lucide-react';

export default function AgentRoom({ setCurrentView }: { setCurrentView: (view: string) => void }) {
  return (
    <div className="flex-1 flex flex-col min-w-0 bg-white overflow-hidden">
      <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-8 shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 text-sm">에이전트 룸</span>
          <span className="text-slate-300 text-sm">{'>'}</span>
          <span className="font-semibold text-slate-900">CSO (전략팀장) 인터뷰</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-slate-500 hover:text-slate-800 transition-colors">
            <Settings size={20} />
          </button>
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
            <User size={18} className="text-slate-600" />
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Agent Selection & Status (Left Side) */}
        <div className="w-96 border-r border-slate-200 bg-white overflow-y-auto p-6 flex flex-col">
          <h2 className="text-sm font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Users size={18} className="text-blue-600" />
            전문가 위원회
          </h2>
          
          <div className="space-y-4">
            {/* CFO Card */}
            <div className="group relative p-4 rounded-xl border border-slate-200 bg-slate-50 opacity-80 hover:bg-white hover:shadow-sm transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-2xl">📊</div>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded">검토 완료</span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm">CFO (재무이사)</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">ROI, 회수 기간, 유동성 및 재무 리스크 분석</p>
            </div>
            
            {/* CSO Card (Active) */}
            <div className="group relative p-4 rounded-xl border-2 border-blue-600 bg-white shadow-md ring-4 ring-blue-600/5 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-2xl">🎯</div>
                <span className="px-2 py-1 bg-blue-600 text-white text-[10px] font-bold rounded">진행 중</span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm">CSO (전략팀장)</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">전략적 적합성 및 시장 타이밍, 경쟁 우위 확보</p>
            </div>
            
            {/* CEO Card */}
            <div className="group relative p-4 rounded-xl border border-slate-100 bg-white hover:border-slate-300 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-2xl">🏢</div>
                <span className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded">대기 중</span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm">CEO (최고경영자)</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">장기 비전, 브랜드 가치 및 조직 역량 정렬</p>
            </div>
            
            {/* COO Card */}
            <div className="group relative p-4 rounded-xl border border-slate-100 bg-white hover:border-slate-300 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-2xl">⚙️</div>
                <span className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded">대기 중</span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm">COO (운영/리스크)</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">실행 가능성, 운영 프로세스 및 실무적 허들</p>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-slate-100">
            <div className="mb-4">
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">심의 진행률</span>
                <span className="text-sm font-bold text-blue-600">25%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600" style={{ width: '25%' }}></div>
              </div>
              <p className="text-[11px] text-slate-400 mt-2 italic">4명 중 1명 검토 완료</p>
            </div>
            <button className="w-full py-2.5 px-4 bg-slate-200 text-slate-400 font-medium text-sm rounded-lg cursor-not-allowed transition-all" disabled>
              의장에게 종합 결론 요청
            </button>
          </div>
        </div>

        {/* Chat Interface (Center/Right) */}
        <div className="flex-1 flex flex-col bg-slate-50/50">
          {/* Chat Content */}
          <div className="flex-1 overflow-y-auto px-12 py-10 space-y-10">
            {/* Agent Message */}
            <div className="flex gap-5 max-w-4xl">
              <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🎯</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-slate-900">CSO 최 팀장</span>
                  <span className="text-[10px] text-slate-400">오후 2:14</span>
                </div>
                <div className="bg-white border border-slate-200 p-5 rounded-xl rounded-tl-none shadow-sm text-[15px] leading-relaxed text-slate-700">
                  반갑습니다. 현재 검토 중인 글로벌 시장 진출 건에 대해 전략적 타당성을 확인하고 싶습니다. <br/><br/>
                  특히 당사의 핵심 역량이 경쟁사인 A사 대비 어떠한 차별화 포인트를 가질 수 있는지, 그리고 현재의 거시 경제 상황에서 진입 타이밍이 적절하다고 판단하시는지 구체적인 근거를 듣고 싶군요.
                </div>
              </div>
            </div>

            {/* User Message */}
            <div className="flex gap-5 max-w-4xl ml-auto justify-end">
              <div className="space-y-2 text-right">
                <div className="flex items-center gap-2 justify-end">
                  <span className="text-[10px] text-slate-400">오후 2:16</span>
                  <span className="font-bold text-sm text-slate-900">의장 (나)</span>
                </div>
                <div className="bg-blue-600 text-white p-5 rounded-xl rounded-tr-none shadow-sm text-[15px] leading-relaxed text-left">
                  A사와 비교했을 때 우리는 현지 물류 네트워크의 효율성이 20% 높습니다. 이는 초기 시장 진입 시 가격 경쟁력을 확보하는 데 결정적인 요인이 될 것입니다.
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0 text-white">
                <User size={20} />
              </div>
            </div>

            {/* Agent Message 2 */}
            <div className="flex gap-5 max-w-4xl">
              <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🎯</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-slate-900">CSO 최 팀장</span>
                  <span className="text-[10px] text-slate-400">오후 2:17</span>
                </div>
                <div className="bg-white border border-slate-200 p-5 rounded-xl rounded-tl-none shadow-sm text-[15px] leading-relaxed text-slate-700">
                  물류 효율성은 단기적인 이점이 될 수 있습니다. 하지만 장기적 관점에서 현지 업체들의 추격이나 규제 변화에 대한 대응 전략은 어떻게 준비되어 있습니까? 전략적 유연성이 확보되지 않은 투자는 리스크가 큽니다.
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-8 bg-white border-t border-slate-200">
            {/* Recommended Questions */}
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
              <button className="flex-shrink-0 px-4 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 rounded-full text-xs font-medium transition-colors">
                "전략적 적합성에 대한 리스크는?"
              </button>
              <button className="flex-shrink-0 px-4 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 rounded-full text-xs font-medium transition-colors">
                "글로벌 확장 가능성에 대한 의견은?"
              </button>
              <button className="flex-shrink-0 px-4 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 rounded-full text-xs font-medium transition-colors">
                "경쟁사 대비 우리의 우위 요소 정리"
              </button>
            </div>

            {/* Main Input */}
            <div className="relative">
              <textarea 
                className="w-full pl-6 pr-16 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 resize-none text-base placeholder:text-slate-400 transition-all shadow-inner outline-none" 
                placeholder="CSO에게 질문하거나 의견을 전달하세요..." 
                rows={1}
              ></textarea>
              <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-all shadow-md shadow-blue-600/20">
                <Send size={18} />
              </button>
            </div>

            <div className="mt-3 flex justify-between items-center">
              <div className="flex items-center gap-2 text-slate-400">
                <Info size={14} />
                <p className="text-[11px]">답변은 AI에 의해 생성되며, 각 에이전트의 역할론적 관점이 반영됩니다.</p>
              </div>
              <button onClick={() => setCurrentView('decision')} className="text-xs font-bold text-blue-600 hover:underline">인터뷰 종료 및 저장</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
