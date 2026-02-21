import{e as t}from"./iframe-DAZKVxz9.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-dPOQS8pO.js";import{B as p}from"./BarChart-bKDPtEUq.js";import{X as l}from"./XAxis-DrBlWbCQ.js";import{Y as h}from"./YAxis-BKsd-W4f.js";import{B as c}from"./Brush-Cq87Axsd.js";import{B as x}from"./Bar-Lka-s_AI.js";import{R as u}from"./RechartsHookInspector-B2Mat80Z.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Xx_SsgwN.js";import"./immer-4-TXwIq-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BjWlMXU1.js";import"./index-D3IpfJcR.js";import"./hooks-Dot9B-8s.js";import"./axisSelectors-DztuZ7GM.js";import"./d3-scale-ChhyAw2W.js";import"./zIndexSlice-D3HE9JYU.js";import"./renderedTicksSlice-BvtRkGHb.js";import"./CartesianChart-CKg6csWi.js";import"./chartDataContext-DGYaAAtE.js";import"./CategoricalChart-DeG47lga.js";import"./CartesianAxis-B8h3nSA3.js";import"./Layer-B5mQaLs_.js";import"./Text-CNFMu9xe.js";import"./DOMUtils-Dpu0-rWt.js";import"./Label-DNW4k13o.js";import"./ZIndexLayer-CksZ3gAG.js";import"./types-4_oq0AJp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DVUOTG4B.js";import"./ReactUtils-CccuW9N4.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CSU1QkFK.js";import"./isPlainObject-BF_n072g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-nMN8f2_i.js";import"./useAnimationId-Bfut_0eb.js";import"./Trapezoid-DUbCLHLc.js";import"./Sector-DBc0T8Rp.js";import"./Symbols-D-cPayMS.js";import"./symbol-BHK6xqri.js";import"./step-DOJR22o0.js";import"./Curve-ZE8xv1Ny.js";import"./RegisterGraphicalItemId-NvV6Z6oD.js";import"./ErrorBarContext-baTIc42o.js";import"./GraphicalItemClipPath-Dp6p8o2v.js";import"./SetGraphicalItem-D9fO1f5d.js";import"./getZIndexFromUnknown-DFdN-OYY.js";import"./graphicalItemSelectors-CXD6VIxA.js";import"./index-B6PIiwfp.js";import"./ChartSizeDimensions-BLB7KQxE.js";import"./OffsetShower-DvPblFBG.js";import"./PlotAreaShower-CQAhfZmY.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const vt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,vt as __namedExportsOrder,It as default};
