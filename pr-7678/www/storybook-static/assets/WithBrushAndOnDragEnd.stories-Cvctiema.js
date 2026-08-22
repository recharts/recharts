import{R as t}from"./iframe-ZEpSIPPd.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BjIiWKqJ.js";import{B as p}from"./BarChart-Dz9u4Hcc.js";import{X as l}from"./XAxis-rWesO0MY.js";import{Y as h}from"./YAxis-DcukXRO0.js";import{B as x}from"./Brush-BMWxkSfd.js";import{B as c}from"./Bar-DcX8kG5v.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-c8LVmlRW.js";import"./index-DwRwpWpN.js";import"./index-BYZIueV1.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BfzNSowR.js";import"./isWellBehavedNumber-BXmyHjL9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BN48ENvM.js";import"./index-BaEUmZiD.js";import"./index-GhGxj3CA.js";import"./axisSelectors-kRjPN5q_.js";import"./d3-scale-BCV9yzNX.js";import"./renderedTicksSlice-DKo3nyKY.js";import"./CartesianChart-BcBN8Odf.js";import"./chartDataContext-6sDrIT9e.js";import"./CategoricalChart-DKY1LJu7.js";import"./CartesianAxis-B5C14IH-.js";import"./Layer-BhDP8tdE.js";import"./Text-BkbZubVW.js";import"./DOMUtils-DDyTL2Su.js";import"./useId-DFrG6yke.js";import"./useBackwardsCompatibleTheme-6dZyRN7A.js";import"./Label-DozjEBv8.js";import"./ZIndexLayer-BvS-888Y.js";import"./types-PAtN0CzN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BTDiJp51.js";import"./useAnimationId-DTOSNt54.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CSNmICnV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D9QeB7oI.js";import"./tooltipContext-BI5bZPXd.js";import"./RegisterGraphicalItemId-gZSXozCr.js";import"./ErrorBarContext-CVqGi1a9.js";import"./GraphicalItemClipPath-DI_H7WUy.js";import"./SetGraphicalItem-C95qHxIx.js";import"./getZIndexFromUnknown-CYhE65Wg.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Ck4Z32za.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
