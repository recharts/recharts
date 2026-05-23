import{e as t}from"./iframe-Cbg-fKNU.js";import{S as i}from"./ChartSizeDimensions-D9mNUeVH.js";import{ah as s,ac as g,ae as h,g as l}from"./arrayEqualityCheck-hFPRsS2v.js";import{C as c}from"./ComposedChart-Cte27ylB.js";import{p as d}from"./Page-DPte-9pC.js";import{L as u}from"./Line-CJNTh-a_.js";import{X as f}from"./XAxis-scJ13O_U.js";import{Y as M}from"./YAxis-DeM2VHlz.js";import{L as b}from"./Legend-BGilQiwd.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D6T4fIvs.js";import"./immer-S1zDTrNa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-EdxkrsQJ.js";import"./index-tFSrK1wv.js";import"./hooks-CL-gQxGz.js";import"./axisSelectors-COlbOcyl.js";import"./d3-scale-DuHK7VZm.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-ByH7lQpu.js";import"./renderedTicksSlice-BAcUufvh.js";import"./CartesianChart-IEffqnC4.js";import"./chartDataContext-BUHR6knq.js";import"./CategoricalChart-DAwQUD4-.js";import"./Layer-OlYOmPUf.js";import"./Curve-C22NWxJ6.js";import"./types-BpyuZwQS.js";import"./step-CgbJhf5W.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-POHvOeVE.js";import"./Label-Dne7i20P.js";import"./Text-BtrwnnO1.js";import"./DOMUtils-BOYR8naz.js";import"./ZIndexLayer-qeHNPcT8.js";import"./useAnimationId-ClgLuj6x.js";import"./ActivePoints-CVBcNwxF.js";import"./Dot-CvNBt79L.js";import"./RegisterGraphicalItemId-CwmBMhGa.js";import"./ErrorBarContext-Q5zY_unn.js";import"./GraphicalItemClipPath-B0xiuhMH.js";import"./SetGraphicalItem-BIH6QpC3.js";import"./getRadiusAndStrokeWidthFromDot-Cg3OgevG.js";import"./ActiveShapeUtils-Drq8bts1.js";import"./CartesianAxis-A8y-DKmq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-UYaWffC4.js";import"./symbol-DEGNIwBZ.js";import"./useElementOffset-DGafWhz7.js";import"./uniqBy-C9mCQonC.js";import"./iteratee-BMHEy9Yu.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const Mt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=a.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const bt=["UseMargin"];export{a as UseMargin,bt as __namedExportsOrder,Mt as default};
