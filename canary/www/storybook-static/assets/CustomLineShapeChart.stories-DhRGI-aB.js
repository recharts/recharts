import{R as t}from"./iframe-BB3lVLoc.js";import{a as s}from"./isWellBehavedNumber-_9n5Uq-d.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DsJ8SC-q.js";import{R as T}from"./zIndexSlice-CfHP3A1Y.js";import{C as M}from"./CartesianGrid-BrTBnP2B.js";import{X as $}from"./XAxis-BBQp-Idt.js";import{Y as I}from"./YAxis-DG4767Mj.js";import{L as O}from"./Legend-BZK3nF7M.js";import{T as W}from"./Tooltip-ChW1fGhT.js";import{L as C}from"./Line-C9JbolpU.js";import{C as X}from"./Curve-DzA4hX9V.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CUfoVU2p.js";import"./RechartsWrapper-S-WqrQUy.js";import"./axisSelectors-CEA0dwEw.js";import"./throttle-QtsYQF8O.js";import"./index-DcEJbqAh.js";import"./index-BKenMcKp.js";import"./d3-scale-CDtyCF0X.js";import"./index-DUlsk-Es.js";import"./index-B-cCuGfC.js";import"./renderedTicksSlice-Toi-dgcz.js";import"./index-yFQohn8S.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Kpp943Pu.js";import"./chartDataContext-CiYf8ag2.js";import"./CategoricalChart-CwlUzHNA.js";import"./CartesianAxis-m8s8CMt8.js";import"./Layer-NQ3_WlgF.js";import"./Text-DEC8wtTL.js";import"./DOMUtils-CldD4RXg.js";import"./useId-BaM-cyip.js";import"./useBackwardsCompatibleTheme-Cqzm3Lgs.js";import"./Label-Cn0Fp29B.js";import"./ZIndexLayer-DTgItK4v.js";import"./types-KCNzlOcC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-D3aKpe7H.js";import"./symbol-BGppE-YZ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-yO1LxUDf.js";import"./uniqBy-BBx3NQ59.js";import"./iteratee-CI9yimKx.js";import"./useAnimationId-BDqb5MNR.js";import"./Cross-Cpmu6xPG.js";import"./Rectangle-BTqJh7jp.js";import"./util-Dxo8gN5i.js";import"./Sector-qPpg4NhU.js";import"./AnimatedItems-DJZqC0i8.js";import"./ActivePoints-C2lE0Ysx.js";import"./Dot-bxm0u_di.js";import"./RegisterGraphicalItemId-BeJ9531v.js";import"./ErrorBarContext-BboOIeGg.js";import"./GraphicalItemClipPath-DHVb6D1Y.js";import"./SetGraphicalItem-B2jSBaNX.js";import"./getRadiusAndStrokeWidthFromDot-D184pFcr.js";import"./ActiveShapeUtils-DiHdw4Rv.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-D6h1aeKq.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let b=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
