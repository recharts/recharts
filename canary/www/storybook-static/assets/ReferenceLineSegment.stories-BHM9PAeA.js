import{R as e}from"./iframe-GELhAUTo.js";import{R as i}from"./zIndexSlice-ClN2s-1U.js";import{C as a}from"./ComposedChart-CdCgkykE.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CfIIDz7w.js";import{X as s}from"./XAxis-Y85LtPOX.js";import{Y as c}from"./YAxis-CwCyZywx.js";import{L as d}from"./Line-5fxqjKcQ.js";import{R as g}from"./ReferenceLine-CoarbkMN.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DU3kigO2.js";import"./index-DTm2_Ebd.js";import"./index-Ch3aQyu8.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-i6Bf8Qe5.js";import"./isWellBehavedNumber-qNvGNJqB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CSC6kLWa.js";import"./index-fkyqtveo.js";import"./index-De1BUZgG.js";import"./renderedTicksSlice-DtvoFkYT.js";import"./axisSelectors-DqMTsyvT.js";import"./d3-scale-BXdsYgex.js";import"./CartesianChart-CnHKmmwZ.js";import"./chartDataContext-C1NesgAa.js";import"./CategoricalChart-DWJWD5d1.js";import"./CartesianAxis-C2iZYvRC.js";import"./Layer-1dFGvAkG.js";import"./Text-COlbwtoq.js";import"./DOMUtils-vC9OxNpg.js";import"./Label-D2gt0uaB.js";import"./ZIndexLayer-BJaQcl6Z.js";import"./types-CDH6nNS8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-C2-sTxrm.js";import"./step-DYVQ7D-O.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D0mvcaGm.js";import"./useAnimationId-Cjs3Y5s0.js";import"./ActivePoints-D0W1le7m.js";import"./Dot-Dfp7LnYV.js";import"./RegisterGraphicalItemId-CBE0jEK0.js";import"./ErrorBarContext-Cc-Db4VE.js";import"./GraphicalItemClipPath-BR4J-JYN.js";import"./SetGraphicalItem-CbnVMng4.js";import"./getRadiusAndStrokeWidthFromDot-DdGOUs2v.js";import"./ActiveShapeUtils-GEyAcK7d.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ne=["Segment"];export{t as Segment,ne as __namedExportsOrder,pe as default};
