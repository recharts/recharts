import{R as t}from"./iframe-B7xPXiPl.js";import{z as a}from"./RechartsWrapper-BcgQInkA.js";import{R as p}from"./zIndexSlice-DflaePKy.js";import{C as n}from"./ComposedChart-BdsejxH2.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BDZJuxNO.js";import{X as l}from"./XAxis-w-quiWhJ.js";import{Y as h}from"./YAxis-Cu3FI7G-.js";import{L as c}from"./Legend-Dp2tckH4.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-t98kZJWg.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Bm0UGi6R.js";import"./throttle-BS8hni_u.js";import"./index-D9RsPAPo.js";import"./index-D5HoT5KN.js";import"./polarAxisSelectors-BXJXB0Uo.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CVxlp6F9.js";import"./index-C-x4qMT5.js";import"./index-BSMQz-2O.js";import"./renderedTicksSlice-CrxiGG4Q.js";import"./index-v1i9I3dv.js";import"./fillDefinitions-BBy33SnP.js";import"./CartesianChart-BjVCLf26.js";import"./chartDataContext-D0czUVCw.js";import"./CategoricalChart-DFRV2_vj.js";import"./Layer-CYZUIq4P.js";import"./Curve-CrTz1Ty2.js";import"./types-CQsoFKaQ.js";import"./step-DxMe6Ez2.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-C3moi0Z-.js";import"./Label-YOyO9lVV.js";import"./Text-BexCT2h6.js";import"./ZIndexLayer-7qwpAdIl.js";import"./ActivePoints-Ij5uM0Pj.js";import"./Dot-GE-iIyp3.js";import"./activeStyles-CHc73Nrw.js";import"./useAnimationId-Bi0MWfey.js";import"./Symbols-BV4T3Yk8.js";import"./symbol-BKIkK8QI.js";import"./ErrorBarContext-DfxhnQqe.js";import"./SetGraphicalItem-C6Fs49Wr.js";import"./getRadiusAndStrokeWidthFromDot-CdlEB0NM.js";import"./ActiveShapeUtils-Cx93C_x7.js";import"./useEffectiveDataKey-Bs8MhK-5.js";import"./CartesianAxis-CcCV8fyf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-ryxNmM2c.js";import"./uniqBy-C0NZ23ht.js";import"./iteratee-DojtXyrW.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
