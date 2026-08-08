import{R as t}from"./iframe-Dl6-w9Rh.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BRejfQU1.js";import{B as p}from"./BarChart-DBCr4WHz.js";import{X as l}from"./XAxis-DZSPPcQS.js";import{Y as h}from"./YAxis-Cc6mYSUk.js";import{B as x}from"./Brush-lTt2YeqR.js";import{B as c}from"./Bar-DmkwKYol.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-vxYlNOMT.js";import"./index-LxaBJEYH.js";import"./index-BASt_88m.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BxxTDuvn.js";import"./isWellBehavedNumber-65rXtzYC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CNKHADrp.js";import"./index-sYG2u-dS.js";import"./index-F3zVu6rR.js";import"./axisSelectors-BPD60Viv.js";import"./d3-scale-BucTPBl4.js";import"./renderedTicksSlice-UweUcv4l.js";import"./CartesianChart-BFdYz27M.js";import"./chartDataContext-DeefIzKJ.js";import"./CategoricalChart-Dp8ZNzIB.js";import"./CartesianAxis-Dak0cZYo.js";import"./Layer-DIMKS5Ou.js";import"./Text-CW2k0BE6.js";import"./DOMUtils-kehL2bh6.js";import"./Label-aNbwXPlv.js";import"./ZIndexLayer-DkX5oxcl.js";import"./types-Ddok_SrC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CVd-MmR3.js";import"./isBuffer-BG75eWKN.js";import"./tooltipContext-BVT296Lu.js";import"./AnimatedItems-D0kip4Wc.js";import"./useAnimationId-CYbASTF_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DbSzEXWo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DNhTZN0e.js";import"./RegisterGraphicalItemId-BYzCIqIq.js";import"./ErrorBarContext-BWMuP-dM.js";import"./GraphicalItemClipPath-vJoF-3M2.js";import"./SetGraphicalItem-DMp8jOcz.js";import"./getZIndexFromUnknown-DXcqlEmZ.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DdthWizv.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
