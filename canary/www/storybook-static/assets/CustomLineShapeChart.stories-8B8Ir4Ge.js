import{R as t}from"./iframe-ZXtfb4yD.js";import{a as p}from"./isWellBehavedNumber-DxKoG7Ba.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CFXFIzBI.js";import{R as T}from"./zIndexSlice-BYWdHlTe.js";import{C as M}from"./CartesianGrid-C4JgCHFT.js";import{X as $}from"./XAxis-DLWMZedb.js";import{Y as I}from"./YAxis-CpZ4maZ2.js";import{L as O}from"./Legend-BH-_2P9C.js";import{T as W}from"./Tooltip-cOzwM1Wl.js";import{L as C}from"./Line-BY4VeKsv.js";import{C as X}from"./Curve-DVYTdeVn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-xIIdHmm9.js";import"./RechartsWrapper-DeOd3865.js";import"./axisSelectors-B-7UnAhK.js";import"./throttle-UQol_oMR.js";import"./index-SIPxA2ka.js";import"./index-Bo6RSdvh.js";import"./d3-scale-CLk4WDw9.js";import"./index-BxR6IAN7.js";import"./index-CZ8YJbDi.js";import"./renderedTicksSlice-D1lcrg0m.js";import"./index-Bj13Gnlq.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-yzowS7n9.js";import"./chartDataContext-Vgws8ib_.js";import"./CategoricalChart-DidrDbM3.js";import"./CartesianAxis-DsWhwIZU.js";import"./Layer-BNcbfxWn.js";import"./Text-DV_FynOi.js";import"./DOMUtils-C0C9d7iI.js";import"./useId-0Gl7JyMf.js";import"./useBackwardsCompatibleTheme-C4wl67U3.js";import"./Label-C_XzWtLw.js";import"./ZIndexLayer-Ck2jrevN.js";import"./types-D_Nat2yf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DhJA3WlI.js";import"./symbol-DqJrO93a.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D-a4c_KO.js";import"./uniqBy-CHRSp9IT.js";import"./iteratee-CkKkD8L0.js";import"./useAnimationId-BzcgW_0X.js";import"./Cross-DUw-sG1Q.js";import"./Rectangle-Bc1PlKQQ.js";import"./util-Dxo8gN5i.js";import"./Sector-Bluxtbag.js";import"./AnimatedItems-sQcK0Cnf.js";import"./ActivePoints-DR8A-WKS.js";import"./Dot-DNV1GHEu.js";import"./RegisterGraphicalItemId-BLTTAUNU.js";import"./ErrorBarContext-CM-xdG0H.js";import"./GraphicalItemClipPath-Du8p1Oou.js";import"./SetGraphicalItem-QMczFyB9.js";import"./getRadiusAndStrokeWidthFromDot-B0p8dzOs.js";import"./ActiveShapeUtils-C4fIJN7R.js";import"./useGraphicalItemIdentity-DEuXq7FQ.js";import"./step-CUKBWZW0.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
