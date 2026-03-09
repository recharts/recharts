import{e as t}from"./iframe-C-iVd-D9.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CykFyG3w.js";import{B as p}from"./BarChart-DKmS2rQ-.js";import{X as l}from"./XAxis-DSNvwzP_.js";import{Y as h}from"./YAxis-BMfSetrt.js";import{B as c}from"./Brush-mdvInYUu.js";import{B as x}from"./Bar-DLIH3GGF.js";import{R as u}from"./RechartsHookInspector-BmWQIBw0.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CaPMqnUf.js";import"./immer-9akI4mGC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-OZYl-Tz6.js";import"./index-D7iAvCJZ.js";import"./hooks-DgAj9GmX.js";import"./axisSelectors-B51mUxQh.js";import"./d3-scale-BLCaIo2v.js";import"./zIndexSlice-DM0eYjRM.js";import"./renderedTicksSlice-XpTaEf7K.js";import"./CartesianChart-DCeJ5hMu.js";import"./chartDataContext-Dod_jDwP.js";import"./CategoricalChart-DQuyNjww.js";import"./CartesianAxis-DbYsYZ3j.js";import"./Layer-PcuWobZF.js";import"./Text-DV9U-A1x.js";import"./DOMUtils-CDMIcntA.js";import"./Label-B2Hnjv9f.js";import"./ZIndexLayer-CF1VRPo3.js";import"./types-DAf5tiec.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-DmQQI9hK.js";import"./ReactUtils-nzFm5ghx.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-LerByRq_.js";import"./isPlainObject-y7gB3M8h.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CZ4Fndbl.js";import"./useAnimationId-DF-bmt8J.js";import"./Trapezoid-C-P9UIeU.js";import"./Sector-Xd_RhtXJ.js";import"./Symbols-DpPGUMp-.js";import"./symbol-BuPqUUJq.js";import"./step-Ca8O5Pe5.js";import"./Curve-6NVtDyjZ.js";import"./RegisterGraphicalItemId-DBYhzviE.js";import"./ErrorBarContext-DToJ31oQ.js";import"./GraphicalItemClipPath-DlmVzEBx.js";import"./SetGraphicalItem-D9P8g2wE.js";import"./getZIndexFromUnknown-2a0m8kz2.js";import"./graphicalItemSelectors-CGXQJwpT.js";import"./index-4pvBd6R2.js";import"./ChartSizeDimensions-7dl-q0eS.js";import"./OffsetShower-DgEJieR9.js";import"./PlotAreaShower-Dw5kcDju.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
