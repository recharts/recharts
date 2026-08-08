import{R as t}from"./iframe-zxb33ZNc.js";import{a as s}from"./isWellBehavedNumber-C-R_UlW0.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-cP333dp0.js";import{R as T}from"./zIndexSlice-D-761Vg8.js";import{C as M}from"./CartesianGrid-BbAkmeDL.js";import{X as $}from"./XAxis-DyyrbnA7.js";import{Y as I}from"./YAxis-1uMHWvAC.js";import{L as O}from"./Legend-2paWe6ay.js";import{T as W}from"./Tooltip-DotMbdnZ.js";import{L as C}from"./Line-DVclB8_O.js";import{C as X}from"./Curve-BFfco-WU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B762IN2m.js";import"./RechartsWrapper-DnDLnjyJ.js";import"./index-C-3okO3A.js";import"./index-qRk_YJlx.js";import"./index-NFdtXm63.js";import"./index-Dy7fskO8.js";import"./throttle-CFGr8cJA.js";import"./axisSelectors-Dv7CZoVg.js";import"./d3-scale-BDbFjNBn.js";import"./renderedTicksSlice-DRIJDHkm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DKaHYTMw.js";import"./chartDataContext-c74vlS-l.js";import"./CategoricalChart-ZwmRaYFc.js";import"./CartesianAxis-DX_ZohL1.js";import"./Layer-C3L05uBE.js";import"./Text-KHBAPEp1.js";import"./DOMUtils-Dz-vbmjU.js";import"./Label-DU6Rr4ia.js";import"./ZIndexLayer-DbePcZGA.js";import"./types-Dolw0ENN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DJQOtdEl.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CyjUC6xP.js";import"./symbol-DmYa02Qn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dv5E6_pT.js";import"./uniqBy-yJmr0v8a.js";import"./iteratee-DrBLX_LB.js";import"./useAnimationId-SEMOU1a_.js";import"./Cross-Bmz824kw.js";import"./Rectangle-BjgKUtj_.js";import"./util-Dxo8gN5i.js";import"./Sector-DTuNs_3F.js";import"./AnimatedItems-DMGgkPL-.js";import"./ActivePoints-rNpF2i82.js";import"./Dot-aKbZPoCq.js";import"./RegisterGraphicalItemId-BHi56vMH.js";import"./ErrorBarContext-Cv-hFLv9.js";import"./GraphicalItemClipPath-dZEprd-F.js";import"./SetGraphicalItem-DyIKS88p.js";import"./getRadiusAndStrokeWidthFromDot-BBU-nePS.js";import"./ActiveShapeUtils-B0CCDTVh.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-Bi5jdybT.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Ht=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Ht as __namedExportsOrder,zt as default};
