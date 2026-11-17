import{R as e}from"./iframe-DgA6x1az.js";import{R as i}from"./zIndexSlice-BFMaekmq.js";import{C as n}from"./ComposedChart-ByKzrUfc.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-obB5dC-e.js";import{X as s}from"./XAxis-COtnzKrI.js";import{Y as c}from"./YAxis-Bq2KiL_g.js";import{L as d}from"./Line-D138P_9w.js";import{R as g}from"./ReferenceLine-DSCKScrC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-WkX6zUQT.js";import"./throttle-BeFzmqAe.js";import"./index-TMkZxmcU.js";import"./index-D3kvvSt0.js";import"./RechartsWrapper-DDZDydJY.js";import"./axisSelectors-BWYipoBl.js";import"./polarAxisSelectors-FlPJLKCl.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CFWCEDhR.js";import"./index-hmFEHNSs.js";import"./index-DfxP2LJH.js";import"./renderedTicksSlice-Cbzlud4G.js";import"./index-Bhp_Ctpy.js";import"./fillDefinitions-D7cR_ZXA.js";import"./CartesianChart-xScX7k_y.js";import"./chartDataContext-BQDV-mFo.js";import"./CategoricalChart-925-SQc0.js";import"./CartesianAxis-RM9TiRUv.js";import"./Layer-4UauM4-I.js";import"./Text-5b15Y2Dk.js";import"./ZIndexLayer-CKzh_iFN.js";import"./Label-SeLMQAdg.js";import"./types-BWKVAmkC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-9ffd66xL.js";import"./Curve-C1ngk-4z.js";import"./step-CeJDq7tp.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-C5svgbWd.js";import"./ActivePoints-D6pOQsPw.js";import"./Dot-DDXn63wb.js";import"./activeStyles-CoM8kTSe.js";import"./useAnimationId-DOzFiRYM.js";import"./Symbols-DrLVelb5.js";import"./symbol-CCLUbilH.js";import"./ErrorBarContext-BPyt6eZ1.js";import"./SetGraphicalItem-B9ymtMOj.js";import"./ActiveShapeUtils-CCImj5PR.js";import"./useEffectiveDataKey-B9lYa-g7.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,ge as __namedExportsOrder,de as default};
