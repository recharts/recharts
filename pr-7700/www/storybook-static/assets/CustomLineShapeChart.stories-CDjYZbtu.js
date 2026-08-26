import{R as t}from"./iframe-DJ6rtu5y.js";import{a as s}from"./isWellBehavedNumber-B2OjYN3n.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-N1qXNVlJ.js";import{R as T}from"./zIndexSlice-GKDeUFOJ.js";import{C as M}from"./CartesianGrid-VYjXh7Tt.js";import{X as $}from"./XAxis-BUVKQY8c.js";import{Y as I}from"./YAxis-pMQszEvE.js";import{L as O}from"./Legend-DQs8UIfN.js";import{T as W}from"./Tooltip-DeCkZOsW.js";import{L as C}from"./Line-BvFD854y.js";import{C as X}from"./Curve-D-GktZhk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-TPSV-hYk.js";import"./RechartsWrapper-CGKs6O5B.js";import"./axisSelectors-C35c3TE0.js";import"./throttle-sudvDT5X.js";import"./index-Byzogkak.js";import"./index-BJPQreJu.js";import"./d3-scale-D71QV_XP.js";import"./index-0mnAToBP.js";import"./index-CUo6OWxa.js";import"./renderedTicksSlice-omd44aKK.js";import"./index-Bxq5EtVn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-L5wJYDJT.js";import"./chartDataContext-Bk4HvwoY.js";import"./CategoricalChart-DK2VSKip.js";import"./CartesianAxis-BUpdfbmz.js";import"./Layer-cCkIU0Vd.js";import"./Text-BucchPCr.js";import"./DOMUtils-D7Zrpi7b.js";import"./useId-Byv4usHp.js";import"./useBackwardsCompatibleTheme-DdWo0Fs4.js";import"./Label-6LwczIk6.js";import"./ZIndexLayer-IvPQYMIA.js";import"./types-CF6XO-qy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C9Kobipa.js";import"./symbol-apXrx4pZ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cds_5qGL.js";import"./uniqBy-Dj6LJcG4.js";import"./iteratee-cRYzUJKO.js";import"./useAnimationId-BjJyuwQe.js";import"./Cross-B9YfSfyQ.js";import"./Rectangle-CTp7N4-J.js";import"./util-Dxo8gN5i.js";import"./Sector-CWWOBvax.js";import"./AnimatedItems-H08MVe4l.js";import"./ActivePoints-CyJpEWEh.js";import"./Dot-ClYl_u4u.js";import"./RegisterGraphicalItemId-BsIALwJ-.js";import"./ErrorBarContext-DT0TIJoX.js";import"./GraphicalItemClipPath-B5qfpalh.js";import"./SetGraphicalItem-DbBJcchq.js";import"./getRadiusAndStrokeWidthFromDot-_43mG9af.js";import"./ActiveShapeUtils-CPDo8aA6.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-HdY_lyE3.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let b=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
