import{R as t}from"./iframe-H7jEjneP.js";import{a as p}from"./isWellBehavedNumber-DWCHHiO4.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-B_r2C6lQ.js";import{R as T}from"./zIndexSlice-Dwk71gAs.js";import{C as M}from"./CartesianGrid-DzVnMgg5.js";import{X as $}from"./XAxis-C43A4phh.js";import{Y as I}from"./YAxis-Vy_FZIWc.js";import{L as O}from"./Legend-qia_N5yl.js";import{T as W}from"./Tooltip-BbXqjLqB.js";import{L as C}from"./Line-CejbRaJQ.js";import{C as X}from"./Curve-Etd9Rf3G.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bj9dJCv2.js";import"./RechartsWrapper-BVH4-pX9.js";import"./axisSelectors-D2lTMvot.js";import"./throttle-Bn1i2xOI.js";import"./index-DTPOqFjg.js";import"./index-DgXESwgB.js";import"./d3-scale-BleojrFS.js";import"./index-zqvhcYYr.js";import"./index-DrbE-eKG.js";import"./renderedTicksSlice-BRHju3tw.js";import"./index-CGgy5q-V.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DtibPJLh.js";import"./chartDataContext-B51jhbZz.js";import"./CategoricalChart-W9YrWS6c.js";import"./CartesianAxis-YWS3Tdxj.js";import"./Layer-FJAqqNNz.js";import"./Text-B4P_g0R9.js";import"./DOMUtils-C61hDB9-.js";import"./useId-ZSgrseWl.js";import"./useBackwardsCompatibleTheme-CTObI66g.js";import"./Label-DbiDHxJi.js";import"./ZIndexLayer-5waeKBAU.js";import"./types-CAmW2CbH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CP2hyogX.js";import"./symbol-DrfccpTF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-v2aajhRC.js";import"./uniqBy-Du05t_Lg.js";import"./iteratee-B7EKCWvZ.js";import"./useAnimationId-CpeZSN5w.js";import"./Cross-B-zZN9vx.js";import"./Rectangle-CWvJG87S.js";import"./util-Dxo8gN5i.js";import"./Sector-CifzAg5p.js";import"./AnimatedItems-zgVz-4ei.js";import"./ActivePoints-BbbrdPUM.js";import"./Dot-DQi7JtyA.js";import"./RegisterGraphicalItemId-BUF7N8O-.js";import"./ErrorBarContext-VTewkZK5.js";import"./GraphicalItemClipPath-7Dat9Ey8.js";import"./SetGraphicalItem-sO5iD_xL.js";import"./getRadiusAndStrokeWidthFromDot-8tlUvvpa.js";import"./ActiveShapeUtils-6A9Zooe8.js";import"./useGraphicalItemIdentity-DWbVUF44.js";import"./step-vnfu6Ctu.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
