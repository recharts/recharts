import{R as t}from"./iframe-CxG2PZXj.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DAD_xoRY.js";import{B as p}from"./BarChart-Ctvad4ax.js";import{X as l}from"./XAxis-B4ycL0c8.js";import{Y as h}from"./YAxis-B1kX2SHx.js";import{B as x}from"./Brush-CrmusqiC.js";import{B as c}from"./Bar-BUstuzyH.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BLzUd2wF.js";import"./index-DToZBGKP.js";import"./index-DiKZrp18.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DUaFgx3m.js";import"./isWellBehavedNumber-8T9tdyF1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B0t_sSZG.js";import"./index-5B0X8Ccq.js";import"./index-DK4BYQS1.js";import"./renderedTicksSlice-DK3Qh-AH.js";import"./axisSelectors-BOLkCBrq.js";import"./d3-scale-LDX-W-e5.js";import"./CartesianChart-DqtDQP9t.js";import"./chartDataContext-Cw7l7MNk.js";import"./CategoricalChart-Dozh9-kX.js";import"./CartesianAxis--mae7NqH.js";import"./Layer-Cge6P4R-.js";import"./Text-Cndr_sMa.js";import"./DOMUtils-D8hCt3_g.js";import"./Label-Z4HB-UJ_.js";import"./ZIndexLayer-kEwpMnQu.js";import"./types-Da-j7B5o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-DLDHLsgR.js";import"./AnimatedItems-DqWCyLkw.js";import"./useAnimationId-D_YXQiTc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dg43H9ES.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CVhA8l6O.js";import"./RegisterGraphicalItemId-Cn9-4_hp.js";import"./ErrorBarContext-DRFeJFbi.js";import"./GraphicalItemClipPath-m4xLKPFC.js";import"./SetGraphicalItem-C-4LQBhg.js";import"./getZIndexFromUnknown-CllXp4pI.js";import"./graphicalItemSelectors-DIn3ebUY.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
