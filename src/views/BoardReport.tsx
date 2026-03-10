import React from 'react';
import { FileText, Download, Printer, Share2, FileSignature, CheckCircle2, Building2, TrendingUp, ShieldAlert, FileSearch } from 'lucide-react';

export default function BoardReport({ setCurrentView }: { setCurrentView: (view: string) => void }) {
  return (
    <div className="flex-1 flex flex-col min-w-0 bg-slate-100 overflow-y-auto">
      <header className="flex items-center justify-between border-b border-slate-200 bg-white px-8 py-4 sticky top-0 z-50 shrink-0 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center bg-slate-900 text-white rounded-xl shadow-md">
            <FileText size={20} />
          </div>
          <div>
            <h2 className="text-slate-900 text-xl font-black leading-tight tracking-tight">이사회 보고서 (Board Report)</h2>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-0.5">Final Document</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors shadow-sm gap-2 text-sm font-bold">
            <Printer size={16} />
            인쇄
          </button>
          <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors shadow-sm gap-2 text-sm font-bold">
            <Share2 size={16} />
            공유
          </button>
          <button className="flex items-center justify-center rounded-lg h-10 px-5 bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-md gap-2 text-sm font-bold">
            <Download size={16} />
            PDF 다운로드
          </button>
        </div>
      </header>

      <div className="py-12 px-4 md:px-10 max-w-[1024px] mx-auto w-full">
        {/* Document Container */}
        <div className="bg-white rounded-sm shadow-2xl border border-slate-200 overflow-hidden min-h-[1122px] relative">
          {/* Document Header (Letterhead style) */}
          <div className="px-16 pt-16 pb-8 border-b-4 border-slate-900 flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">이사회 결의 안건</h1>
              <p className="text-slate-500 font-serif italic text-lg">Board of Directors Resolution Proposal</p>
            </div>
            <div className="text-right">
              <p className="text-slate-900 font-bold text-sm mb-1">문서번호: BR-2024-05-001</p>
              <p className="text-slate-500 text-sm">작성일자: 2024.05.22</p>
              <p className="text-slate-500 text-sm">작성부서: 전략기획실 (AI 검토)</p>
            </div>
          </div>

          <div className="px-16 py-12 space-y-12">
            {/* 1. 안건명 */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm">1</span>
                안건명 (Agenda)
              </h2>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <p className="text-lg font-bold text-slate-900">커넥티드카 데이터 플랫폼 구축을 위한 Joint Venture 설립 및 출자 승인의 건</p>
              </div>
            </section>

            {/* 2. 제안 사유 */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm">2</span>
                제안 사유 (Background & Purpose)
              </h2>
              <div className="text-slate-700 leading-relaxed text-justify space-y-4">
                <p>당사의 중장기 비전인 '스마트 모빌리티 솔루션 프로바이더'로의 도약을 위해, 차량 내 생성되는 방대한 데이터의 수집, 분석, 가공 및 수익화를 전담할 전문 플랫폼 구축이 시급합니다.</p>
                <p>이에 글로벌 클라우드 선도 기업인 TechCorp와의 합작법인(JV)을 설립하여, 당사의 모빌리티 하드웨어 역량과 TechCorp의 데이터 처리/AI 기술력을 결합함으로써 시장 내 압도적인 경쟁 우위를 조기 확보하고자 합니다.</p>
              </div>
            </section>

            {/* 3. 주요 내용 */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm">3</span>
                주요 내용 (Key Details)
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="border border-slate-200 rounded-lg p-5">
                  <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Building2 size={18} className="text-blue-600" />
                    JV 설립 개요
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-500">법인명(가칭)</span>
                      <span className="font-bold">Mobility Data Works Inc.</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-500">자본금</span>
                      <span className="font-bold">USD 100 Million</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-500">지분 구조</span>
                      <span className="font-bold">당사 51% : TechCorp 49%</span>
                    </li>
                    <li className="flex justify-between pb-1">
                      <span className="text-slate-500">설립 예정일</span>
                      <span className="font-bold">2024년 3분기 내</span>
                    </li>
                  </ul>
                </div>
                <div className="border border-slate-200 rounded-lg p-5">
                  <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <TrendingUp size={18} className="text-blue-600" />
                    출자 계획 및 재무 전망
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-500">당사 출자액</span>
                      <span className="font-bold text-blue-600">USD 51 Million</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-500">자금 조달</span>
                      <span className="font-bold">사내 유보금 활용</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-500">BEP 예상 시점</span>
                      <span className="font-bold">설립 후 4년 차 (2028년)</span>
                    </li>
                    <li className="flex justify-between pb-1">
                      <span className="text-slate-500">5년 후 예상 매출</span>
                      <span className="font-bold">USD 350 Million</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. AI 위원회 심의 결과 요약 */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm">4</span>
                AI 위원회 심의 결과 요약 (AI Committee Review)
              </h2>
              <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-blue-200/50">
                  <div className="flex items-center gap-2">
                    <FileSearch size={20} className="text-blue-700" />
                    <span className="font-bold text-blue-900">종합 평가: 조건부 승인 (Score: 76/100)</span>
                  </div>
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">AI Verified</span>
                </div>
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                      주요 긍정 요인 (Pros)
                    </h4>
                    <ul className="space-y-1.5 text-slate-700 list-disc list-inside">
                      <li>미래 모빌리티 생태계 주도권 확보 필수</li>
                      <li>TechCorp와의 협력을 통한 Time-to-Market 단축</li>
                      <li>구독형 B2B 비즈니스 모델을 통한 안정적 수익 창출 기대</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <ShieldAlert size={16} className="text-amber-600" />
                      주요 리스크 및 조건 (Risks & Conditions)
                    </h4>
                    <ul className="space-y-1.5 text-slate-700 list-disc list-inside">
                      <li>초기 대규모 투자 대비 불확실한 회수 기간 (단계적 투자 집행 조건 부여)</li>
                      <li>데이터 보안 및 프라이버시 규제 리스크 (독립적 보안 감사 필수)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. 결의 사항 */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm">5</span>
                결의 사항 (Resolution)
              </h2>
              <div className="p-6 border-2 border-slate-900 rounded-lg bg-slate-50">
                <p className="text-lg font-bold text-slate-900 text-center leading-relaxed">
                  "상기 '커넥티드카 데이터 플랫폼 구축을 위한 Joint Venture 설립 및 출자 승인의 건'을<br/>원안대로 승인함."
                </p>
              </div>
            </section>
          </div>

          {/* Signatures */}
          <div className="px-16 pb-24 pt-12 mt-auto">
            <div className="flex justify-end gap-12">
              <div className="text-center">
                <p className="text-slate-500 text-sm mb-8">대표이사 (CEO)</p>
                <div className="w-40 border-b border-slate-400 relative">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-slate-300">
                    <FileSignature size={32} />
                  </span>
                </div>
                <p className="text-slate-900 font-bold mt-2">(인)</p>
              </div>
              <div className="text-center">
                <p className="text-slate-500 text-sm mb-8">이사회 의장 (Chairman)</p>
                <div className="w-40 border-b border-slate-400 relative">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-slate-300">
                    <FileSignature size={32} />
                  </span>
                </div>
                <p className="text-slate-900 font-bold mt-2">(인)</p>
              </div>
            </div>
          </div>

          {/* Watermark */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03] overflow-hidden">
            <span className="text-[150px] font-black text-slate-900 transform -rotate-45 select-none whitespace-nowrap">BOARDROOM AI</span>
          </div>
        </div>
      </div>
    </div>
  );
}
