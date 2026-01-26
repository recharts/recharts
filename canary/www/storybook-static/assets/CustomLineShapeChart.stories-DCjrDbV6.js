import{e as t}from"./iframe-Byw-Ecda.js";import{R as D,n as p}from"./arrayEqualityCheck-DJZ_H245.js";import{L as v}from"./LineChartArgs-C9Vp8FkW.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-Bj3hMqsa.js";import{C as K}from"./CartesianGrid-Ulf2y6c_.js";import{X as T}from"./XAxis-DKuVnBhX.js";import{Y as M}from"./YAxis-CD7xJu8W.js";import{L as $}from"./Legend-BSRpbxl-.js";import{T as O}from"./Tooltip-BRMvzK7Q.js";import{L as C}from"./Line-DgOW2saj.js";import{R as W}from"./RechartsHookInspector-DU_Xges7.js";import{C as X}from"./Curve-Dgc9kazX.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DghbljUc.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CyPBoUJ2.js";import"./hooks-CRVJYPCv.js";import"./axisSelectors-CfRyBf_k.js";import"./zIndexSlice-BBcvffed.js";import"./CartesianChart-yzTWxCXF.js";import"./chartDataContext-BewYwNuI.js";import"./CategoricalChart-Dg1jHZIf.js";import"./CartesianAxis-C435YXcQ.js";import"./Layer-BCc3Ql-7.js";import"./Text-Co26eSaA.js";import"./DOMUtils-Cxak4Mzx.js";import"./Label-BqnP7yRk.js";import"./ZIndexLayer-CyfG8XIl.js";import"./types-C-BvOMCj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BEvrU7lm.js";import"./useElementOffset-74fnwz2l.js";import"./iteratee-CQ84vpct.js";import"./Cross-rgfJvv30.js";import"./Rectangle-Cx7cLZFF.js";import"./useAnimationId-QmVedw8X.js";import"./Sector-DvNfR6cX.js";import"./ReactUtils-Cjy_uT2w.js";import"./ActivePoints-CxQ9IJdy.js";import"./Dot-DJVqn8HA.js";import"./RegisterGraphicalItemId-Cpx6qHuO.js";import"./ErrorBarContext-Cl5G60_X.js";import"./GraphicalItemClipPath-C339LZnB.js";import"./SetGraphicalItem-DQzHPnU7.js";import"./getRadiusAndStrokeWidthFromDot-1lozLBiZ.js";import"./ActiveShapeUtils-Dp9WPNg-.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CmsPiWji.js";import"./index-Bq4G09kn.js";import"./ChartSizeDimensions-B0IYXKC6.js";import"./OffsetShower-BbVu_iXB.js";import"./PlotAreaShower-b86ZtdTd.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const jt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,jt as __namedExportsOrder,_t as default};
