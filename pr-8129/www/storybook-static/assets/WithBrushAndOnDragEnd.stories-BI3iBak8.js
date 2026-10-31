import{R as t}from"./iframe-COxqCazb.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-B4X5qRzI.js";import{B as p}from"./BarChart-CV1dDNyA.js";import{X as l}from"./XAxis-DQrBzVHK.js";import{Y as h}from"./YAxis-ZsGxmqjy.js";import{B as x}from"./Brush-5UmO2Q57.js";import{B as c}from"./Bar-DM4sU8KG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-yMt3tC3j.js";import"./throttle-D4LJPOuI.js";import"./index-CmlNloJu.js";import"./index-BFPgWdWH.js";import"./RechartsWrapper-MgEDcD8h.js";import"./axisSelectors-uSjAZrah.js";import"./polarAxisSelectors-a1oAG-SZ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D8xTnIof.js";import"./index-BQ5RDrN3.js";import"./index-BymcG2zO.js";import"./renderedTicksSlice-CPgi-eJ3.js";import"./index-BE8xWht0.js";import"./CartesianChart-lA_wA_-C.js";import"./ZIndexPortal-B9PAyW6q.js";import"./CategoricalChart-C0aYCun5.js";import"./CartesianAxis-CjYDk6nf.js";import"./Layer-D2zViLNQ.js";import"./Text-C4rvSXOn.js";import"./DOMUtils-BLBk64WL.js";import"./pageBackground-zdIyeBG0.js";import"./ZIndexLayer-cSzqGwkX.js";import"./Label-BiNM6_QG.js";import"./types-3E7AO6tV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-HVISG19w.js";import"./LabelList-DLxGydTH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DcH1741B.js";import"./useAnimationId-CI1eTN6X.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DhrWvn7z.js";import"./tooltipContext-Cm1PQ1zm.js";import"./dataEntryStyles-DJkgxm7x.js";import"./ErrorBarContext-CSA0hXTc.js";import"./activeStyles-Dz5dwfdA.js";import"./SetGraphicalItem-DfnH2C1-.js";import"./getZIndexFromUnknown-gyH2FH8p.js";import"./useEffectiveDataKey-DbCVmzAC.js";import"./omit-DVHSWUAv.js";import"./isArguments-yB-y1yaH.js";const xt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ct=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ct as __namedExportsOrder,xt as default};
