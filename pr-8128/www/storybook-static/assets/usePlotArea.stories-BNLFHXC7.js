import{R as t}from"./iframe-CqZM7-m_.js";import{z as p}from"./RechartsWrapper-C-tKczMb.js";import{R as a}from"./zIndexSlice-C2bhYwAU.js";import{C as n}from"./ComposedChart-bZT0Cb13.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Bo0PrlbL.js";import{X as l}from"./XAxis-KlRKQHwy.js";import{Y as h}from"./YAxis-ae7SlnFd.js";import{L as c}from"./Legend-Be7eAFPl.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DIo2Sl-P.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CU7asiQ5.js";import"./throttle-BMiHfZwg.js";import"./index-C-aUkLsy.js";import"./index-DpXM8lGR.js";import"./polarAxisSelectors-DaUnHX5G.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CaJTA9nk.js";import"./index-CztSWwc1.js";import"./index-NyV8lhCm.js";import"./renderedTicksSlice-D_esDvci.js";import"./index-DtqG7I3W.js";import"./CartesianChart-g7znHwgk.js";import"./ZIndexPortal-xTgrkJOp.js";import"./CategoricalChart-CjJTDTQz.js";import"./Layer--KWigSyO.js";import"./Curve-Drzcx3Ud.js";import"./fillDefinitions-1X04y-fM.js";import"./pageBackground-Bhwi_Yxq.js";import"./themeFill-CUygaBJV.js";import"./types-vIB-y3qp.js";import"./step-v_r5NIvy.js";import"./path-DyVhHtw_.js";import"./LabelList-DhQNMiPW.js";import"./Label-CFulNYa4.js";import"./Text-D-XPvK3p.js";import"./DOMUtils-xk6ID9X9.js";import"./ZIndexLayer-CcqTqnO7.js";import"./ActivePoints-BpTQnUkT.js";import"./Dot-DqP_pV0T.js";import"./activeStyles-cNHowlQL.js";import"./useAnimationId-Bff8cv61.js";import"./dataEntryStyles-Df1iMIlW.js";import"./Symbols-DzjBnU_i.js";import"./symbol-B1C_m7FV.js";import"./ErrorBarContext-CF_mHvca.js";import"./SetGraphicalItem-BGa3ruh5.js";import"./getRadiusAndStrokeWidthFromDot-CxqTtpIP.js";import"./ActiveShapeUtils-Dat3aOlo.js";import"./useEffectiveDataKey-B0QeK97Q.js";import"./CartesianAxis-F_8zYdOn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CUZP3X1Y.js";import"./uniqBy-eozDBzB3.js";import"./iteratee-8pecjru7.js";import"./isArguments-yB-y1yaH.js";const yt={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},o={name:"usePlotAreaExample",render:r=>t.createElement(a,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},xt=["UsePlotArea"];var e,i,m;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{o as UsePlotArea,xt as __namedExportsOrder,yt as default};
