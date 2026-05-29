import{c as t}from"./iframe-CmE1Gw1b.js";import{a as p}from"./isWellBehavedNumber-iiy358B8.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-DPte-9pC.js";import{L as A}from"./LineChart-B4BqX6tl.js";import{g as M}from"./zIndexSlice-CPvazyt5.js";import{C as R}from"./CartesianGrid-BqmKPhec.js";import{X as $}from"./XAxis-CsAE-1wy.js";import{Y as I}from"./YAxis-sLz07qff.js";import{L as O}from"./Legend-CLEzoxOZ.js";import{T as W}from"./Tooltip-_APSjxFC.js";import{L as C}from"./Line-iL4IvS3b.js";import{C as X}from"./Curve-DNUM0bVP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Xs9eC5t9.js";import"./resolveDefaultProps-DMnLPor7.js";import"./RechartsWrapper-D8R_Xy2B.js";import"./index-DBnd1KA6.js";import"./index-CVCvCqpB.js";import"./index-Cxu3QwYw.js";import"./index-BRRHmhT0.js";import"./immer-D0ucvycs.js";import"./renderedTicksSlice-CPDsz2oQ.js";import"./axisSelectors-DB3YTJ5D.js";import"./d3-scale-CvKKQLFm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CVLVFTZa.js";import"./chartDataContext-BRP4CbYg.js";import"./CategoricalChart-dsp09r-Q.js";import"./CartesianAxis-CAtPdKeh.js";import"./Layer-abY4Fjir.js";import"./Text-BQZJ76YD.js";import"./DOMUtils-omFfYIeV.js";import"./Label-Cvukc7WC.js";import"./ZIndexLayer-DHcHf456.js";import"./types-DmTRT5mp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-B59YXWP_.js";import"./symbol-DzwPD8ez.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D-LxG0BO.js";import"./uniqBy-BvaoGVQr.js";import"./iteratee-RsGkkcHy.js";import"./useAnimationId-D3nuvCaK.js";import"./Cross-Cy-Vx90u.js";import"./Rectangle-DC373LRb.js";import"./Sector-CHt0xVVw.js";import"./ReactUtils-BAXLe4Ge.js";import"./ActivePoints-BZYNmVQi.js";import"./Dot-mUoWRWq3.js";import"./RegisterGraphicalItemId-B-oWQNZS.js";import"./ErrorBarContext-BpCSl48G.js";import"./GraphicalItemClipPath-BhaC-7pi.js";import"./SetGraphicalItem-DE9GuFyM.js";import"./getRadiusAndStrokeWidthFromDot-DrN6QQp7.js";import"./ActiveShapeUtils-C_GLb3KM.js";import"./step-CCTJ90gO.js";const Gt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),D=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=D}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(M,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(R,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
