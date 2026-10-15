import{R as e}from"./iframe-D_03ePl7.js";import{R as i}from"./zIndexSlice-gI7CPKt8.js";import{C as n}from"./ComposedChart-BTDnFjfj.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BHX9vQGB.js";import{X as s}from"./XAxis-CjKd6FOO.js";import{Y as c}from"./YAxis-BYLx-dFj.js";import{L as d}from"./Line-BNGgDTi-.js";import{R as g}from"./ReferenceLine-DKWok0Hx.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DlozmNLH.js";import"./index-CbBA7rES.js";import"./index-Hu7BLM9I.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C_535qvz.js";import"./isWellBehavedNumber-08WJO6-p.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_Jo0xL0.js";import"./axisSelectors-CyxZNoxv.js";import"./d3-scale-CS5gmyGm.js";import"./index-DmfSCfAr.js";import"./index-CsBIVix0.js";import"./renderedTicksSlice-DL9pT9-E.js";import"./index-Dlf7H1uA.js";import"./CartesianChart-B_RdHXsl.js";import"./chartDataContext-sh7W2Xea.js";import"./CategoricalChart-Wu8m05Op.js";import"./CartesianAxis-C3nD1dv8.js";import"./Layer-PN0rvZRP.js";import"./Text-Z5PwaRTj.js";import"./pageBackground-2sAJZ1tz.js";import"./useId-BHfhqUC8.js";import"./useBackwardsCompatibleTheme-CFqJibBS.js";import"./Label-BQXHRFnW.js";import"./ZIndexLayer-CAYdtHvW.js";import"./types-dtQ43_yo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BOXPF2Cl.js";import"./step-P_HLonsz.js";import"./path-DyVhHtw_.js";import"./activeStyles-BEtEtj28.js";import"./useAnimationId-CBDTDHfD.js";import"./dataEntryStyles-eD8YHQf_.js";import"./ActivePoints-BxKnLR-Y.js";import"./Dot-WWJXawog.js";import"./ErrorBarContext-DFl8QQpS.js";import"./GraphicalItemClipPath-Dpw0HOzQ.js";import"./SetGraphicalItem-CJI-A4Bp.js";import"./getRadiusAndStrokeWidthFromDot-BIFluFxo.js";import"./ActiveShapeUtils-DGMvpmsE.js";import"./useEffectiveDataKey-OYuZWKUp.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};
