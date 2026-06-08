import{R as t}from"./iframe-CLYMtVVU.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CYEFLgyb.js";import{B as p}from"./BarChart-IIQQ7lBQ.js";import{X as l}from"./XAxis-CBhmV7sv.js";import{Y as h}from"./YAxis-Cpo1C8HM.js";import{B as x}from"./Brush-B4OHHkQr.js";import{B as c}from"./Bar-Bbnf3h2h.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-C-1Bq0C7.js";import"./index-D6XAYvxn.js";import"./index-C3oYNXo1.js";import"./get-DSRRGDfq.js";import"./resolveDefaultProps-CfuK3i5d.js";import"./isWellBehavedNumber-Dc0RpdQ2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-jnQrHFKT.js";import"./index-D3KBwDZ7.js";import"./index-CUSuyme2.js";import"./renderedTicksSlice-6fh8zoWq.js";import"./axisSelectors-BM98nGPd.js";import"./d3-scale-Beg35rGW.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BTxrU-fy.js";import"./chartDataContext-BVNdEBob.js";import"./CategoricalChart-DtR6LZhP.js";import"./CartesianAxis-BkW0Yyb6.js";import"./Layer-Bl-M4NCf.js";import"./Text-qYO8jmtc.js";import"./DOMUtils-4OHTktxt.js";import"./Label-m25-3SN6.js";import"./ZIndexLayer-DaVYg93h.js";import"./types-Bp6tCXm1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-BCitiStO.js";import"./AnimatedItems-fTI7Y-Cy.js";import"./useAnimationId-CPzMxfeA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dixlt82o.js";import"./ActiveShapeUtils-BVcr_xDt.js";import"./RegisterGraphicalItemId-DiMQaNFZ.js";import"./ErrorBarContext-CoCRg6bd.js";import"./GraphicalItemClipPath-DWrBQcDT.js";import"./SetGraphicalItem-B11_FOSD.js";import"./getZIndexFromUnknown-BZvK3N1I.js";import"./graphicalItemSelectors-CJLRFKOw.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
