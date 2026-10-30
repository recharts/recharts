import{R as t}from"./iframe-C_yGAyrl.js";import{z as a}from"./RechartsWrapper-BSGXC4_F.js";import{R as p}from"./zIndexSlice-BJ-JuQhh.js";import{C as n}from"./ComposedChart-CFLgoo8z.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-LkXq5rRh.js";import{X as l}from"./XAxis-BCyVXA2-.js";import{Y as h}from"./YAxis-lwhG3-Lu.js";import{L as c}from"./Legend-DckLNiaV.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B8DgtWv7.js";import"./get-cF5BDHN6.js";import"./axisSelectors-5FYthY9Y.js";import"./throttle-BAXAw3D6.js";import"./index-DrbolqVI.js";import"./index-ddpbYnm-.js";import"./polarAxisSelectors-ut8KXzAo.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-PQcr3dQu.js";import"./index-C36DrKNt.js";import"./index-RS1OPqlJ.js";import"./renderedTicksSlice-DkVAJH0_.js";import"./index-ClVDXgD6.js";import"./CartesianChart-CokpCbyl.js";import"./ZIndexPortal-BbHy9i_X.js";import"./CategoricalChart-vhidTTy9.js";import"./Layer-DRwTYvg4.js";import"./Curve-B5j0Jet-.js";import"./types-Cxyr58RE.js";import"./step-DDESiMvu.js";import"./path-DyVhHtw_.js";import"./LabelList-o4uUgS5K.js";import"./Label-BnQGI-qv.js";import"./Text-DzacdUSY.js";import"./DOMUtils-DAgrf4y-.js";import"./ZIndexLayer-B7Tlmy9n.js";import"./ActivePoints-CjSi-VTr.js";import"./Dot-M2gDFPx3.js";import"./activeStyles-B0RsKEFJ.js";import"./useAnimationId-HAfaQzyp.js";import"./dataEntryStyles-DACXFNb8.js";import"./Symbols-Bbax-3ST.js";import"./symbol-CWSoe6BS.js";import"./ErrorBarContext-BFE3xm4o.js";import"./SetGraphicalItem-ByCBXbFB.js";import"./getRadiusAndStrokeWidthFromDot-COLPDuwt.js";import"./ActiveShapeUtils-CHVm68Z9.js";import"./useEffectiveDataKey-DU6lMzAC.js";import"./CartesianAxis-DMLFVqxV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-BmGKFoo3.js";import"./useElementOffset-DY-j2w8T.js";import"./uniqBy-CNLZexsa.js";import"./iteratee-DpnVvTvv.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
