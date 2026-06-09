import{R as e}from"./iframe-AkXMTiN1.js";import{R as i}from"./zIndexSlice-D2IbpIG9.js";import{C as a}from"./ComposedChart-CbcedsfM.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-Dmrq6l5z.js";import{X as s}from"./XAxis-pJLX02b7.js";import{Y as c}from"./YAxis-oXwNoYI-.js";import{L as d}from"./Line-bSxVFdvW.js";import{R as g}from"./ReferenceLine-S9fAtnU2.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CGdqiLEl.js";import"./index-DO9nmyvc.js";import"./index-B7ESZsek.js";import"./get-hfJl8nDX.js";import"./resolveDefaultProps-Cb6CyAiD.js";import"./isWellBehavedNumber-BjHph-L0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BFfZ1OV4.js";import"./index-Dvk2Reae.js";import"./index-cd3KTdjN.js";import"./renderedTicksSlice-CIoFYl-j.js";import"./axisSelectors-DNRIweDw.js";import"./d3-scale-uKys2Prv.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DuevVog_.js";import"./chartDataContext-krnp3gzW.js";import"./CategoricalChart-Bbv_9Kq1.js";import"./CartesianAxis-nu48EpeM.js";import"./Layer-BbfEqMjd.js";import"./Text-B8TabNrv.js";import"./DOMUtils-tdyvfO_t.js";import"./Label-yi6vcZhu.js";import"./ZIndexLayer-2Zb-HEnP.js";import"./types-eY1LNeEN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DjnTfF-s.js";import"./step-Du2Dxzc7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DMUwO7tR.js";import"./useAnimationId-DnVrzYZK.js";import"./ActivePoints-CsE5DRnu.js";import"./Dot-CXwe2hvn.js";import"./RegisterGraphicalItemId-GDKh1K9_.js";import"./ErrorBarContext-DPoGAGab.js";import"./GraphicalItemClipPath-D9xbA8oG.js";import"./SetGraphicalItem-D-MN-a76.js";import"./getRadiusAndStrokeWidthFromDot-CXAjyQPs.js";import"./ActiveShapeUtils-cQX6UbLq.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
