import{R as t}from"./iframe-Byz0CZgU.js";import{e as p}from"./CategoricalChart-Dqx0x7Kl.js";import{R as a}from"./zIndexSlice-DotL-Jp7.js";import{C as s}from"./ComposedChart-C88qarp6.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-CzBaFcfy.js";import{X as d}from"./XAxis-BUPL4hjC.js";import{Y as h}from"./YAxis-jlA8Ias5.js";import{L as g}from"./Legend-D2dToN1F.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D5qdTAip.js";import"./index-CNmE48Wz.js";import"./index-D4FuUZjH.js";import"./index-CK-fZH2A.js";import"./index-CQCdoqal.js";import"./throttle-4aokm5Ko.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BW0ZnHiJ.js";import"./axisSelectors-CN4g76wg.js";import"./resolveDefaultProps-DuQSjIkO.js";import"./isWellBehavedNumber-B1YKzF79.js";import"./d3-scale-D3FDPfRZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-QxAb7wSw.js";import"./chartDataContext-E1G0KTyW.js";import"./Layer-jJo0ut9m.js";import"./Curve-BcJaCZSu.js";import"./types-DE0YJD6S.js";import"./step-Cb3pk4Rp.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-2XdTa_Uh.js";import"./Label-DuUl9C5P.js";import"./Text-DEkD8bId.js";import"./DOMUtils-DwTCLKyl.js";import"./ZIndexLayer-DaxIl4jI.js";import"./useAnimationId-CqGGvgKC.js";import"./ActivePoints-CwZhWFk3.js";import"./Dot-B1fpIP2w.js";import"./RegisterGraphicalItemId-CPoQFzzX.js";import"./ErrorBarContext-D4-M1cf3.js";import"./GraphicalItemClipPath-CC2ibiyE.js";import"./SetGraphicalItem-D0qKavYL.js";import"./getRadiusAndStrokeWidthFromDot-BTyL3OgJ.js";import"./ActiveShapeUtils-RF04AL4M.js";import"./RechartsThemeContext-DfGqi-Ay.js";import"./CartesianAxis-B3F7THN1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-BVpfILPu.js";import"./symbol-CS8b5as0.js";import"./useElementOffset-Dpa0V5po.js";import"./uniqBy-BOokmjAX.js";import"./iteratee-JxZPr5ba.js";const gt={title:"API/hooks/useOffset",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(a,{width:e.width,height:e.height},t.createElement(s,{data:n,margin:e.margin},t.createElement(f,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(g,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useOffset',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
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
    }
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ct=["UseOffset"];export{r as UseOffset,ct as __namedExportsOrder,gt as default};
