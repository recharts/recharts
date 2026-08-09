import{R as t}from"./iframe-CMWK1RnV.js";import{a as s}from"./isWellBehavedNumber-CyyUOQdm.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CGrQ6IDY.js";import{R as T}from"./zIndexSlice-BytvSaR0.js";import{C as M}from"./CartesianGrid-DnbggMbP.js";import{X as $}from"./XAxis-DWpQtd1t.js";import{Y as I}from"./YAxis-BW66Z7F1.js";import{L as O}from"./Legend-BDXq2L1_.js";import{T as W}from"./Tooltip-B_R48we7.js";import{L as C}from"./Line-DfXl_x5M.js";import{C as X}from"./Curve-CBdRZDkC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-phMwPKZe.js";import"./RechartsWrapper-BeDYcqlN.js";import"./index-y1rMs8xl.js";import"./index-D8xGdR5e.js";import"./index-AeW_NqGc.js";import"./index-Syzk9fQZ.js";import"./throttle-DHHUYikL.js";import"./axisSelectors-BgzJH9qY.js";import"./d3-scale-CPniq2Ig.js";import"./renderedTicksSlice-X6zEnROV.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CFORAsRI.js";import"./chartDataContext-LElJR2nd.js";import"./CategoricalChart-JJ_xXB-S.js";import"./CartesianAxis-B04cLUP1.js";import"./Layer-CCdAbzHQ.js";import"./Text-CsZIDzps.js";import"./DOMUtils-BcIZbNLs.js";import"./Label-D4xT1rG9.js";import"./ZIndexLayer-DaLkAJUw.js";import"./types-ClsmN4lT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-oN75whkn.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-REW61yy0.js";import"./symbol-NEJJ3FKS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DE11cRod.js";import"./uniqBy-B-JKIk0o.js";import"./iteratee-Bh0t3XA2.js";import"./useAnimationId-McaNs9se.js";import"./Cross-S_pcxdbW.js";import"./Rectangle-CcMV1lU1.js";import"./util-Dxo8gN5i.js";import"./Sector-aMzYJSPP.js";import"./AnimatedItems-Bq0RY7UB.js";import"./ActivePoints-CSFUF4Gb.js";import"./Dot-3F0SNdEj.js";import"./RegisterGraphicalItemId-DLOCgd05.js";import"./ErrorBarContext-DX33Jely.js";import"./graphicalItemIdentity-CeQSeT3p.js";import"./SetGraphicalItem-DoQBw7Cq.js";import"./getRadiusAndStrokeWidthFromDot-RfkcUhvi.js";import"./ActiveShapeUtils-CDGNe_G8.js";import"./step-Cd2l06Ut.js";const qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const zt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,zt as __namedExportsOrder,qt as default};
