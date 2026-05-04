import{e}from"./iframe-W4Sx2LmA.js";import{R as i}from"./arrayEqualityCheck-nt69rbNg.js";import{C as p}from"./ComposedChart-DVlgHodQ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-SQjSoYdb.js";import{X as s}from"./XAxis-Do-NADlR.js";import{Y as c}from"./YAxis-DWdWWCmD.js";import{L as d}from"./Line-s9XItNsd.js";import{R as g}from"./ReferenceLine-CdbW2ThT.js";import{R as f}from"./RechartsHookInspector-Ft4_PiAb.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-2Cae6Gg7.js";import"./immer-B5uHt3-v.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-V_uqMe0M.js";import"./index-C0P2H7BI.js";import"./hooks-Dtno9pbE.js";import"./axisSelectors-CLSq_PV7.js";import"./d3-scale-Cc2KV_M4.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-B4A5_8Yi.js";import"./renderedTicksSlice-dCK1eX84.js";import"./CartesianChart-v8Cliy-Y.js";import"./chartDataContext-D35ia9Nl.js";import"./CategoricalChart-BDjWSCBE.js";import"./CartesianAxis-QtM7KOVk.js";import"./Layer-BaLfWC67.js";import"./Text-CLwKs2sm.js";import"./DOMUtils-D7MEc4ch.js";import"./Label-aDrplQOD.js";import"./ZIndexLayer-Icro7Prq.js";import"./types-C7u7ujMp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BQ0Kb0jt.js";import"./step-01ontriS.js";import"./AnimatedItems-ORWSBWd2.js";import"./useAnimationId-BhZqgZTb.js";import"./ActivePoints-C0fyqzJF.js";import"./Dot-BiRIcMlM.js";import"./RegisterGraphicalItemId-CmKLmlaQ.js";import"./ErrorBarContext-y_IxfPjr.js";import"./GraphicalItemClipPath-DGbYSZbB.js";import"./SetGraphicalItem-DZ57qSXA.js";import"./getRadiusAndStrokeWidthFromDot-CMxbT_Fy.js";import"./ActiveShapeUtils-B164ljio.js";import"./isPlainObject-OTvoF1ix.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BJERAndb.js";import"./Trapezoid-U3hbbJ2B.js";import"./Sector-CSPavfQA.js";import"./Symbols-DLTvK8m8.js";import"./symbol-DpMzgL8C.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CXRjpi5i.js";import"./ChartSizeDimensions-BbncuPUL.js";import"./OffsetShower-DPIr9odL.js";import"./PlotAreaShower-DUcsSPBD.js";const ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const Ee=["Segment"];export{t as Segment,Ee as __namedExportsOrder,ye as default};
