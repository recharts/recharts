import{R as t}from"./iframe-CZhceScU.js";import{u as a}from"./CategoricalChart-Cgj8wKUd.js";import{R as p}from"./zIndexSlice-6KQyntdT.js";import{C as s}from"./ComposedChart-o3A5Ws01.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BVbkMHTj.js";import{X as l}from"./XAxis-o7n6bJ8R.js";import{Y as h}from"./YAxis-DyokKs4q.js";import{L as c}from"./Legend-DUi_ZNry.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-FSanOK4G.js";import"./index-BEy16_lK.js";import"./index-Blwm4_kv.js";import"./index-CDuDfojR.js";import"./index-DpQK2wXv.js";import"./throttle-4vdN6P2D.js";import"./get-C2VjdU0L.js";import"./axisSelectors-8JBi47Qo.js";import"./resolveDefaultProps-DKz_FWjC.js";import"./isWellBehavedNumber-D-87yJTE.js";import"./d3-scale-C7Vm1zun.js";import"./renderedTicksSlice-Cf3Ebwgh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-8qShj_eX.js";import"./chartDataContext-DJFrW4dv.js";import"./Layer-Drn4JAex.js";import"./Curve-FuimFyqA.js";import"./types-B4F0kvck.js";import"./step-H2rxpHgP.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DXBAxv9p.js";import"./Label-CNgEIlwK.js";import"./Text-CmIo03No.js";import"./DOMUtils-DbT53TZn.js";import"./useId-BZ6DWjsO.js";import"./useBackwardsCompatibleTheme-DNlLIhqX.js";import"./ZIndexLayer-wFB7jUG1.js";import"./useAnimationId-Cx8RIuDl.js";import"./ActivePoints-B1Bif-Ou.js";import"./Dot-0p8__XhD.js";import"./RegisterGraphicalItemId-DnHmtku0.js";import"./ErrorBarContext-CS2ZLStC.js";import"./GraphicalItemClipPath-BzJCuoya.js";import"./SetGraphicalItem-DuTz6hix.js";import"./getRadiusAndStrokeWidthFromDot-CVlp7Tat.js";import"./ActiveShapeUtils-Dk1tODGi.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-C3rrpirv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-XuuhZcr7.js";import"./symbol-BufjkdaW.js";import"./useElementOffset-CAePsNzR.js";import"./uniqBy-DimUAY1k.js";import"./iteratee-D_nrFtIa.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
