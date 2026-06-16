import{R as t}from"./iframe-Dsugo_zg.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CQ8Dq6Rw.js";import{B as p}from"./BarChart-HnDvmWXV.js";import{X as l}from"./XAxis-BtWHE8Ii.js";import{Y as h}from"./YAxis-BOEdL1M7.js";import{B as x}from"./Brush-WOpbLGSV.js";import{B as c}from"./Bar-BZvBFTcM.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Dn_ZGj_2.js";import"./index-hfwoyc40.js";import"./index-BltQKr7J.js";import"./get-B4-DsMlp.js";import"./resolveDefaultProps-ByiopbeA.js";import"./isWellBehavedNumber-BXhYPRs7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D3mVticM.js";import"./index-B1HEKGfm.js";import"./index-B6DCYcPU.js";import"./renderedTicksSlice-CsDLwy59.js";import"./axisSelectors-DuSkawJ1.js";import"./d3-scale-C9TIKeBC.js";import"./string-B6fdYHAA.js";import"./CartesianChart-UK3tQwAh.js";import"./chartDataContext-D_whFwD4.js";import"./CategoricalChart-FdwMdvH0.js";import"./CartesianAxis-1FBfSHCk.js";import"./Layer-PDKsNXXB.js";import"./Text-BrgPWmaV.js";import"./DOMUtils-Bp38L-kM.js";import"./Label-Dv0ON-tn.js";import"./ZIndexLayer-CosUoOTg.js";import"./types-BdpIxXW8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-BGk27Aep.js";import"./AnimatedItems-BcVxVlvs.js";import"./useAnimationId-BEJfwvjz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-6j2cXDPI.js";import"./ActiveShapeUtils-DQiBB_Ml.js";import"./RegisterGraphicalItemId-VkMnq2n0.js";import"./ErrorBarContext-BTy60tqZ.js";import"./GraphicalItemClipPath-DVeVc-Gk.js";import"./SetGraphicalItem-CiVD-7Sz.js";import"./getZIndexFromUnknown-D5sXd5s7.js";import"./graphicalItemSelectors-CtWRHLh-.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
