import{R as t}from"./iframe-O6BbDbFD.js";import{u as a}from"./CategoricalChart-aiOnciBW.js";import{R as p}from"./zIndexSlice-ufl9shMa.js";import{C as s}from"./ComposedChart-BrGWNJAt.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CvuXmhQn.js";import{X as l}from"./XAxis-DBoP-lnN.js";import{Y as h}from"./YAxis-D4M42lWl.js";import{L as c}from"./Legend-7ddVC25Z.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CoeUwGvc.js";import"./index-CnIZ7xjW.js";import"./index-BUePfml7.js";import"./index-BpSs36Jm.js";import"./index-C0YTM7Q0.js";import"./throttle-C3IkSeoT.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B4uTofMj.js";import"./resolveDefaultProps-Tk25gN9F.js";import"./isWellBehavedNumber-CZqzhzTI.js";import"./d3-scale-C59jQ7wQ.js";import"./renderedTicksSlice-B4DLXLOp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B9Asj-o-.js";import"./chartDataContext-CMEfpaNZ.js";import"./Layer-BCiB-dL4.js";import"./Curve-r6vAjm_u.js";import"./types-o_WouL0J.js";import"./step-rmFojxwR.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BmR1pSA0.js";import"./Label-SH09pAJC.js";import"./Text-ti8Fj8zJ.js";import"./DOMUtils-BG1uuH7H.js";import"./useId-Cennb_xj.js";import"./useBackwardsCompatibleTheme-DlXi3557.js";import"./ZIndexLayer-Bt9vBpxW.js";import"./useAnimationId-DHIHugsV.js";import"./ActivePoints-BgZirJxM.js";import"./Dot-D6BD33aP.js";import"./RegisterGraphicalItemId-DqjeB-Ir.js";import"./ErrorBarContext-CsR2u1pe.js";import"./GraphicalItemClipPath-DQtsyL-k.js";import"./SetGraphicalItem-BTWaHo9u.js";import"./getRadiusAndStrokeWidthFromDot-DUN_awyu.js";import"./ActiveShapeUtils-CApqjo8g.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-B8nYUrro.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BFe2cyG5.js";import"./symbol-Bc4BbbRZ.js";import"./useElementOffset-Dpoz46wZ.js";import"./uniqBy-CNBDR_xD.js";import"./iteratee-ZH8ZQkoC.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
