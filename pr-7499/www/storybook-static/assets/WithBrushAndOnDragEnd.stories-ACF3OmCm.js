import{R as t}from"./iframe-s6xAG-TK.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CtX8Pm57.js";import{B as p}from"./BarChart-Dz4kMj1t.js";import{X as l}from"./XAxis-ILbWypkw.js";import{Y as h}from"./YAxis-CJIerEpJ.js";import{B as x}from"./Brush-B7G4hKhM.js";import{B as c}from"./Bar-BBS2DtI_.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BuLmScwe.js";import"./index-C431joee.js";import"./index-ClUWeLMF.js";import"./get-BoCVnOHD.js";import"./resolveDefaultProps-DFiMRXbi.js";import"./isWellBehavedNumber-DWpsZI7G.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-NYzcnM5V.js";import"./index-T8sAqFhz.js";import"./index-BrFiGA_R.js";import"./renderedTicksSlice-iMX2N49n.js";import"./axisSelectors-w5mwcrs7.js";import"./d3-scale-B4pAi3sm.js";import"./CartesianChart-B3y1BcT9.js";import"./chartDataContext-CYY09pFO.js";import"./CategoricalChart-DLOwP-Jg.js";import"./CartesianAxis-Bzfqb5iI.js";import"./Layer-D5OpM5xs.js";import"./Text-9u_bHJZt.js";import"./DOMUtils-Dzx6jDk6.js";import"./Label-Dp2fRDxb.js";import"./ZIndexLayer-DbooohNT.js";import"./types-DdoD64CJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-L0VMoWlQ.js";import"./AnimatedItems-BLpXLA7r.js";import"./useAnimationId-BfD45VPw.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BvbdU8mA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BRE298QS.js";import"./RegisterGraphicalItemId-irkeH_pD.js";import"./ErrorBarContext-Df3lolWT.js";import"./GraphicalItemClipPath-PteXji-2.js";import"./SetGraphicalItem-BaveM8kS.js";import"./getZIndexFromUnknown-6xPP3i8z.js";import"./graphicalItemSelectors-dZUwQqOx.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
