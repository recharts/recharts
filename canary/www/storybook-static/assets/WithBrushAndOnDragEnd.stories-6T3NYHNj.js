import{R as t}from"./iframe-DwjhlfMW.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-B1eqx357.js";import{B as p}from"./BarChart-DgEbKWOy.js";import{X as l}from"./XAxis-BypJb1q6.js";import{Y as h}from"./YAxis-DCYSznIj.js";import{B as x}from"./Brush-BR5k7AUX.js";import{B as c}from"./Bar-BwVjV1PL.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-KAp-qu0T.js";import"./index-DEuGyOjS.js";import"./index-BGwBnv2j.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CEwq-pLy.js";import"./isWellBehavedNumber-Ck5vetYF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DfYeCvHJ.js";import"./axisSelectors-BLfWrXUN.js";import"./d3-scale-ONQE_M5R.js";import"./index-1dx-TPak.js";import"./index-u7UrDuUK.js";import"./renderedTicksSlice-CYiI8XB-.js";import"./index-Di1osVNT.js";import"./CartesianChart-nX1tU7iU.js";import"./chartDataContext-CIXOSwbU.js";import"./CategoricalChart-C8RwzjmY.js";import"./CartesianAxis-_QUC34Jt.js";import"./Layer-Pu2wX4UR.js";import"./Text-Fn7sKK4t.js";import"./DOMUtils-DNcH8Otg.js";import"./useId-CjpXrJxi.js";import"./useBackwardsCompatibleTheme-B5uR-87m.js";import"./Label-CDX3QCgQ.js";import"./ZIndexLayer-D63gMRTb.js";import"./types-BUORd8J7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-0LuF_asA.js";import"./useAnimationId-AvDok9ug.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cug13k1c.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CRTLiydv.js";import"./tooltipContext-DeT4dGIe.js";import"./RegisterGraphicalItemId-LQahHGMW.js";import"./ErrorBarContext-D4j3Tcrr.js";import"./GraphicalItemClipPath-HnyZhYrt.js";import"./SetGraphicalItem-Ci5JV0yp.js";import"./getZIndexFromUnknown-BRqqzz0G.js";import"./useGraphicalItemIdentity-DLGtb43T.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
