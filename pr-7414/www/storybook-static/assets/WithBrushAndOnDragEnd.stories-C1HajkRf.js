import{R as t}from"./iframe-D-W27Aye.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DGQfYPGt.js";import{B as p}from"./BarChart-CDguX1oc.js";import{X as l}from"./XAxis-gk42ZI-1.js";import{Y as h}from"./YAxis-1JyMBgNW.js";import{B as x}from"./Brush-j0zvkAmU.js";import{B as c}from"./Bar-DK0yZ8oU.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CbhGTgvn.js";import"./index-CWu2xMKi.js";import"./index-DLfEBe63.js";import"./get-BDQ-VaUY.js";import"./resolveDefaultProps-BroczFsN.js";import"./isWellBehavedNumber-Du_dam65.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D3NlvT8L.js";import"./index-DE37ce3k.js";import"./index-Cnxyq0Mm.js";import"./renderedTicksSlice-CN4MtC-5.js";import"./axisSelectors-BvFrWOiO.js";import"./d3-scale-BQjrtTI1.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BPw6EL6m.js";import"./chartDataContext-mE2SEo_G.js";import"./CategoricalChart-CsqvwlsS.js";import"./CartesianAxis-zyf7i4Uk.js";import"./Layer-BBvq20uw.js";import"./Text-Ch5M4wnL.js";import"./DOMUtils-ClafKG0n.js";import"./Label-xP0TYJi-.js";import"./ZIndexLayer-g9kGWnPX.js";import"./types-DQNR05Kl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-C5AUgsaf.js";import"./AnimatedItems-DVypXaLh.js";import"./useAnimationId-Bs22yXlG.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BaBIbp7f.js";import"./ActiveShapeUtils-D1Ceary0.js";import"./RegisterGraphicalItemId-EzN9TJ6u.js";import"./ErrorBarContext-CUSYqY7l.js";import"./GraphicalItemClipPath-C_UztI7f.js";import"./SetGraphicalItem-50FO49Qg.js";import"./getZIndexFromUnknown-CTjUHcCG.js";import"./graphicalItemSelectors-8PqpMo0U.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
