import{R as t}from"./iframe-B7hbNEXj.js";import{a as p}from"./isWellBehavedNumber-7V-rOBye.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-zG6Xq_pu.js";import{R as T}from"./zIndexSlice-B7xQcNcG.js";import{C as M}from"./CartesianGrid-R_m8YFEY.js";import{X as $}from"./XAxis-DTRImo2J.js";import{Y as I}from"./YAxis-DYrUNm06.js";import{L as O}from"./Legend-BHv0V5I1.js";import{T as W}from"./Tooltip-DW4lutut.js";import{L as C}from"./Line-DjZkWb4y.js";import{C as X}from"./Curve-CUqyVekg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CZFMPmgx.js";import"./RechartsWrapper-jiH_AYjt.js";import"./axisSelectors-MpDLX8pO.js";import"./throttle-BSjszxUH.js";import"./index-Dqn8czyj.js";import"./index-BYIthK0p.js";import"./d3-scale-BYK0PNRi.js";import"./index-yv8yhgLp.js";import"./index-BXYzHp_E.js";import"./renderedTicksSlice-CuhNidwY.js";import"./index-C8e3_gAU.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DfAXRIqb.js";import"./chartDataContext-BXIYwbQE.js";import"./CategoricalChart-yOdjtk4z.js";import"./CartesianAxis-CneZULGs.js";import"./Layer-osX5cZvY.js";import"./Text-DWuYBy5V.js";import"./DOMUtils-BhIaSreR.js";import"./useId-CxLZ9MIg.js";import"./useBackwardsCompatibleTheme-L1kNM3iV.js";import"./Label-lNQzMu7Z.js";import"./ZIndexLayer-jcXUwYN8.js";import"./types-C3ibKMTz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Ce4xYfXm.js";import"./symbol-CQ0q3eX5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-w7QmJN4M.js";import"./uniqBy-D7tqJ0kr.js";import"./iteratee-CMD1iHwZ.js";import"./useAnimationId-BjhUfelV.js";import"./Cross-kZvf2QnA.js";import"./Rectangle-DXA3Y7lF.js";import"./util-Dxo8gN5i.js";import"./Sector-DGiQIbbB.js";import"./AnimatedItems-DhxUFxBy.js";import"./ActivePoints-BbyHcAce.js";import"./Dot-ArvJ9HsL.js";import"./RegisterGraphicalItemId-Dm44HWfF.js";import"./ErrorBarContext-BQLnOb5r.js";import"./GraphicalItemClipPath-BL1Y6_ch.js";import"./SetGraphicalItem-DpZwQAUe.js";import"./getRadiusAndStrokeWidthFromDot-9G5pAfIZ.js";import"./ActiveShapeUtils-Ds7YjhX_.js";import"./useGraphicalItemIdentity-C6Z_BcTV.js";import"./step-5lhI3wtQ.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
