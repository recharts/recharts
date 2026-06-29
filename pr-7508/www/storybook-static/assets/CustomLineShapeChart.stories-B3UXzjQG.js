import{R as t}from"./iframe-CCxa2X_3.js";import{a as p}from"./isWellBehavedNumber-D-qJMApD.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DECqCDCO.js";import{R as T}from"./zIndexSlice-CjS-6Q6g.js";import{C as M}from"./CartesianGrid-BnLmHshS.js";import{X as $}from"./XAxis-DgXTsbE5.js";import{Y as I}from"./YAxis-LHNbupxO.js";import{L as O}from"./Legend-BrRZ-j69.js";import{T as W}from"./Tooltip-C_6OA510.js";import{L as C}from"./Line-Hi10lWtZ.js";import{C as X}from"./Curve-DuMlNmnh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BWGRxCzY.js";import"./resolveDefaultProps-DiPmn6d5.js";import"./RechartsWrapper-2JrQYSBT.js";import"./index-HidsIZF1.js";import"./index-DtdyiYMy.js";import"./index-BTMSijfB.js";import"./index-Bu6kQjLM.js";import"./throttle-DVixtPip.js";import"./renderedTicksSlice-BZsMGLS6.js";import"./axisSelectors-DutwzDNX.js";import"./d3-scale-BD_lAQxm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BqBORtky.js";import"./chartDataContext-un8h0oN7.js";import"./CategoricalChart-BETRAeyd.js";import"./CartesianAxis-06zEjNAD.js";import"./Layer-DSUD-a_F.js";import"./Text-zmbPwYi6.js";import"./DOMUtils-D9dcGvYT.js";import"./Label-BbbTGnnM.js";import"./ZIndexLayer-DK9HGDkh.js";import"./types-BCrxJhqI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-D6XRg3mk.js";import"./symbol-sqDWSZm8.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DofYk2ft.js";import"./uniqBy-DXRe4Vi9.js";import"./iteratee-C-XK7dPA.js";import"./useAnimationId-Qtosu25G.js";import"./Cross-DoeHMXog.js";import"./Rectangle-BK1YtbdL.js";import"./util-Dxo8gN5i.js";import"./Sector-DevuOtE1.js";import"./AnimatedItems-CtF1ph7i.js";import"./ActivePoints-DMw22gL4.js";import"./Dot-BqRYjtmh.js";import"./RegisterGraphicalItemId-Co8JXb8t.js";import"./ErrorBarContext-DiexwYLt.js";import"./GraphicalItemClipPath-hMgxAXNq.js";import"./SetGraphicalItem-BLsqb4fN.js";import"./getRadiusAndStrokeWidthFromDot-CMMqsGHP.js";import"./ActiveShapeUtils-D6Ox5ImN.js";import"./step-Cx1fSWqJ.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
