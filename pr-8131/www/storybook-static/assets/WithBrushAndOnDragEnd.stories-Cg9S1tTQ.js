import{R as t}from"./iframe-CSurJGXt.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DeOoXCvu.js";import{B as p}from"./BarChart-P-wc1its.js";import{X as l}from"./XAxis-DPspp0Rg.js";import{Y as h}from"./YAxis-COz_c9GE.js";import{B as x}from"./Brush-kydFCt0Q.js";import{B as c}from"./Bar-DTR8tN3_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CLiXTxMl.js";import"./throttle-BimBWg8F.js";import"./index-BLu4PMPi.js";import"./index-DXQ1HyAX.js";import"./RechartsWrapper-C5uJkji8.js";import"./axisSelectors-BTded_EU.js";import"./polarAxisSelectors-D8qEX0kp.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-wNVR4pxp.js";import"./index-DL-0zMUZ.js";import"./index-By1e8KSj.js";import"./renderedTicksSlice-BulAjXaG.js";import"./index-BUjegfsF.js";import"./fillDefinitions-Dy2IhL03.js";import"./CartesianChart-BYJBOySk.js";import"./ZIndexPortal-B_GPxKbG.js";import"./CategoricalChart-CMXRpEe-.js";import"./CartesianAxis-CCV5sIGf.js";import"./Layer-CuCaFJUW.js";import"./Text-D1wUWC9f.js";import"./DOMUtils-Ch0i58SB.js";import"./ZIndexLayer-7wO-Br8Q.js";import"./Label-B_q4DRvh.js";import"./types-DAGGFXxQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-Dzy6Gaop.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D1IvnXW0.js";import"./useAnimationId-BxuBL60s.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-lYTYoEV1.js";import"./tooltipContext-DxTbI9zA.js";import"./dataEntryStyles-DMbzXUIb.js";import"./ErrorBarContext-ORq27qm1.js";import"./activeStyles-DIe-HGPn.js";import"./SetGraphicalItem-S8ZD9BPZ.js";import"./getZIndexFromUnknown-DJ6dv0rU.js";import"./useEffectiveDataKey-DXY519D2.js";import"./omit-CQ7623FA.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
