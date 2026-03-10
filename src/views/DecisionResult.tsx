import React from 'react';
import { BarChart2, Bell, User, ShieldCheck, FileText, Gavel, ThumbsUp, ThumbsDown, AlertCircle, FilePlus } from 'lucide-react';

export default function DecisionResult({ setCurrentView }: { setCurrentView: (view: string) => void }) {
  return (
    <div className="flex-1 flex flex-col min-w-0 bg-slate-50 overflow-y-auto">
      <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 md:px-10 py-3 sticky top-0 z-50 shrink-0">
        <div className="flex items-center gap-4 text-blue-600">
          <div className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-lg">
            <BarChart2 size={20} />
          </div>
          <h2 className="text-blue-600 text-lg font-bold leading-tight tracking-tight">BoardRoom AI</h2>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors">
            <Bell size={20} />
          </button>
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors">
            <User size={20} />
          </button>
        </div>
      </header>

      <div className="py-8 px-6 md:px-10 max-w-[1100px] mx-auto w-full flex flex-col gap-10">
        {/* Hero Title Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-200 pb-5">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-blue-600 font-semibold text-[13px]">
              <ShieldCheck size={16} />
              의장(Chair) 최종 합성 리포트
            </div>
            <h1 className="text-slate-900 text-3xl font-black leading-tight tracking-tight">종합 의사결정 결과</h1>
            <p className="text-slate-500 text-[15px] font-normal">Connected Car Data Platform JV 건에 대한 최종 심의 결과입니다.</p>
          </div>
          <button onClick={() => setCurrentView('board_report')} className="flex items-center justify-center rounded-lg h-11 px-5 bg-slate-900 text-white text-[13px] font-bold hover:bg-slate-800 transition-all shadow-sm gap-2">
            <FileText size={16} />
            <span>Board Report 생성하기</span>
          </button>
        </div>

        {/* Decision Engine Score Section */}
        <section className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Total Score Circle/Gauge */}
            <div className="flex flex-col items-center justify-center min-w-[240px] border-r border-slate-100 pr-12">
              <h3 className="text-slate-400 font-bold text-[11px] uppercase tracking-widest mb-5">Decision Engine Score</h3>
              <div className="relative flex items-center justify-center">
                <svg className="w-40 h-40 transform -rotate-90 filter drop-shadow-sm">
                  <circle className="text-slate-100" cx="80" cy="80" fill="transparent" r="72" stroke="currentColor" strokeWidth="10"></circle>
                  <circle className="text-blue-600" cx="80" cy="80" fill="transparent" r="72" stroke="currentColor" strokeDasharray="452" strokeDashoffset="108.48" strokeLinecap="round" strokeWidth="10"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-black text-slate-900">76</span>
                  <span className="text-slate-400 font-bold text-xs">/ 100</span>
                </div>
              </div>
              <div className="mt-6 px-5 py-2 bg-blue-50 text-blue-600 rounded-full font-bold text-[13px] border border-blue-100 shadow-sm">
                조건부 승인 (Conditional Approval)
              </div>
            </div>

            {/* Sub-scores Bars */}
            <div className="flex-1 flex flex-col justify-center gap-6">
              <div className="space-y-2.5">
                <div className="flex justify-between items-end">
                  <span className="text-slate-800 font-bold text-[13px]">전략적 정합성 (Strategic Alignment)</span>
                  <span className="text-slate-900 font-bold text-[15px]">85</span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden shadow-inner">
                  <div className="bg-gradient-to-r from-slate-900 to-blue-600 h-full rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="flex justify-between items-end">
                  <span className="text-slate-800 font-bold text-[13px]">시장 잠재력 (Market Potential)</span>
                  <span className="text-slate-900 font-bold text-[15px]">92</span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden shadow-inner">
                  <div className="bg-gradient-to-r from-slate-900 to-blue-600 h-full rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="flex justify-between items-end">
                  <span className="text-slate-800 font-bold text-[13px]">재무적 수익성 (Financial Return)</span>
                  <span className="text-slate-900 font-bold text-[15px]">64</span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden shadow-inner">
                  <div className="bg-gradient-to-r from-slate-900 to-blue-600 h-full rounded-full" style={{ width: '64%' }}></div>
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="flex justify-between items-end">
                  <span className="text-slate-800 font-bold text-[13px]">리스크 수준 (Risk Level)</span>
                  <span className="text-slate-900 font-bold text-[15px]">58</span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden shadow-inner">
                  <div className="bg-slate-300 h-full rounded-full" style={{ width: '58%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Recommendation */}
        <section className="flex flex-col gap-3">
          <h2 className="text-slate-900 text-xl font-bold flex items-center gap-2">
            <Gavel className="text-slate-900" size={20} />
            의장 최종 권고안 (Chair's Summary)
          </h2>
          <div className="relative bg-slate-900 text-white p-8 rounded-2xl shadow-lg border border-slate-800 overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600"></div>
            <span className="absolute top-4 right-6 text-5xl text-white/10 select-none font-serif">"</span>
            <p className="text-[15px] font-medium leading-relaxed italic relative z-10">
              "CFO와 Strategy의 의견이 팽팽하게 대립하였으나, 미래 모빌리티 시장에서의 데이터 주도권 확보가 최우선 과제라는 점에 모든 위원이 동의하였습니다. 다만, 초기 막대한 자본 투입 대비 재무적 회수 기간이 불확실하다는 CFO의 우려를 반영하여, 단계적 투자를 전제로 한 '조건부 승인'을 최종 결정합니다. JV 설립 후 1년 내 가시적인 트래픽 확보와 데이터 수익화 모델의 검증이 필수적입니다."
            </p>
          </div>
        </section>

        {/* Core Issues & Pros/Cons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Core Issues */}
          <div className="flex flex-col gap-3">
            <h3 className="text-slate-900 text-lg font-bold border-b border-slate-200 pb-2">핵심 쟁점 사항 (Core Issues)</h3>
            <div className="space-y-2.5">
              <div className="flex gap-3 p-3 bg-white rounded-lg border border-slate-200">
                <span className="bg-slate-100 text-slate-500 w-7 h-7 flex items-center justify-center rounded-full font-bold text-[11px] shrink-0">01</span>
                <div>
                  <p className="font-bold text-slate-900 text-[14px]">데이터 소유권 및 거버넌스</p>
                  <p className="text-slate-500 text-[13px] mt-0.5">JV 파트너사 간의 원천 데이터 사용권 범위 및 고객 개인정보 보호 책임 소재의 불명확성</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 bg-white rounded-lg border border-slate-200">
                <span className="bg-slate-100 text-slate-500 w-7 h-7 flex items-center justify-center rounded-full font-bold text-[11px] shrink-0">02</span>
                <div>
                  <p className="font-bold text-slate-900 text-[14px]">BEP 달성 시점 지연 리스크</p>
                  <p className="text-slate-500 text-[13px] mt-0.5">인프라 구축 비용 증가로 인한 손익분기점 예상 시점이 기존 3년에서 5년으로 연기될 가능성</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 bg-white rounded-lg border border-slate-200">
                <span className="bg-slate-100 text-slate-500 w-7 h-7 flex items-center justify-center rounded-full font-bold text-[11px] shrink-0">03</span>
                <div>
                  <p className="font-bold text-slate-900 text-[14px]">핵심 인력 확보 및 유지</p>
                  <p className="text-slate-500 text-[13px] mt-0.5">글로벌 테크 기업들과의 데이터 사이언티스트 확보 경쟁 및 인건비 상승에 따른 운영 부담</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pros & Cons */}
          <div className="flex flex-col gap-3">
            <h3 className="text-slate-900 text-lg font-bold border-b border-slate-200 pb-2">찬성 vs 반대 논거</h3>
            <div className="grid grid-cols-2 gap-3 h-full">
              <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                <div className="flex items-center gap-1.5 text-blue-700 font-bold mb-2.5 text-[14px]">
                  <ThumbsUp size={14} />
                  찬성 논거
                </div>
                <ul className="text-[13px] space-y-2.5 text-slate-700">
                  <li className="flex gap-1.5 leading-snug"><span className="text-blue-500">•</span> 독자적 커넥티드 카 생태계 구축의 필수적 발판</li>
                  <li className="flex gap-1.5 leading-snug"><span className="text-blue-500">•</span> 경쟁사 대비 데이터 선점 효과 (First-mover Advantage)</li>
                  <li className="flex gap-1.5 leading-snug"><span className="text-blue-500">•</span> 중장기 서비스 매출 비중 확대 전략 부합</li>
                </ul>
              </div>
              <div className="bg-red-50/50 p-4 rounded-lg border border-red-100">
                <div className="flex items-center gap-1.5 text-red-700 font-bold mb-2.5 text-[14px]">
                  <ThumbsDown size={14} />
                  반대 논거
                </div>
                <ul className="text-[13px] space-y-2.5 text-slate-700">
                  <li className="flex gap-1.5 leading-snug"><span className="text-red-500">•</span> 거대 자본 투입 대비 단기 ROI의 현저한 부족</li>
                  <li className="flex gap-1.5 leading-snug"><span className="text-red-500">•</span> 글로벌 규제 환경(GDPR 등) 변화에 따른 법적 리스크</li>
                  <li className="flex gap-1.5 leading-snug"><span className="text-red-500">•</span> 파트너사와의 문화적 차이 및 운영 효율 저하 우려</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Execution Conditions */}
        <section className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-900 px-6 py-4">
            <h3 className="text-white font-bold flex items-center gap-2 text-[15px]">
              <AlertCircle className="text-blue-600" size={18} />
              승인 이행 조건 (Execution Conditions)
            </h3>
          </div>
          <div className="p-0">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-[11px] font-bold uppercase tracking-wider">
                  <th className="py-3 px-6 border-b border-slate-100">항목</th>
                  <th className="py-3 px-6 border-b border-slate-100">세부 이행 내용</th>
                  <th className="py-3 px-6 border-b border-slate-100 text-right">기한</th>
                </tr>
              </thead>
              <tbody className="text-[13px]">
                <tr className="group hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-800 border-b border-slate-100">투자 단계화</td>
                  <td className="py-4 px-6 text-slate-600 border-b border-slate-100">초기 50% 집행 후, KPI 달성 여부에 따라 잔여 50% 집행 여부 재심의</td>
                  <td className="py-4 px-6 text-blue-600 font-bold italic border-b border-slate-100 text-right">JV 설립 + 12개월</td>
                </tr>
                <tr className="group hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-800 border-b border-slate-100">데이터 보안 강화</td>
                  <td className="py-4 px-6 text-slate-600 border-b border-slate-100">독립적인 외부 보안 감사를 통한 데이터 보호 체계 승인 획득 필수</td>
                  <td className="py-4 px-6 text-blue-600 font-bold italic border-b border-slate-100 text-right">서비스 런칭 전</td>
                </tr>
                <tr className="group hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-800">수익 모델 확정</td>
                  <td className="py-4 px-6 text-slate-600">광고 및 구독 외에 B2B 데이터 판매 수익 비중 20% 이상 확보 방안 수립</td>
                  <td className="py-4 px-6 text-blue-600 font-bold italic text-right">JV 설립 + 6개월</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer Action */}
        <div className="flex justify-center pt-2 pb-10">
          <button onClick={() => setCurrentView('board_report')} className="flex items-center justify-center rounded-lg h-12 px-8 bg-slate-900 text-white text-[15px] font-bold hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1 gap-2.5">
            <FilePlus size={20} />
            Board Report 최종 확정 및 생성
          </button>
        </div>
      </div>

      <footer className="border-t border-slate-200 bg-white py-8 px-10 mt-auto">
        <div className="max-w-[1024px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>© 2024 BoardRoom AI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">이용약관</a>
            <a href="#" className="hover:text-slate-900 transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-slate-900 transition-colors">고객지원</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
