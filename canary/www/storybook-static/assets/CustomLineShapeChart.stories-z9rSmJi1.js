import{R as t}from"./iframe-SCBQwNxQ.js";import{a as p}from"./isWellBehavedNumber-DvdKXsqM.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-B5mjW1BM.js";import{R as T}from"./zIndexSlice-j2Iu_2in.js";import{C as M}from"./CartesianGrid-GsmgNXW2.js";import{X as $}from"./XAxis-Cc0l9D0i.js";import{Y as I}from"./YAxis-CjkWE18a.js";import{L as O}from"./Legend-DWfjcyPd.js";import{T as W}from"./Tooltip-B9AMlJlO.js";import{L as C}from"./Line-Ioxo2vHg.js";import{C as X}from"./Curve-DfnFB90y.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CyZ9SZnI.js";import"./RechartsWrapper-BlKrxgAY.js";import"./axisSelectors-DLhQ9sAD.js";import"./throttle-CzCySKF_.js";import"./index-DsLPnsoz.js";import"./index-Co8Np-XD.js";import"./d3-scale-G26x6J9Q.js";import"./index-B6uIZp6g.js";import"./index-B0bY_C-Z.js";import"./renderedTicksSlice-DJfakFhE.js";import"./index-CE5ovKc5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CfXQSmt5.js";import"./chartDataContext-1NVWGtYz.js";import"./CategoricalChart-Byg7V9pR.js";import"./CartesianAxis-Cxx7AUTO.js";import"./Layer-Cqwrwd-u.js";import"./Text-CXiXfLVx.js";import"./DOMUtils-htjTn9rf.js";import"./useId-GXBIOTNS.js";import"./useBackwardsCompatibleTheme-BnvgZvcH.js";import"./Label-5iI9wFuI.js";import"./ZIndexLayer-D6bO2lss.js";import"./types-tzKuPEFf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-B3tjl2Qz.js";import"./symbol-WqTKNL9g.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B4lloxY7.js";import"./uniqBy-DusnyNSE.js";import"./iteratee-C3MB5p7e.js";import"./useAnimationId-DXE0JH3K.js";import"./Cross-C3dnBeYr.js";import"./Rectangle-7gtnQWmz.js";import"./util-Dxo8gN5i.js";import"./Sector-Di2yrsjN.js";import"./AnimatedItems-Wlp1qaKk.js";import"./ActivePoints-DzK6hILC.js";import"./Dot-BvkLNrn9.js";import"./RegisterGraphicalItemId-ArfZLync.js";import"./ErrorBarContext-SniQgvjJ.js";import"./GraphicalItemClipPath-DklClpWQ.js";import"./SetGraphicalItem-CM8VxQRS.js";import"./getRadiusAndStrokeWidthFromDot-BJxhJQao.js";import"./ActiveShapeUtils-HcSLNl9S.js";import"./useGraphicalItemIdentity-D5Od3f0u.js";import"./step-x-If1Moz.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
