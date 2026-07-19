import{R as t}from"./iframe-B-yW787s.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CKRpx7FD.js";import{B as p}from"./BarChart-OjtfZpex.js";import{X as l}from"./XAxis-D0UXMK3L.js";import{Y as h}from"./YAxis-DGNSSBsi.js";import{B as x}from"./Brush-BrS-jIOT.js";import{B as c}from"./Bar-BDdLYF6G.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B8_9WF3N.js";import"./index-B8s4lwM0.js";import"./index-BLtMs8ww.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-D6vuKH4c.js";import"./isWellBehavedNumber-C_1nd4jU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DSpl9lP_.js";import"./index-TzX_ldyC.js";import"./index-Dh8eUehn.js";import"./renderedTicksSlice-EV44ZZNX.js";import"./axisSelectors-d9CW9W7w.js";import"./d3-scale-8a4kRHFN.js";import"./CartesianChart-B08PHStc.js";import"./chartDataContext-DOok0Cd4.js";import"./CategoricalChart-XTSjkgZQ.js";import"./CartesianAxis-BlaAel8_.js";import"./Layer-DVSBdCcq.js";import"./Text-DK2M6QxL.js";import"./DOMUtils-B0UrcgO-.js";import"./Label-BkxmYsWW.js";import"./ZIndexLayer-CdG-cca2.js";import"./types-DcTCoXGC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-CumBelWf.js";import"./AnimatedItems-CYFqV_Nm.js";import"./useAnimationId-o-X37ase.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DKB06qOF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dzsbq5DH.js";import"./RegisterGraphicalItemId-DeFh6f0i.js";import"./ErrorBarContext-D17CdNj4.js";import"./GraphicalItemClipPath-_Ex-IG4N.js";import"./SetGraphicalItem-NvPtwEe2.js";import"./getZIndexFromUnknown-jJhefbAF.js";import"./graphicalItemSelectors-D2riitBr.js";const dt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
