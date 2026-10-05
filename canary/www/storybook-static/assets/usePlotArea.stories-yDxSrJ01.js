import{R as t}from"./iframe-BO6kNEfQ.js";import{j as a}from"./RechartsWrapper-BjhorxtA.js";import{R as p}from"./zIndexSlice-CSvwJ_UT.js";import{C as n}from"./ComposedChart-BIhV4Cn8.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-By4A7qsj.js";import{X as l}from"./XAxis-DUMRPyWG.js";import{Y as h}from"./YAxis-Bpx19asJ.js";import{L as c}from"./Legend-wrLObU49.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DeeWTLmP.js";import"./get-C2VjdU0L.js";import"./axisSelectors-clIGt-1m.js";import"./throttle-CC5fq1IH.js";import"./index-C9e-3BIk.js";import"./index-CAnCLEru.js";import"./isWellBehavedNumber-B-Ulh-Re.js";import"./d3-scale-B89J0uLC.js";import"./index-CTBq7QCd.js";import"./index-BiTwoYeC.js";import"./renderedTicksSlice-CyXD3owy.js";import"./index-DGFWSvO2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DbU3p1bm.js";import"./chartDataContext-C8PMDwYi.js";import"./CategoricalChart-BBSMzdqi.js";import"./Layer-DAnsZuJj.js";import"./Curve-hgySA8iE.js";import"./types-CrvIZc3a.js";import"./step-BjM5lwd1.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-FM3uBbR2.js";import"./Label-ktTcBfs2.js";import"./Text-CvDq8Z5Q.js";import"./DOMUtils-DjzhJzRg.js";import"./useId-CAIxAqit.js";import"./useBackwardsCompatibleTheme-DwFWyF9F.js";import"./ZIndexLayer-BVG745mx.js";import"./useAnimationId-NFss7X44.js";import"./ActivePoints--BVAgljg.js";import"./Dot-Bps0tpeZ.js";import"./RegisterGraphicalItemId-DXmwJq0A.js";import"./ErrorBarContext-DAb2_Ge3.js";import"./GraphicalItemClipPath-CqCtj_pv.js";import"./SetGraphicalItem-CMnburaU.js";import"./getRadiusAndStrokeWidthFromDot-TV6VUSJm.js";import"./ActiveShapeUtils-CRw266nd.js";import"./useGraphicalItemIdentity-BOcRclg4.js";import"./CartesianAxis-DkQVUKnt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-VJ3ENrFL.js";import"./symbol-DPXsMkWI.js";import"./useElementOffset-Bows1p5H.js";import"./uniqBy-QqkFbTHY.js";import"./iteratee-CYMuw_Xv.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
