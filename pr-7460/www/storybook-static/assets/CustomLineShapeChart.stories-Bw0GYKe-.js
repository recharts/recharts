import{R as t}from"./iframe-ChdTnuJZ.js";import{a as p}from"./isWellBehavedNumber-CwWlLsdj.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BdYSpQ06.js";import{R as T}from"./zIndexSlice-DTuHfx_p.js";import{C as M}from"./CartesianGrid-BN3a4K6h.js";import{X as $}from"./XAxis--3XEHI4a.js";import{Y as I}from"./YAxis-BUBRSx7t.js";import{L as O}from"./Legend-C4C0gtl-.js";import{T as W}from"./Tooltip-ClIVzJrA.js";import{L as C}from"./Line-zKyE8rWG.js";import{C as X}from"./Curve-BLJbrdKh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BljYdgC6.js";import"./resolveDefaultProps-CmZ2lQdU.js";import"./RechartsWrapper-VmQ82j3S.js";import"./index-Dl7IIVL4.js";import"./index-BnBFbJTw.js";import"./index-DteGnOzp.js";import"./index-Dq9WTpJB.js";import"./immer-DHJNVAe2.js";import"./renderedTicksSlice-IsDkktPX.js";import"./axisSelectors-UyjPZuEn.js";import"./d3-scale-Ch-uXsQ6.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DV13kS8z.js";import"./chartDataContext-COA3hxu-.js";import"./CategoricalChart-JBgYyUd3.js";import"./CartesianAxis-DeJGk3LW.js";import"./Layer-CbZTDJjb.js";import"./Text-BqDkAbeE.js";import"./DOMUtils-BvzDzAj2.js";import"./Label-ODDr4Kfk.js";import"./ZIndexLayer-DzezyKwN.js";import"./types-Blkff1hk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-kG2zlxxy.js";import"./symbol-j9t4dhdn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-EA0CDPIO.js";import"./uniqBy-XDLsRfro.js";import"./iteratee-DZC8fA35.js";import"./useAnimationId-w9_6HKPK.js";import"./Cross-BR5m8PSA.js";import"./Rectangle-C4VesXv4.js";import"./util-Dxo8gN5i.js";import"./Sector-CFHu7zJj.js";import"./AnimatedItems-BDYJ2E_L.js";import"./ActivePoints-zze0EoKb.js";import"./Dot-B3nzfqLK.js";import"./RegisterGraphicalItemId-BcQylArw.js";import"./ErrorBarContext-CZ-WTEC7.js";import"./GraphicalItemClipPath-D0CBaYt_.js";import"./SetGraphicalItem-Dx80ZtIC.js";import"./getRadiusAndStrokeWidthFromDot-JQNnNq8i.js";import"./ActiveShapeUtils-t-acR5v1.js";import"./step-C9h4VCgc.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
