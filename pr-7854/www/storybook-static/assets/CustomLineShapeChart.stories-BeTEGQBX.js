import{R as t}from"./iframe-F7LhK7Eo.js";import{a as p}from"./isWellBehavedNumber-DjIyZMF-.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DaZVkfhP.js";import{R as T}from"./zIndexSlice-B_tReVy-.js";import{C as M}from"./CartesianGrid-B-JhAW37.js";import{X as $}from"./XAxis-BKvY-R-H.js";import{Y as I}from"./YAxis-CJvKQyTT.js";import{L as O}from"./Legend-D7fTmgyL.js";import{T as W}from"./Tooltip-Cs0AYtnt.js";import{L as C}from"./Line-DaaBT1lU.js";import{C as X}from"./Curve-DmoJ01pM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BWBKDxpl.js";import"./RechartsWrapper-ay4Rio5L.js";import"./axisSelectors-u93D5o3N.js";import"./throttle-C_DYoZtt.js";import"./index-BHnugEqK.js";import"./index-D2U0SDM0.js";import"./d3-scale-Cx-l4XO1.js";import"./index-C3Rm0W8c.js";import"./index-DQvCajjI.js";import"./renderedTicksSlice-B1tuu0tD.js";import"./index-BWf5kuaX.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B3D6zv8Y.js";import"./chartDataContext-DhRxggLS.js";import"./CategoricalChart-D6bN-RZ3.js";import"./CartesianAxis-lENxpg_y.js";import"./Layer-DYdC0UVh.js";import"./Text-DW85mx3b.js";import"./DOMUtils-BT8dLI2y.js";import"./useId-DyKnYw8e.js";import"./useBackwardsCompatibleTheme-IFXQGVV2.js";import"./Label-Cunaqz8i.js";import"./ZIndexLayer-BeZh5IO9.js";import"./types-Cc5FeE6i.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BoI_88BD.js";import"./symbol-m-1Z6rEE.js";import"./path-DyVhHtw_.js";import"./useElementOffset-NhBD0Cj6.js";import"./uniqBy-BWhaj76i.js";import"./iteratee-BIKbX6L7.js";import"./useAnimationId-1tb1AqGd.js";import"./Cross-BXu3zmQ0.js";import"./Rectangle-CxCtZOg2.js";import"./util-Dxo8gN5i.js";import"./Sector-qQPJUEpS.js";import"./AnimatedItems-9NyDgZfV.js";import"./ActivePoints-DqbOcZnl.js";import"./Dot-0_Q3awJ6.js";import"./RegisterGraphicalItemId-G1rEfZcP.js";import"./ErrorBarContext-Cwt6Jtd7.js";import"./GraphicalItemClipPath-DGCCZDh5.js";import"./SetGraphicalItem-DG_xI-Un.js";import"./getRadiusAndStrokeWidthFromDot-CT63cvvB.js";import"./ActiveShapeUtils-B1DBYTAd.js";import"./useGraphicalItemIdentity-CZAMumnN.js";import"./step-BQbq2B-X.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
