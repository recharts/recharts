import{R as t}from"./iframe-u4ce63CG.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BYJycarP.js";import{B as p}from"./BarChart-BzRd87RM.js";import{X as l}from"./XAxis-ycYuR5GD.js";import{Y as h}from"./YAxis-BSJWLgXb.js";import{B as x}from"./Brush-Dflw6ZgL.js";import{B as c}from"./Bar-BB6GK8L6.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B6MgLZYN.js";import"./index-BVP_svq1.js";import"./index-BKlhDgWa.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CgaWkI-c.js";import"./isWellBehavedNumber-DjD-6vVv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Zz5ful62.js";import"./axisSelectors-CGHflyYT.js";import"./d3-scale-B8KmfmKn.js";import"./index-pI1Zm9lH.js";import"./index-PkCf_CwH.js";import"./renderedTicksSlice-Cs4cysVU.js";import"./index-CMticpJd.js";import"./CartesianChart-Ddb32mjN.js";import"./chartDataContext-0PEmuSXk.js";import"./CategoricalChart-BiBJy5y7.js";import"./CartesianAxis-BCYFcWgI.js";import"./Layer-DNxK11xQ.js";import"./Text-B-fKZlN3.js";import"./DOMUtils-DPz05X-i.js";import"./useId-CDzZCSG6.js";import"./useBackwardsCompatibleTheme-BMXS8hwA.js";import"./Label-D-DGLST-.js";import"./ZIndexLayer-BDv8sIeq.js";import"./types-BSKo_D-h.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-B0QYHb0Z.js";import"./useAnimationId-CFY7vA8F.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Azk4KVCz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D76eZVf4.js";import"./tooltipContext-CN3j77Qg.js";import"./RegisterGraphicalItemId-CERn6dbU.js";import"./ErrorBarContext-D7weRgKB.js";import"./GraphicalItemClipPath-BkjNj3rm.js";import"./SetGraphicalItem-R2AcNzTI.js";import"./getZIndexFromUnknown-DaBZbLwo.js";import"./useGraphicalItemIdentity-DQSDp_oq.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
