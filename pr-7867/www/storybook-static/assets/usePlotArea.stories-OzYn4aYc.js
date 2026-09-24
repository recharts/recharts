import{R as t}from"./iframe-oenQDkae.js";import{j as a}from"./RechartsWrapper-CzSj_Srx.js";import{R as p}from"./zIndexSlice-BolP6taR.js";import{C as n}from"./ComposedChart-CTlu4MhW.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DmgKRVbq.js";import{X as l}from"./XAxis-BAapT_j6.js";import{Y as h}from"./YAxis-DxjcPAu-.js";import{L as c}from"./Legend-DfPA-Tai.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BMJPtlp2.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DouK1BqP.js";import"./throttle-MDW_1VLh.js";import"./index-BSFq4RG1.js";import"./index-MHyjaTC8.js";import"./isWellBehavedNumber-D7fX2EcX.js";import"./d3-scale-DtmS-GpC.js";import"./index-BMWVfK_z.js";import"./index-ZmrPVgl6.js";import"./renderedTicksSlice-CXVO1QKM.js";import"./index-CZXeDDYw.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Chu1Jshw.js";import"./chartDataContext-CJ85p7Fi.js";import"./CategoricalChart-BmbR8bdU.js";import"./Layer-IdKk3EZa.js";import"./Curve-BSb99er_.js";import"./types-DhnB6M_7.js";import"./step-Bev09Hzp.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DDFphvv3.js";import"./Label-BCANxpap.js";import"./Text-D5ThFr-V.js";import"./DOMUtils-Cj13ECRs.js";import"./useId-CdRDsFJI.js";import"./useBackwardsCompatibleTheme-BdI5Azyq.js";import"./ZIndexLayer-D9GKmy2X.js";import"./useAnimationId-BXnU9mnj.js";import"./ActivePoints-BSQAnEDd.js";import"./Dot-C-Nopngh.js";import"./RegisterGraphicalItemId-CysjmqkX.js";import"./ErrorBarContext-D1o9R7Ud.js";import"./GraphicalItemClipPath-D7deAvGW.js";import"./SetGraphicalItem-BPqapuvy.js";import"./getRadiusAndStrokeWidthFromDot-D9taOjnP.js";import"./ActiveShapeUtils-C5gHJrTE.js";import"./useGraphicalItemIdentity-ygWefbro.js";import"./CartesianAxis-DeqFFLVl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-JpTNmqfe.js";import"./symbol-B_9Bw_Tg.js";import"./useElementOffset-CWxGqy1I.js";import"./uniqBy-BAQHpx-P.js";import"./iteratee-Cc1JTqL9.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
