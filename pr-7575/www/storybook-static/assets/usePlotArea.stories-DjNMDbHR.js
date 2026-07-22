import{R as t}from"./iframe-DzzybHr3.js";import{u as a}from"./CategoricalChart-B7eTVHmG.js";import{R as p}from"./zIndexSlice-APm024yE.js";import{C as s}from"./ComposedChart-9Aj8MpN0.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-B14pcOUO.js";import{X as l}from"./XAxis-C2N3vX2E.js";import{Y as h}from"./YAxis-CKuS-Mr_.js";import{L as c}from"./Legend-CoRF27_3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BQrYaWuY.js";import"./index-DKv_ekDa.js";import"./index-BbqbzQag.js";import"./index-CNtIrdbG.js";import"./index-YXsj3yx_.js";import"./throttle-DXJQ7qa7.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BnoTH0LX.js";import"./axisSelectors-DxliL3D-.js";import"./resolveDefaultProps-CV8kmKtp.js";import"./isWellBehavedNumber-DhXkb0Zj.js";import"./d3-scale-ikjFpXkq.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C60EyfpF.js";import"./chartDataContext-mNy84WxM.js";import"./Layer-DBuOEsC-.js";import"./Curve-CgifKxr5.js";import"./types-Ck7x6Nhk.js";import"./step-CE07F2xj.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CJCL0mBl.js";import"./Label-Yw7Q0JfB.js";import"./Text-CKYGhwj_.js";import"./DOMUtils-CofpyxHf.js";import"./ZIndexLayer-B65O7Oyl.js";import"./useAnimationId--dSVNcdm.js";import"./ActivePoints-gO5Bi9Sm.js";import"./Dot-BL6lif_-.js";import"./RegisterGraphicalItemId-r8RRCwhl.js";import"./ErrorBarContext-CW8Stc7O.js";import"./GraphicalItemClipPath-BPmTqE-t.js";import"./SetGraphicalItem-Dv_WYCgN.js";import"./getRadiusAndStrokeWidthFromDot-40lXrNs0.js";import"./ActiveShapeUtils-CXtuLtCa.js";import"./CartesianAxis-Bp9IVHGC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-PzedoV3w.js";import"./symbol-CW6c1FZY.js";import"./useElementOffset-W4H7iZmy.js";import"./uniqBy-BUqH8mTU.js";import"./iteratee-B57Un0sM.js";const ht={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ct=["UsePlotArea"];export{e as UsePlotArea,ct as __namedExportsOrder,ht as default};
