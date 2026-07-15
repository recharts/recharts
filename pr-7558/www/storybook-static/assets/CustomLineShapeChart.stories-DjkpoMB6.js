import{R as t}from"./iframe-CbiyPpOQ.js";import{i as p}from"./isWellBehavedNumber-CgYUMQU-.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-D1dXGo6k.js";import{R as T}from"./zIndexSlice-CpGqLNgf.js";import{C as M}from"./CartesianGrid-BVt8BIlH.js";import{X as $}from"./XAxis-DS8USeJo.js";import{Y as I}from"./YAxis-DQOVOwqz.js";import{L as O}from"./Legend-YkVdeRnw.js";import{T as W}from"./Tooltip-9db9HdZt.js";import{L as C}from"./Line-CX19U38B.js";import{C as X}from"./Curve-B54n4LWH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BWAgYfPV.js";import"./RechartsWrapper-TOXK1lwb.js";import"./index-Bca_d3DG.js";import"./index-D-fswtUu.js";import"./index-DN_zLXSU.js";import"./index-DyGRF9jX.js";import"./throttle-qq70w1DA.js";import"./renderedTicksSlice-lYU8ut4F.js";import"./axisSelectors-CCqDM7T-.js";import"./d3-scale-Bap3CkU2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DS8MRKt-.js";import"./chartDataContext-Bznw4op9.js";import"./CategoricalChart-l1FuTysV.js";import"./CartesianAxis-DdhiMqO2.js";import"./Layer-DqgjT4E-.js";import"./Text-6JPkC2Bj.js";import"./DOMUtils-Db0o8Zdl.js";import"./Label-Bqdiqqm9.js";import"./ZIndexLayer-BdQyI4NS.js";import"./types-CzM6FhOK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BWn15Mkk.js";import"./symbol-B7SK3bHu.js";import"./path-DyVhHtw_.js";import"./useElementOffset-9aMbp_tO.js";import"./uniqBy-DQFa7_m1.js";import"./iteratee-B4yI5Ocl.js";import"./useAnimationId-BzqZ1CPr.js";import"./Cross-3CQgNSTQ.js";import"./Rectangle-CwDyS8Ci.js";import"./util-Dxo8gN5i.js";import"./Sector-BBU2MoeS.js";import"./AnimatedItems-DRdB4DWi.js";import"./ActivePoints-BcBYuZ18.js";import"./Dot-CrmxLVmG.js";import"./RegisterGraphicalItemId-DWEdhGSI.js";import"./ErrorBarContext-BC0_okWx.js";import"./GraphicalItemClipPath-Bzcd_Jhp.js";import"./SetGraphicalItem-DrfGre3X.js";import"./getRadiusAndStrokeWidthFromDot-CcpM4ut6.js";import"./ActiveShapeUtils-CSCl1dIf.js";import"./step-CAX9qAEt.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
