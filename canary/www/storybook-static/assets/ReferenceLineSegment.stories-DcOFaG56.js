import{R as e}from"./iframe-ZSAsyeui.js";import{R as i}from"./zIndexSlice-Dv-5_8A6.js";import{C as n}from"./ComposedChart-D3WKujQY.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CFdrtYzo.js";import{X as s}from"./XAxis-CE4c8ci4.js";import{Y as c}from"./YAxis-89VrmUc2.js";import{L as d}from"./Line-DtZqeDqI.js";import{R as g}from"./ReferenceLine-N24roubS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CzYlkvqW.js";import"./throttle-D-BJc2jV.js";import"./index-OvyM_4Sm.js";import"./index-DjKI25gJ.js";import"./RechartsWrapper-BzidFlVd.js";import"./axisSelectors-B8o8U7qV.js";import"./polarAxisSelectors-BqI7JiW5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CC-JJjQv.js";import"./index-uqJ6YOvZ.js";import"./index-zauSQ6TS.js";import"./renderedTicksSlice-CWxjmG2R.js";import"./index-DD-2LlvS.js";import"./CartesianChart-CMZp9es4.js";import"./ZIndexPortal-CvnMM87Z.js";import"./CategoricalChart-D-416rq6.js";import"./CartesianAxis-BLajEobP.js";import"./Layer-DRoxmpYI.js";import"./Text-BRlBLGWa.js";import"./pageBackground-BD4buOa5.js";import"./ZIndexLayer-C2WKPlYv.js";import"./Label-ooeO0hBy.js";import"./types-DmKiIpv6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-Czqktp7G.js";import"./step-agpXYCOV.js";import"./path-DyVhHtw_.js";import"./LabelList-Xwc-TPit.js";import"./ActivePoints-BfGk3pVb.js";import"./Dot-BEWDPMal.js";import"./activeStyles-BfRigOWz.js";import"./useAnimationId-DVzTYwao.js";import"./dataEntryStyles-D8AFB-Xx.js";import"./Symbols-fzhinMEB.js";import"./symbol-fTzakvJ7.js";import"./ErrorBarContext-Cg5WWOob.js";import"./SetGraphicalItem-BULml3ZG.js";import"./getRadiusAndStrokeWidthFromDot-RjCFhzne.js";import"./ActiveShapeUtils-PjK4neH_.js";import"./useEffectiveDataKey-DWBa4tvD.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
