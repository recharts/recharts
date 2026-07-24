import{R as t}from"./iframe-Bfq89VA1.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CIiurCy7.js";import{B as p}from"./BarChart-qFiXnrZ1.js";import{X as l}from"./XAxis-XWWA5Vcg.js";import{Y as h}from"./YAxis-BKOVychP.js";import{B as x}from"./Brush-DCnifqNQ.js";import{B as c}from"./Bar-CIlr7XdY.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D9Dxi9p7.js";import"./index-CYj6WtTt.js";import"./index-BrZplGoV.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-sI76rt8e.js";import"./isWellBehavedNumber-Cjy03S2S.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Clucjzln.js";import"./index-CJwKc2JD.js";import"./index-C5yh5hWX.js";import"./renderedTicksSlice-Bq1WS_1z.js";import"./axisSelectors-DeSjN-yN.js";import"./d3-scale-DNdF6BGI.js";import"./CartesianChart-BR20NBVb.js";import"./chartDataContext-CtFpG3fr.js";import"./CategoricalChart-C2BN44hW.js";import"./CartesianAxis-BwpzYsrw.js";import"./Layer-Ddny-Z-5.js";import"./Text-hgAABJUd.js";import"./DOMUtils-D5O5VN8V.js";import"./Label-TzQ05lix.js";import"./ZIndexLayer-BNbeMphj.js";import"./types-BzfB60xK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./tooltipContext-DxTmDpmc.js";import"./AnimatedItems-u8tbY5MQ.js";import"./useAnimationId-nFx4hlTa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-TJ7hJnR0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DWYip-It.js";import"./RegisterGraphicalItemId-Cqi3B4nU.js";import"./ErrorBarContext-C94DxYOd.js";import"./GraphicalItemClipPath-BPnHFI7W.js";import"./SetGraphicalItem-COSatqks.js";import"./getZIndexFromUnknown-DbJJeh79.js";import"./graphicalItemSelectors-CUTgWtLp.js";const mt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const st=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,st as __namedExportsOrder,mt as default};
