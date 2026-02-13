import{e as t}from"./iframe-BdYBH0hQ.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CnZHVnux.js";import{B as p}from"./BarChart-CjgRaILI.js";import{X as l}from"./XAxis-C-6SXyUA.js";import{Y as h}from"./YAxis-i93sK3J3.js";import{B as c}from"./Brush-Dn6PjgeY.js";import{B as x}from"./Bar-BCqQWrxk.js";import{R as u}from"./RechartsHookInspector-XSvtem8K.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BV4LHELv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-92XHVlpU.js";import"./hooks-CxwMnTRQ.js";import"./axisSelectors-B830JJxv.js";import"./zIndexSlice-5OAeHe1c.js";import"./CartesianChart-CWPbPBgj.js";import"./chartDataContext-nXwfjN3A.js";import"./CategoricalChart-CVN3i_3c.js";import"./CartesianAxis-DtTXwL03.js";import"./Layer-CC1sQm5k.js";import"./Text-CVFxhhr-.js";import"./DOMUtils-kJuruXzl.js";import"./Label-nQ379wTM.js";import"./ZIndexLayer-D6TqYbdI.js";import"./types-CeaFy_xO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BdRs6IP9.js";import"./ReactUtils-BSN6r0Fc.js";import"./ActiveShapeUtils-BIp3i795.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-EyNMCPiV.js";import"./useAnimationId-D1PUvmFT.js";import"./Trapezoid-B53GEe_2.js";import"./Sector-DrjPStcI.js";import"./Symbols-Dfpy34Qh.js";import"./Curve-C1OuXXjt.js";import"./RegisterGraphicalItemId-I_7XyWpB.js";import"./ErrorBarContext-CAApCFPz.js";import"./GraphicalItemClipPath-CKTjJatZ.js";import"./SetGraphicalItem-DY9tfEfN.js";import"./getZIndexFromUnknown-DFDF0r1o.js";import"./graphicalItemSelectors-BJTRBxI-.js";import"./index-CsvAOYvG.js";import"./ChartSizeDimensions-CblMQBhU.js";import"./OffsetShower-CHh6x2lZ.js";import"./PlotAreaShower-CNu2XHWT.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
