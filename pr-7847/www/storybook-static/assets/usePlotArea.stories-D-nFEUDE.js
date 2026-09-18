import{R as t}from"./iframe-hd_pfHvo.js";import{j as a}from"./RechartsWrapper-CyksNjdk.js";import{R as p}from"./zIndexSlice-Dp2BKzs8.js";import{C as n}from"./ComposedChart-CLRu4YV9.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-C_JAgIax.js";import{X as l}from"./XAxis-DIhH_NdP.js";import{Y as h}from"./YAxis-Bfby8-tG.js";import{L as c}from"./Legend-C27DvpnH.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-drD7xYIQ.js";import"./get-C2VjdU0L.js";import"./axisSelectors-eHIx7hMS.js";import"./throttle-C2q4COo1.js";import"./index-v0QewD8A.js";import"./index-SCBhOffb.js";import"./isWellBehavedNumber-C1tuJPSP.js";import"./d3-scale-CciOkO_z.js";import"./index-C3NZEEPx.js";import"./index-Dl1k2Uag.js";import"./renderedTicksSlice-CD7ArbZx.js";import"./index-zFom7GTd.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-lsa6cjfM.js";import"./chartDataContext-BzYnwGm5.js";import"./CategoricalChart-DK0H-Nig.js";import"./Layer-egOiXfr6.js";import"./Curve-MYVJeGQI.js";import"./types-B1tRcN2v.js";import"./step-C33N2LGT.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DCH1YBa_.js";import"./Label-DeYie9Lh.js";import"./Text-C6732HHA.js";import"./DOMUtils-B5fqbFU1.js";import"./useId-_Yta7G-c.js";import"./useBackwardsCompatibleTheme-SiYIdPDZ.js";import"./ZIndexLayer-BHjO29Bs.js";import"./useAnimationId-D0lfWmyy.js";import"./ActivePoints-DqLOTWDO.js";import"./Dot-D7no8cFh.js";import"./RegisterGraphicalItemId-_fhB3pIC.js";import"./ErrorBarContext-BU3wkqbx.js";import"./GraphicalItemClipPath-Bsg-Zi-D.js";import"./SetGraphicalItem-CYmPmGcd.js";import"./getRadiusAndStrokeWidthFromDot-BcIv-0gg.js";import"./ActiveShapeUtils-BDpXGuZx.js";import"./useGraphicalItemIdentity-hHj77cNE.js";import"./CartesianAxis-Bczd13d5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CB0dVqBg.js";import"./symbol-7gumIrmR.js";import"./useElementOffset-Bjp7QiHs.js";import"./uniqBy-4GbLHGYo.js";import"./iteratee-BHWq50Tg.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
