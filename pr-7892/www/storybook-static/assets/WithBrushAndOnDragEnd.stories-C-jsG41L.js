import{R as t}from"./iframe-C0YxDW4G.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DZlnymAS.js";import{B as p}from"./BarChart-CX24wjyG.js";import{X as l}from"./XAxis-Cpmqfpq_.js";import{Y as h}from"./YAxis-DweGkw3n.js";import{B as x}from"./Brush-Dq5d5d1X.js";import{B as c}from"./Bar-CbhUQTYm.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DOQHZSoJ.js";import"./index-BVdk1KvG.js";import"./index-CKK11yAc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DJlTwR1C.js";import"./isWellBehavedNumber-BBCyva1N.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BlkZ7fGa.js";import"./axisSelectors-nVTOJQip.js";import"./d3-scale-DUyT1Gjc.js";import"./index-BIhmmbcr.js";import"./index-B97k9itH.js";import"./renderedTicksSlice-BVS-v-zq.js";import"./index-Cpic7GAq.js";import"./CartesianChart-CyMga4mL.js";import"./chartDataContext-DVZlfd-d.js";import"./CategoricalChart-BIr7jbpw.js";import"./CartesianAxis-d866ov5z.js";import"./Layer-tJBN4qpr.js";import"./Text-BVHk9liS.js";import"./DOMUtils-CbyUgj5a.js";import"./useId-DohVK8l3.js";import"./useBackwardsCompatibleTheme-CKP3ZQ-p.js";import"./Label-gEQqlFEh.js";import"./ZIndexLayer-D7SEoPy2.js";import"./types-CmslNM9O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DNNl8m9z.js";import"./useAnimationId-BpnQNYpV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cdyy37-n.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ZNrpT7nq.js";import"./tooltipContext-DYl4GNw5.js";import"./RegisterGraphicalItemId-DyGH3H1s.js";import"./ErrorBarContext-_SzMhsus.js";import"./GraphicalItemClipPath-BMlAd1SQ.js";import"./SetGraphicalItem-BTB5LVHV.js";import"./getZIndexFromUnknown-ELRPR1JY.js";import"./useGraphicalItemIdentity-BFvVeiu2.js";import"./dataEntryStyles-BpByYVhN.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};
