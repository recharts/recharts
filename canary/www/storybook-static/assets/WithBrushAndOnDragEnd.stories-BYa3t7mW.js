import{e as t}from"./iframe-xRIz3qbF.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-BdN7i4MO.js";import{B as p}from"./BarChart-h8-CMnVe.js";import{X as l}from"./XAxis-k5taAUht.js";import{Y as h}from"./YAxis-cxDuI0HH.js";import{B as c}from"./Brush-DvGNkelF.js";import{B as x}from"./Bar-x6i0j3NK.js";import{R as u}from"./RechartsHookInspector-CC_tuF9F.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CV23Ehqm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-y0J6uKM2.js";import"./hooks-0oNAH-Yd.js";import"./axisSelectors-CpIgH2EX.js";import"./zIndexSlice-BfBE69OZ.js";import"./renderedTicksSlice-BCeSf2F6.js";import"./CartesianChart-taOmKSzk.js";import"./chartDataContext-BSH8i1Pa.js";import"./CategoricalChart-Dtl4cVT_.js";import"./CartesianAxis-7YSNf4Ta.js";import"./Layer-BmRFOYbB.js";import"./Text-mQwo9EXr.js";import"./DOMUtils-ByQBTR3z.js";import"./Label-w-b8AlxD.js";import"./ZIndexLayer-CoDEXRAT.js";import"./types-BXkuDJCo.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DDQr_iGb.js";import"./ReactUtils-Cl__7Wwh.js";import"./ActiveShapeUtils-DVUTgNxA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DArYXtns.js";import"./useAnimationId-Ca9wkO8e.js";import"./Trapezoid-D3wL9tbg.js";import"./Sector-BtgfQr6b.js";import"./Symbols-DxmxARm7.js";import"./Curve-DYmyqph4.js";import"./RegisterGraphicalItemId-E0tByVzF.js";import"./ErrorBarContext-BFUqajde.js";import"./GraphicalItemClipPath-C4i3jj0c.js";import"./SetGraphicalItem-CTKmQnUP.js";import"./getZIndexFromUnknown-2vHaUvlB.js";import"./graphicalItemSelectors-CD1rDFMQ.js";import"./index-BTLusoTB.js";import"./ChartSizeDimensions-C5NwM1WB.js";import"./OffsetShower-DskOXH-F.js";import"./PlotAreaShower-CKLNnJBS.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const lt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
