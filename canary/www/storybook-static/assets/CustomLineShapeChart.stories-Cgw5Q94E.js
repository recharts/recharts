import{R as t}from"./iframe-DpDTD0JG.js";import{a as s}from"./isWellBehavedNumber-DmMeAzDB.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-Br1I2t33.js";import{R as T}from"./zIndexSlice-DGwVx7BW.js";import{C as M}from"./CartesianGrid-B3XOwetY.js";import{X as $}from"./XAxis-DWjiAOFV.js";import{Y as I}from"./YAxis-tfWa7V5m.js";import{L as O}from"./Legend-S8MIn7rp.js";import{T as W}from"./Tooltip-CHO4Gyak.js";import{L as C}from"./Line-BDAu27yc.js";import{C as X}from"./Curve-idp9_WLY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CxXNP2HM.js";import"./RechartsWrapper-BCxYcmRP.js";import"./index-B2s4Biye.js";import"./index-Cd_oQMUU.js";import"./index-DWuIzRsj.js";import"./index-Knde-ajF.js";import"./throttle-DoBh-DCx.js";import"./renderedTicksSlice-BRwKivWp.js";import"./axisSelectors-Ck_lqLE7.js";import"./d3-scale-BfEaqYEJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BR7vTuCF.js";import"./chartDataContext-DFDKJiUi.js";import"./CategoricalChart-C6CLVh4_.js";import"./CartesianAxis-C7YtKMNS.js";import"./Layer-lPi_1jCz.js";import"./Text-Bc5Ou4J8.js";import"./DOMUtils-3wivgqkH.js";import"./Label-BwbI5cJ6.js";import"./ZIndexLayer-DqWsyuzf.js";import"./types-C1vx5dmr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CVSBj4p3.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BQPyP65-.js";import"./symbol-BtQR44l_.js";import"./path-DyVhHtw_.js";import"./useElementOffset-_vPtQ8Bj.js";import"./uniqBy-CidOEm7r.js";import"./iteratee-DOkUz8r4.js";import"./useAnimationId-NxcyCMrj.js";import"./Cross-Bj0TkiqM.js";import"./Rectangle-B6hULads.js";import"./util-Dxo8gN5i.js";import"./Sector-CVCUg6GK.js";import"./AnimatedItems-DlouAWba.js";import"./ActivePoints-iTKt_ZL7.js";import"./Dot-DB73TuWs.js";import"./RegisterGraphicalItemId-4knkFaEt.js";import"./ErrorBarContext-pGcuO8rw.js";import"./GraphicalItemClipPath-Bu8PaL2p.js";import"./SetGraphicalItem-BR_9ARmo.js";import"./graphicalItemIdentity-DOc93K5L.js";import"./ActiveShapeUtils-DCmpyR0n.js";import"./step-7HWztNo7.js";const qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
