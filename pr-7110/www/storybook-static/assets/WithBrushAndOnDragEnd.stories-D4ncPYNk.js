import{e as t}from"./iframe-DbhhbAlo.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-Lx_TMjyu.js";import{B as p}from"./BarChart-dQq9mx29.js";import{X as l}from"./XAxis-DjIfDDta.js";import{Y as h}from"./YAxis-Dj1421bZ.js";import{B as c}from"./Brush-BpNo-0dR.js";import{B as x}from"./Bar-ML_MBLKz.js";import{R as u}from"./RechartsHookInspector-BSvxhUzi.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DqjP-SJZ.js";import"./immer-CXubSzbd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BqWeXDcR.js";import"./index-bP3uccvR.js";import"./hooks-rkaChWzj.js";import"./axisSelectors-CG6dK3nK.js";import"./d3-scale-CD7WeVUs.js";import"./zIndexSlice-tEJEPfMp.js";import"./renderedTicksSlice-Br_sCV6u.js";import"./CartesianChart-2XwRf_I_.js";import"./chartDataContext-BjOOHIMo.js";import"./CategoricalChart-lS70JkQC.js";import"./CartesianAxis-DOxCqOnp.js";import"./Layer-BLRPCKMQ.js";import"./Text-9tx7qVgJ.js";import"./DOMUtils-CxI3YG9P.js";import"./Label-BD-AsMTb.js";import"./ZIndexLayer-BXjMifaG.js";import"./types-DCl9eSsv.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CoRJaSgw.js";import"./ReactUtils-DlRYbFyy.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BiQ2ESb_.js";import"./isPlainObject-D743ttwB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BIGKSdSo.js";import"./useAnimationId-CLYn9ysU.js";import"./Trapezoid-okY0yamA.js";import"./Sector-C3VJLfsw.js";import"./Symbols-C4vV8xjD.js";import"./symbol-PPpy3bVe.js";import"./step-B3CTsvyi.js";import"./Curve-Dxoto--N.js";import"./RegisterGraphicalItemId-CiV8HnYd.js";import"./ErrorBarContext-8lDTik7_.js";import"./GraphicalItemClipPath-Bl8bx72_.js";import"./SetGraphicalItem-CKtT4vYj.js";import"./getZIndexFromUnknown-0mDigrKC.js";import"./graphicalItemSelectors-BmahZTtF.js";import"./index-BEJpunbk.js";import"./ChartSizeDimensions-BHCR1SDL.js";import"./OffsetShower-D8NGzvq1.js";import"./PlotAreaShower-CmMEUx8D.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
