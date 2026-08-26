import{R as t}from"./iframe-C2DTpPl5.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BA0v7Oer.js";import{B as p}from"./BarChart-SG1IpGT0.js";import{X as l}from"./XAxis-BQlNmsKr.js";import{Y as h}from"./YAxis-Dd6HyrUG.js";import{B as x}from"./Brush-BSQiKXKC.js";import{B as c}from"./Bar-DGO9OwJo.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DTXNpE5t.js";import"./index-5V0YvSc1.js";import"./index-Cmgx4ukp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D8zMOS_0.js";import"./isWellBehavedNumber-C10dxuDW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DbTeQzXN.js";import"./index-b8OMPhKV.js";import"./index-PELgc84d.js";import"./axisSelectors-DI7xvKPh.js";import"./d3-scale-CRpbK976.js";import"./renderedTicksSlice-B1AYXvSw.js";import"./CartesianChart-DveAlEiH.js";import"./chartDataContext-zaCSk4E3.js";import"./CategoricalChart-9si9MCW4.js";import"./CartesianAxis-vCI6MyTM.js";import"./Layer-C1G5_il7.js";import"./Text-kmupVaPK.js";import"./DOMUtils-8MPdkl0j.js";import"./useId-CX7EaZRb.js";import"./useBackwardsCompatibleTheme-DFA95kD1.js";import"./Label-CwiguCux.js";import"./ZIndexLayer-BzV-OpAF.js";import"./types-C_I2Qi1-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-3hjUFG-5.js";import"./useAnimationId-en1pQLdR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D3EFseWQ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DeKqyUUr.js";import"./tooltipContext-CWDhAN1_.js";import"./RegisterGraphicalItemId-7_0Fa0Or.js";import"./ErrorBarContext-DBVQitzE.js";import"./GraphicalItemClipPath-Q21k0d2A.js";import"./SetGraphicalItem-BC-u-qk6.js";import"./getZIndexFromUnknown-Di2_GH9h.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DqOVzhXB.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const ht=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
