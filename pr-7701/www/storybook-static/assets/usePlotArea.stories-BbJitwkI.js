import{R as t}from"./iframe-BTdOdF9K.js";import{j as a}from"./RechartsWrapper-DRLvm4aR.js";import{R as p}from"./zIndexSlice-CcQiDZWo.js";import{C as s}from"./ComposedChart-BNTkSnPn.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-D-0vjVan.js";import{X as l}from"./XAxis-BHkAQnNg.js";import{Y as h}from"./YAxis-D6a9CyOE.js";import{L as c}from"./Legend-CTek2g6f.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CYx6Kk4A.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CEXy452f.js";import"./throttle-BGr8RGVS.js";import"./index-Cq8tu8wQ.js";import"./index-Ced2HG28.js";import"./isWellBehavedNumber-ZiYy0LNM.js";import"./d3-scale-B2K1_ofr.js";import"./index-uQqEtlSq.js";import"./index-CwuReyQ-.js";import"./renderedTicksSlice-CwdI_hq1.js";import"./index-DifGdyog.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DxgKFkUN.js";import"./chartDataContext-BIlbUR4j.js";import"./CategoricalChart-CWtNWW3W.js";import"./Layer-BIBCumPU.js";import"./Curve-D7vA0Myr.js";import"./types-DjPeWPew.js";import"./step-DMCy-hl7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DKFfKX33.js";import"./Label-Cm499Ers.js";import"./Text-ad69v4o0.js";import"./DOMUtils-D3jMOIM3.js";import"./useId-R0lZrYSa.js";import"./useBackwardsCompatibleTheme-CO-7LDmO.js";import"./ZIndexLayer-C5GGlVd8.js";import"./useAnimationId-C9O8Tbu7.js";import"./ActivePoints-DEDNVxhq.js";import"./Dot-C09h-5Zk.js";import"./RegisterGraphicalItemId-CtQfyEXD.js";import"./ErrorBarContext-CqdXJ3Jz.js";import"./GraphicalItemClipPath-BNHF0YUS.js";import"./SetGraphicalItem-CBZad1k7.js";import"./getRadiusAndStrokeWidthFromDot-CXK6U_2t.js";import"./ActiveShapeUtils-HwCQ4yPj.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Bjag6PpJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-1hS8x8It.js";import"./symbol-4RT96rpw.js";import"./useElementOffset-CabjllZT.js";import"./uniqBy-w2GX_Mj8.js";import"./iteratee-BGtIuJre.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
