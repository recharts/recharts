import{e as t}from"./iframe-BtK7K3Kv.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CFfqZo_0.js";import{B as p}from"./BarChart-CUrCcobT.js";import{X as l}from"./XAxis-DGpvny6L.js";import{Y as h}from"./YAxis-CwLMlwVC.js";import{B as c}from"./Brush-B2mJvoFH.js";import{B as x}from"./Bar-CJAElBbT.js";import{R as u}from"./RechartsHookInspector-D4JLTX2d.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DWyLZAa9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DGVCpdWj.js";import"./hooks-60Pk7U7P.js";import"./axisSelectors-DMzn6YDV.js";import"./zIndexSlice-m57chh8X.js";import"./CartesianChart-CuRdEYaC.js";import"./chartDataContext-BRTsTQpm.js";import"./CategoricalChart-peX_-ePN.js";import"./CartesianAxis-BOqlO8Q1.js";import"./Layer-DV1icpzr.js";import"./Text-BW-lGQnj.js";import"./DOMUtils-z6sJWHwI.js";import"./Label-DynPPCJ6.js";import"./ZIndexLayer-DaJzxTrT.js";import"./types-CVJb2MOT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-C__a452J.js";import"./ReactUtils-BJV4SHfz.js";import"./ActiveShapeUtils-DG-TGbIe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D_NKn9vF.js";import"./useAnimationId-FO0Tg1s_.js";import"./Trapezoid-C4MEq2xn.js";import"./Sector-8dbuSlIN.js";import"./Symbols-DqB8iXHv.js";import"./Curve-yPyY_uXZ.js";import"./RegisterGraphicalItemId-BuTwWOrx.js";import"./ErrorBarContext-CiGlk53m.js";import"./GraphicalItemClipPath-3JZrHeBE.js";import"./SetGraphicalItem-CC-hIiO2.js";import"./getZIndexFromUnknown-CmwjF5Pb.js";import"./graphicalItemSelectors-B2Vfl7ve.js";import"./index-CPKyuAeN.js";import"./ChartSizeDimensions-C_sOGjRQ.js";import"./OffsetShower-dtmi7EOu.js";import"./PlotAreaShower-Di55GjjN.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
