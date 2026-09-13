import{R as t}from"./iframe-Ds6TFLkC.js";import{a as p}from"./isWellBehavedNumber-LBH0mcE-.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BVlULXky.js";import{R as T}from"./zIndexSlice-BKrqz3Xt.js";import{C as M}from"./CartesianGrid-BESBZN1K.js";import{X as $}from"./XAxis-DBKmF-Ih.js";import{Y as I}from"./YAxis-CXDThil-.js";import{L as O}from"./Legend-BVnU9Ijg.js";import{T as W}from"./Tooltip-CKAhxeGO.js";import{L as C}from"./Line-DZDTbY-k.js";import{C as X}from"./Curve-dfqdvFF3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B7a2m4Ka.js";import"./RechartsWrapper-CJwlXMvA.js";import"./axisSelectors-CNkxeY96.js";import"./throttle-5Eq1kaaq.js";import"./index-ClPOgP6S.js";import"./index-C9niY2XO.js";import"./d3-scale-CUyqRA-V.js";import"./index-CVuBNUrf.js";import"./index-BuCwMnJX.js";import"./renderedTicksSlice-F4QCvYob.js";import"./index-BK5RQvEH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CQ_Lc8CK.js";import"./chartDataContext-8-sBB6AR.js";import"./CategoricalChart-mnoE3YYU.js";import"./CartesianAxis-CuptNImc.js";import"./Layer-DsMiZb8_.js";import"./Text-CQENvntP.js";import"./DOMUtils-CAtVF91U.js";import"./useId-DhelI0MM.js";import"./useBackwardsCompatibleTheme-eHtj-G5x.js";import"./Label-2c4G7wLB.js";import"./ZIndexLayer-BVTJP5jP.js";import"./types-DqUBeAy_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-VKhkKzLe.js";import"./symbol-jtj50zes.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BoqsUzu9.js";import"./uniqBy-BeoGAbMd.js";import"./iteratee-B_8zsxBW.js";import"./useAnimationId-wJ9zl-lu.js";import"./Cross-DKcxrN4I.js";import"./Rectangle-Bd2BLFBG.js";import"./util-Dxo8gN5i.js";import"./Sector-Bk0Joc-L.js";import"./AnimatedItems-Bite-60b.js";import"./ActivePoints-BxShO8-B.js";import"./Dot-BCPXm70l.js";import"./RegisterGraphicalItemId-B4xTnp7Z.js";import"./ErrorBarContext-CEkkj6v_.js";import"./GraphicalItemClipPath-C-q0-wOK.js";import"./SetGraphicalItem-A2_dyvg9.js";import"./getRadiusAndStrokeWidthFromDot-C9T1jis-.js";import"./ActiveShapeUtils-BJP1sGvV.js";import"./useGraphicalItemIdentity-onk1vmff.js";import"./step-DGJiOV5Z.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
