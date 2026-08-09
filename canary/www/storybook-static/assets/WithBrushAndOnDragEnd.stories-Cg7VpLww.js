import{R as t}from"./iframe-DiVXU681.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DzaA_87S.js";import{B as p}from"./BarChart-DqIKEgQr.js";import{X as l}from"./XAxis-C3k2I40a.js";import{Y as h}from"./YAxis-DRIG0Uth.js";import{B as x}from"./Brush-BUa8UZdB.js";import{B as c}from"./Bar-B1kBQUfc.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-TSFzffo4.js";import"./index-DgrTrvqA.js";import"./index-8IQM-0LL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CdAiRIhG.js";import"./isWellBehavedNumber-BX88-Alk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-wAcW42w2.js";import"./index-Crp3sUc9.js";import"./index-DVcmQSez.js";import"./axisSelectors-D56P7LNb.js";import"./d3-scale-BGRr8R4r.js";import"./renderedTicksSlice-CCTXP0cy.js";import"./CartesianChart-CTSm63aG.js";import"./chartDataContext-DPZzm9Zw.js";import"./CategoricalChart-DJdh8SdX.js";import"./CartesianAxis-pQr6RLfR.js";import"./Layer-BIRlOb6y.js";import"./Text-CCIULR2F.js";import"./DOMUtils-CLkaSbmi.js";import"./Label-0bv0xRMH.js";import"./ZIndexLayer-BbNui_5z.js";import"./types-VNyUreZc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BiKwVLZ_.js";import"./isBuffer-BG75eWKN.js";import"./tooltipContext-BNzkw3eR.js";import"./AnimatedItems-CmBbc9Cv.js";import"./useAnimationId-CxWNxwEQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-NkoMZfI8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DRcrzfDF.js";import"./RegisterGraphicalItemId-CjWwTgFZ.js";import"./ErrorBarContext-DQhhoIiU.js";import"./graphicalItemIdentity-D0Jl2Dn2.js";import"./SetGraphicalItem-CGIfPK7m.js";import"./getZIndexFromUnknown-CldbyVqp.js";import"./graphicalItemSelectors-BrOmBPmn.js";const st={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const pt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,pt as __namedExportsOrder,st as default};
