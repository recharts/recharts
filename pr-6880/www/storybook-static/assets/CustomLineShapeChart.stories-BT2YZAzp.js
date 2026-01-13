import{e as t}from"./iframe-Cwpfa-aU.js";import{a as I}from"./ChartProps-Cvo8vJEE.js";import{R as K,n as p}from"./arrayEqualityCheck-4s7O9CHw.js";import{L as v}from"./LineChart-B2dAIwYL.js";import{C as b}from"./CartesianGrid-CRtA0NQM.js";import{X as A}from"./XAxis-UZUbrGY6.js";import{Y as M}from"./YAxis-BUkK3ftj.js";import{L as $}from"./Legend-CDhhebxP.js";import{T}from"./Tooltip-i_abJ7x2.js";import{L as y}from"./Line-BcB5oLqM.js";import{R as W}from"./RechartsHookInspector-RngvJaov.js";import{C as X}from"./Curve-Bv3AqiO6.js";import{p as Y}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./EventHandlers-JVOOzquU.js";import"./resolveDefaultProps-Bl1VkIJn.js";import"./PolarUtils-D6OsdRao.js";import"./RechartsWrapper-DV1HqoPP.js";import"./hooks-Bu64bUH6.js";import"./axisSelectors-CkO9segl.js";import"./zIndexSlice-IilHGL9E.js";import"./CartesianChart-B8cIlo8Y.js";import"./chartDataContext-BoIsIy8h.js";import"./CategoricalChart-yeCIXBUW.js";import"./CartesianAxis-BJ_Cxbna.js";import"./Layer-C5Up6lye.js";import"./Text-DG71k7CA.js";import"./DOMUtils-DpdULDT0.js";import"./Label-BkH8bmvn.js";import"./ZIndexLayer-MboeMBT5.js";import"./types-C0n05tvQ.js";import"./Symbols-4LuKRow4.js";import"./useElementOffset-D4wGVCo_.js";import"./iteratee-eijgeMa6.js";import"./Cross-D4h0k0sg.js";import"./Rectangle-DrpUAVjZ.js";import"./useAnimationId-BNxZGCVU.js";import"./Sector-DE839nPA.js";import"./ReactUtils-DiD0pNfa.js";import"./ActivePoints-Dbd50Xfv.js";import"./Dot-BVCmMmNN.js";import"./RegisterGraphicalItemId-BzYcbqE1.js";import"./ErrorBarContext-BLvMse44.js";import"./GraphicalItemClipPath-BWumZjSv.js";import"./SetGraphicalItem-CnrbgEG2.js";import"./getRadiusAndStrokeWidthFromDot-C-Fw1e1x.js";import"./ActiveShapeUtils-CwrCrcpP.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DIkxpdcS.js";import"./index-KilI1ssy.js";import"./ChartSizeDimensions-BzGykHcH.js";import"./OffsetShower-uqw3cQhV.js";import"./PlotAreaShower-DvkDcG7R.js";const Yt={component:v,argTypes:I,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,P=m.length;a<P;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const u=(i.x-e.x)/r,g=(i.y-e.y)/r,w=Math.atan2(g,u)*180/Math.PI,S=Math.abs(Math.floor(r/h-1)),D=r/S;let s=h/2,{x:C,y:f}=e;for(;r-s>0;)r-=s,C+=u*s,f+=g*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${C} ${f}) rotate(${w})`},o)),s=D}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(K,{width:"100%",height:"100%"},t.createElement(v,{...c},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(A,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(T,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(y,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(y,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var x,E,L;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
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
}`,...(L=(E=n.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const _t=["CustomLineShapeChart"];export{n as CustomLineShapeChart,_t as __namedExportsOrder,Yt as default};
