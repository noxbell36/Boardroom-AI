import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './views/Dashboard';
import NewCase from './views/NewCase';
import CaseBrief from './views/CaseBrief';
import AgentRoom from './views/AgentRoom';
import DecisionResult from './views/DecisionResult';
import BoardReport from './views/BoardReport';

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard setCurrentView={setCurrentView} />;
      case 'new_case':
        return <NewCase setCurrentView={setCurrentView} />;
      case 'case_brief':
        return <CaseBrief setCurrentView={setCurrentView} />;
      case 'agent_room':
        return <AgentRoom setCurrentView={setCurrentView} />;
      case 'decision':
        return <DecisionResult setCurrentView={setCurrentView} />;
      case 'board_report':
        return <BoardReport setCurrentView={setCurrentView} />;
      default:
        return <Dashboard setCurrentView={setCurrentView} />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-slate-50 font-sans text-slate-900 overflow-hidden">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      {renderView()}
    </div>
  );
}
