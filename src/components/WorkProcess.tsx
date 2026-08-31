import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Compass,
  Search,
  Layers,
  Palette,
  Code2,
  Zap,
  TrendingUp,
  Target,
  Rocket,
  BarChart3,
  BrainCircuit,
  MapPin,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { WorkProcessStep } from '../types';

export const WorkProcess: React.FC = () => {
  const { workProcess } = usePortfolio();
  const [activeStep, setActiveStep] = useState<string>('01');

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return Compass;
      case 'Search':
        return Search;
      case 'Layers':
        return Layers;
      case 'Palette':
        return Palette;
      case 'BrainCircuit':
        return BrainCircuit;
      case 'Code2':
        return Code2;
      case 'Zap':
        return Zap;
      case 'MapPin':
        return MapPin;
      case 'TrendingUp':
        return TrendingUp;
      case 'Target':
        return Target;
      case 'Rocket':
        return Rocket;
      case 'BarChart3':
        return BarChart3;
      default:
        return Sparkles;
    }
  };

  return (
    <section
      id="process"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/80 border-t border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Methodology & Roadmap</span>
          </div>

          <h2
            id="process-section-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4"
          >
            The 10-Step Organic Dominance Framework
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A battle-tested, data-driven blueprint that bridges technical precision, local authority, AI answer engine citations, and continuous search scalability.
          </p>
        </div>

        {/* 10-Step Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {workProcess.map((step: WorkProcessStep) => {
            const IconComp = getStepIcon(step.icon);
            const isActive = activeStep === step.stepNumber;
            return (
              <div
                key={step.stepNumber}
                id={`process-step-${step.stepNumber}`}
                onClick={() => setActiveStep(step.stepNumber)}
                onMouseEnter={() => setActiveStep(step.stepNumber)}
                className={`cursor-pointer relative p-5 rounded-2xl border transition-all duration-300 backdrop-blur-md flex flex-col justify-between ${
                  isActive
                    ? 'bg-slate-900 border-emerald-500 shadow-xl shadow-emerald-500/10 -translate-y-1'
                    : 'bg-slate-900/40 border-white/5 hover:border-white/20 hover:bg-slate-900/70'
                }`}
              >
                <div>
                  {/* Top: Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xl font-heading font-extrabold font-mono transition-colors ${
                        isActive ? 'text-emerald-400' : 'text-slate-600'
                      }`}
                    >
                      {step.stepNumber}
                    </span>

                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-emerald-500 text-slate-950 shadow-md'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Step Name & Title */}
                  <div className="mb-2">
                    <div
                      className={`text-[10px] font-mono font-bold tracking-widest uppercase mb-1 ${
                        isActive ? 'text-emerald-400' : 'text-slate-400'
                      }`}
                    >
                      {step.name}
                    </div>
                    <h3 className="font-heading font-bold text-sm text-white leading-snug">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables summary tag */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    {step.estimatedDuration}
                  </span>
                  <ChevronRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isActive ? 'text-emerald-400 translate-x-1' : 'text-slate-600'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Expanded Focus Detail Banner for Currently Selected Step */}
        {(() => {
          const current = workProcess.find((s) => s.stepNumber === activeStep) || workProcess[0];
          const CurrentIcon = getStepIcon(current.icon);
          return (
            <div
              id="active-step-details-banner"
              className="mt-8 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/30 backdrop-blur-xl shadow-2xl animate-in fade-in duration-300 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 shadow-lg">
                  <CurrentIcon className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    STEP {current.stepNumber} — {current.name}
                  </div>
                  <h4 className="font-heading font-bold text-xl sm:text-2xl text-white mt-0.5">
                    {current.title}
                  </h4>
                  <p className="text-slate-300 text-sm mt-2 max-w-3xl leading-relaxed">
                    {current.description}
                  </p>
                </div>
              </div>

              {/* Deliverables checklist */}
              <div className="w-full lg:w-auto lg:min-w-[320px] p-4 rounded-2xl bg-slate-950/80 border border-white/10 shrink-0">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold mb-2">
                  Key Deliverables:
                </div>
                <div className="space-y-1.5">
                  {current.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
