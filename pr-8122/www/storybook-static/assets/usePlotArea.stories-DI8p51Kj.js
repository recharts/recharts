import{R as t}from"./iframe-DTgRciqJ.js";import{z as p}from"./RechartsWrapper-MmwUlJ_d.js";import{R as a}from"./zIndexSlice-DVbLmSgB.js";import{C as n}from"./ComposedChart-BUWqBVBV.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-B2ntj69e.js";import{X as l}from"./XAxis-GGlBaKPK.js";import{Y as h}from"./YAxis-Bbi7V5fP.js";import{L as c}from"./Legend-DuFVdlS3.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CoYSuL5J.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CM_jcbgZ.js";import"./throttle-DuudF_mE.js";import"./index-CXPktc_m.js";import"./index-CbEM9QfO.js";import"./polarAxisSelectors-DsOVQpq2.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B5ifwFr0.js";import"./index-Bf4dxhjD.js";import"./index-nyRg1-_W.js";import"./renderedTicksSlice-BzplMOOM.js";import"./index-BpfdlB3K.js";import"./CartesianChart-Ccp3_hFu.js";import"./ZIndexPortal-BF9a0pAc.js";import"./CategoricalChart-CdgZmB3z.js";import"./Layer-uwDyCJ97.js";import"./Curve-CjloRNAl.js";import"./types-D-ekNx8o.js";import"./step-0aJ3gZqs.js";import"./path-DyVhHtw_.js";import"./LabelList-DQdMNFQg.js";import"./Label-ClRWPO-B.js";import"./Text-BPTv_m6E.js";import"./DOMUtils-CC4KHB5M.js";import"./ZIndexLayer-DulFdvV7.js";import"./ActivePoints-q_blbmo6.js";import"./Dot-BnzqQ9RW.js";import"./activeStyles-bjUNghBK.js";import"./useAnimationId-D4a67WLs.js";import"./dataEntryStyles-B-5OPbn7.js";import"./Symbols-D1y9xfwW.js";import"./symbol-C3fOvccx.js";import"./ErrorBarContext-CqakUp6M.js";import"./SetGraphicalItem-GIbuPr5j.js";import"./getRadiusAndStrokeWidthFromDot-DXeqlmgf.js";import"./ActiveShapeUtils-DKKlK0pJ.js";import"./useEffectiveDataKey-CRNpNcQe.js";import"./themeFill-BkM1x4hA.js";import"./CartesianAxis-EgZ7Q5N7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-DVVBuQo8.js";import"./useElementOffset-C_KB9sAl.js";import"./uniqBy-CROCk4kq.js";import"./iteratee-CNnsb6wb.js";import"./isArguments-yB-y1yaH.js";const ft={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},o={name:"usePlotAreaExample",render:r=>t.createElement(a,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},yt=["UsePlotArea"];var e,i,m;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
