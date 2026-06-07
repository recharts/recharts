import{R as t}from"./iframe-ZPRKoU1G.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BsSz6rnO.js";import{B as p}from"./BarChart-Gt_QYA7O.js";import{X as l}from"./XAxis-C6ITfnkV.js";import{Y as h}from"./YAxis-CL1cp1D0.js";import{B as x}from"./Brush-CX7TOJuG.js";import{B as c}from"./Bar-DOMMTlAp.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Dqh26iK6.js";import"./index-CDtIYzd-.js";import"./index-DWchyl7z.js";import"./get-CGa3_Ok6.js";import"./resolveDefaultProps-DXwWTI5c.js";import"./isWellBehavedNumber-C1VSg6lY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BYyxQWjf.js";import"./index-D9shaHbl.js";import"./index-CyTcUuX3.js";import"./renderedTicksSlice-Bj0AstQ5.js";import"./axisSelectors-B6X9oFFj.js";import"./d3-scale-YZIwu0YS.js";import"./string-B6fdYHAA.js";import"./CartesianChart-9gHk08A4.js";import"./chartDataContext-C8DnaOK4.js";import"./CategoricalChart-C8cl1dv9.js";import"./CartesianAxis-BoMdju9k.js";import"./Layer-Cw8ar51S.js";import"./Text-Cx16epvV.js";import"./DOMUtils-CWTdPns0.js";import"./Label-BBlujwtM.js";import"./ZIndexLayer-C_hsauba.js";import"./types-BUDAoUUu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-Cu_qaLjm.js";import"./AnimatedItems-D4M5eO1p.js";import"./useAnimationId-CZUjtEje.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ToWWd5IB.js";import"./ActiveShapeUtils-T50lNrG4.js";import"./RegisterGraphicalItemId-NfBTs_Yc.js";import"./ErrorBarContext-C1hygpA9.js";import"./GraphicalItemClipPath-DcCaGC5D.js";import"./SetGraphicalItem-Dl4Vmegz.js";import"./getZIndexFromUnknown-BLYZ8KBm.js";import"./graphicalItemSelectors-Ca7XSQj9.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
