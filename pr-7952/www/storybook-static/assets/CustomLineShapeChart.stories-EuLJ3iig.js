import{R as t}from"./iframe-W_agkVyV.js";import{a as p}from"./isWellBehavedNumber-DiRVonYH.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-Bix7U7nR.js";import{R as T}from"./zIndexSlice-CTdReD9p.js";import{C as M}from"./CartesianGrid-yMdjK6Cm.js";import{X as $}from"./XAxis-BMo9pONJ.js";import{Y as I}from"./YAxis-BF1PYNAy.js";import{L as O}from"./Legend-BtXzKbhi.js";import{T as W}from"./Tooltip-CJVbApGc.js";import{L as C}from"./Line-CHfdY4oG.js";import{C as X}from"./Curve-BtaxSMiV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B8X1uEjP.js";import"./RechartsWrapper-C3mPyrs7.js";import"./axisSelectors-6axja2Em.js";import"./throttle-CA9ZAVQz.js";import"./index-Bi2SdoGH.js";import"./index-CsXiVSUF.js";import"./d3-scale-HrkydzFI.js";import"./index-Dt83L4jz.js";import"./index-DIRpvxdg.js";import"./renderedTicksSlice-CWlNAShs.js";import"./index-BqSIxi03.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-1K0jUxr5.js";import"./chartDataContext-DCJ8bj1E.js";import"./CategoricalChart-Bzn-Gu2q.js";import"./CartesianAxis-CPOh9De0.js";import"./Layer-BtznfAPn.js";import"./Text-BeEwTqv_.js";import"./pageBackground-BGxpKyNa.js";import"./useId-CJGe-UDk.js";import"./useBackwardsCompatibleTheme-Ctn7xKKB.js";import"./Label-ClOsex7o.js";import"./ZIndexLayer-BRJamsEl.js";import"./types-CaM0OvRl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CsmzfHDw.js";import"./symbol-Dglao2xo.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DTnjneKq.js";import"./uniqBy-CNAIty-g.js";import"./iteratee-7xt3GUi6.js";import"./useAnimationId-Bm_zuzY4.js";import"./Cross-BDkO23Eq.js";import"./Rectangle-DwOi1yoY.js";import"./util-Dxo8gN5i.js";import"./Sector-Dwfj04c7.js";import"./activeStyles-BahHAzuq.js";import"./dataEntryStyles-ubI82mtZ.js";import"./ActivePoints-BV4SsbUp.js";import"./Dot-DTv2KvAS.js";import"./ErrorBarContext-Bg5MlTZs.js";import"./GraphicalItemClipPath-eVqzfYHN.js";import"./SetGraphicalItem-MNgoA9Pf.js";import"./getRadiusAndStrokeWidthFromDot-HZaFqHia.js";import"./ActiveShapeUtils-Ba2JWET-.js";import"./useEffectiveDataKey-Bzuj7hT4.js";import"./step-DBl9LSRi.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
