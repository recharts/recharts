import{R as t}from"./iframe-DCSfzZD_.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Cya-j5JC.js";import{B as p}from"./BarChart-CUhB4G2c.js";import{X as l}from"./XAxis-BD_qaxla.js";import{Y as h}from"./YAxis-CXksHDR7.js";import{B as x}from"./Brush-Rwr33Ivq.js";import{B as c}from"./Bar-BEEYzMTO.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-ByTaNkbJ.js";import"./index-Bo0lICcO.js";import"./index-Bc3eNKO0.js";import"./get-bIWt5V4Q.js";import"./resolveDefaultProps-CCmyAiJ-.js";import"./isWellBehavedNumber-m9CBmcKa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-f8FpOrqU.js";import"./index-TStCCngK.js";import"./index-CZv42qN9.js";import"./renderedTicksSlice-CB2WZ0k7.js";import"./axisSelectors-C-oQ6giK.js";import"./d3-scale-4ju7hcsF.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CB6ngWWH.js";import"./chartDataContext-WKixDFuv.js";import"./CategoricalChart-DJmhsbdm.js";import"./CartesianAxis-B8kAJjBK.js";import"./Layer-CYaqqIa6.js";import"./Text-BxOuGVRA.js";import"./DOMUtils-C0TjG-2s.js";import"./Label-DyuMertz.js";import"./ZIndexLayer-BUBfOUZp.js";import"./types-pWlDed2R.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-B88742NV.js";import"./AnimatedItems-DS8CzLL4.js";import"./useAnimationId-BTIZp_pi.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DpxrFSPu.js";import"./ActiveShapeUtils-C_38ZXqU.js";import"./RegisterGraphicalItemId-B-4FmZL4.js";import"./ErrorBarContext-CpQVZJvf.js";import"./GraphicalItemClipPath-7MgXj_jT.js";import"./SetGraphicalItem-3Qo-AVYb.js";import"./getZIndexFromUnknown-BelDedhF.js";import"./graphicalItemSelectors-C2yccbXB.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const mt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,mt as __namedExportsOrder,dt as default};
