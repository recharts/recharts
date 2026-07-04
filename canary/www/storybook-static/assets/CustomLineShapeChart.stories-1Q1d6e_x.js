import{R as t}from"./iframe-DD3MNlJs.js";import{i as p}from"./isWellBehavedNumber-CNMhuHyW.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DvVotjpu.js";import{R as T}from"./zIndexSlice-DsPtdaG-.js";import{C as M}from"./CartesianGrid-C9oxbD3w.js";import{X as $}from"./XAxis-C5LFfJlv.js";import{Y as I}from"./YAxis-BU-eH5Uj.js";import{L as O}from"./Legend-BtWm6rh3.js";import{T as W}from"./Tooltip-Cbit545I.js";import{L as C}from"./Line-C4g4hOlz.js";import{C as X}from"./Curve-Bmu0g7Ld.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bl223uSE.js";import"./RechartsWrapper-CCnqh_-x.js";import"./index-DseUKmqi.js";import"./index-D7phJECN.js";import"./index-Bck27UYR.js";import"./index-a_wokTdP.js";import"./throttle-BsgVdVzc.js";import"./renderedTicksSlice-BfcmamU7.js";import"./axisSelectors-BHK7QjqO.js";import"./d3-scale-yWlQ4_Nx.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-aRdig7-B.js";import"./chartDataContext-B7qXvLbV.js";import"./CategoricalChart-Cq7n2KtT.js";import"./CartesianAxis-BeN5FwRC.js";import"./Layer-BSwpDfMb.js";import"./Text-BWwrC4eC.js";import"./DOMUtils-CKULAiMw.js";import"./Label-CTgAmEuq.js";import"./ZIndexLayer-BIp4crEt.js";import"./types-3SXpu3DM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DO_i8AaJ.js";import"./symbol-BwzlA26m.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DJdMJ0L5.js";import"./uniqBy-DHEUFyg1.js";import"./iteratee-D4ErcGbL.js";import"./useAnimationId-3wwsxOl9.js";import"./Cross-QArI-PU7.js";import"./Rectangle-BemF6WzX.js";import"./util-Dxo8gN5i.js";import"./Sector-CPHcOnas.js";import"./AnimatedItems--KiCkiyG.js";import"./ActivePoints-DIeqY30s.js";import"./Dot-M9tiGPsp.js";import"./RegisterGraphicalItemId-UFa7fX9c.js";import"./ErrorBarContext-C82oMdbu.js";import"./GraphicalItemClipPath-NC5NbT5H.js";import"./SetGraphicalItem-BanwGypR.js";import"./getRadiusAndStrokeWidthFromDot-bkIsgxom.js";import"./ActiveShapeUtils-DNZIetEU.js";import"./step-C2Nk1uI6.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
