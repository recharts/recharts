import{R as t}from"./iframe-DqyoK0ud.js";import{z as a}from"./RechartsWrapper-Bv3_Hj5n.js";import{R as p}from"./zIndexSlice-BLzMP0pQ.js";import{C as n}from"./ComposedChart-BYOmpYyX.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DO5n4YO0.js";import{X as l}from"./XAxis-BatUM5pq.js";import{Y as h}from"./YAxis-_lbVlQrz.js";import{L as c}from"./Legend-gHqRthhy.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Ck8pmjzH.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CFa3shM-.js";import"./throttle-Dn4JCjly.js";import"./index-BsuCzGf5.js";import"./index-CssgCrFq.js";import"./polarAxisSelectors-CBUZ9Z3j.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-oZSie1D-.js";import"./index-CtviIcDK.js";import"./index-BwS7ULIY.js";import"./renderedTicksSlice-DhCNe_6s.js";import"./index-wVxsoSnH.js";import"./CartesianChart-_Aa3OKSl.js";import"./chartDataContext-MbnhVXSW.js";import"./CategoricalChart-EiDYPGiV.js";import"./Layer-svnx0Bdz.js";import"./Curve-B4FKLROM.js";import"./types-DD3eyhWj.js";import"./step-DDV9RjiH.js";import"./path-DyVhHtw_.js";import"./activeStyles-D0nGCC2C.js";import"./Label-C_IP7EJJ.js";import"./Text-2V5_vcbB.js";import"./pageBackground-DCkPUiBo.js";import"./useId-DxxYvKaU.js";import"./ZIndexLayer-DDKk2bqL.js";import"./dataEntryStyles-sIqJlf-4.js";import"./useAnimationId-b5BOeEdT.js";import"./ActivePoints-B12yNU4r.js";import"./Dot-BOVBX4q2.js";import"./Symbols-CYwitPRM.js";import"./symbol-DWxTznCL.js";import"./RegisterGraphicalItemId-DywfiWqL.js";import"./ErrorBarContext-CHgLAGYu.js";import"./SetGraphicalItem-DDAjd9Yt.js";import"./getRadiusAndStrokeWidthFromDot-DMbsIH9n.js";import"./ActiveShapeUtils-HHjD57n-.js";import"./useEffectiveDataKey-D-FiIxk6.js";import"./CartesianAxis-MuFUII6s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-C0YlHWpD.js";import"./uniqBy-CGKsPvnn.js";import"./iteratee-BKsZSq5H.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
