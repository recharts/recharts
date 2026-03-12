import{e as t}from"./iframe-DDnGsu5h.js";import{R as D,i as s}from"./arrayEqualityCheck-b4GtS9KF.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-cU647Pqq.js";import{C as K}from"./CartesianGrid-Cqk_p3-f.js";import{X as T}from"./XAxis-_OohREfq.js";import{Y as M}from"./YAxis-BFUe8vT1.js";import{L as $}from"./Legend-BAVLUpfE.js";import{T as O}from"./Tooltip-Dyzs9RB6.js";import{L as C}from"./Line-B4wil4Rf.js";import{R as W}from"./RechartsHookInspector-BSABdRIX.js";import{C as X}from"./Curve-CVMF8Bc_.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-fGyvU07W.js";import"./immer-Wl9pIdwq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CV2CC7gc.js";import"./index-d0V4PGet.js";import"./hooks-CvD5OSLo.js";import"./axisSelectors-K5XPsZJJ.js";import"./d3-scale-CMnVuEfq.js";import"./zIndexSlice-CzCRY4NE.js";import"./renderedTicksSlice-C6o-1nzY.js";import"./CartesianChart-B6G_xsde.js";import"./chartDataContext-BS9VYmJ6.js";import"./CategoricalChart-DhfYtuLa.js";import"./CartesianAxis-C4D4URoI.js";import"./Layer-BQ5I3ZR3.js";import"./Text-DIC51zN-.js";import"./DOMUtils-jQ5hfjUg.js";import"./Label-Cq1Jw9bg.js";import"./ZIndexLayer-CSa4Hu6m.js";import"./types-VBSg6qfW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BliKz0Rz.js";import"./symbol-DvZtmJVK.js";import"./step-NA2d-6xM.js";import"./useElementOffset-BLONHf2Z.js";import"./uniqBy-BHkPP5WV.js";import"./iteratee-BYQsP9wj.js";import"./useAnimationId-CsY2QYNS.js";import"./Cross-Hstxks7w.js";import"./Rectangle-CItL8Q7z.js";import"./Sector-DVi4Mpj4.js";import"./ReactUtils-LLGJjmJY.js";import"./ActivePoints-Bm7ShVQX.js";import"./Dot-BvK9-kYF.js";import"./RegisterGraphicalItemId-BptZQ5zb.js";import"./ErrorBarContext-Bza5L9FQ.js";import"./GraphicalItemClipPath-wpXTFAhB.js";import"./SetGraphicalItem-Bpj0QyBT.js";import"./getRadiusAndStrokeWidthFromDot-BQH46_oi.js";import"./ActiveShapeUtils-Qp0g2m0V.js";import"./isPlainObject-dg6p2L4N.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-sOsheLpd.js";import"./index-DFiQJbL_.js";import"./ChartSizeDimensions-BTgFhtFz.js";import"./OffsetShower-C6Pk8qlF.js";import"./PlotAreaShower-Dg7-kQiU.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
