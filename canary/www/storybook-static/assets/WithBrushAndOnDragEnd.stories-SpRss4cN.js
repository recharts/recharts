import{R as t}from"./iframe-DSiB0Y2h.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DXbXK2p0.js";import{B as p}from"./BarChart-5hWWpytE.js";import{X as l}from"./XAxis-DKaEKDyo.js";import{Y as h}from"./YAxis-BvhfxNjy.js";import{B as x}from"./Brush-DwUG1sXG.js";import{B as c}from"./Bar-C26NfWT5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B3UghvKT.js";import"./index-N88jlccS.js";import"./index-BxYFwyjs.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-dV1CHodA.js";import"./isWellBehavedNumber-CZNGJ9iq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CKOYxrgU.js";import"./index-DX0fo1e7.js";import"./index-BwXkalY4.js";import"./renderedTicksSlice-BPUsumAR.js";import"./axisSelectors-m-5JnBq3.js";import"./d3-scale-DOzMXTTX.js";import"./CartesianChart-BjQVh-35.js";import"./chartDataContext-DRuezjZY.js";import"./CategoricalChart-GJIpj0Il.js";import"./CartesianAxis-CTswAcYo.js";import"./Layer-GefPfHKN.js";import"./Text-CK2osH-3.js";import"./DOMUtils-DPI9rQIs.js";import"./Label-SBQmZETs.js";import"./ZIndexLayer-DpR0ZeoC.js";import"./types-Ctc34oVc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-Djjej6CU.js";import"./AnimatedItems-DcXITJ0o.js";import"./useAnimationId-CcRzR4wj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DI-L60n8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BbSbze6M.js";import"./RegisterGraphicalItemId-ZES9vfqK.js";import"./ErrorBarContext-BQTwLW9q.js";import"./GraphicalItemClipPath-CUbr_GNl.js";import"./SetGraphicalItem-CMw9Vzf1.js";import"./getZIndexFromUnknown-CS1EybmX.js";import"./graphicalItemSelectors-T8-ppBBu.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const st=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,st as __namedExportsOrder,mt as default};
