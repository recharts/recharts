import{e as t}from"./iframe-oKMzB0d-.js";import{R as D,n as p}from"./arrayEqualityCheck-Caoo2I2E.js";import{L as v}from"./LineChartArgs-C9Vp8FkW.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-D9yrf0T2.js";import{C as K}from"./CartesianGrid-5hmKvUrP.js";import{X as T}from"./XAxis-DlRmKJ01.js";import{Y as M}from"./YAxis-DLym79d9.js";import{L as $}from"./Legend-CLhSxZ7W.js";import{T as O}from"./Tooltip-B8PD1RTL.js";import{L as C}from"./Line-Bwc4TWJK.js";import{R as W}from"./RechartsHookInspector-BzEUDXeW.js";import{C as X}from"./Curve-C8ob2FQq.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BTiWYe8E.js";import"./PolarUtils-BvDSiGX_.js";import"./RechartsWrapper-CTDVW_mD.js";import"./hooks-CriE4jYz.js";import"./axisSelectors-igA0S6xv.js";import"./zIndexSlice-BjyYTZgT.js";import"./CartesianChart-CEC_RciI.js";import"./chartDataContext-CTkSsRq2.js";import"./CategoricalChart-CKuwRZ5o.js";import"./CartesianAxis-D9OPLMCI.js";import"./Layer-Drq4I3c8.js";import"./Text-BAYt6EI9.js";import"./DOMUtils-xOASrBrw.js";import"./Label-CUg786Ba.js";import"./ZIndexLayer-pfpD2pdJ.js";import"./types-Bjx9mdsH.js";import"./Symbols-mKBUz55k.js";import"./useElementOffset-CKxTytD_.js";import"./iteratee-DGg97fx9.js";import"./Cross-Dk50kqQk.js";import"./Rectangle-CfUKIL1Q.js";import"./useAnimationId-D0v972Sk.js";import"./Sector-DAIlPrp3.js";import"./ReactUtils-BHQlFXLR.js";import"./ActivePoints-B2gNLb__.js";import"./Dot-p7_Nmurg.js";import"./RegisterGraphicalItemId-Bt6_4oI2.js";import"./ErrorBarContext-DSBHo_om.js";import"./GraphicalItemClipPath-AaekTZGq.js";import"./SetGraphicalItem-BmLbSZv4.js";import"./getRadiusAndStrokeWidthFromDot-CV18y5aL.js";import"./ActiveShapeUtils-r0uOmI_9.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-D0zfblCG.js";import"./index-Bw063qfE.js";import"./ChartSizeDimensions-BmK2dJEG.js";import"./OffsetShower-B2D8CtyY.js";import"./PlotAreaShower-DVDhbnca.js";const Yt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const _t=["CustomLineShapeChart"];export{n as CustomLineShapeChart,_t as __namedExportsOrder,Yt as default};
