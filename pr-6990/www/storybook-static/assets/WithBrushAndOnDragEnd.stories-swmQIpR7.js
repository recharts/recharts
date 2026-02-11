import{e as t}from"./iframe-DEzN-0IH.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-Dj5rgmpF.js";import{B as p}from"./BarChart-Cxa6yCgi.js";import{X as l}from"./XAxis-C9IejdiW.js";import{Y as h}from"./YAxis-ywkX_5u_.js";import{B as c}from"./Brush-DP4qAglX.js";import{B as x}from"./Bar-DYzcfM2N.js";import{R as u}from"./RechartsHookInspector-f3uqQnpf.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps--GysF_k-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D226X-in.js";import"./hooks-DVXAe2RE.js";import"./axisSelectors-DVjOWlPF.js";import"./zIndexSlice-BLXDXR0o.js";import"./renderedTicksSlice-C4pdhuYh.js";import"./CartesianChart-CKWYeFyd.js";import"./chartDataContext-DDAsV3h8.js";import"./CategoricalChart-ChS4DbUW.js";import"./CartesianAxis-34WftamX.js";import"./Layer-DoKHSLik.js";import"./Text-BWRoC5xn.js";import"./DOMUtils-CUVpLAf7.js";import"./Label-CwNS2FmH.js";import"./ZIndexLayer-DsNBC3BS.js";import"./types-MnMW5XmF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Bu74m_yM.js";import"./ReactUtils-BQDy0BEl.js";import"./ActiveShapeUtils-DdpV-Pge.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C2soG4U2.js";import"./useAnimationId-DpL3ZrLE.js";import"./Trapezoid-DvZgohrQ.js";import"./Sector-Cn8fxEII.js";import"./Symbols-CNlz260r.js";import"./Curve-Een90XLK.js";import"./RegisterGraphicalItemId-BvrhgEWi.js";import"./ErrorBarContext-D5xdE6Qk.js";import"./GraphicalItemClipPath-BhXQU-ZR.js";import"./SetGraphicalItem-k6zlk5Ce.js";import"./getZIndexFromUnknown-DSl9nT4S.js";import"./graphicalItemSelectors-DhQyscN-.js";import"./index-UhpklWmI.js";import"./ChartSizeDimensions-BGz0NRwX.js";import"./OffsetShower-Hv6zXz6F.js";import"./PlotAreaShower-xiASrx7K.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
