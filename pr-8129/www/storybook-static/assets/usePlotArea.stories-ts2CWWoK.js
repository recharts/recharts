import{R as t}from"./iframe-CIzVR-2-.js";import{z as p}from"./RechartsWrapper-CaOZ9lUC.js";import{R as a}from"./zIndexSlice-CJv9lj0d.js";import{C as n}from"./ComposedChart-OQrQnGRh.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-kvdINkjm.js";import{X as l}from"./XAxis-DuVjd9Cl.js";import{Y as h}from"./YAxis-BM-BvKCY.js";import{L as c}from"./Legend-BOMw6FGf.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BsWl2j-C.js";import"./get-cF5BDHN6.js";import"./axisSelectors-mbotnnaX.js";import"./throttle-g_l7Z0ZN.js";import"./index-iVHvpgFv.js";import"./index-DkDw0AjC.js";import"./polarAxisSelectors-D4S23sJN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CN1jPZAK.js";import"./index-B0W9noqG.js";import"./index-CJvlApl9.js";import"./renderedTicksSlice-CH4A0jxF.js";import"./index-C8XfMsOR.js";import"./CartesianChart-BUE6q1Of.js";import"./ZIndexPortal-DNkKSpm6.js";import"./CategoricalChart-Bt9yIUeV.js";import"./Layer-BlSvO1E4.js";import"./Curve-qbG6zMME.js";import"./fillDefinitions-CqtDfKww.js";import"./pageBackground-DPTEcMe3.js";import"./types-Ci0QqKEV.js";import"./step-Ma_Va74-.js";import"./path-DyVhHtw_.js";import"./LabelList-BTCEEH0Q.js";import"./Label-MgaHTNfc.js";import"./Text-D3Kha142.js";import"./DOMUtils-D-TrccP0.js";import"./ZIndexLayer-eeqaM0q4.js";import"./ActivePoints-Bfyy8a29.js";import"./Dot-CbUJ7B3N.js";import"./activeStyles-Dl0q6Ayx.js";import"./useAnimationId-BGu4RQqd.js";import"./dataEntryStyles-DxP76lNF.js";import"./Symbols-C3CTyIIX.js";import"./symbol-N4VmGah0.js";import"./ErrorBarContext-BpJZX0b6.js";import"./SetGraphicalItem-D1cjeVg8.js";import"./getRadiusAndStrokeWidthFromDot-MbD5sGJN.js";import"./ActiveShapeUtils-nEsdy7gj.js";import"./useEffectiveDataKey-Bc7YBVWp.js";import"./CartesianAxis-B1xkqmAC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-39obdmvK.js";import"./uniqBy-BCkSDL9F.js";import"./iteratee-CRTQKy1O.js";import"./isArguments-yB-y1yaH.js";const ft={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},o={name:"usePlotAreaExample",render:r=>t.createElement(a,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},yt=["UsePlotArea"];var e,i,m;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{o as UsePlotArea,yt as __namedExportsOrder,ft as default};
