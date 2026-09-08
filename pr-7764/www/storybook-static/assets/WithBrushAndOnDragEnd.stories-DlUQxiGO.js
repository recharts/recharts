import{R as t}from"./iframe-BKCxgEu7.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DPN7gMs_.js";import{B as p}from"./BarChart-D8rInrXx.js";import{X as l}from"./XAxis-DBpqCofo.js";import{Y as h}from"./YAxis-_Uh6yuoH.js";import{B as x}from"./Brush-CCOXD2vI.js";import{B as c}from"./Bar-FLMthQSt.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-SvLRig2f.js";import"./index-C0FXEVD9.js";import"./index-ByWdUQTm.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-hjqhlyP6.js";import"./isWellBehavedNumber-4uIsFCV6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BUOX-u1t.js";import"./axisSelectors-D2VU5o1r.js";import"./d3-scale-fKLPTI5B.js";import"./index-BQwfhQz_.js";import"./index-bhQBCTAA.js";import"./renderedTicksSlice-7MFbI2Ip.js";import"./index-BL0gWy2l.js";import"./CartesianChart-Dx01wauZ.js";import"./chartDataContext-D7QilCwv.js";import"./CategoricalChart-TFuOhU4H.js";import"./CartesianAxis-CuN00Lvq.js";import"./Layer-GDBs0RPs.js";import"./Text-DbzVeL34.js";import"./DOMUtils-B8pyYDTq.js";import"./useId-DtzVtqW0.js";import"./useBackwardsCompatibleTheme-D4Zi4gsK.js";import"./Label-D0bShNKS.js";import"./ZIndexLayer-Bi2QbHjK.js";import"./types--eHqqtV8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BXOuP06z.js";import"./useAnimationId-Dludl8d_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DaSdwAeX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-EGktKins.js";import"./tooltipContext-CG3e_Drv.js";import"./RegisterGraphicalItemId-DzHzaEjw.js";import"./ErrorBarContext-8H81gPWM.js";import"./GraphicalItemClipPath-Qfm8sxPZ.js";import"./SetGraphicalItem-BTjD6Tnz.js";import"./getZIndexFromUnknown-DPP7UlyI.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DKPOYdjf.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
