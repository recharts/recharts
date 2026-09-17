import{R as t}from"./iframe-D--BifOA.js";import{a as p}from"./isWellBehavedNumber-Dtp514zB.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-dT_oqv1Z.js";import{R as T}from"./zIndexSlice-BS_bCBK-.js";import{C as M}from"./CartesianGrid-DdPhDV4c.js";import{X as $}from"./XAxis-Csoi6tJo.js";import{Y as I}from"./YAxis-kT_Dhc9L.js";import{L as O}from"./Legend-DgX7j-HN.js";import{T as W}from"./Tooltip-BFgcyP5H.js";import{L as C}from"./Line-qeb5AOli.js";import{C as X}from"./Curve-B6JdyyX2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-lipkooEs.js";import"./RechartsWrapper-CSj-zOMY.js";import"./axisSelectors-BukMemNW.js";import"./throttle-CArjZiC0.js";import"./index-BOkqGzp2.js";import"./index-CfjS_rv2.js";import"./d3-scale-A0pa5PaW.js";import"./index-BU2LuEPQ.js";import"./index-w8XliPC1.js";import"./renderedTicksSlice-aSc_RQuV.js";import"./index-Bhmq51fs.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CGnG6vua.js";import"./chartDataContext-DYtS61hX.js";import"./CategoricalChart-exrBt-zG.js";import"./CartesianAxis-C4H8T_Ld.js";import"./Layer-DyzQQGzG.js";import"./Text-DqGbkrCU.js";import"./DOMUtils-DY29CBKb.js";import"./useId-CApYJX2H.js";import"./useBackwardsCompatibleTheme-Bk9F9dU7.js";import"./Label-CFZdNolQ.js";import"./ZIndexLayer-BREUw5RK.js";import"./types-Ba9pm5hc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-sICZq85f.js";import"./symbol-BoZKm9ub.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DmpHX-P0.js";import"./uniqBy-bPD_mXTF.js";import"./iteratee-5n_c6cHV.js";import"./useAnimationId-DR1fMTy4.js";import"./Cross-CHOCkf8K.js";import"./Rectangle-Bs5Lck6m.js";import"./util-Dxo8gN5i.js";import"./Sector-DEamqHmv.js";import"./AnimatedItems-Dg7VLsKy.js";import"./ActivePoints-BPt1O7jo.js";import"./Dot-BJReGaVO.js";import"./RegisterGraphicalItemId-BvCBLwbE.js";import"./ErrorBarContext-DfSUsFkF.js";import"./GraphicalItemClipPath-Bf92gQO6.js";import"./SetGraphicalItem-DcBb5qLP.js";import"./getRadiusAndStrokeWidthFromDot-CK_UfwUG.js";import"./ActiveShapeUtils-BVXEB5o6.js";import"./useGraphicalItemIdentity-pSJHNQYU.js";import"./step-DWnGBeyO.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
