import{e as t}from"./iframe-BSrWh3Tm.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-Bi3wam60.js";import{B as p}from"./BarChart-BssY0kR3.js";import{X as l}from"./XAxis-B42vfkRT.js";import{Y as h}from"./YAxis-C6UXDRpG.js";import{B as c}from"./Brush-DvirnHJR.js";import{B as x}from"./Bar-C2L8Q46n.js";import{R as u}from"./RechartsHookInspector-GGOykVwh.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-uX8ktvRe.js";import"./immer-o57FzM7P.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cv7vOboh.js";import"./index-BKQB3IdD.js";import"./hooks-_Zpl3P7b.js";import"./axisSelectors-DaFs4qrj.js";import"./d3-scale-B1u95Bta.js";import"./zIndexSlice-DiVky1C5.js";import"./renderedTicksSlice-XfGhYDN5.js";import"./CartesianChart-C6stOvQo.js";import"./chartDataContext-BZoBhnnC.js";import"./CategoricalChart-K47yLqM7.js";import"./CartesianAxis-DpJRxyLl.js";import"./Layer-QGYU9n-M.js";import"./Text-DUnGW5EL.js";import"./DOMUtils-BZKI_dtW.js";import"./Label-Bl_LjQTl.js";import"./ZIndexLayer-D38UhR7u.js";import"./types-CM9WDYf0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-zAyamVxq.js";import"./ReactUtils-CJRrmQRl.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CHgfreMM.js";import"./isPlainObject-D_XWLGeo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BZDPWd6o.js";import"./useAnimationId-DcrpwOmI.js";import"./Trapezoid-DEogtWZp.js";import"./Sector-Clje0fKa.js";import"./Symbols-DUq2FcPQ.js";import"./symbol-Bmu8h110.js";import"./step-D7Xw_JZz.js";import"./Curve-Y05R0_Dg.js";import"./RegisterGraphicalItemId-otp8Qv4N.js";import"./ErrorBarContext-CUS8wCir.js";import"./GraphicalItemClipPath-K1LYOcWQ.js";import"./SetGraphicalItem-DrkBT3YT.js";import"./getZIndexFromUnknown-Bw6c0-la.js";import"./graphicalItemSelectors-BMt4cw6-.js";import"./index-D7iJ4ctw.js";import"./ChartSizeDimensions-DsBX0MPa.js";import"./OffsetShower-DXc8wSG5.js";import"./PlotAreaShower-C59CIyfR.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
