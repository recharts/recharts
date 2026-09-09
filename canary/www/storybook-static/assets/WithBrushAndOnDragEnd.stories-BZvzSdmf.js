import{R as t}from"./iframe-BzcDVKKs.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BTTYVccT.js";import{B as p}from"./BarChart-CJSvR4Tk.js";import{X as l}from"./XAxis-DmxgzYYf.js";import{Y as h}from"./YAxis-BWHP_SYF.js";import{B as x}from"./Brush-BPgWBN4e.js";import{B as c}from"./Bar-B4ygsPp5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DDPbgHA_.js";import"./index-Km9DigXp.js";import"./index-DjfWl8QV.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BtypfTmg.js";import"./isWellBehavedNumber-kEkRMq_8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CGczEQWO.js";import"./axisSelectors-IdMVp5Ng.js";import"./d3-scale-C4pPFzlU.js";import"./index-BATPxOFC.js";import"./index-9IUtScc_.js";import"./renderedTicksSlice-Cv0ctYuN.js";import"./index-DrsmB6aN.js";import"./CartesianChart-BPCp3bVQ.js";import"./chartDataContext-DN2d-1N9.js";import"./CategoricalChart-BpKMrWac.js";import"./CartesianAxis-HfL3rF1Y.js";import"./Layer-B4cUMoCn.js";import"./Text-24J6FH-o.js";import"./DOMUtils-Bp1Ea9M_.js";import"./useId-BlYRNzJn.js";import"./useBackwardsCompatibleTheme-ncr2oU_w.js";import"./Label-CtBQk67s.js";import"./ZIndexLayer-DXdU7RWt.js";import"./types-Cgo5Tovd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-tb47PotV.js";import"./useAnimationId-B_k41OIp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DA-7Dq-R.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ck9I3ldI.js";import"./tooltipContext-CB8didm_.js";import"./RegisterGraphicalItemId-D5DmGuV-.js";import"./ErrorBarContext-C3FB8ozV.js";import"./GraphicalItemClipPath-Cfm3NAku.js";import"./SetGraphicalItem-CNRXuHZw.js";import"./getZIndexFromUnknown-DS03evKO.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-tWVYkbkT.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
