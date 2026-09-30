import{R as t}from"./iframe-DrNDVdUV.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CtU9gDeX.js";import{B as p}from"./BarChart-BRvsTeAW.js";import{X as l}from"./XAxis-CYMSKzPe.js";import{Y as h}from"./YAxis-xS1LCjGi.js";import{B as x}from"./Brush-C_jOLLj0.js";import{B as c}from"./Bar-IsNWTNL_.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-yi_4PIaU.js";import"./index-CcUsqpS-.js";import"./index-uubsNt5S.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CGCnXzV6.js";import"./isWellBehavedNumber-6ms7Qni5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CftVGGIb.js";import"./axisSelectors-83UqlNkf.js";import"./d3-scale-Dtw5RV1H.js";import"./index-C02YBhOv.js";import"./index-DG6hdvW2.js";import"./renderedTicksSlice-D-gEAZZ9.js";import"./index-f04P2rVP.js";import"./CartesianChart-AI3x8M6-.js";import"./chartDataContext-B5-7BCeK.js";import"./CategoricalChart-CAcrwHX_.js";import"./CartesianAxis-D9QKlyxu.js";import"./Layer-MqQXVAAH.js";import"./Text-B6IFXijX.js";import"./DOMUtils-CJOGT8qc.js";import"./useId-DvlibiBq.js";import"./useBackwardsCompatibleTheme-D28mWunQ.js";import"./Label-S1smMv2d.js";import"./ZIndexLayer-DVXiBMpv.js";import"./types-xpc3POF2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BSenOuGe.js";import"./useAnimationId-CQqGpr63.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CQDEI2OM.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DMJhm59f.js";import"./tooltipContext-B7HsC9gN.js";import"./RegisterGraphicalItemId-yZiy6jFu.js";import"./ErrorBarContext-DCn9mgoR.js";import"./GraphicalItemClipPath-BWcxuFET.js";import"./SetGraphicalItem-Cpl9rbNJ.js";import"./getZIndexFromUnknown-DsQqcOX-.js";import"./useGraphicalItemIdentity-CyeNl3AJ.js";import"./dataEntryStyles-JCaOpwA1.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
