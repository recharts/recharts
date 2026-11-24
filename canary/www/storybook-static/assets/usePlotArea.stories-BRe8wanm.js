import{R as t}from"./iframe-Be1JwYLB.js";import{z as a}from"./RechartsWrapper-BztyyuwI.js";import{R as p}from"./zIndexSlice-CgSPm-wc.js";import{C as n}from"./ComposedChart-aW1EvLk8.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BfWisHme.js";import{X as l}from"./XAxis-BsHOKRoe.js";import{Y as h}from"./YAxis-B8XW_V0R.js";import{L as c}from"./Legend-CdT5XdlY.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-vtDVNmS9.js";import"./get-CjriyByo.js";import"./axisSelectors-rS5FKSRX.js";import"./throttle-DjxQctYo.js";import"./index-ueUT9Xj6.js";import"./index-Bkv44dvd.js";import"./polarAxisSelectors-petp68tp.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C_iM0uvU.js";import"./index-Dg9s7T6j.js";import"./index-m2EJzzBW.js";import"./renderedTicksSlice-DiKCMxPA.js";import"./index-B-llFuKq.js";import"./fillDefinitions-Be1jCOoc.js";import"./CartesianChart-C7B4dY_Y.js";import"./chartDataContext-DDExTKyo.js";import"./CategoricalChart-C-aFkl_F.js";import"./getRadiusAndStrokeWidthFromDot-B_Y3WA9D.js";import"./Layer-L6JSSqUT.js";import"./Curve-DQRadQHz.js";import"./types-DiTos3ch.js";import"./step-Dq96qlXf.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BkzBQ6X2.js";import"./Label-Cm4G9M_4.js";import"./Text-BqUDv62U.js";import"./ZIndexLayer-ByAD4IkB.js";import"./ActivePoints-BUYZbsLY.js";import"./Dot-C-gvMhjL.js";import"./activeStyles-CdOMMJXp.js";import"./useAnimationId-DZ7icYC0.js";import"./Symbols-34MkMdpP.js";import"./symbol-CfD9aVNT.js";import"./ErrorBarContext-CuYC5cVX.js";import"./SetGraphicalItem-CZx3vw8X.js";import"./ActiveShapeUtils-C6jNLipX.js";import"./useEffectiveDataKey-dwd_hOHx.js";import"./CartesianAxis-CBnwQrVI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BXttSKBy.js";import"./uniqBy-CpAKF5a4.js";import"./iteratee-Bcb_cbmN.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
