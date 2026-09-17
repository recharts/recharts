import{R as t}from"./iframe-CCA1dLWD.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Bqs-eJ8p.js";import{B as p}from"./BarChart-CG4OVx1f.js";import{X as l}from"./XAxis-B02ZLuLQ.js";import{Y as h}from"./YAxis-DVlxFbm5.js";import{B as x}from"./Brush-CpHxIaVg.js";import{B as c}from"./Bar-BLI225vs.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D3xpLLdH.js";import"./index-C97djya6.js";import"./index-BTapAtmF.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DAFAxP68.js";import"./isWellBehavedNumber-CUTtCnYO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ci54jWLi.js";import"./axisSelectors-ueWwuThv.js";import"./d3-scale-BdepyZ_B.js";import"./index-Cyg8bGg4.js";import"./index-CVq5gi49.js";import"./renderedTicksSlice-CuWBxFlw.js";import"./index-Cah2JXyu.js";import"./CartesianChart-CTE6kj-2.js";import"./chartDataContext-CLCJusst.js";import"./CategoricalChart-mUCs8Qny.js";import"./CartesianAxis-ClD0AQ8W.js";import"./Layer-CmH8ISrU.js";import"./Text-Cxmc4hoL.js";import"./DOMUtils-B9q-UHbd.js";import"./useId-C-4rQrJ2.js";import"./useBackwardsCompatibleTheme-B-BtV5HU.js";import"./Label-C7jyVHZg.js";import"./ZIndexLayer-BsYZhZ4O.js";import"./types-B2426EfA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Bwhxgw5t.js";import"./useAnimationId-BZsPKArS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DTCXmGfs.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-zvjqERUF.js";import"./tooltipContext-B3TuinVb.js";import"./RegisterGraphicalItemId-BRUpoP9Q.js";import"./ErrorBarContext-C-MqMGv0.js";import"./GraphicalItemClipPath-DcQmHX6S.js";import"./SetGraphicalItem-6HsvsmQk.js";import"./getZIndexFromUnknown-tzFj9-cl.js";import"./useGraphicalItemIdentity-CJ147Nvu.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
