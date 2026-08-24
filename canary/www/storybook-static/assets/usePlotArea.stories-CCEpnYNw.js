import{R as t}from"./iframe-B5plfFOD.js";import{u as a}from"./CategoricalChart-C1LQoQak.js";import{R as p}from"./zIndexSlice-DbNmOY3-.js";import{C as s}from"./ComposedChart-DIa361yX.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-ovty_Oih.js";import{X as l}from"./XAxis-BSTDbcVl.js";import{Y as h}from"./YAxis-GTebhYCm.js";import{L as c}from"./Legend-DuVru4ga.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CGezTKFK.js";import"./index-CL4khl8X.js";import"./index-Wbnw9Fvi.js";import"./index-PX_n5hQs.js";import"./index-CNQoj7bz.js";import"./throttle-B-azr0kq.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BLYlno2y.js";import"./resolveDefaultProps-BlDjsfrB.js";import"./isWellBehavedNumber-Da64mp0K.js";import"./d3-scale-DCKop38A.js";import"./renderedTicksSlice-BhrWC83q.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DwKWqDkX.js";import"./chartDataContext-kMO755bg.js";import"./Layer-ByEseNp7.js";import"./Curve-CaJzkXTx.js";import"./types-BGPhMwrg.js";import"./step-BSKO3-IJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B1lzxzMI.js";import"./Label-D1J3ucoA.js";import"./Text-CpDGg_G2.js";import"./DOMUtils-D6jyt4Vs.js";import"./useId-Bp2MS-0a.js";import"./useBackwardsCompatibleTheme-DbWiZjcQ.js";import"./ZIndexLayer-IfT3mYts.js";import"./useAnimationId-B-SkX0Hu.js";import"./ActivePoints-0px9-aiA.js";import"./Dot-DN6yzzHr.js";import"./RegisterGraphicalItemId-CWna7QKU.js";import"./ErrorBarContext-CLev7xWU.js";import"./GraphicalItemClipPath-Qthp7O67.js";import"./SetGraphicalItem-CTmoE1ld.js";import"./getRadiusAndStrokeWidthFromDot-bk7Qsl9y.js";import"./ActiveShapeUtils-DUhOL-u8.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DCr9g_ht.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-t-UFktWC.js";import"./symbol-DbuhexXP.js";import"./useElementOffset-D_k_9iR3.js";import"./uniqBy-C0NyoxrU.js";import"./iteratee-COozC7kh.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
