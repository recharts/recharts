import{R as t}from"./iframe-DtUqFz4i.js";import{a as p}from"./isWellBehavedNumber-BD9jivhZ.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CAygX_Sc.js";import{R as T}from"./zIndexSlice-D7wiyJvz.js";import{C as M}from"./CartesianGrid-B552XU5x.js";import{X as $}from"./XAxis-CDer3rOu.js";import{Y as I}from"./YAxis-BMscqJB-.js";import{L as O}from"./Legend-nKNwmpxg.js";import{T as W}from"./Tooltip-DkZNsDtW.js";import{L as C}from"./Line-C8UhNYz0.js";import{C as X}from"./Curve-dyv5wxAX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DhbLPpq6.js";import"./RechartsWrapper-okeo-S0V.js";import"./axisSelectors-DKiSvbvB.js";import"./throttle-Xq_SZc3C.js";import"./index-G8DVyxPR.js";import"./index-6pOrVVYJ.js";import"./d3-scale-qNEzaThY.js";import"./index-BUmCPeXH.js";import"./index-Dz7I98PR.js";import"./renderedTicksSlice-bHtuYqVk.js";import"./index-CBc8BsFv.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BFiV2di3.js";import"./chartDataContext-D9qEIths.js";import"./CategoricalChart-P4h5BQO5.js";import"./CartesianAxis-CvUiwg6W.js";import"./Layer-DaGE4xdO.js";import"./Text-Ci0TXZMh.js";import"./DOMUtils-CAVjRHi7.js";import"./useId-B1tEHKrt.js";import"./useBackwardsCompatibleTheme-Dq0ydbtQ.js";import"./Label-DSBhBvVo.js";import"./ZIndexLayer-Dl9c6NgM.js";import"./types-DIyWN1O2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DUAmEX4d.js";import"./symbol-CuIzRMST.js";import"./path-DyVhHtw_.js";import"./useElementOffset-zKQGkCXa.js";import"./uniqBy-CF70an62.js";import"./iteratee-BsjABlDl.js";import"./useAnimationId-yAmPQwMn.js";import"./Cross-CqbG7TyB.js";import"./Rectangle-CBwoe9pk.js";import"./util-Dxo8gN5i.js";import"./Sector-DZgoHJpR.js";import"./AnimatedItems-Bqh_lJsV.js";import"./ActivePoints-ConO_hsx.js";import"./Dot-CtYAIqQI.js";import"./RegisterGraphicalItemId-DHE_UdIi.js";import"./ErrorBarContext-CnzHFxN7.js";import"./GraphicalItemClipPath-SRfs0G_i.js";import"./SetGraphicalItem-Cs09Djqk.js";import"./getRadiusAndStrokeWidthFromDot-qVB91pCe.js";import"./ActiveShapeUtils-Dur4qT68.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-6HhaZYhK.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
