import{R as e}from"./iframe-GbU_LfIz.js";import{R as i}from"./zIndexSlice-B-uY-xMG.js";import{C as n}from"./ComposedChart-B3bI5XzW.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BuQcpjWp.js";import{X as s}from"./XAxis-BQz4ccrC.js";import{Y as c}from"./YAxis-Dl6RuWF8.js";import{L as d}from"./Line-Cz7gfFzY.js";import{R as g}from"./ReferenceLine-0RnhuBIn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DaFP4Osr.js";import"./throttle-lL1L3VRP.js";import"./index-DYswmNhd.js";import"./index-CWvB4q6F.js";import"./RechartsWrapper-CBlrkAx1.js";import"./axisSelectors-plpcnepy.js";import"./polarAxisSelectors-CUkA6wv5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-m-_CTi_p.js";import"./index-Dg1dPLnL.js";import"./index-DZowzVKz.js";import"./renderedTicksSlice-D3e3FCUI.js";import"./index-C9cCXc93.js";import"./CartesianChart-6Jqeuu6_.js";import"./ZIndexPortal-CkMateYW.js";import"./CategoricalChart-C2S0aau2.js";import"./CartesianAxis-DWEGImEY.js";import"./Layer-DZ-BC5fp.js";import"./Text-CcmXBTPp.js";import"./DOMUtils-pcjvu5Mx.js";import"./ZIndexLayer-jPVQwjvI.js";import"./Label-BKofA95f.js";import"./types-D5h1KHjm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-BXWlStzO.js";import"./step-B7eAtOky.js";import"./path-DyVhHtw_.js";import"./LabelList-BpWQDUee.js";import"./ActivePoints-CJ_A0ZwJ.js";import"./Dot-BZZrGYAN.js";import"./activeStyles-7gml8bSR.js";import"./useAnimationId-3m5wK_ws.js";import"./dataEntryStyles-C8Sz1tul.js";import"./Symbols-RIc_sULF.js";import"./symbol-B34bQZE8.js";import"./ErrorBarContext-pjK3YX1O.js";import"./SetGraphicalItem-SS1PjTU8.js";import"./getRadiusAndStrokeWidthFromDot-DZIWxG1k.js";import"./ActiveShapeUtils-t8cc3cab.js";import"./useEffectiveDataKey-DF49AIat.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
