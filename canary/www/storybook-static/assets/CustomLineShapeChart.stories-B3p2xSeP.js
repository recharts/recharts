import{c as t}from"./iframe-CJZgj0uU.js";import{a as p}from"./isWellBehavedNumber-Nplq3bnb.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-DPte-9pC.js";import{L as A}from"./LineChart-DNpykYrR.js";import{g as M}from"./zIndexSlice-BZ2O-OQH.js";import{C as R}from"./CartesianGrid-CWbKmIi2.js";import{X as $}from"./XAxis-BSW-Wlgv.js";import{Y as I}from"./YAxis-BAQCElzz.js";import{L as O}from"./Legend-Pe-dwHgI.js";import{T as W}from"./Tooltip-C11V9TGR.js";import{L as C}from"./Line-BFiCebMO.js";import{C as X}from"./Curve-Cyl-l43N.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BEAZ2r52.js";import"./resolveDefaultProps-FKfcMfmF.js";import"./RechartsWrapper-DQ7nKJcr.js";import"./index-CU49z8K0.js";import"./index-KU4xeJqQ.js";import"./index-BaU2Z89k.js";import"./index-BRhVkoAq.js";import"./immer-BIrrzgtK.js";import"./renderedTicksSlice-Bd5uuDyd.js";import"./axisSelectors-Q9vNN-fQ.js";import"./d3-scale-DdptYiWa.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BaL0sKso.js";import"./chartDataContext-BuQzXvR1.js";import"./CategoricalChart-Q8RRHSJw.js";import"./CartesianAxis-BX7jntaJ.js";import"./Layer-ydyUpJJb.js";import"./Text-D112bEeq.js";import"./DOMUtils-BgafkoVk.js";import"./Label-CJIrHnSQ.js";import"./ZIndexLayer-DPHRw4Ib.js";import"./types-CiRy8kfJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-Cv-NkGAG.js";import"./symbol-C1akmMb0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C-Hc0Nh0.js";import"./uniqBy-7nk3lUE2.js";import"./iteratee-InYqkfXa.js";import"./useAnimationId-Bs6-Zm7y.js";import"./Cross-DrkPMd6H.js";import"./Rectangle-DN1lBA6W.js";import"./Sector-KTibSxhz.js";import"./ReactUtils-GZ1OoiCv.js";import"./ActivePoints-IwLpaKOt.js";import"./Dot-BRBzm1sk.js";import"./RegisterGraphicalItemId-Y2xEXS3n.js";import"./ErrorBarContext-CS0wxcMb.js";import"./GraphicalItemClipPath-DHmOdu8W.js";import"./SetGraphicalItem-xXSm9JS4.js";import"./getRadiusAndStrokeWidthFromDot-D1SY7hYV.js";import"./ActiveShapeUtils-BjI4G98c.js";import"./step-DNKj4THz.js";const Gt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),D=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=D}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(M,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(R,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
