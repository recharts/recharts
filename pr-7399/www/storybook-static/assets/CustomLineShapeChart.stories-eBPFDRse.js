import{c as t}from"./iframe-BRX46Ivk.js";import{a as p}from"./isWellBehavedNumber-CB_DAa3f.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-DPte-9pC.js";import{L as A}from"./LineChart-CCOfL6Ut.js";import{g as M}from"./zIndexSlice-DWdWmCIF.js";import{C as R}from"./CartesianGrid-D0aJguyw.js";import{X as $}from"./XAxis-BCLXDtwM.js";import{Y as I}from"./YAxis-DQxr8HwE.js";import{L as O}from"./Legend-BoiQP3Yn.js";import{T as W}from"./Tooltip-CVUewvSq.js";import{L as C}from"./Line-DersmD4z.js";import{C as X}from"./Curve-DevGF9dB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Co_O7Bis.js";import"./resolveDefaultProps-yU7jT9_k.js";import"./RechartsWrapper-C2N_lXXj.js";import"./index-WXfBYNk1.js";import"./index-C_nDec_P.js";import"./index-aVTX2b-6.js";import"./index-B93cWPAb.js";import"./immer-B8PXb0jM.js";import"./renderedTicksSlice-B8vMnOQc.js";import"./axisSelectors-CxAtIunO.js";import"./d3-scale--l5c2rdM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CXTTTHcm.js";import"./chartDataContext-Liihjxia.js";import"./CategoricalChart-CQuPTVMV.js";import"./CartesianAxis-D25s55eU.js";import"./Layer-CnAnt2-w.js";import"./Text-Dab8pblH.js";import"./DOMUtils-DYK5KdOd.js";import"./Label-BF8y58w-.js";import"./ZIndexLayer-CPddneQ7.js";import"./types-BPLmhp3x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-B8Sp8m_P.js";import"./symbol-ByCVyfxY.js";import"./path-DyVhHtw_.js";import"./useElementOffset-De3qQeYf.js";import"./uniqBy-CtWhPXaz.js";import"./iteratee-B6B5J5uM.js";import"./useAnimationId-HcldwJQz.js";import"./Cross-BvuakeTj.js";import"./Rectangle-BGEQUwuw.js";import"./Sector-DKv1-que.js";import"./ReactUtils-CZBp5YIk.js";import"./ActivePoints-zyPb8mdq.js";import"./Dot-DrpVqpH-.js";import"./RegisterGraphicalItemId-D97Nzm32.js";import"./ErrorBarContext-OAvmaR3P.js";import"./GraphicalItemClipPath-BoMPcOm_.js";import"./SetGraphicalItem-Ddj-tLej.js";import"./getRadiusAndStrokeWidthFromDot-CjA9U0Zs.js";import"./ActiveShapeUtils-DpAig7qv.js";import"./step-DohD2rXx.js";const Gt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),D=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=D}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(M,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(R,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Bt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Bt as __namedExportsOrder,Gt as default};
