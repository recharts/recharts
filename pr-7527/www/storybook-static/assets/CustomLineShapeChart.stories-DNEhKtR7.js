import{R as t}from"./iframe-uEKx9k1N.js";import{a as p}from"./isWellBehavedNumber-DQ4HTAG3.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-mzuSYokE.js";import{R as T}from"./zIndexSlice-DY2SAwlF.js";import{C as M}from"./CartesianGrid-B5l8Wvsy.js";import{X as $}from"./XAxis-DqNwoQQz.js";import{Y as I}from"./YAxis-tAwATeqy.js";import{L as O}from"./Legend-BjQN7rgW.js";import{T as W}from"./Tooltip-BmPyy6Ks.js";import{L as C}from"./Line-BSIz3Wv8.js";import{C as X}from"./Curve-DneOA6Ls.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-ht_nEGGy.js";import"./RechartsWrapper-B8Jh4kUL.js";import"./index-Du90D5xv.js";import"./index-CgS1QQ0H.js";import"./index-CSsm5ETf.js";import"./index-DPeMAw3v.js";import"./throttle-BszORo1S.js";import"./renderedTicksSlice-DY-iZALX.js";import"./axisSelectors-w7ZWZmhc.js";import"./d3-scale-CoMxsikp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BzS97Wq2.js";import"./chartDataContext-w4FL8Pti.js";import"./CategoricalChart-ablhttF3.js";import"./CartesianAxis-StFKOZ7o.js";import"./Layer-BH5XLyL8.js";import"./Text-B8QKaTlG.js";import"./DOMUtils-CMP-Fz_P.js";import"./Label-CitoXnqP.js";import"./ZIndexLayer-ClIbinrc.js";import"./types-BnkDZvgK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-B4e3bZfl.js";import"./symbol-BzXGVBf4.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Sr2wxqk0.js";import"./uniqBy-CM6A5tFB.js";import"./iteratee-C_fPFM1j.js";import"./useAnimationId-ZeyHjL0b.js";import"./Cross-HkOkxvvA.js";import"./Rectangle-9Jy7qhLH.js";import"./util-Dxo8gN5i.js";import"./Sector-CRwdZ_1k.js";import"./AnimatedItems-B35P9OvY.js";import"./ActivePoints-BymWNzxJ.js";import"./Dot-F2Exn6rv.js";import"./RegisterGraphicalItemId-CTEk8rED.js";import"./ErrorBarContext-YXBGRjgp.js";import"./GraphicalItemClipPath-BIARRVEG.js";import"./SetGraphicalItem-CwhlaQHa.js";import"./getRadiusAndStrokeWidthFromDot-DTQnNiya.js";import"./ActiveShapeUtils-BahjRs48.js";import"./step-F10w8TN4.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
