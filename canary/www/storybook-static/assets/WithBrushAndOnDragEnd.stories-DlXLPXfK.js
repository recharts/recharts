import{e as t}from"./iframe-KPAXLOLU.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-C56QUJ1f.js";import{B as p}from"./BarChart-C5wBrSDY.js";import{X as l}from"./XAxis-C4HchdwG.js";import{Y as h}from"./YAxis-CAPsonmh.js";import{B as c}from"./Brush-B3avqXyU.js";import{B as x}from"./Bar-zxBToTfD.js";import{R as u}from"./RechartsHookInspector-kpgbJjbF.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DoONYDR5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DbDiUXBh.js";import"./hooks-BSsx0bCA.js";import"./axisSelectors-BryM1FYj.js";import"./zIndexSlice-BZZRXwbi.js";import"./CartesianChart-DFX2Z7FU.js";import"./chartDataContext-T6w2KyJs.js";import"./CategoricalChart-Dk9GNXPU.js";import"./CartesianAxis-Fwh7n2FF.js";import"./Layer-Da82H4oD.js";import"./Text-bc5Wvmbt.js";import"./DOMUtils-tqc8lMYW.js";import"./Label-BCITgdoX.js";import"./ZIndexLayer-DGM-MLqc.js";import"./types-Bf6Uuk4n.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-CHrD_CwG.js";import"./ReactUtils-DU0YFNnG.js";import"./ActiveShapeUtils-CGbu2e04.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BzpXjes6.js";import"./useAnimationId-CcLJkYYw.js";import"./Trapezoid-CVMTG_aU.js";import"./Sector-2YnOnij-.js";import"./Symbols-B8OFT3tL.js";import"./Curve-DKnP5GEK.js";import"./RegisterGraphicalItemId-DhvOJqxy.js";import"./ErrorBarContext-DSh5xxoF.js";import"./GraphicalItemClipPath-CMapYqoy.js";import"./SetGraphicalItem-DnuvD-SA.js";import"./getZIndexFromUnknown-j63xAmTD.js";import"./graphicalItemSelectors-CbNq9yul.js";import"./index-DScL8g0g.js";import"./ChartSizeDimensions-DvlPtCXc.js";import"./OffsetShower-DO6TyZAZ.js";import"./PlotAreaShower-Cm4MMGxs.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
