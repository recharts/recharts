import{e as t}from"./iframe-dL2OVy5F.js";import{R as D,i as s}from"./arrayEqualityCheck-CaMvItyo.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-PeNK8VCY.js";import{C as T}from"./CartesianGrid-BWHNj_Eu.js";import{X as M}from"./XAxis-B86_r9Ch.js";import{Y as $}from"./YAxis-BsWm2FVM.js";import{L as O}from"./Legend-DPzIZPc1.js";import{T as W}from"./Tooltip-BGNMLgA6.js";import{L as C}from"./Line-Dq6GxaVC.js";import{R as X}from"./RechartsHookInspector-BZsexvc_.js";import{C as Y}from"./Curve-DLwP9u8w.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-7Zncxn1v.js";import"./immer-DHklT898.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-2xnsmZbF.js";import"./index-C8r_0QEC.js";import"./hooks-CtDQVu0u.js";import"./axisSelectors-Do7BkVsn.js";import"./d3-scale-3VqrHCN7.js";import"./zIndexSlice-DAYnIbZH.js";import"./renderedTicksSlice-D7ViyujS.js";import"./CartesianChart-CQEHzqI9.js";import"./chartDataContext-BXPlG8LR.js";import"./CategoricalChart-BZHJ_HjV.js";import"./CartesianAxis-BKf97Rvg.js";import"./Layer-BrlL2tOs.js";import"./Text-Bwe6nLXh.js";import"./DOMUtils-Ci6QTQ3e.js";import"./Label-C6izcScL.js";import"./ZIndexLayer-BvENavnS.js";import"./types-LCDeNazI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-3zNmirWo.js";import"./symbol-BGt6k0O8.js";import"./step-CSrZegzj.js";import"./useElementOffset-DKr_-hTa.js";import"./uniqBy--BozFN4q.js";import"./iteratee-BlkE-BhU.js";import"./useAnimationId-C4Vc8PxM.js";import"./Cross-Bx37bdEN.js";import"./Rectangle-XiX3CaBX.js";import"./Sector-4mD4Ykg7.js";import"./ReactUtils-A9WQzOkM.js";import"./ActivePoints-BcsZ0pU5.js";import"./Dot-DNIsMwyQ.js";import"./RegisterGraphicalItemId-BLl1AU5h.js";import"./ErrorBarContext-Ba1R8w21.js";import"./GraphicalItemClipPath-B9R00R0l.js";import"./SetGraphicalItem-CczBCiBC.js";import"./getRadiusAndStrokeWidthFromDot-Dsgl31AO.js";import"./ActiveShapeUtils-6me4R15I.js";import"./isPlainObject-O_SkrgJ1.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-Jy6pnob6.js";import"./index-D_cVMinZ.js";import"./ChartSizeDimensions-CL0i_3ns.js";import"./OffsetShower-CTFYQb52.js";import"./PlotAreaShower-CS9RsVg8.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip cursor={{
          stroke: 'gold',
          strokeWidth: 2
        }} defaultIndex={3} />
          <Line type="linear" dataKey="pv" stroke="#8884d8" activeDot={{
          r: 8
        }} shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<circle r={5} fill="currentColor" />} />} />
          <Line type="linear" dataKey="uv" stroke="#82ca9d" shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<rect x={-5} y={-5} width={10} height={10} fill="currentColor" />} />} />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
