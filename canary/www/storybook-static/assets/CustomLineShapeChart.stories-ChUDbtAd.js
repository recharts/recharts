import{R as t}from"./iframe-1WG2GaGK.js";import{i as p}from"./isWellBehavedNumber-B8fKCwi6.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-cLUl2aVT.js";import{R as T}from"./zIndexSlice-Cov-NdD7.js";import{C as M}from"./CartesianGrid-CfUMVsXY.js";import{X as $}from"./XAxis-B48KuXEj.js";import{Y as I}from"./YAxis-DhndnEIx.js";import{L as O}from"./Legend-Duop5GXq.js";import{T as W}from"./Tooltip-CrbHU2w3.js";import{L as C}from"./Line-B4LmlSzQ.js";import{C as X}from"./Curve-E4cJetkR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-B25CKbLH.js";import"./RechartsWrapper-DEOyl0D-.js";import"./index-VHVhx1s3.js";import"./index-4UOu-PIF.js";import"./index-5AmNG6XU.js";import"./index-B9GM_nGd.js";import"./throttle-CilGSGoA.js";import"./renderedTicksSlice-yo2RGDNB.js";import"./axisSelectors-Z8eCsImY.js";import"./d3-scale-CmojMi_E.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Zn47P4p1.js";import"./chartDataContext-D8DLudE3.js";import"./CategoricalChart-SqRjK-fv.js";import"./CartesianAxis-CtKdIdzU.js";import"./Layer-DBIGyDPn.js";import"./Text-Dz3dqWjs.js";import"./DOMUtils-BEiFehcN.js";import"./Label-C04bXC5p.js";import"./ZIndexLayer-DViTPcza.js";import"./types-CoEQwN0Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BlVo0R4U.js";import"./symbol-BnNCQHpU.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CzZdzVLP.js";import"./uniqBy-gRFmhWu-.js";import"./iteratee-CT0EjMPh.js";import"./useAnimationId-CnlBu4wu.js";import"./Cross-CY8Ov4nG.js";import"./Rectangle-CSfdiBYy.js";import"./util-Dxo8gN5i.js";import"./Sector-BNmIP3Fj.js";import"./AnimatedItems-4pikexb5.js";import"./ActivePoints-QnPfRyyM.js";import"./Dot-DPmzUGmI.js";import"./RegisterGraphicalItemId-kBJx_8Si.js";import"./ErrorBarContext-odKApO7t.js";import"./GraphicalItemClipPath-CPz3ISZ8.js";import"./SetGraphicalItem-C1oEpLce.js";import"./getRadiusAndStrokeWidthFromDot-Be8-hX5d.js";import"./ActiveShapeUtils--OE9DBaA.js";import"./step-BCYuq7V7.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Nt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Nt as __namedExportsOrder,Bt as default};
