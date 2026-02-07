import{e as t}from"./iframe-p_UG0KAI.js";import{R as D,n as p}from"./arrayEqualityCheck-RFBrzMpT.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-DheqpQeV.js";import{C as K}from"./CartesianGrid-DRqphYMG.js";import{X as T}from"./XAxis-zKsPIOo2.js";import{Y as M}from"./YAxis-DEIZfQQv.js";import{L as $}from"./Legend-C5lnNtwO.js";import{T as O}from"./Tooltip-D7nuMyts.js";import{L as C}from"./Line-F3MIA8if.js";import{R as W}from"./RechartsHookInspector-DC0vak21.js";import{C as X}from"./Curve-BzeYL40i.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DGxp3uGd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-tEJUk72V.js";import"./hooks-pJuOnib6.js";import"./axisSelectors-PDDTaSk3.js";import"./zIndexSlice-BmIGVCRU.js";import"./CartesianChart-pFigcRMV.js";import"./chartDataContext-CH9fTHhq.js";import"./CategoricalChart-BF8f5Erd.js";import"./CartesianAxis-0r0p8ryQ.js";import"./Layer-JpdK0Yhb.js";import"./Text-D6vjCcrH.js";import"./DOMUtils-CJ8h57fm.js";import"./Label-079Vd-9w.js";import"./ZIndexLayer-CVbpoIAO.js";import"./types-PTj5YW0Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CtMkMnQW.js";import"./useElementOffset-TZ-hkQh7.js";import"./iteratee-Drb2ZJYm.js";import"./Cross-C0w-Lqog.js";import"./Rectangle-Bxtfu4l2.js";import"./useAnimationId-CNvXWFg0.js";import"./Sector-BYc0giK7.js";import"./ReactUtils-Bi-gzM1a.js";import"./ActivePoints-C5BJV9dv.js";import"./Dot-BYSk7D6p.js";import"./RegisterGraphicalItemId-CYD9ORuF.js";import"./ErrorBarContext-CzGVMKe5.js";import"./GraphicalItemClipPath-QjUTAoiq.js";import"./SetGraphicalItem-JMwAn23t.js";import"./getRadiusAndStrokeWidthFromDot-C_2SwELs.js";import"./ActiveShapeUtils-BrkQD8_s.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-0x4_ia8j.js";import"./index-Cmf0vnA4.js";import"./ChartSizeDimensions-IHqJf279.js";import"./OffsetShower-X_nsBUDf.js";import"./PlotAreaShower-BlZaNjOc.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
