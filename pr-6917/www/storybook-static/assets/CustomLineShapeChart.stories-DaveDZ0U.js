import{e as t}from"./iframe-D2DyXbcn.js";import{R as D,n as p}from"./arrayEqualityCheck-WjtHcJHc.js";import{L as v}from"./LineChartArgs-C9Vp8FkW.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart--Wsp0J1e.js";import{C as K}from"./CartesianGrid-lVO3DWYE.js";import{X as T}from"./XAxis-B_Rkajbb.js";import{Y as M}from"./YAxis-9nabWNdp.js";import{L as $}from"./Legend-EKyNRW-_.js";import{T as O}from"./Tooltip-B9D5T6kV.js";import{L as C}from"./Line-D8rfWtVU.js";import{R as W}from"./RechartsHookInspector-CDdA-ZFQ.js";import{C as X}from"./Curve-O5r-1d1a.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DA54HTPm.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BOCCBYR7.js";import"./hooks-JMcNkC16.js";import"./axisSelectors-opT4Xs9T.js";import"./zIndexSlice-BQ_BDZqW.js";import"./CartesianChart-Ba4FxLXC.js";import"./chartDataContext-Dwil6t7E.js";import"./CategoricalChart-D5ZcD5Yb.js";import"./CartesianAxis-YVPJ9daY.js";import"./Layer-BwzoyCOr.js";import"./Text-rvIJXzXo.js";import"./DOMUtils-C9-GhUPU.js";import"./Label-CjanQvYq.js";import"./ZIndexLayer-NA5ERVnG.js";import"./types-uxMSZ2Tc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-f5SXrcZl.js";import"./useElementOffset-1lDb_Lm2.js";import"./iteratee-CPGn8MN2.js";import"./Cross-C-VozEOs.js";import"./Rectangle-DDAmNHcJ.js";import"./useAnimationId-D72jT57q.js";import"./Sector-D91ncyh4.js";import"./ReactUtils-D1zizFIc.js";import"./ActivePoints-BMPW0nm-.js";import"./Dot-BkDSgj5P.js";import"./RegisterGraphicalItemId-D3Xr-RN7.js";import"./ErrorBarContext-C7pLQCZx.js";import"./GraphicalItemClipPath-BOs3atUy.js";import"./SetGraphicalItem-NSh_bPoh.js";import"./getRadiusAndStrokeWidthFromDot-BJgqpW3E.js";import"./ActiveShapeUtils-C8QFtNhq.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CuHn90H-.js";import"./index-B5oQXnTT.js";import"./ChartSizeDimensions-1xcDn5yB.js";import"./OffsetShower-DmmXcLnJ.js";import"./PlotAreaShower-CpTy_FbM.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
