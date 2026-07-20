import{R as t}from"./iframe-C749ZEo3.js";import{i as p}from"./isWellBehavedNumber-tfpL7kaQ.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BjZd-FVj.js";import{R as T}from"./zIndexSlice-DkHm22lp.js";import{C as M}from"./CartesianGrid-Ckq7puT5.js";import{X as $}from"./XAxis-B1Zyj3MJ.js";import{Y as I}from"./YAxis-B2DRI57X.js";import{L as O}from"./Legend-Dgt--ULT.js";import{T as W}from"./Tooltip-DjfW9i_Q.js";import{L as C}from"./Line-UPSPma38.js";import{C as X}from"./Curve-D0zH9wUo.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-6zK50N0i.js";import"./RechartsWrapper-Mb5ys-Ox.js";import"./index-D27ZEbdc.js";import"./index-Cclh13Kt.js";import"./index-BvdVRi_-.js";import"./index-BBhpwV9s.js";import"./throttle-CELIeDih.js";import"./renderedTicksSlice-B967Fzve.js";import"./axisSelectors-DqDg1DKC.js";import"./d3-scale-DpaPidEg.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B3fNYna3.js";import"./chartDataContext-D1rfIYla.js";import"./CategoricalChart-CQbOZOy_.js";import"./CartesianAxis-CwN7eQSV.js";import"./Layer-FHePmoXC.js";import"./Text-C7YPKDRG.js";import"./DOMUtils-D28hoCtk.js";import"./Label-SA_6xz2S.js";import"./ZIndexLayer-BPz0-wLY.js";import"./types-CCzU3Dbp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-F0I1p1Fo.js";import"./symbol-Dq2t-h2a.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D5wCeLQL.js";import"./uniqBy-gAFj75uR.js";import"./iteratee-BUXNkTTn.js";import"./useAnimationId-BXnZ6W5r.js";import"./Cross-BjyZeZzk.js";import"./Rectangle-1n2gPHd-.js";import"./util-Dxo8gN5i.js";import"./Sector-Dag_B3iS.js";import"./AnimatedItems-D44ZJFQN.js";import"./ActivePoints-Crx-wa0M.js";import"./Dot-CRKEafBC.js";import"./RegisterGraphicalItemId-HD16Gn5o.js";import"./ErrorBarContext-CXrvXgEG.js";import"./GraphicalItemClipPath-DnnLxorK.js";import"./SetGraphicalItem-JwiICpaG.js";import"./getRadiusAndStrokeWidthFromDot-YLlbYGyD.js";import"./ActiveShapeUtils-6Wqxn4P9.js";import"./step-BM8N9mx2.js";const Nt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,qt as __namedExportsOrder,Nt as default};
