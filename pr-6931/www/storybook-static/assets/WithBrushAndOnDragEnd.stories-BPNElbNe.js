import{e as t}from"./iframe-DZUAPGWU.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-B_Kj_5n3.js";import{B as p}from"./BarChart-D7VjtV0G.js";import{X as l}from"./XAxis-B_pa2cFU.js";import{Y as h}from"./YAxis-DpSUJ6BG.js";import{B as c}from"./Brush-8rCg0i58.js";import{B as x}from"./Bar-BdrnUI_6.js";import{R as u}from"./RechartsHookInspector-CTfD316c.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CTBUcsM2.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CZEU1xAf.js";import"./hooks-CmVGlUZA.js";import"./axisSelectors-DL2NuUaJ.js";import"./zIndexSlice-Wj6Lqt0c.js";import"./CartesianChart-DFIFFZ02.js";import"./chartDataContext-uOI58bDP.js";import"./CategoricalChart-DjpQG7hJ.js";import"./CartesianAxis-Cxo8uXUJ.js";import"./Layer-CUM7VYJb.js";import"./Text-m0PU0Hkx.js";import"./DOMUtils-B-ueGznT.js";import"./Label-BpGSAoxQ.js";import"./ZIndexLayer-48hS6z3u.js";import"./types-gnnl7DTW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Bs9JA3NR.js";import"./ReactUtils-BwhtQEJo.js";import"./ActiveShapeUtils-DDG505Mz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dm59FMII.js";import"./useAnimationId-eGODZItY.js";import"./Trapezoid-B65I0G_8.js";import"./Sector-Bi4APoRd.js";import"./Symbols-CJWWl_NZ.js";import"./Curve-OnMyuRM1.js";import"./RegisterGraphicalItemId-D7Nyvpen.js";import"./ErrorBarContext-qHTOOodp.js";import"./GraphicalItemClipPath-BFVsLge8.js";import"./SetGraphicalItem-BexwVPUx.js";import"./getZIndexFromUnknown-CHuzqdZ4.js";import"./graphicalItemSelectors-D2O6hktT.js";import"./index-R3RI3I7Q.js";import"./ChartSizeDimensions-CMzQU2ij.js";import"./OffsetShower-B5l6vGiv.js";import"./PlotAreaShower-e0vK3Qeg.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
