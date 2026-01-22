import{e as t}from"./iframe-qFyPNvi_.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BR44KOOG.js";import{B as p}from"./BarChart-BAfbMRZQ.js";import{X as l}from"./XAxis-B5Ueyu7e.js";import{Y as h}from"./YAxis-B1s9pj0r.js";import{B as c}from"./Brush-DSQN29al.js";import{B as x}from"./Bar-C-m0c-5k.js";import{R as u}from"./RechartsHookInspector-Ce3qLbRt.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CiVGu3Bt.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-DM4_tnRN.js";import"./hooks-aCDbeiPX.js";import"./axisSelectors-De9afnke.js";import"./zIndexSlice-yXhSr7sB.js";import"./CartesianChart-DplX7WDC.js";import"./chartDataContext-byZU3wA9.js";import"./CategoricalChart-Bg7JUw0R.js";import"./CartesianAxis-BrVa5ao-.js";import"./Layer-B9wfXqHf.js";import"./Text-icE1XF3t.js";import"./DOMUtils-EYrslgiu.js";import"./Label-CaGvlJzM.js";import"./ZIndexLayer-B3rHEP_M.js";import"./types-BhYGGyZO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DIG8Ieoj.js";import"./ReactUtils-Dn42083y.js";import"./ActiveShapeUtils-m1fmtbZZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C4WR-Qi1.js";import"./useAnimationId-CBoODHVq.js";import"./Trapezoid-hMqWhzEj.js";import"./Sector-CLe_yWi6.js";import"./Symbols-CPIOcRRv.js";import"./Curve-Bf-6f0us.js";import"./RegisterGraphicalItemId-Dwao3Q82.js";import"./ErrorBarContext-tV2jexXK.js";import"./GraphicalItemClipPath-SzdiLGTP.js";import"./SetGraphicalItem-C4lKL51b.js";import"./getZIndexFromUnknown-Bucp884K.js";import"./graphicalItemSelectors-ChELWF3m.js";import"./index-CxM5gQIi.js";import"./ChartSizeDimensions-QfvN_Ah7.js";import"./OffsetShower-BUMougLk.js";import"./PlotAreaShower-CjC9fWZt.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
