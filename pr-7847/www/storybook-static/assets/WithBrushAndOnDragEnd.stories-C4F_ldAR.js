import{R as t}from"./iframe-hd_pfHvo.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Dp2BKzs8.js";import{B as p}from"./BarChart-CgItXA7w.js";import{X as l}from"./XAxis-DIhH_NdP.js";import{Y as h}from"./YAxis-Bfby8-tG.js";import{B as x}from"./Brush-B38yDRWX.js";import{B as c}from"./Bar-BRKuXka0.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C2q4COo1.js";import"./index-v0QewD8A.js";import"./index-SCBhOffb.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-drD7xYIQ.js";import"./isWellBehavedNumber-C1tuJPSP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CyksNjdk.js";import"./axisSelectors-eHIx7hMS.js";import"./d3-scale-CciOkO_z.js";import"./index-C3NZEEPx.js";import"./index-Dl1k2Uag.js";import"./renderedTicksSlice-CD7ArbZx.js";import"./index-zFom7GTd.js";import"./CartesianChart-lsa6cjfM.js";import"./chartDataContext-BzYnwGm5.js";import"./CategoricalChart-DK0H-Nig.js";import"./CartesianAxis-Bczd13d5.js";import"./Layer-egOiXfr6.js";import"./Text-C6732HHA.js";import"./DOMUtils-B5fqbFU1.js";import"./useId-_Yta7G-c.js";import"./useBackwardsCompatibleTheme-SiYIdPDZ.js";import"./Label-DeYie9Lh.js";import"./ZIndexLayer-BHjO29Bs.js";import"./types-B1tRcN2v.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DCH1YBa_.js";import"./useAnimationId-D0lfWmyy.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DOvVk1du.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BDpXGuZx.js";import"./tooltipContext-NM9A8S-z.js";import"./RegisterGraphicalItemId-_fhB3pIC.js";import"./ErrorBarContext-BU3wkqbx.js";import"./GraphicalItemClipPath-Bsg-Zi-D.js";import"./SetGraphicalItem-CYmPmGcd.js";import"./getZIndexFromUnknown-BFl9LL1A.js";import"./useGraphicalItemIdentity-hHj77cNE.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
