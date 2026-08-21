import{R as t}from"./iframe-CgNYO6-5.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BB8bPu9P.js";import{B as p}from"./BarChart-BCjo_wPT.js";import{X as l}from"./XAxis-C0BZU2xf.js";import{Y as h}from"./YAxis-BVStaARi.js";import{B as x}from"./Brush-B9t5Jeyl.js";import{B as c}from"./Bar-ByLvEFaA.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CLMZeuK1.js";import"./index-CP-P0bP3.js";import"./index-CNUb9tOf.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DdU6Jg07.js";import"./isWellBehavedNumber-hgWpBQUm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DQslZ_yd.js";import"./index-Dqgfl7Xj.js";import"./index-xSjlJOhZ.js";import"./axisSelectors-O08Nn3VB.js";import"./d3-scale-Bd_S1jK4.js";import"./renderedTicksSlice-BBv91KB4.js";import"./CartesianChart-BI9vfx5j.js";import"./chartDataContext-NHEnIpFz.js";import"./CategoricalChart-JtBUTVNJ.js";import"./CartesianAxis-DiTVEOFJ.js";import"./Layer-TfcNVFTj.js";import"./Text-CjIgHDXs.js";import"./DOMUtils-Cwa2E0AM.js";import"./useId-BaSa9afh.js";import"./useBackwardsCompatibleTheme-CvkC2w7r.js";import"./Label-DE97QbhK.js";import"./ZIndexLayer-BByjeLs4.js";import"./types-Un7Q3Ppr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CL4P6dH7.js";import"./useAnimationId-B1M8XMfI.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-FcnT4y7f.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DOY9-ZZr.js";import"./tooltipContext-_Boj1wYU.js";import"./RegisterGraphicalItemId-5U6GT5jV.js";import"./ErrorBarContext-DMrc2lGS.js";import"./GraphicalItemClipPath-CdOc_skb.js";import"./SetGraphicalItem-CAAg-5Jk.js";import"./getZIndexFromUnknown-CL1cGeCk.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B07WpZoW.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
