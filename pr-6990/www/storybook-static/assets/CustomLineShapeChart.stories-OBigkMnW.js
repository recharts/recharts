import{e as t}from"./iframe-uc6dFw_p.js";import{R as D,p}from"./arrayEqualityCheck-CQn2kQOi.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-BpnJQW3c.js";import{C as K}from"./CartesianGrid-DL0uandd.js";import{X as T}from"./XAxis-bu2lwvBT.js";import{Y as M}from"./YAxis-BSExt7in.js";import{L as $}from"./Legend-X7c9neI_.js";import{T as O}from"./Tooltip-BLTFcQwq.js";import{L as C}from"./Line-ByN8gtfV.js";import{R as W}from"./RechartsHookInspector-IvFhBGHX.js";import{C as X}from"./Curve-IfIaqkcg.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-kGpremEA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DhOLU858.js";import"./hooks-vCWItnff.js";import"./axisSelectors-B8_chuAi.js";import"./zIndexSlice-WGd4Bakr.js";import"./renderedTicksSlice-nuZito-G.js";import"./CartesianChart-CgnwnU-y.js";import"./chartDataContext-Dmpd0AQd.js";import"./CategoricalChart-BjqK4Uyg.js";import"./CartesianAxis-B3Lcnjmt.js";import"./Layer-DswXiCbz.js";import"./Text-Bqz-nWjx.js";import"./DOMUtils-DBQIyNfT.js";import"./Label-D0b7Dnqv.js";import"./ZIndexLayer-CxICY6ph.js";import"./types-BngWNVP1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-ByXfoODU.js";import"./useElementOffset-BvIk-J79.js";import"./iteratee-Veu1fysD.js";import"./Cross-DblCPhjr.js";import"./Rectangle-B0I4wQZ7.js";import"./useAnimationId-BjF_cXy3.js";import"./Sector-DJmKtBTn.js";import"./ReactUtils-Bs-3TSfa.js";import"./ActivePoints-D6pcWJRZ.js";import"./Dot-CbTtT0Am.js";import"./RegisterGraphicalItemId-Dzwld0hr.js";import"./ErrorBarContext-DROw9Wv2.js";import"./GraphicalItemClipPath-DhRCGnFu.js";import"./SetGraphicalItem-DzzG5GId.js";import"./getRadiusAndStrokeWidthFromDot-DXA4nmLv.js";import"./ActiveShapeUtils-j7lBkeSN.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BBf2jkzZ.js";import"./index-C4cmB5lh.js";import"./ChartSizeDimensions-DgaeT0Q8.js";import"./OffsetShower-CN5uyxGG.js";import"./PlotAreaShower-rJfWFAXI.js";const jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Ft=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Ft as __namedExportsOrder,jt as default};
