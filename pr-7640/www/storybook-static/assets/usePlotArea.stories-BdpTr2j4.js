import{R as t}from"./iframe-BISZbF8S.js";import{u as a}from"./CategoricalChart-CluxlQf_.js";import{R as p}from"./zIndexSlice-tLqWCh4O.js";import{C as s}from"./ComposedChart-Bb88RiXV.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Ct3QeI60.js";import{X as l}from"./XAxis-DhvWA3ze.js";import{Y as h}from"./YAxis-m7WuayWG.js";import{L as c}from"./Legend-DJM3szzM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-een6OCKs.js";import"./index-BW9K1TDZ.js";import"./index-Ce0beIqY.js";import"./index-hSuJddDh.js";import"./index-DIL3iNST.js";import"./throttle-qMyvzBrr.js";import"./get-C2VjdU0L.js";import"./axisSelectors-SJG9ph2l.js";import"./resolveDefaultProps-Wc0qnLHS.js";import"./isWellBehavedNumber-C9XsHOt-.js";import"./d3-scale-DNcorMEn.js";import"./renderedTicksSlice-bJIEIhcB.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-GFukGdve.js";import"./chartDataContext-iswJ2W_c.js";import"./Layer-qSEbrkuT.js";import"./Curve-DnqgdcKJ.js";import"./types-DYnGyjc0.js";import"./step-DstMREJ8.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DssiNuXL.js";import"./Label--u0r0Ebh.js";import"./Text-DWq927Nt.js";import"./DOMUtils-CTLtTqZ2.js";import"./useId-DvaMlJaB.js";import"./useBackwardsCompatibleTheme-DE0n-uz4.js";import"./ZIndexLayer-DScewirg.js";import"./useAnimationId-BeL21vg8.js";import"./ActivePoints-Ccjhq822.js";import"./Dot-ClbVOSp4.js";import"./RegisterGraphicalItemId-DfyOG4VN.js";import"./ErrorBarContext-DGuh-__T.js";import"./GraphicalItemClipPath-b6ezYgAg.js";import"./SetGraphicalItem-DKxsB3By.js";import"./getRadiusAndStrokeWidthFromDot-CSyFsC-5.js";import"./ActiveShapeUtils-PTy3S8F2.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-D7TS5Yfq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DJ_45wTn.js";import"./symbol-CO_j5HDg.js";import"./useElementOffset-D_71pDwY.js";import"./uniqBy-1z9FZ0dO.js";import"./iteratee-azZ5Zz_L.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const At=["UsePlotArea"];export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
