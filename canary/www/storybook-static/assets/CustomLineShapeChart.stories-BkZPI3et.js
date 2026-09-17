import{R as t}from"./iframe-CqRpABaK.js";import{a as p}from"./isWellBehavedNumber-CUSt0J5q.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-vlbdjaP3.js";import{R as T}from"./zIndexSlice-KvzMEBh7.js";import{C as M}from"./CartesianGrid-CL9aC2vs.js";import{X as $}from"./XAxis-BSRwnZMq.js";import{Y as I}from"./YAxis-qoSfFU5r.js";import{L as O}from"./Legend-DisbDxLC.js";import{T as W}from"./Tooltip-3Iqd0Y5A.js";import{L as C}from"./Line-8cbiPC_u.js";import{C as X}from"./Curve-BcRTskgb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dp9amxWt.js";import"./RechartsWrapper-Q6-Ges1c.js";import"./axisSelectors-Bh6roEOt.js";import"./throttle-BjLrRmHo.js";import"./index-TAONuQw1.js";import"./index-D1EEl4o-.js";import"./d3-scale-DITi7lUc.js";import"./index-DhXYHAxS.js";import"./index-Bn22tw5D.js";import"./renderedTicksSlice-Ddky5d5u.js";import"./index-BT_XvWwU.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bxw3yjgR.js";import"./chartDataContext-Cz0raIOD.js";import"./CategoricalChart-yTIhx19f.js";import"./CartesianAxis-NW0JLUgH.js";import"./Layer-g-5IuUpa.js";import"./Text-CXo2baHO.js";import"./DOMUtils-DJUl9uN8.js";import"./useId-BbgR7tKy.js";import"./useBackwardsCompatibleTheme-DXXC_Hh5.js";import"./Label-IjPv9f7P.js";import"./ZIndexLayer-D34xXT-L.js";import"./types-CC73-uTJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Y4gf4X3g.js";import"./symbol-nTVagevz.js";import"./path-DyVhHtw_.js";import"./useElementOffset-MH0vo0Hf.js";import"./uniqBy-wzlT94X_.js";import"./iteratee-D6dIEdRH.js";import"./useAnimationId-BJd8TCij.js";import"./Cross-CUKvkafW.js";import"./Rectangle-CNnTJ1N9.js";import"./util-Dxo8gN5i.js";import"./Sector-DhwEBqpB.js";import"./AnimatedItems-CBpEgVGL.js";import"./ActivePoints-CyBSG7Nh.js";import"./Dot-CMcfKVB4.js";import"./RegisterGraphicalItemId-B1YLlZGq.js";import"./ErrorBarContext-CYofUAqs.js";import"./GraphicalItemClipPath-BVicx7bF.js";import"./SetGraphicalItem-B8cx_Fws.js";import"./getRadiusAndStrokeWidthFromDot-5mvy0zL6.js";import"./ActiveShapeUtils-EpogqgxJ.js";import"./useGraphicalItemIdentity-BjVJGRyR.js";import"./step-BuSHEP_V.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
