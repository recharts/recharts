import{R as t}from"./iframe-JwbLQPb2.js";import{a as p}from"./isWellBehavedNumber-CdOzsQhH.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CyWgZ_3C.js";import{R as T}from"./zIndexSlice-BvSjVeUr.js";import{C as M}from"./CartesianGrid-ChdA-PG8.js";import{X as $}from"./XAxis-CM1shXvI.js";import{Y as I}from"./YAxis-CMNQVrMb.js";import{L as O}from"./Legend-D2QrjC31.js";import{T as W}from"./Tooltip-ggRRLF2Q.js";import{L as C}from"./Line-7JNP1HYC.js";import{C as X}from"./Curve-v4EbeP27.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CSG7eI7r.js";import"./RechartsWrapper-CHoC0Tmg.js";import"./axisSelectors-Bl-g05pj.js";import"./throttle-CQOjkZLn.js";import"./index-BTc1OfE8.js";import"./index-CKs_88Jr.js";import"./d3-scale-C8sQoAOm.js";import"./index-CV_Eti3m.js";import"./index-Ct1SgceM.js";import"./renderedTicksSlice-f-Q9YZ5S.js";import"./index-B_caUHn5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CVn5EGJv.js";import"./chartDataContext-CoYu6TUB.js";import"./CategoricalChart-Cxecmsq9.js";import"./CartesianAxis-DEricmMP.js";import"./Layer-BUVs9FF0.js";import"./Text-DYIo7N8x.js";import"./DOMUtils-CGRWukjT.js";import"./useId-CU2vxgfb.js";import"./useBackwardsCompatibleTheme-2v1_sDmp.js";import"./Label-C9oG4jkb.js";import"./ZIndexLayer-B1cjmDJz.js";import"./types-BXkOLLZ5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Cchs_XVF.js";import"./symbol-Q_pfoSEH.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BYV602LJ.js";import"./uniqBy-DWoTTWdi.js";import"./iteratee-DxP2qSYe.js";import"./useAnimationId-DNb0w9mF.js";import"./Cross-Berlx-JC.js";import"./Rectangle-CfutVei8.js";import"./util-Dxo8gN5i.js";import"./Sector-CkizDHcj.js";import"./AnimatedItems-Di0vnHT_.js";import"./ActivePoints-Zw5Cgcy4.js";import"./Dot-BOts6I9w.js";import"./RegisterGraphicalItemId-JHnI7J5m.js";import"./ErrorBarContext-DLKn1BJH.js";import"./GraphicalItemClipPath-Btey0t5q.js";import"./SetGraphicalItem-CF8QjFwu.js";import"./getRadiusAndStrokeWidthFromDot-Bmqi90U5.js";import"./ActiveShapeUtils-CZ-yTrkB.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-8eqj28j5.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
