import{R as t}from"./iframe-3h349717.js";import{j as a}from"./RechartsWrapper-CUULyex2.js";import{R as p}from"./zIndexSlice-BzHS8zt2.js";import{C as n}from"./ComposedChart-DCVALNVc.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CdkVEHcj.js";import{X as l}from"./XAxis-Bw5xxXY1.js";import{Y as h}from"./YAxis-tMbI8NgR.js";import{L as c}from"./Legend-BEZJZowB.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DJBK0DUa.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CTBJiowg.js";import"./throttle-BlVp8HkD.js";import"./index-oX4N-tXs.js";import"./index-BRv0H6zV.js";import"./isWellBehavedNumber-D3Yo8GQB.js";import"./d3-scale-CLmVRDrj.js";import"./index-CsFq6h3I.js";import"./index-BbUWtFl0.js";import"./renderedTicksSlice-6SwbUeKS.js";import"./index-Bo8dIp4D.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CFmcy4vR.js";import"./chartDataContext-Chtbdmd2.js";import"./CategoricalChart-Lt1wUyHP.js";import"./Layer-BPJ6tmqq.js";import"./Curve-Bi3KcdO0.js";import"./types-D64Ekh4L.js";import"./step-DOsNm07K.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DOjhrzsE.js";import"./Label-Dtiya_7s.js";import"./Text-DVnErtU5.js";import"./DOMUtils--0390Y1X.js";import"./useId-Ced_CVYT.js";import"./useBackwardsCompatibleTheme-BYrRaigu.js";import"./ZIndexLayer-BTc3Y12q.js";import"./useAnimationId-BzBuvVRV.js";import"./ActivePoints-BcO3Gsaw.js";import"./Dot-CUMV7p2u.js";import"./RegisterGraphicalItemId-Byw__Yoi.js";import"./ErrorBarContext-BtoBWPHm.js";import"./GraphicalItemClipPath-C24GD_Bh.js";import"./SetGraphicalItem-wGbg7zCS.js";import"./getRadiusAndStrokeWidthFromDot-qaKJk7YD.js";import"./ActiveShapeUtils-C78HHNIc.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DyDK0v82.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CL0JFPKo.js";import"./symbol-BwOY_zgB.js";import"./useElementOffset-DNp2u43t.js";import"./uniqBy-C8soMpcc.js";import"./iteratee-Dt6uUIOF.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
