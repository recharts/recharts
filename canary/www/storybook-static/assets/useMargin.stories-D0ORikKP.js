import{e as t}from"./iframe-BO25Fukk.js";import{S as i}from"./ChartSizeDimensions-fwZ9XifO.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-8wdJ7bOW.js";import{C as c}from"./ComposedChart-CF-2nekN.js";import{L as d}from"./Line-Bi0Ivg5j.js";import{X as u}from"./XAxis-DX4QFDJP.js";import{Y as f}from"./YAxis-61kZJ1mt.js";import{L as M}from"./Legend-CDtV7Vp6.js";import{p as b}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Blb-qbdi.js";import"./immer-3Wb7zWXo.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1GPclcm.js";import"./index-CKs9W-S6.js";import"./hooks-BpctELEd.js";import"./axisSelectors-Dte6k_F-.js";import"./d3-scale-CRavCQeQ.js";import"./zIndexSlice-rXbN18td.js";import"./renderedTicksSlice-D6T9rHBE.js";import"./CartesianChart-Ctp6RTcm.js";import"./chartDataContext-Dq6vrtI3.js";import"./CategoricalChart-DUWKrKtp.js";import"./Layer-D1wKq7sO.js";import"./ReactUtils-CylM5YpB.js";import"./Label-OvGfCgyV.js";import"./Text-0_0jC2Y4.js";import"./DOMUtils-To1Mrhoa.js";import"./ZIndexLayer-BjFFXD-n.js";import"./ActivePoints-BcnF-Bb_.js";import"./Dot-Dgz_5xVA.js";import"./types-Z8gV0TDw.js";import"./RegisterGraphicalItemId-DY8fgSiR.js";import"./ErrorBarContext-Dhgcignt.js";import"./GraphicalItemClipPath-BHD8m-8S.js";import"./SetGraphicalItem-oqU0zW_W.js";import"./useAnimationId-DPvU_ojd.js";import"./getRadiusAndStrokeWidthFromDot-pfV1rYdW.js";import"./ActiveShapeUtils-DMKk4NNh.js";import"./isPlainObject-vu1l7QPl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BPh2MAIT.js";import"./Trapezoid-COnZiJVb.js";import"./Sector-Cum54SiJ.js";import"./Symbols-VedzsSET.js";import"./symbol-BjeyFY5i.js";import"./step-DfHck1mJ.js";import"./Curve-DoyX19t4.js";import"./CartesianAxis-BRmvxIOe.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DNA5shck.js";import"./uniqBy-BVTfaSFn.js";import"./iteratee-C_6D29Qz.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:b,margin:r.margin},t.createElement(d,{dataKey:"pv"}),t.createElement(u,{dataKey:"name"}),t.createElement(f,null),t.createElement(M,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=a.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Ct=["UseMargin"];export{a as UseMargin,Ct as __namedExportsOrder,wt as default};
