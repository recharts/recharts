import{R as t}from"./iframe-Byz0CZgU.js";import{u as a}from"./CategoricalChart-Dqx0x7Kl.js";import{R as p}from"./zIndexSlice-DotL-Jp7.js";import{C as s}from"./ComposedChart-C88qarp6.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CzBaFcfy.js";import{X as l}from"./XAxis-BUPL4hjC.js";import{Y as h}from"./YAxis-jlA8Ias5.js";import{L as c}from"./Legend-D2dToN1F.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D5qdTAip.js";import"./index-CNmE48Wz.js";import"./index-D4FuUZjH.js";import"./index-CK-fZH2A.js";import"./index-CQCdoqal.js";import"./throttle-4aokm5Ko.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BW0ZnHiJ.js";import"./axisSelectors-CN4g76wg.js";import"./resolveDefaultProps-DuQSjIkO.js";import"./isWellBehavedNumber-B1YKzF79.js";import"./d3-scale-D3FDPfRZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-QxAb7wSw.js";import"./chartDataContext-E1G0KTyW.js";import"./Layer-jJo0ut9m.js";import"./Curve-BcJaCZSu.js";import"./types-DE0YJD6S.js";import"./step-Cb3pk4Rp.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-2XdTa_Uh.js";import"./Label-DuUl9C5P.js";import"./Text-DEkD8bId.js";import"./DOMUtils-DwTCLKyl.js";import"./ZIndexLayer-DaxIl4jI.js";import"./useAnimationId-CqGGvgKC.js";import"./ActivePoints-CwZhWFk3.js";import"./Dot-B1fpIP2w.js";import"./RegisterGraphicalItemId-CPoQFzzX.js";import"./ErrorBarContext-D4-M1cf3.js";import"./GraphicalItemClipPath-CC2ibiyE.js";import"./SetGraphicalItem-D0qKavYL.js";import"./getRadiusAndStrokeWidthFromDot-BTyL3OgJ.js";import"./ActiveShapeUtils-RF04AL4M.js";import"./RechartsThemeContext-DfGqi-Ay.js";import"./CartesianAxis-B3F7THN1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-BVpfILPu.js";import"./symbol-CS8b5as0.js";import"./useElementOffset-Dpa0V5po.js";import"./uniqBy-BOokmjAX.js";import"./iteratee-JxZPr5ba.js";const ct={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["UsePlotArea"];export{e as UsePlotArea,gt as __namedExportsOrder,ct as default};
