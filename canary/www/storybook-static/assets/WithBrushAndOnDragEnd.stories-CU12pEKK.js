import{e}from"./iframe-BDEQfIlb.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BA5tHTkl.js";import{B as p}from"./BarChart-By84PvrS.js";import{X as l}from"./XAxis-NhsKtlV2.js";import{Y as h}from"./YAxis-CNg2gE42.js";import{B as c}from"./Brush-GIU_kp3m.js";import{B as x}from"./Bar-DNSTGit_.js";import{R as u}from"./RechartsHookInspector-BP4qljDX.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D0yWPBKj.js";import"./PolarUtils-KAlgtJ9T.js";import"./RechartsWrapper-CST4_BZP.js";import"./hooks-Cc5861FD.js";import"./axisSelectors-W9GqkCkL.js";import"./zIndexSlice-B88C6q2R.js";import"./CartesianChart-Cqd8BAy6.js";import"./chartDataContext-BX7wQqVg.js";import"./CategoricalChart-BAadDSZ5.js";import"./CartesianAxis-Dj71nMX3.js";import"./Layer-Con5T55J.js";import"./Text-9oQB2ulB.js";import"./DOMUtils-C_B6oJip.js";import"./Label-B9k6RWTG.js";import"./ZIndexLayer-CzQ7dqjv.js";import"./types-tr7QhDo_.js";import"./tooltipContext-DGI_kjpQ.js";import"./ReactUtils-B2Wxyi5A.js";import"./ActiveShapeUtils-DSG0DNjO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DZIbf3UH.js";import"./useAnimationId-fPMh2rE3.js";import"./Trapezoid-D-MMn83p.js";import"./Sector-CDYiU8tv.js";import"./Symbols-CIf3O2Az.js";import"./Curve-apm-ZytV.js";import"./RegisterGraphicalItemId-B-_vEcYf.js";import"./ErrorBarContext-BVoK2OG_.js";import"./GraphicalItemClipPath-Cxm1A7e8.js";import"./SetGraphicalItem-mM5uupNM.js";import"./getZIndexFromUnknown-B7JDeV1b.js";import"./graphicalItemSelectors-DT_KYHzG.js";import"./index-D0u2n02A.js";import"./ChartSizeDimensions-DKCYbGH7.js";import"./OffsetShower-BiVSgjK5.js";import"./PlotAreaShower-D2oOPDsU.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const [dragIndexes, setDragIndexes] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: dateWithValueData.length - 1
    });
    return (
      // Calc compensates for the text above the chart
      <div style={{
        width: '100%',
        height: 'calc(100% - 84px)'
      }}>
        <div>
          Start index:
          {dragIndexes.startIndex}
        </div>
        <div>
          End index:
          {dragIndexes.endIndex}
        </div>
        <ResponsiveContainer>
          <BarChart data={dateWithValueData}>
            <XAxis dataKey="value" />
            <YAxis />
            <Brush dataKey="name" height={30} onDragEnd={indexes => {
              setDragIndexes(indexes as BrushStartEndIndex);
            }} />
            <Bar dataKey="value" />
            <RechartsHookInspector />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const se=["WithBrushAndOnDragEnd"];export{t as WithBrushAndOnDragEnd,se as __namedExportsOrder,me as default};
