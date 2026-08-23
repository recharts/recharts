import{R as t}from"./iframe-C3Hc6ExU.js";import{a as s}from"./isWellBehavedNumber-BaxFFXf5.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DqE_ehOi.js";import{R as T}from"./zIndexSlice-DUSt-QRk.js";import{C as M}from"./CartesianGrid-DRfcDaI-.js";import{X as $}from"./XAxis-Dtgw3Co8.js";import{Y as I}from"./YAxis-C-y6lpsY.js";import{L as O}from"./Legend-vTCAFLss.js";import{T as W}from"./Tooltip-BEzcRvDA.js";import{L as C}from"./Line-DP79-Lts.js";import{C as X}from"./Curve-xgDPuw9g.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-I9hvH7ZX.js";import"./RechartsWrapper-B7tS-h39.js";import"./index-DPHIqaZF.js";import"./index-jh_FdFAs.js";import"./index-BCuR5Ep7.js";import"./index-N8Br274d.js";import"./throttle-DY2EWLMY.js";import"./axisSelectors-CVNuchwD.js";import"./d3-scale-BNbYa6kD.js";import"./renderedTicksSlice-C_VQ6yCW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D83sOKb0.js";import"./chartDataContext-De2r_5pJ.js";import"./CategoricalChart-Z9dORHEb.js";import"./CartesianAxis-DzoIF-ni.js";import"./Layer-nhPcXxtD.js";import"./Text-DrMy69_K.js";import"./DOMUtils-Cnn_urMe.js";import"./useId-z0f7lKjA.js";import"./useBackwardsCompatibleTheme-BO1TP3oH.js";import"./Label-CANqho75.js";import"./ZIndexLayer-G0ryhOC-.js";import"./types-fNKA8Oi0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DPWsfdBp.js";import"./symbol-Gsnozwnh.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DuZ6R57W.js";import"./uniqBy-CoWizTQu.js";import"./iteratee-BjcMXY4A.js";import"./useAnimationId-C5Z2jNIS.js";import"./Cross-KjR35TKX.js";import"./Rectangle-B8xTYBg9.js";import"./util-Dxo8gN5i.js";import"./Sector-U6RkeRpn.js";import"./AnimatedItems-EryZIVr5.js";import"./ActivePoints-MsPbupEa.js";import"./Dot-Dhy6Aaz6.js";import"./RegisterGraphicalItemId-B-hExQD4.js";import"./ErrorBarContext-C-2s-xSs.js";import"./GraphicalItemClipPath-1LBjo5Ot.js";import"./SetGraphicalItem-DJG5Kc0f.js";import"./getRadiusAndStrokeWidthFromDot-BZlod__d.js";import"./ActiveShapeUtils-BBT5vOsU.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-C6OJ_LlT.js";const Ht={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let b=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Jt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Jt as __namedExportsOrder,Ht as default};
