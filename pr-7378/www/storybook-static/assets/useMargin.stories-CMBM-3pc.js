import{e as t}from"./iframe-oV1i-tzu.js";import{S as i}from"./ChartSizeDimensions-COgON8GA.js";import{ah as p,ac as g,ae as h,g as l}from"./arrayEqualityCheck-Dfz61M-V.js";import{C as c}from"./ComposedChart-CghDMMCH.js";import{p as d}from"./Page-DPte-9pC.js";import{L as u}from"./Line-DMYmk-zJ.js";import{X as f}from"./XAxis-DW0bS2aQ.js";import{Y as M}from"./YAxis-BMPOd6W0.js";import{L as b}from"./Legend-CedVYhqN.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cn2RP2Pv.js";import"./immer-Ct3YneiL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Saljze2a.js";import"./index-DdCYMcV3.js";import"./hooks-B5b3yGZZ.js";import"./axisSelectors-BRcov9Qp.js";import"./d3-scale-BCcM-CgQ.js";import"./zIndexSlice-CXZMcCd3.js";import"./renderedTicksSlice-C78Emj3z.js";import"./CartesianChart-DROGNedD.js";import"./chartDataContext-DEEDOj20.js";import"./CategoricalChart-otVHfWKe.js";import"./Curve-DXadnWNX.js";import"./types-BU-8R6yi.js";import"./step-DajnNDky.js";import"./path-DyVhHtw_.js";import"./Layer-e51vonqH.js";import"./ReactUtils-wKdNeUqr.js";import"./Label-C9DqArbR.js";import"./Text-rK0alIz0.js";import"./DOMUtils-DKzrOEzB.js";import"./ZIndexLayer-Hy5H_WVm.js";import"./ActivePoints-AO8q43pZ.js";import"./Dot-3SDu6TG_.js";import"./RegisterGraphicalItemId-CbsLevva.js";import"./ErrorBarContext-CHQ5Dpbn.js";import"./GraphicalItemClipPath-C89Feiin.js";import"./SetGraphicalItem-BZBmijvN.js";import"./useAnimationId-DCUIw60r.js";import"./getRadiusAndStrokeWidthFromDot-BdBvKBxs.js";import"./ActiveShapeUtils-CmSjpnmu.js";import"./CartesianAxis-DOaYzv5V.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-C83T-EWb.js";import"./symbol-VawIigOH.js";import"./useElementOffset-BMz-Idks.js";import"./uniqBy-Cgghj1Ul.js";import"./iteratee-DiVCWJOm.js";function E(){const r=p(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const ft={title:"API/hooks/useMargin",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,s;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'useMargin',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <MarginShower />
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
    }
  }
}`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const Mt=["UseMargin"];export{a as UseMargin,Mt as __namedExportsOrder,ft as default};
