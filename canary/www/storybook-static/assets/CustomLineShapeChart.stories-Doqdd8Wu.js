import{R as t}from"./iframe-Ddpx1fWB.js";import{a as p}from"./isWellBehavedNumber-PbzFmx8z.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BsXa7Upw.js";import{R as T}from"./zIndexSlice-Dat8LqkZ.js";import{C as M}from"./CartesianGrid-BvwS9IKd.js";import{X as $}from"./XAxis-8Q1XE2yS.js";import{Y as I}from"./YAxis-pV8_VGP8.js";import{L as O}from"./Legend-wMr1z0y2.js";import{T as W}from"./Tooltip-DonwHY4V.js";import{L as C}from"./Line-Cu73NfCf.js";import{C as X}from"./Curve-ZF8x5Xsx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BLbyA7M-.js";import"./RechartsWrapper-FUuE5Yxf.js";import"./axisSelectors-CiMHZLFM.js";import"./throttle-Ergr3tXF.js";import"./index-BHGR1bQY.js";import"./index-C2RGX2bO.js";import"./d3-scale-NbpcncSt.js";import"./index-zj--lfIw.js";import"./index-wao6mAsQ.js";import"./renderedTicksSlice-DtbmQ7NB.js";import"./index-C_z5dzD1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DITQYbNx.js";import"./chartDataContext-XIbG-eFQ.js";import"./CategoricalChart-DNv1TYBb.js";import"./CartesianAxis-3VtOE9qK.js";import"./Layer-BY9KVYkA.js";import"./Text-CA0gQCIk.js";import"./DOMUtils-njKIQFOw.js";import"./useId-HK3tGk78.js";import"./useBackwardsCompatibleTheme-DbKpiFxe.js";import"./Label-CuNWF2Cl.js";import"./ZIndexLayer-DWZuS9R-.js";import"./types-C_VxKCLR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-ZhZb-jZH.js";import"./symbol-C9U6a4gB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-COfGaiv8.js";import"./uniqBy-BOzPUYij.js";import"./iteratee-Ck7XhHqD.js";import"./useAnimationId-B2yc1CEt.js";import"./Cross-BK-An9yL.js";import"./Rectangle-CrDdNKDA.js";import"./util-Dxo8gN5i.js";import"./Sector-BfUQiR-6.js";import"./AnimatedItems-D2-ekEtz.js";import"./ActivePoints-BO0qnNRs.js";import"./Dot-Wca6oVOE.js";import"./RegisterGraphicalItemId-BPWJzGfs.js";import"./ErrorBarContext-VVT7--30.js";import"./GraphicalItemClipPath-BJA8iJ0Z.js";import"./SetGraphicalItem-wnpZS34C.js";import"./getRadiusAndStrokeWidthFromDot-DUoLQNHB.js";import"./ActiveShapeUtils-CuFPShbj.js";import"./useGraphicalItemIdentity-CUnlnBu6.js";import"./step-Dtj6_Cxq.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
