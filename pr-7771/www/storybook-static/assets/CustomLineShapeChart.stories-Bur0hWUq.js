import{R as t}from"./iframe-Dn8vQZEp.js";import{a as p}from"./isWellBehavedNumber-Drx6zYdA.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-s14xJC2T.js";import{R as T}from"./zIndexSlice-XUx2oJl_.js";import{C as M}from"./CartesianGrid-6Umk4lWm.js";import{X as $}from"./XAxis-CB79oGK-.js";import{Y as I}from"./YAxis-BNLIqhTJ.js";import{L as O}from"./Legend-D_MpiCUq.js";import{T as W}from"./Tooltip-DSH5seYS.js";import{L as C}from"./Line-mZ5HbPHC.js";import{C as X}from"./Curve-WjJYEJJ2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-jBHMfbnT.js";import"./RechartsWrapper-Bhkt7zRT.js";import"./axisSelectors-DcgT4KNV.js";import"./throttle-fPZ-AFkd.js";import"./index-CuDTIlBD.js";import"./index-BhPh_0Mo.js";import"./d3-scale-CzizY4ry.js";import"./index-CjS_XyhA.js";import"./index-Drl0y4WP.js";import"./renderedTicksSlice-eRTKLRMo.js";import"./index-Bmxz4y8Z.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B9QNJ1CX.js";import"./chartDataContext-mZgxnkA9.js";import"./CategoricalChart-DAypclSw.js";import"./CartesianAxis-BNezq43E.js";import"./Layer-BJv5m_kT.js";import"./Text-D0E0CgcA.js";import"./DOMUtils-T9kk7XzM.js";import"./useId-ClKCYS2F.js";import"./useBackwardsCompatibleTheme-DuANBb0k.js";import"./Label-Bvs0nTDG.js";import"./ZIndexLayer-8Cv1ome6.js";import"./types-BtKkYRP2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DZGkt8QS.js";import"./symbol-3I5gn6bV.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bal9XmbO.js";import"./uniqBy-QuaGjxN1.js";import"./iteratee-DpeX9yxF.js";import"./useAnimationId-DNL11RNx.js";import"./Cross-unVPMm5k.js";import"./Rectangle-Bdeqx9d0.js";import"./util-Dxo8gN5i.js";import"./Sector-C-HmTIUE.js";import"./AnimatedItems-BnMcWdWM.js";import"./ActivePoints-CJcQvon7.js";import"./Dot-CNAi9nFI.js";import"./RegisterGraphicalItemId-BEcpOk8N.js";import"./ErrorBarContext-1UXxdVKa.js";import"./GraphicalItemClipPath-DwUubEvw.js";import"./SetGraphicalItem-wP6-k6q-.js";import"./getRadiusAndStrokeWidthFromDot-CS00mpN0.js";import"./ActiveShapeUtils-Czlcjg-Z.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-DZtB5o_b.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
