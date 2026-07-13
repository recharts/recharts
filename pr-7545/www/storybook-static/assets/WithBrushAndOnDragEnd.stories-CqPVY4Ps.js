import{R as t}from"./iframe-DMOF2lK6.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DhTc22fH.js";import{B as p}from"./BarChart-UHL4ZIj_.js";import{X as l}from"./XAxis-D4z0E1S_.js";import{Y as h}from"./YAxis-RrgtBsUU.js";import{B as x}from"./Brush-DuDNEeM8.js";import{B as c}from"./Bar-CCKHmoTf.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DdV_xgY5.js";import"./index-CPzx0qn0.js";import"./index-DMOQZokV.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-y8-G4ZMe.js";import"./isWellBehavedNumber-dZNNr5ol.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-OXven1HQ.js";import"./index-D6CqkTNp.js";import"./index-CZ5vZ9qb.js";import"./renderedTicksSlice-Ba4-qyoV.js";import"./axisSelectors-CxjdpUYQ.js";import"./d3-scale-fRi62pfH.js";import"./CartesianChart-Dri7Y6-1.js";import"./chartDataContext-CTH0eIlx.js";import"./CategoricalChart-C3YmcWt7.js";import"./CartesianAxis-B3U1UDpz.js";import"./Layer-7eLuysDW.js";import"./Text-Diu2UmEV.js";import"./DOMUtils-BbhpPFQ_.js";import"./Label-BEoMP2Su.js";import"./ZIndexLayer-DUULPtO2.js";import"./types-CpWsykXF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-CXiCr-XV.js";import"./AnimatedItems-BdaIVj2C.js";import"./useAnimationId-Djm7sZoE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Czy0xVaV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CJ8DXgxz.js";import"./RegisterGraphicalItemId-CeE9Z4_x.js";import"./ErrorBarContext-B97mauET.js";import"./GraphicalItemClipPath-BUGzJbXN.js";import"./SetGraphicalItem-B-lQGR6o.js";import"./getZIndexFromUnknown-ZXt_eyeP.js";import"./graphicalItemSelectors-iCteOsSQ.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
