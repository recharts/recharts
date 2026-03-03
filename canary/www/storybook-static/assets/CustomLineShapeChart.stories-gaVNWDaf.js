import{e as t}from"./iframe-DT_QfCX6.js";import{R as D,i as s}from"./arrayEqualityCheck-DgclqCQe.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-CdJU1oWv.js";import{C as K}from"./CartesianGrid-C08ei6c2.js";import{X as T}from"./XAxis-BE7dRx6e.js";import{Y as M}from"./YAxis-8Bgwa54a.js";import{L as $}from"./Legend-1CNKIUyY.js";import{T as O}from"./Tooltip-DDLBBX7Q.js";import{L as C}from"./Line-C5NbBdSO.js";import{R as W}from"./RechartsHookInspector-BZlaUGyM.js";import{C as X}from"./Curve-DVqXjtuH.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CM621BjQ.js";import"./immer-Dm_eTc-x.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BjKAVIgx.js";import"./index-B5fX5g4a.js";import"./hooks-hb3YajwI.js";import"./axisSelectors-DEJjMxLA.js";import"./d3-scale-DdauB95s.js";import"./zIndexSlice-St67sYO3.js";import"./renderedTicksSlice-C-8YagrD.js";import"./CartesianChart-DSP5L81p.js";import"./chartDataContext-CtAEKjsT.js";import"./CategoricalChart-Dym2TIuH.js";import"./CartesianAxis-BXsDKsAg.js";import"./Layer-V2SZsz4R.js";import"./Text-Btk8OOuM.js";import"./DOMUtils-CXMayvsd.js";import"./Label-HvHa-kvb.js";import"./ZIndexLayer-LaPkRlL4.js";import"./types-BFIPf9k1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-LHeYuxni.js";import"./symbol-D2MJ3HO9.js";import"./step-BvjBdR90.js";import"./useElementOffset-BKvtVAYG.js";import"./uniqBy-7Wuh8TV7.js";import"./iteratee-BqkoQ9iH.js";import"./useAnimationId-Kk_Sm5qp.js";import"./Cross-QXtKCKac.js";import"./Rectangle-BR7QntkE.js";import"./Sector-c2ULWy9q.js";import"./ReactUtils-DiJ6wwjh.js";import"./ActivePoints-Dhpi1IY5.js";import"./Dot-C_3CCWU2.js";import"./RegisterGraphicalItemId-C3WllrLT.js";import"./ErrorBarContext-DjRWnVpQ.js";import"./GraphicalItemClipPath-CjwarN2Z.js";import"./SetGraphicalItem-DaPsLcNS.js";import"./getRadiusAndStrokeWidthFromDot-DWNytFT8.js";import"./ActiveShapeUtils-5Z9knZsD.js";import"./isPlainObject-CkHzR63e.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DBAlB0P9.js";import"./index-Cn6U4qah.js";import"./ChartSizeDimensions-Dwz-fLgS.js";import"./OffsetShower-BpQcdb8I.js";import"./PlotAreaShower-Bt6tAbug.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
