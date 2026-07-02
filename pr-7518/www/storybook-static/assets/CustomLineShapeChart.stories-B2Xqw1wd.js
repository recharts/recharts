import{R as t}from"./iframe-BNNSts13.js";import{a as p}from"./isWellBehavedNumber-Cd8BT25E.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DM01mPe0.js";import{R as T}from"./zIndexSlice-B_0Vu2Ew.js";import{C as M}from"./CartesianGrid-D9W-jp0X.js";import{X as $}from"./XAxis-CQLk361J.js";import{Y as I}from"./YAxis-BE5H5SGl.js";import{L as O}from"./Legend-CeXv6FuD.js";import{T as W}from"./Tooltip-DHW7ZYPz.js";import{L as C}from"./Line-DHXYmqa3.js";import{C as X}from"./Curve-ByI9xGCG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C9gxS0ZW.js";import"./resolveDefaultProps-BmCbt7JO.js";import"./RechartsWrapper-CxhgYL0g.js";import"./index-D3L22MUx.js";import"./index-DZAGR4_4.js";import"./index-DRHlmdrn.js";import"./index-CJSHvi6L.js";import"./throttle-CBpSFV7b.js";import"./renderedTicksSlice-mOWj0GHU.js";import"./axisSelectors-CDUBaBt4.js";import"./d3-scale-0CyMSTZz.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CCTvUou3.js";import"./chartDataContext-bOV91Uvd.js";import"./CategoricalChart-KYW8s8_3.js";import"./CartesianAxis-Bo6M1fU4.js";import"./Layer-BUN3jU8m.js";import"./Text-BAbJXX-B.js";import"./DOMUtils-BpYC5T-M.js";import"./Label-B9RstaAA.js";import"./ZIndexLayer-i45Mn5Qx.js";import"./types-CMjaNGyL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DzjVk4t8.js";import"./symbol-CA3p36J7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CXz0UZGA.js";import"./uniqBy-BiCSeEHe.js";import"./iteratee-CLp7QRBG.js";import"./useAnimationId-CPqzTwnW.js";import"./Cross-BHUS_DrE.js";import"./Rectangle-L3OxoeXe.js";import"./util-Dxo8gN5i.js";import"./Sector-DQ8c-GNj.js";import"./AnimatedItems-u006QBg6.js";import"./ActivePoints-z37_g_gd.js";import"./Dot-GJcUxxVA.js";import"./RegisterGraphicalItemId-8U08pWsl.js";import"./ErrorBarContext-Dsbm5JOc.js";import"./GraphicalItemClipPath-DvAXcUk3.js";import"./SetGraphicalItem-BRpvB0vT.js";import"./getRadiusAndStrokeWidthFromDot-WWzyayAr.js";import"./ActiveShapeUtils-CnkeP5Du.js";import"./step-Brv0yDTW.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
