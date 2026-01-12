import{e}from"./iframe-BlK4-FEU.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-D3CpbvMw.js";import{B as p}from"./BarChart-DNAwY_fw.js";import{X as l}from"./XAxis-XTRCC8r6.js";import{Y as h}from"./YAxis-Bo0KVWV0.js";import{B as c}from"./Brush-C9fmmhRR.js";import{B as x}from"./Bar-DTEMCZ-O.js";import{R as u}from"./RechartsHookInspector-C2emUIYz.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CZGT4OJp.js";import"./PolarUtils-Bw67yi1j.js";import"./RechartsWrapper-CfP2CNrR.js";import"./hooks-CsC49iNH.js";import"./axisSelectors-t10Pjb8y.js";import"./zIndexSlice-BTFlkBrM.js";import"./CartesianChart-BYkRfU90.js";import"./chartDataContext-_WqeN7e1.js";import"./CategoricalChart-CsSPHay3.js";import"./CartesianAxis-D9Vnd4ZX.js";import"./Layer-1XFlzVag.js";import"./Text-BHa3XVhG.js";import"./DOMUtils-DL2vfQ8H.js";import"./Label-B5t3anSs.js";import"./ZIndexLayer-BXfqJV7n.js";import"./types-nGVhtMBW.js";import"./tooltipContext-BXQ2EYh_.js";import"./ReactUtils-CLW_TYB_.js";import"./ActiveShapeUtils-BFViKF1F.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bu9j2f9q.js";import"./useAnimationId-H0jghrnG.js";import"./Trapezoid-DhJdPhvd.js";import"./Sector-6gruqe2O.js";import"./Symbols-7-jwnY-l.js";import"./Curve-CwI3FqjW.js";import"./RegisterGraphicalItemId-Co3MVnsu.js";import"./ErrorBarContext-Kty8e015.js";import"./GraphicalItemClipPath-P9ZnzsFU.js";import"./SetGraphicalItem-DuRVqxef.js";import"./getZIndexFromUnknown-C_7hVWrg.js";import"./graphicalItemSelectors-BArIi9is.js";import"./index-B4rQ1OLH.js";import"./ChartSizeDimensions-DNL5OR5F.js";import"./OffsetShower-DbODKAvT.js";import"./PlotAreaShower-C8cqHodv.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
