import{R as t}from"./iframe-pbo-QmUV.js";import{a as p}from"./isWellBehavedNumber-zRxxoDF3.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DWdZgPGc.js";import{R as T}from"./zIndexSlice-uFV94i-F.js";import{C as M}from"./CartesianGrid-BJc9xt0z.js";import{X as $}from"./XAxis-D3aLIvS-.js";import{Y as I}from"./YAxis-nh7YJu46.js";import{L as O}from"./Legend-BlWFc7hv.js";import{T as W}from"./Tooltip-Dw5XD65M.js";import{L as C}from"./Line-6O9C2MB0.js";import{C as X}from"./Curve-mcatnmip.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bn-8X6Qs.js";import"./RechartsWrapper-D_F_8pjg.js";import"./axisSelectors-Ry70X2n2.js";import"./throttle-pz4AEyIn.js";import"./index-D_Ub_wFV.js";import"./index-CKUumD7T.js";import"./d3-scale-CHgOHIs9.js";import"./index-Cqrsc3wV.js";import"./index-DRjmG3NL.js";import"./renderedTicksSlice-DBjq58iQ.js";import"./index-CgW8Pfrl.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CVXeZ94e.js";import"./chartDataContext-D8AV35hB.js";import"./CategoricalChart-C7FDKNmd.js";import"./CartesianAxis-DdLDEoN3.js";import"./Layer-Cu62JC_z.js";import"./Text-BdcAn3_A.js";import"./DOMUtils-C6RebZcO.js";import"./useId-BuOtXniO.js";import"./useBackwardsCompatibleTheme-CqO1jBVJ.js";import"./Label-DU5Wkeud.js";import"./ZIndexLayer-DMCFd0Py.js";import"./types-C5-2SUHa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BEL-A10D.js";import"./symbol-Chjg7NBq.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Br9Bj8uR.js";import"./uniqBy-H0z77HUa.js";import"./iteratee-pV8VR7RL.js";import"./useAnimationId-w92tOT6t.js";import"./Cross-Bfo2Pftl.js";import"./Rectangle-rbQamDu_.js";import"./util-Dxo8gN5i.js";import"./Sector-T8h-oVN9.js";import"./AnimatedItems--5FH9Bfg.js";import"./ActivePoints-D9o-N645.js";import"./Dot-D4f4qHEu.js";import"./RegisterGraphicalItemId-m6HZhBI1.js";import"./ErrorBarContext-DqrAg45D.js";import"./GraphicalItemClipPath-Q1XGfFBL.js";import"./SetGraphicalItem-Dbyeimyx.js";import"./getRadiusAndStrokeWidthFromDot-CFJndDg7.js";import"./ActiveShapeUtils-ompTjO3b.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-LTM-Duq3.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
