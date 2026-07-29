import{R as t}from"./iframe-VZ2aM8fP.js";import{a as s}from"./isWellBehavedNumber-B1YHMHRX.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-Dt9VS6C-.js";import{R as T}from"./zIndexSlice-CQOPOcrz.js";import{C as M}from"./CartesianGrid-B2ElzWSV.js";import{X as $}from"./XAxis-wYdPJJmK.js";import{Y as I}from"./YAxis-BnAL0SHr.js";import{L as O}from"./Legend-sDzFO5rA.js";import{T as W}from"./Tooltip-DwRvR9mJ.js";import{L as C}from"./Line-B81037Cs.js";import{C as X}from"./Curve-B5MshFyr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-_p4e6Off.js";import"./RechartsWrapper-BgtBwIWT.js";import"./index-B8NmJaJc.js";import"./index-BdOpZNUA.js";import"./index-RAnsrEyk.js";import"./index-5JKLnMLz.js";import"./throttle-CpHch1iP.js";import"./renderedTicksSlice-BWvg2Uuk.js";import"./axisSelectors-BuT92BdO.js";import"./d3-scale-2P7n4BrN.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bc8fypAa.js";import"./chartDataContext-Ci6amljO.js";import"./CategoricalChart-CxsxsIbU.js";import"./CartesianAxis-C1YtHz_V.js";import"./Layer-D5KpKuLh.js";import"./Text-BxYT9j-0.js";import"./DOMUtils-D8EYtam3.js";import"./Label-Bcx9yaip.js";import"./ZIndexLayer-BQK00jlT.js";import"./types-BixaCUGO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CWQxd3mi.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DVumFTK6.js";import"./symbol-CUlD2-5A.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B7H5s1sG.js";import"./uniqBy-D-VFpCI_.js";import"./iteratee-BrJ0nONF.js";import"./useAnimationId-BWSvDpI-.js";import"./Cross-QAFKi9OG.js";import"./Rectangle-BHt9-SY3.js";import"./util-Dxo8gN5i.js";import"./Sector-CTuxRXvD.js";import"./AnimatedItems-B1Uj1Gzk.js";import"./ActivePoints-oAKWC-6n.js";import"./Dot-CNR-wtas.js";import"./RegisterGraphicalItemId-C7us6vqj.js";import"./ErrorBarContext-DZjmiaio.js";import"./GraphicalItemClipPath-BhbKOYCd.js";import"./SetGraphicalItem-BqP4f3rQ.js";import"./getRadiusAndStrokeWidthFromDot-D2NN5p-Y.js";import"./ActiveShapeUtils-C3jZ13_H.js";import"./step-DBa2Myk3.js";const qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
