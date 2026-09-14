import{R as t}from"./iframe-29nHamCu.js";import{a as p}from"./isWellBehavedNumber-DyxIwD8w.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-jlHLi2dF.js";import{R as T}from"./zIndexSlice-CZafadFX.js";import{C as M}from"./CartesianGrid-CMpWW_VU.js";import{X as $}from"./XAxis-cHqDX1J9.js";import{Y as I}from"./YAxis-bbUKYKRn.js";import{L as O}from"./Legend-Ct5qsBZq.js";import{T as W}from"./Tooltip-CJLUo3Ro.js";import{L as C}from"./Line-mWe9WFJd.js";import{C as X}from"./Curve-DsdcX6-6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BjAFj7Tx.js";import"./RechartsWrapper-BavJbx8L.js";import"./axisSelectors-DXKrHL3Y.js";import"./throttle-BMJYFYDy.js";import"./index-B7e8weS_.js";import"./index-C0L5A02v.js";import"./d3-scale-hLJByxX9.js";import"./index-pQY_ysof.js";import"./index-wUuIvtYb.js";import"./renderedTicksSlice-Dofh94RU.js";import"./index-Dx-xeLKA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-1Z_jkdOD.js";import"./chartDataContext-CCKAe3q7.js";import"./CategoricalChart-Vufmz-V6.js";import"./CartesianAxis-BV_FsFXh.js";import"./Layer-DIXDf-ah.js";import"./Text-CjGTSUlm.js";import"./DOMUtils-77SlA1GE.js";import"./useId-D5dycxfw.js";import"./useBackwardsCompatibleTheme-DOdaTjfK.js";import"./Label-BEXPduDP.js";import"./ZIndexLayer-DAa-R99d.js";import"./types-DxO-1x0s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Cgyjephe.js";import"./symbol-6AoqX0uy.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C_qkeve9.js";import"./uniqBy-0tUOZnmc.js";import"./iteratee-BFs8MK2-.js";import"./useAnimationId-BJ08w86T.js";import"./Cross-CRs1SJSA.js";import"./Rectangle-VhVaxtJC.js";import"./util-Dxo8gN5i.js";import"./Sector-B2R7qc-h.js";import"./AnimatedItems-Cl8F531s.js";import"./ActivePoints-f_S-wuyy.js";import"./Dot-CkgSbF-F.js";import"./RegisterGraphicalItemId-C0MFc77r.js";import"./ErrorBarContext-D_EVW9Tx.js";import"./GraphicalItemClipPath-BHF9lgk1.js";import"./SetGraphicalItem-CPEqj7GM.js";import"./getRadiusAndStrokeWidthFromDot-BqfwXveZ.js";import"./ActiveShapeUtils-DXdVOUCI.js";import"./useGraphicalItemIdentity-BP_5vAW2.js";import"./step-ChOhxi7M.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
