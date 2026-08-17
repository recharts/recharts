import{R as t}from"./iframe-5rlHu5E0.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Dvv9j-PL.js";import{B as p}from"./BarChart-CmcFQlcU.js";import{X as l}from"./XAxis-QaJfpBkQ.js";import{Y as h}from"./YAxis-tXVCruoC.js";import{B as x}from"./Brush-G5UyBY0Q.js";import{B as c}from"./Bar-CB9JjzxX.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BEcUjoVL.js";import"./index-De9KIq3f.js";import"./index-CPjGkxRF.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DMzoBuFc.js";import"./isWellBehavedNumber-CtQc_19S.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_1S-WX9.js";import"./index-CRexnrp9.js";import"./index-CgDVIgvd.js";import"./axisSelectors-XpGDVkFI.js";import"./d3-scale-DQPeDNzN.js";import"./renderedTicksSlice-BU2rLD4L.js";import"./CartesianChart-CTBAwDjg.js";import"./chartDataContext-_d8W5FBB.js";import"./CategoricalChart-fg3LMOIt.js";import"./CartesianAxis-C1R_DLLS.js";import"./Layer-B7qTvwXJ.js";import"./Text-BWBZmFaQ.js";import"./DOMUtils-Cgsp7qZK.js";import"./useBackwardsCompatibleTheme-CU4QNWlg.js";import"./Label-dTTzfWAl.js";import"./ZIndexLayer-CC4VGBXC.js";import"./types-_FdMQlV7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CcRowb6W.js";import"./useAnimationId-9v2us4V5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-asU9eCg1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DcbSHq-a.js";import"./tooltipContext-DQG3ys6L.js";import"./RegisterGraphicalItemId-DiVn-hPt.js";import"./ErrorBarContext-B7azcaum.js";import"./GraphicalItemClipPath-BY5WrhEA.js";import"./SetGraphicalItem-B4wCJH3k.js";import"./getZIndexFromUnknown--EE_dzZC.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-7tXAQg_z.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const lt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
