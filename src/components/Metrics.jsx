import React from 'react'

const METRICS = [
  {
    value: "3M+",
    label: "Geospatial Records Ingested",
    context: "Traffic Accident Hotspot Analyzer ETL pipeline"
  },
  {
    value: "92%",
    label: "Semantic Segmentation Accuracy",
    context: "SAR Oil Spill Detection DeepLabV3 model"
  },
  {
    value: "5+",
    label: "End-to-End AI/Data Pipelines",
    context: "Built for ingestion, deduplication, translation & evaluation"
  },
  {
    value: "1,300+",
    label: "Algorithmic Problems Solved",
    context: "Across LeetCode, GFG, Codeforces, and CodeChef"
  },
  {
    value: "1962",
    label: "Peak LeetCode Rating (Knight)",
    context: "Top 4% globally among active competitors"
  },
  {
    value: "7.63/10",
    label: "Cumulative GPA",
    context: "IIT Jodhpur (B.Tech Bioscience & AI Minor)"
  }
]

export default function Metrics() {
  return (
    <section id="metrics">
      <h2 className="section-title">High-Impact Metrics</h2>
      <div className="metrics-grid">
        {METRICS.map((item, idx) => (
          <div className="metric-card" key={idx}>
            <div className="metric-value">{item.value}</div>
            <div className="metric-label">{item.label}</div>
            <div className="metric-context">{item.context}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
