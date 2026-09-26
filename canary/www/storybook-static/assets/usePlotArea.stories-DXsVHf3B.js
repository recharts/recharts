import{R as t}from"./iframe-B-cvRuUs.js";import{j as a}from"./RechartsWrapper-Sn-pOtLi.js";import{R as p}from"./zIndexSlice-CMjvBZBG.js";import{C as n}from"./ComposedChart-CN8RK9qn.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Csl9Oq_s.js";import{X as l}from"./XAxis-y94IxigF.js";import{Y as h}from"./YAxis-D8dVEXO3.js";import{L as c}from"./Legend-Cjy-igUs.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-JrkDvvW3.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BWIhKYR0.js";import"./throttle-CDbcUl2N.js";import"./index-wXQifNwN.js";import"./index-fP6QOzMc.js";import"./isWellBehavedNumber-CUJFmfDc.js";import"./d3-scale-DR_59xyj.js";import"./index-CfNq1WsM.js";import"./index-Cb6llO21.js";import"./renderedTicksSlice-h9-Npuy6.js";import"./index-43fZ4l-Z.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-7OIiMPC1.js";import"./chartDataContext-D-4rsKBi.js";import"./CategoricalChart-sOR53Pms.js";import"./Layer-BuVUUS9m.js";import"./Curve-BQq91RH8.js";import"./types-BMpC1VHb.js";import"./step-D9kLagG3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dsd4czhw.js";import"./Label-vDwlhiVA.js";import"./Text-CxPZ3A1T.js";import"./DOMUtils-3oIj9XlO.js";import"./useId-aeSZs_FJ.js";import"./useBackwardsCompatibleTheme-HncKzdMk.js";import"./ZIndexLayer-DLKwVcRH.js";import"./useAnimationId-Dhj6Z_Vv.js";import"./ActivePoints-CQAXHfdf.js";import"./Dot-F1dblK_0.js";import"./RegisterGraphicalItemId-DKARvEgF.js";import"./ErrorBarContext-B6INZz-c.js";import"./GraphicalItemClipPath-C12hutx0.js";import"./SetGraphicalItem-DuL8o0QU.js";import"./getRadiusAndStrokeWidthFromDot-B-dIKKPR.js";import"./ActiveShapeUtils-C9LbS6Cy.js";import"./useGraphicalItemIdentity-BfmGadKt.js";import"./CartesianAxis-k7ozjxp6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DpS-Xr6D.js";import"./symbol-C7VPsUTZ.js";import"./useElementOffset-DRlCn3Qn.js";import"./uniqBy-BHcpSUT2.js";import"./iteratee-DJT2RpEq.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
