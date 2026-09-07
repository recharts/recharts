import{R as t}from"./iframe-ZwmkHOWK.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-B8sjij8M.js";import{B as p}from"./BarChart-DXZOnZCN.js";import{X as l}from"./XAxis-C1z9LD8A.js";import{Y as h}from"./YAxis-PaDHJ4i8.js";import{B as x}from"./Brush-CYrc9s6-.js";import{B as c}from"./Bar-DWXDaHTG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C39dOrQS.js";import"./index-B4E9I_5C.js";import"./index-BAGpmxlA.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CbN-GnY2.js";import"./isWellBehavedNumber-DzkihPO6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CLkBAicL.js";import"./axisSelectors-DaNNrydT.js";import"./d3-scale-DKWhOpVH.js";import"./index-BAV2Qa9k.js";import"./index-Cf44-e7y.js";import"./renderedTicksSlice-CKHEQg46.js";import"./index-DyLWGJaj.js";import"./CartesianChart-B4XfQoQU.js";import"./chartDataContext-Dk9qGRs-.js";import"./CategoricalChart-CMRgznGD.js";import"./CartesianAxis-Djmj8VDf.js";import"./Layer-i_0u2Crx.js";import"./Text-BI3-3dXY.js";import"./DOMUtils-CP0ZeXZR.js";import"./useId-CFRlQjhC.js";import"./useBackwardsCompatibleTheme-CHv0D4hM.js";import"./Label-BVR5F0n2.js";import"./ZIndexLayer-Bm6SGbYz.js";import"./types-v1ATzDHk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CFufr1UH.js";import"./useAnimationId-BCL-lQv_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BqK5FaGX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CuQ7F7ce.js";import"./tooltipContext-CfqH0KIF.js";import"./RegisterGraphicalItemId-DwO6JeUN.js";import"./ErrorBarContext-ik09lEWu.js";import"./GraphicalItemClipPath-DA7NUISl.js";import"./SetGraphicalItem-D-pUVL2E.js";import"./getZIndexFromUnknown-A30bylKl.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CYn-McYw.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
