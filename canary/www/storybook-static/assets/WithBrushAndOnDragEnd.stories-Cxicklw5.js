import{e as t}from"./iframe-BD1KoWK2.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-Cde7DPwP.js";import{B as p}from"./BarChart-CRkgnrs1.js";import{X as l}from"./XAxis-DnAqFIqk.js";import{Y as h}from"./YAxis-Ck4AhIst.js";import{B as c}from"./Brush-CpxnI_Mb.js";import{B as x}from"./Bar-UqBrJhnT.js";import{R as u}from"./RechartsHookInspector-D7IHkHn9.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-jJ9mOY4z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CyX5gEfk.js";import"./hooks-BYJ871TN.js";import"./axisSelectors-CEc7xIMq.js";import"./zIndexSlice-BvhylE7E.js";import"./CartesianChart-Dhtf_0dk.js";import"./chartDataContext-CnDpTFyo.js";import"./CategoricalChart-CI3_eBBD.js";import"./CartesianAxis-le_A4Q3P.js";import"./Layer-CRI4mTHm.js";import"./Text-NBPo0mLT.js";import"./DOMUtils-Lc23xLhb.js";import"./Label-DKDP8eG9.js";import"./ZIndexLayer-CVx_Xq-U.js";import"./types-CvLbK4WM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DR1TWxOU.js";import"./ReactUtils-Z9JD7jXO.js";import"./ActiveShapeUtils-D4Tjr80H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dqzy-26l.js";import"./useAnimationId-C52_k4XW.js";import"./Trapezoid-Ce1Zpmiv.js";import"./Sector-BVsQ6t1D.js";import"./Symbols-Cd74flzx.js";import"./Curve-CTi9DAae.js";import"./RegisterGraphicalItemId-BdofLPRs.js";import"./ErrorBarContext-DDBG_BG0.js";import"./GraphicalItemClipPath-CHbmwSgW.js";import"./SetGraphicalItem-BNcYp_R3.js";import"./getZIndexFromUnknown-l885V_di.js";import"./graphicalItemSelectors-dyKU1Amc.js";import"./index-G9AZeeqA.js";import"./ChartSizeDimensions-asr3RhFu.js";import"./OffsetShower-CBrp3efF.js";import"./PlotAreaShower-Bn3UIJhb.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};
