import{R as t}from"./iframe-CRd1fYKG.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BEDqBT5s.js";import{B as p}from"./BarChart-BGlGWu-H.js";import{X as l}from"./XAxis-CFDNTKtN.js";import{Y as h}from"./YAxis-CcTJnWbU.js";import{B as x}from"./Brush-CqMMlFxI.js";import{B as c}from"./Bar-B2l2QVd4.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DuXdSz_W.js";import"./index-Cu0dCOlk.js";import"./index-COR3Qgsn.js";import"./get-CAg3-hN5.js";import"./resolveDefaultProps-C_1LRrwf.js";import"./isWellBehavedNumber-IulUlDH2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CTRhzR3z.js";import"./index-Co5B8-DW.js";import"./index-Dyy4uRrG.js";import"./renderedTicksSlice-BwoXfhkK.js";import"./axisSelectors-CW_HZ1K1.js";import"./d3-scale-Bw_PCS9h.js";import"./string-B6fdYHAA.js";import"./CartesianChart-_Ts9MuUK.js";import"./chartDataContext-24IFZ5R3.js";import"./CategoricalChart-7SQT56eo.js";import"./CartesianAxis-BngYAupc.js";import"./Layer-uzXkuSL7.js";import"./Text-BzOWhyUQ.js";import"./DOMUtils-meWqI4ST.js";import"./Label-GPMVhHkr.js";import"./ZIndexLayer-CMZSY73E.js";import"./types-fr95e_gP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-C8nmrFbH.js";import"./AnimatedItems-CGUpOpVe.js";import"./useAnimationId-B3UhTZxg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-KYXVSxkg.js";import"./ActiveShapeUtils-DdflEQCA.js";import"./RegisterGraphicalItemId-CFlZHpEu.js";import"./ErrorBarContext-DHhZn8TN.js";import"./GraphicalItemClipPath-BHaSLCrX.js";import"./SetGraphicalItem-DVL07t4G.js";import"./getZIndexFromUnknown-TK1WiTz2.js";import"./graphicalItemSelectors-BzME9kzL.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
