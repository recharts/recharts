import{R as t}from"./iframe-BISZbF8S.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-tLqWCh4O.js";import{B as p}from"./BarChart-Cl7zsDvn.js";import{X as l}from"./XAxis-DhvWA3ze.js";import{Y as h}from"./YAxis-m7WuayWG.js";import{B as x}from"./Brush-CAgPjT6G.js";import{B as c}from"./Bar-BruO2Mnt.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-qMyvzBrr.js";import"./index-hSuJddDh.js";import"./index-DIL3iNST.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Wc0qnLHS.js";import"./isWellBehavedNumber-C9XsHOt-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-een6OCKs.js";import"./index-BW9K1TDZ.js";import"./index-Ce0beIqY.js";import"./axisSelectors-SJG9ph2l.js";import"./d3-scale-DNcorMEn.js";import"./renderedTicksSlice-bJIEIhcB.js";import"./CartesianChart-GFukGdve.js";import"./chartDataContext-iswJ2W_c.js";import"./CategoricalChart-CluxlQf_.js";import"./CartesianAxis-D7TS5Yfq.js";import"./Layer-qSEbrkuT.js";import"./Text-DWq927Nt.js";import"./DOMUtils-CTLtTqZ2.js";import"./useId-DvaMlJaB.js";import"./useBackwardsCompatibleTheme-DE0n-uz4.js";import"./Label--u0r0Ebh.js";import"./ZIndexLayer-DScewirg.js";import"./types-DYnGyjc0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DssiNuXL.js";import"./useAnimationId-BeL21vg8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B6oc1dJQ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-PTy3S8F2.js";import"./tooltipContext-3qQsJ6sB.js";import"./RegisterGraphicalItemId-DfyOG4VN.js";import"./ErrorBarContext-DGuh-__T.js";import"./GraphicalItemClipPath-b6ezYgAg.js";import"./SetGraphicalItem-DKxsB3By.js";import"./getZIndexFromUnknown-4VqTvqPo.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C6O1LkkN.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const ht=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
