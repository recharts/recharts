import{R as t}from"./iframe-DhtJ7XT9.js";import{a as p}from"./isWellBehavedNumber-BgBeU-y_.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BZXc6vgn.js";import{R as T}from"./zIndexSlice-Cyl_38qZ.js";import{C as M}from"./CartesianGrid-o5LT8FK2.js";import{X as $}from"./XAxis-J3EL6z9G.js";import{Y as I}from"./YAxis-B01PX68r.js";import{L as O}from"./Legend-DoC9rE4X.js";import{T as W}from"./Tooltip-CqpIeig5.js";import{L as C}from"./Line-E8j5PUVA.js";import{C as X}from"./Curve-Dqu8WPkG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DhiNYMWj.js";import"./resolveDefaultProps-BPtkQdI7.js";import"./RechartsWrapper-DW50izWv.js";import"./index-C3B0n__O.js";import"./index-oGt5PMWE.js";import"./index-DTiOXBm6.js";import"./index-Dy3Dnjis.js";import"./immer-C_Dt4QUB.js";import"./renderedTicksSlice-DPSLbyPQ.js";import"./axisSelectors-BpKxpkpF.js";import"./d3-scale-4zEsHVES.js";import"./string-B6fdYHAA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D-Z4Ej1T.js";import"./chartDataContext-Cf1gYJ5h.js";import"./CategoricalChart-BvhJOhQN.js";import"./CartesianAxis-D_A7dWIR.js";import"./Layer-nlXR0D_W.js";import"./Text-CqnnGvfO.js";import"./DOMUtils-BvTkEDRU.js";import"./Label-Dca6KvYU.js";import"./ZIndexLayer-Cs-V2L6r.js";import"./types-CLlZJjoC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-Cw6loTNS.js";import"./symbol-DQZ6Kdkf.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ZY1ZAY4p.js";import"./uniqBy-B0VZpdkS.js";import"./iteratee-DWrV7Ekf.js";import"./useAnimationId-LwDoReja.js";import"./Cross-B692zx-L.js";import"./Rectangle-aI9UNPH3.js";import"./Sector-DKGhGDOA.js";import"./AnimatedItems-D0rQfZQx.js";import"./ActivePoints-Dr8Ax-C8.js";import"./Dot-BJDprnUj.js";import"./RegisterGraphicalItemId-xETxoZW3.js";import"./ErrorBarContext-C_o2ElKr.js";import"./GraphicalItemClipPath-ClwgD8YP.js";import"./SetGraphicalItem-Cm2Uf41M.js";import"./getRadiusAndStrokeWidthFromDot-Bj473EA9.js";import"./ActiveShapeUtils-BKy8UOMn.js";import"./step-CPd-nqqu.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
