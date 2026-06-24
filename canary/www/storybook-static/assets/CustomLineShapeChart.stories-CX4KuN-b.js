import{R as t}from"./iframe-DI4HGhHh.js";import{a as p}from"./isWellBehavedNumber-BCX7uX26.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-oDL7AdGy.js";import{R as T}from"./zIndexSlice-DLsQIX9Y.js";import{C as M}from"./CartesianGrid-DFT4IhYc.js";import{X as $}from"./XAxis-Dj4RjVoP.js";import{Y as I}from"./YAxis-C1Oi2VZJ.js";import{L as O}from"./Legend-r05uFuGy.js";import{T as W}from"./Tooltip-DGuMnXiM.js";import{L as C}from"./Line-BIfkn347.js";import{C as X}from"./Curve-D1vPRm9h.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Bfcmt9LS.js";import"./resolveDefaultProps-DLUQOXxb.js";import"./RechartsWrapper-DoHqoPfC.js";import"./index-DvTVJIfn.js";import"./index-C0kJRHqc.js";import"./index-BwosMlqm.js";import"./index-B5NU_a6D.js";import"./immer-CAVNBYxE.js";import"./renderedTicksSlice-CGUH_--9.js";import"./axisSelectors-YTXRCpiD.js";import"./d3-scale-CmlQQQpT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dp7N-Hpx.js";import"./chartDataContext-GaamtoMW.js";import"./CategoricalChart-D5RDPchP.js";import"./CartesianAxis-XgaOnUyy.js";import"./Layer-2I2RJkTJ.js";import"./Text-BxcnHscC.js";import"./DOMUtils-CCgzbXX3.js";import"./Label-BOdAN_xF.js";import"./ZIndexLayer-CAI-vp6k.js";import"./types-BM9AiZnq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-Bn-ZN7NN.js";import"./symbol-Bxz5MfJW.js";import"./path-DyVhHtw_.js";import"./useElementOffset--KSA65z0.js";import"./uniqBy-DHyoL8un.js";import"./iteratee-D86B-dJN.js";import"./useAnimationId-B5j5oAoh.js";import"./Cross-B3VN6dnN.js";import"./Rectangle-CdJqIjzl.js";import"./util-Dxo8gN5i.js";import"./Sector-ohE8-JF6.js";import"./AnimatedItems-B_Y2HCHw.js";import"./ActivePoints-Br89aa_G.js";import"./Dot--Dziv_M5.js";import"./RegisterGraphicalItemId-C8ygtyRo.js";import"./ErrorBarContext-BHKF_nuF.js";import"./GraphicalItemClipPath-CxUl7p1C.js";import"./SetGraphicalItem-BlwG21oe.js";import"./getRadiusAndStrokeWidthFromDot-DU4jn54H.js";import"./ActiveShapeUtils-1xWFxJ9c.js";import"./step-D4TxsChD.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
