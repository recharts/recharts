import{e as t}from"./iframe-CcieUljj.js";import{R as D,i as s}from"./arrayEqualityCheck-CBSvOn2m.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-xMgbRn3o.js";import{C as T}from"./CartesianGrid-DcWHz-6f.js";import{X as M}from"./XAxis-DRW_fzsF.js";import{Y as $}from"./YAxis-ChIRv6Dr.js";import{L as O}from"./Legend-DJWPsUvs.js";import{T as W}from"./Tooltip-DPG6Xagy.js";import{L as C}from"./Line-DSrWZJOK.js";import{R as X}from"./RechartsHookInspector-gpfAdvlL.js";import{C as Y}from"./Curve-Bx8QBaeT.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DtzB7iWl.js";import"./immer-CRL2VYbe.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CNR_n_x6.js";import"./index-Dbc8u9bF.js";import"./hooks-DPwXI4Gw.js";import"./axisSelectors-Pbek4Jez.js";import"./d3-scale-CoPY6zJ-.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-COf-5-fj.js";import"./renderedTicksSlice-OQ158BwU.js";import"./CartesianChart-OaoDdpk7.js";import"./chartDataContext-CVz5YgWY.js";import"./CategoricalChart-B0CWPrGL.js";import"./CartesianAxis-y4_48Kdj.js";import"./Layer-kYv4pH7g.js";import"./Text-ByRBAoo5.js";import"./DOMUtils-CgPYrlEh.js";import"./Label-x_qN36Er.js";import"./ZIndexLayer-BJKRgvH9.js";import"./types-CacpOb3i.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CuWHy7F-.js";import"./symbol-iKW_0e7L.js";import"./step-CgpTw60r.js";import"./useElementOffset-CqK0Vxa0.js";import"./uniqBy-Biztq0Nb.js";import"./iteratee-DlqS2PSY.js";import"./useAnimationId-DddwMKxX.js";import"./Cross-C0sTfzMc.js";import"./Rectangle-Z_JKhr7t.js";import"./Sector-BSfRVALc.js";import"./AnimatedItems-RMCtBAwF.js";import"./ActivePoints-QoER0D4T.js";import"./Dot-D5mPo0FX.js";import"./RegisterGraphicalItemId-BJxOIzsy.js";import"./ErrorBarContext-DmagIxUm.js";import"./GraphicalItemClipPath-Cd4vnEzu.js";import"./SetGraphicalItem-Dz7oH1lw.js";import"./getRadiusAndStrokeWidthFromDot-9l7PqCbK.js";import"./ActiveShapeUtils-OiQWsOUN.js";import"./isPlainObject-DI_W5C57.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CWN34y2W.js";import"./index-Ca5GsAAq.js";import"./ChartSizeDimensions-C-S9llVm.js";import"./OffsetShower-B6NxlzmC.js";import"./PlotAreaShower-DQmFSr8w.js";const Qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Ut=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Ut as __namedExportsOrder,Qt as default};
