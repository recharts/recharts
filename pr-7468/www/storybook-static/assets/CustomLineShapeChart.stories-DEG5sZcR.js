import{R as t}from"./iframe-Bd_RatVP.js";import{a as p}from"./isWellBehavedNumber-vEzZ_uBL.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-C92s6fH5.js";import{R as T}from"./zIndexSlice-Bs3cmT56.js";import{C as M}from"./CartesianGrid-Bbe3282o.js";import{X as $}from"./XAxis-CxMafso2.js";import{Y as I}from"./YAxis-KJSd-Ivi.js";import{L as O}from"./Legend-9MYXYV6G.js";import{T as W}from"./Tooltip-DhtMBVBn.js";import{L as C}from"./Line-ChcwwI6C.js";import{C as X}from"./Curve-BKajUmGn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-D2eywazJ.js";import"./resolveDefaultProps-CDT2X36A.js";import"./RechartsWrapper-DoiYSoxN.js";import"./index-CtCj_c9U.js";import"./index-KgYFzznq.js";import"./index-DuMhoHLg.js";import"./index-AIDQn2zy.js";import"./immer-K2Jr_glw.js";import"./renderedTicksSlice-BaNjR9ZK.js";import"./axisSelectors-iePK0TpX.js";import"./d3-scale-8NOk75ft.js";import"./string-B6fdYHAA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BgWder66.js";import"./chartDataContext-2ZBdxPuo.js";import"./CategoricalChart-B7ZdZ9dp.js";import"./CartesianAxis-DYnLL5ki.js";import"./Layer-CSKVUvgL.js";import"./Text-CID6qmBG.js";import"./DOMUtils-BvIcVirU.js";import"./Label-_LaAHgCb.js";import"./ZIndexLayer-CW5Q6iO0.js";import"./types-B_YM2FYy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BJZoHXe5.js";import"./symbol-BMyvtyS_.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BeZVN4uM.js";import"./uniqBy-ROVpOYmf.js";import"./iteratee-CZJ3xSSv.js";import"./useAnimationId-WD2dkHdB.js";import"./Cross-BDN9EJ3q.js";import"./Rectangle-BiRALYrC.js";import"./Sector-DcsfkYNL.js";import"./AnimatedItems-CTN3MMrY.js";import"./ActivePoints-BJ3mN3TL.js";import"./Dot-BDk1ts5p.js";import"./RegisterGraphicalItemId-CSpPBahn.js";import"./ErrorBarContext-CXGw6SKK.js";import"./GraphicalItemClipPath-CqhiUh0n.js";import"./SetGraphicalItem-CCPPdaQB.js";import"./getRadiusAndStrokeWidthFromDot-CrS1vnPP.js";import"./ActiveShapeUtils-CKHNZG0U.js";import"./step-D0gWFOvv.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
