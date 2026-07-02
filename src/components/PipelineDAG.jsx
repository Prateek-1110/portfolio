import React from 'react';
import './PipelineDAG.css';

export default function PipelineDAG() {
  return (
    <div className="pipeline-dag-container">
      <svg className="pipeline-dag-svg" viewBox="0 0 1000 350" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--accent-secondary)" />
          </linearGradient>
        </defs>

        {/* Connection Paths (Edges) */}
        {/* Path 1: Ingest (150, 150) -> Transform (320, 80) */}
        <path className="dag-edge" d="M 150 150 C 230 150, 240 80, 320 80" />
        {/* Path 2: Transform (320, 80) -> Embed (500, 220) */}
        <path className="dag-edge" d="M 320 80 C 400 80, 420 220, 500 220" />
        {/* Path 3: Embed (500, 220) -> Retrieve (680, 80) */}
        <path className="dag-edge" d="M 500 220 C 580 220, 600 80, 680 80" />
        {/* Path 4: Retrieve (680, 80) -> Generate (850, 150) */}
        <path className="dag-edge" d="M 680 80 C 760 80, 770 150, 850 150" />

        {/* Nodes */}
        {/* Node 1: Ingest */}
        <g className="dag-node-group">
          <circle cx="150" cy="150" r="14" className="dag-node-outer" />
          <circle cx="150" cy="150" r="6" className="dag-node-inner" />
          <text x="150" y="195" className="dag-node-label">Ingest</text>
        </g>

        {/* Node 2: Transform */}
        <g className="dag-node-group">
          <circle cx="320" cy="80" r="14" className="dag-node-outer" />
          <circle cx="320" cy="80" r="6" className="dag-node-inner" />
          <text x="320" y="125" className="dag-node-label">Transform</text>
        </g>

        {/* Node 3: Embed */}
        <g className="dag-node-group">
          <circle cx="500" cy="220" r="14" className="dag-node-outer" />
          <circle cx="500" cy="220" r="6" className="dag-node-inner" />
          <text x="500" y="265" className="dag-node-label">Embed</text>
        </g>

        {/* Node 4: Retrieve */}
        <g className="dag-node-group">
          <circle cx="680" cy="80" r="14" className="dag-node-outer" />
          <circle cx="680" cy="80" r="6" className="dag-node-inner" />
          <text x="680" y="125" className="dag-node-label">Retrieve</text>
        </g>

        {/* Node 5: Generate */}
        <g className="dag-node-group">
          <circle cx="850" cy="150" r="14" className="dag-node-outer" />
          <circle cx="850" cy="150" r="6" className="dag-node-inner" />
          <text x="850" y="195" className="dag-node-label">Generate</text>
        </g>
      </svg>
    </div>
  );
}
