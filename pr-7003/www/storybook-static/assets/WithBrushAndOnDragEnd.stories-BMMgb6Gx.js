import{e as t}from"./iframe-Cy8G_j66.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-dp8dfL7u.js";import{B as p}from"./BarChart-BSLU0mif.js";import{X as l}from"./XAxis-sHLPbu1e.js";import{Y as h}from"./YAxis-DfWkuEr-.js";import{B as c}from"./Brush-DdRX1Z6w.js";import{B as x}from"./Bar-CQS_kTvV.js";import{R as u}from"./RechartsHookInspector-lSqxoQlZ.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DHnXBr-T.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BtX23pZ_.js";import"./hooks-Dh2IuVAR.js";import"./axisSelectors-Dnswsufb.js";import"./zIndexSlice-BDvzw6V8.js";import"./CartesianChart-BzoasTlc.js";import"./chartDataContext-Dyi2rgks.js";import"./CategoricalChart-0rxnxhIB.js";import"./CartesianAxis-mJhpe0_9.js";import"./Layer-D4d1YeMH.js";import"./Text-C8Cfe64C.js";import"./DOMUtils-CSAZ0z5r.js";import"./Label-r4OEA6Zh.js";import"./ZIndexLayer-DYA27QSR.js";import"./types-BSABi_Hc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Bnl8clU0.js";import"./ReactUtils-CPeEyyol.js";import"./ActiveShapeUtils-BtpIhy8s.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DF923tDp.js";import"./useAnimationId-YkjhaILr.js";import"./Trapezoid-CLz1a_Xw.js";import"./Sector-Dv6krD40.js";import"./Symbols-Dz-91Pdw.js";import"./Curve-B4b9EAiq.js";import"./RegisterGraphicalItemId-Do-QRU28.js";import"./ErrorBarContext-D6VQHKa5.js";import"./GraphicalItemClipPath-B6TO2Oyf.js";import"./SetGraphicalItem-sOhar6CJ.js";import"./getZIndexFromUnknown-BfgfushY.js";import"./graphicalItemSelectors-CIm9mjqa.js";import"./index-Blxurm1a.js";import"./ChartSizeDimensions-CzRSNWvg.js";import"./OffsetShower-C1xZ_Sdf.js";import"./PlotAreaShower-DQwE5Dcy.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
