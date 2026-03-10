import React from 'react';
import { Download, ArrowRight, Calendar, User, ShieldCheck, Network, TrendingUp, Handshake, Gavel, Users, CheckCircle2, Rocket } from 'lucide-react';

export default function CaseBrief({ setCurrentView }: { setCurrentView: (view: string) => void }) {
  return (
    <div className="flex-1 flex flex-col min-w-0 bg-slate-50 overflow-y-auto">
      <header className="flex items-center justify-between bg-white border-b border-slate-200 px-8 py-4 sticky top-0 z-20 shrink-0">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded">AI Analysis Complete</span>
            <span className="text-xs text-slate-500">Claude AI에 의해 생성된 보고서입니다.</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">AI Case Brief</h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
            <Download size={18} />
            PDF 다운로드
          </button>
          <button onClick={() => setCurrentView('agent_room')} className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors shadow-sm">
            위원회 시작하기
            <ArrowRight size={18} />
          </button>
        </div>
      </header>

      <div className="p-8 max-w-5xl mx-auto w-full">
        {/* Brief Content Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-8 border-b border-slate-100 bg-slate-50/50">
            <p className="text-[13px] font-bold text-slate-500 mb-2">투자 프로젝트명</p>
            <h1 className="text-2xl font-black text-slate-900">커넥티드카 데이터 플랫폼 JV (Joint Venture)</h1>
            <div className="flex gap-4 mt-4">
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <Calendar size={14} />
                작성일: 2024년 5월 22일
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <User size={14} />
                작성자: BoardRoom AI Engine
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <ShieldCheck size={14} />
                보안등급: 대외비
              </div>
            </div>
          </div>

          <div className="p-8 space-y-10">
            {/* 1. Market Overview */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="flex items-center justify-center w-7 h-7 bg-blue-50 text-blue-600 rounded-lg font-bold text-sm">1</span>
                <h3 className="text-lg font-bold text-slate-900">시장 개요 (Market Overview)</h3>
              </div>
              <div className="text-slate-700 leading-relaxed text-[15px]">
                <p className="mb-4">현재 글로벌 커넥티드카 시장은 연평균 18% 이상의 고성장을 기록하고 있으며, 2028년까지 약 1,200억 달러 규모로 확대될 전망입니다. 특히 차량 내 데이터 활용을 통한 수익화(Data Monetization) 모델이 OEM 제조사들의 핵심 차별화 요소로 부상하고 있습니다.</p>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tight mb-1">CAGR (2023-28)</p>
                    <p className="text-2xl font-black text-blue-600">18.4%</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tight mb-1">Target Market Size</p>
                    <p className="text-2xl font-black text-blue-600">$120B</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tight mb-1">Data Volume Growth</p>
                    <p className="text-2xl font-black text-blue-600">45% <span className="text-[15px] font-bold">YoY</span></p>
                  </div>
                </div>
                <p>주요 완성차 업체들은 단순 하드웨어 판매를 넘어 소프트웨어 정의 차량(SDV)으로의 전환을 서두르고 있으며, 이에 따라 차량 데이터 보안 및 실시간 처리 기술에 대한 수요가 급증하고 있는 상황입니다.</p>
              </div>
            </section>

            {/* 2. Strategic Rationale */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="flex items-center justify-center w-7 h-7 bg-blue-50 text-blue-600 rounded-lg font-bold text-sm">2</span>
                <h3 className="text-lg font-bold text-slate-900">전략적 근거 (Strategic Rationale)</h3>
              </div>
              <div className="grid grid-cols-3 gap-5">
                <div className="flex flex-col gap-3 p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <Network size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1.5 text-[15px]">생태계 선점 효과</h4>
                    <p className="text-[13px] text-slate-600 leading-relaxed">데이터 표준화 인터페이스를 선점함으로써 타 OEM 및 서드파티 서비스 업체를 플랫폼으로 유입.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white transition-all">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1.5 text-[15px]">신규 수익원 창출</h4>
                    <p className="text-[13px] text-slate-600 leading-relaxed">보험, 충전 정보 등 B2B SaaS 모델 구축을 통해 예측 가능한 구독형 매출 확보 가능.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white transition-all">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Handshake size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1.5 text-[15px]">파트너십 시너지</h4>
                    <p className="text-[13px] text-slate-600 leading-relaxed">당사 자본과 타겟 기업 기술 결합으로 시장 진입 시간(Time-to-Market) 2년 단축.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Key Risks */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="flex items-center justify-center w-7 h-7 bg-blue-50 text-blue-600 rounded-lg font-bold text-sm">3</span>
                <h3 className="text-lg font-bold text-slate-900">핵심 리스크 (Key Risks)</h3>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="p-5 border border-red-100 bg-red-50/30 rounded-2xl">
                  <div className="flex items-center gap-3 mb-2.5 text-red-700">
                    <div className="w-7 h-7 bg-red-100 rounded-lg flex items-center justify-center">
                      <Gavel size={16} />
                    </div>
                    <h4 className="font-bold text-[15px]">규제 및 법적 리스크</h4>
                  </div>
                  <p className="text-[13px] text-slate-600 leading-relaxed">각국 정부의 개인정보 보호법(GDPR 등) 강화에 따른 데이터 국외 이전 및 활용에 대한 규제 불확실성 상존.</p>
                </div>
                <div className="p-5 border border-amber-100 bg-amber-50/30 rounded-2xl">
                  <div className="flex items-center gap-3 mb-2.5 text-amber-700">
                    <div className="w-7 h-7 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Users size={16} />
                    </div>
                    <h4 className="font-bold text-[15px]">통합 및 운영 리스크</h4>
                  </div>
                  <p className="text-[13px] text-slate-600 leading-relaxed">서로 다른 기업 문화 및 IT 인프라 통합 과정에서 발생하는 비용 상승 및 전문 인력 이탈 가능성.</p>
                </div>
              </div>
            </section>

            {/* 4. Key Assumptions */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="flex items-center justify-center w-7 h-7 bg-blue-50 text-blue-600 rounded-lg font-bold text-sm">4</span>
                <h3 className="text-lg font-bold text-slate-900">핵심 가정 (Key Assumptions)</h3>
              </div>
              <ul className="grid grid-cols-2 gap-x-10 gap-y-3">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-[14px] text-slate-700 leading-snug">향후 3년 내 커넥티드 서비스 가입 비중이 전체 출고 차량의 65%를 초과할 것임.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-[14px] text-slate-700 leading-snug">비식별 처리된 차량 위치 및 주행 데이터의 상업적 활용 법적 합의 유지.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-[14px] text-slate-700 leading-snug">클라우드 서버 비용 절감을 위한 엣지 컴퓨팅 기술의 계획적 확보.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-[14px] text-slate-700 leading-snug">주요 보험사들과의 데이터 연동 API 협력이 하반기 내에 체결될 것임.</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Bottom CTA */}
          <div className="p-8 bg-slate-50 flex flex-col items-center gap-4 text-center border-t border-slate-100">
            <div className="max-w-md">
              <p className="text-slate-900 font-bold mb-1.5">분석 보고서 검토를 완료하셨습니까?</p>
              <p className="text-[13px] text-slate-500 mb-5 leading-relaxed">다음 단계는 위원회 심사입니다. 심사 일정을 확정하고 관련 문서를 위원들에게 배포하려면 아래 버튼을 클릭하세요.</p>
            </div>
            <button onClick={() => setCurrentView('agent_room')} className="flex items-center gap-2.5 px-6 py-2.5 bg-slate-900 text-white rounded-lg text-[15px] font-bold hover:bg-slate-800 transition-all shadow-md transform hover:-translate-y-1">
              위원회 시작하기
              <Rocket size={18} />
            </button>
            <p className="text-[11px] text-slate-400">BoardRoom AI는 투자 결정의 보조 수단이며 최종 결정권은 사용자에게 있습니다.</p>
          </div>
        </div>

        <footer className="mt-8 pb-12 text-center text-slate-400 text-xs">
          © 2024 BoardRoom AI. All rights reserved. Professional Intelligence Powered by Claude 3.5.
        </footer>
      </div>
    </div>
  );
}
