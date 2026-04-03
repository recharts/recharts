import{e as t}from"./iframe-Bw8DjNMK.js";import{R as D,i as s}from"./arrayEqualityCheck-RqErd5pi.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DETEap1F.js";import{C as T}from"./CartesianGrid-QdqFE8Kt.js";import{X as M}from"./XAxis-DXXKhKWM.js";import{Y as $}from"./YAxis-DdDXncps.js";import{L as O}from"./Legend-rXI8zasX.js";import{T as W}from"./Tooltip-C5C5GBaM.js";import{L as C}from"./Line-BnxQLC5H.js";import{R as X}from"./RechartsHookInspector-Dkw7rNs4.js";import{C as Y}from"./Curve-DtKt2A2q.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CZAfNVom.js";import"./immer-D8iSY20c.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-78h_uQ3C.js";import"./index-BrpMLpeL.js";import"./hooks-DIsqzK2K.js";import"./axisSelectors-BE5DsmIW.js";import"./d3-scale-D3xSJxj4.js";import"./zIndexSlice-DyW-bn5P.js";import"./renderedTicksSlice-BK1GDE8h.js";import"./CartesianChart-D3IHNwey.js";import"./chartDataContext-Dz8istsE.js";import"./CategoricalChart-D7TuKkne.js";import"./CartesianAxis-vRL28WoM.js";import"./Layer-DM0-BU9E.js";import"./Text-e8mIqlAu.js";import"./DOMUtils-D0bDfEmn.js";import"./Label-E6zUfHhJ.js";import"./ZIndexLayer-DWrSmtv7.js";import"./types-BIXu7WCc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-ZPRqUnx6.js";import"./symbol-DGPSkh8h.js";import"./step-DLR3mlGm.js";import"./useElementOffset-D_0LT1od.js";import"./uniqBy-CV8QdcFw.js";import"./iteratee-CJuVNxE9.js";import"./useAnimationId-EQy0eofc.js";import"./Cross-Bp78iUN1.js";import"./Rectangle-cql93QQN.js";import"./Sector-DbOLYdsA.js";import"./ReactUtils-lXsqpfha.js";import"./ActivePoints-DlNvY9xF.js";import"./Dot-CNEj_K0i.js";import"./RegisterGraphicalItemId-Bd8mrNJF.js";import"./ErrorBarContext-Ds7SXBSd.js";import"./GraphicalItemClipPath-Kk-xgOZj.js";import"./SetGraphicalItem-BPCW0ywk.js";import"./getRadiusAndStrokeWidthFromDot-BenKvZMl.js";import"./ActiveShapeUtils-DUc-QBSd.js";import"./isPlainObject-B10acXuk.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-Q5mzP7fr.js";import"./index-BAnsiokJ.js";import"./ChartSizeDimensions-BVLi1gDh.js";import"./OffsetShower-CGTxNqXv.js";import"./PlotAreaShower-Bs-62jbH.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
