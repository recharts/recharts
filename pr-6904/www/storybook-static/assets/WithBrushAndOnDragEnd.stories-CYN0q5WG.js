import{e}from"./iframe-BLLNbNku.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-Co8h5dnX.js";import{B as p}from"./BarChart-BS6xUAJk.js";import{X as l}from"./XAxis-raVyKb45.js";import{Y as h}from"./YAxis-DzinWbKB.js";import{B as c}from"./Brush-pW8TtYdB.js";import{B as x}from"./Bar-h88FZy8Q.js";import{R as u}from"./RechartsHookInspector-0ZdSIZYh.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BEjwQWgd.js";import"./PolarUtils-DXjI68e5.js";import"./RechartsWrapper-DHcwqX8r.js";import"./hooks-Ch251T4B.js";import"./axisSelectors-CmF5TL99.js";import"./zIndexSlice-DcR9U4FZ.js";import"./CartesianChart-BHDODL1m.js";import"./chartDataContext-a-oaLnie.js";import"./CategoricalChart-MybRLE0p.js";import"./CartesianAxis-ol8Jf5am.js";import"./Layer-BCxNAEKV.js";import"./Text-DzNeFpe7.js";import"./DOMUtils-Bb3zeSfI.js";import"./Label-BoL4zXeM.js";import"./ZIndexLayer-rdL7qpG4.js";import"./types-C2V5y-Kb.js";import"./tooltipContext-Di8nQB5E.js";import"./ReactUtils-DqoF2LGV.js";import"./ActiveShapeUtils-IKQ46J3H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B1VmBLbJ.js";import"./useAnimationId-Brx318jV.js";import"./Trapezoid-DMY00GCf.js";import"./Sector-BtcaLVg3.js";import"./Symbols-Uq5NG2Xk.js";import"./Curve-k7SSPeeE.js";import"./RegisterGraphicalItemId-CwVFZemd.js";import"./ErrorBarContext-HC4TQGzt.js";import"./GraphicalItemClipPath-B4KkXTlk.js";import"./SetGraphicalItem-BZa4lgFq.js";import"./getZIndexFromUnknown-DPicAPHm.js";import"./graphicalItemSelectors-C0tmLhQc.js";import"./index-Dyt5IQSl.js";import"./ChartSizeDimensions-CgN2NQMs.js";import"./OffsetShower-FR5I6nlk.js";import"./PlotAreaShower-B06uRIML.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
