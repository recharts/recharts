import{e}from"./iframe-BfbK0YnM.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DNFpTLKx.js";import{B as p}from"./BarChart-DFg-hDyw.js";import{X as l}from"./XAxis-C98xK6t1.js";import{Y as h}from"./YAxis-BIVxSChd.js";import{B as c}from"./Brush-Z1VMczyH.js";import{B as x}from"./Bar-BBN1YXr8.js";import{R as u}from"./RechartsHookInspector-hJ2wORVM.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-1x2577Vl.js";import"./PolarUtils-D7VIOQ5-.js";import"./RechartsWrapper-CneYaVm0.js";import"./hooks-C3PasfZ_.js";import"./axisSelectors-B0fcML92.js";import"./zIndexSlice-C2nD2lty.js";import"./CartesianChart-DvEdRfkB.js";import"./chartDataContext-BgZQ9X9l.js";import"./CategoricalChart-bjsre3s0.js";import"./CartesianAxis-BYWnjPPG.js";import"./Layer-CgE-ub3Y.js";import"./Text-CnAgZ5uJ.js";import"./DOMUtils-ed8aeX9h.js";import"./Label-DahQkxIF.js";import"./ZIndexLayer-aH4ZpYgD.js";import"./types-Bmf6Pun4.js";import"./tooltipContext-0V0eoMU8.js";import"./ReactUtils-CcajNckk.js";import"./ActiveShapeUtils-C7AgwxsO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BHHp3Xwt.js";import"./useAnimationId-D-pFcM5J.js";import"./Trapezoid-CzxVEg4f.js";import"./Sector-BlKZ7V0w.js";import"./Symbols-sbw_CJaX.js";import"./Curve-DDb4cbsk.js";import"./RegisterGraphicalItemId-CqePIzFp.js";import"./ErrorBarContext-CY5jd0h0.js";import"./GraphicalItemClipPath-MsgVJj5Y.js";import"./SetGraphicalItem-C-oQkIvQ.js";import"./getZIndexFromUnknown-A-b6oxkT.js";import"./graphicalItemSelectors-XplRRcHl.js";import"./index-DXUjyqxC.js";import"./ChartSizeDimensions-Cp6ZFz8t.js";import"./OffsetShower-C9W4p0Nm.js";import"./PlotAreaShower-Bs9OF-cp.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const se=["WithBrushAndOnDragEnd"];export{t as WithBrushAndOnDragEnd,se as __namedExportsOrder,me as default};
