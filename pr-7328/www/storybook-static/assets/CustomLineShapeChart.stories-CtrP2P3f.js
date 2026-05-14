import{e as t}from"./iframe-BNMXyeq9.js";import{R as D,i as s}from"./arrayEqualityCheck-Beh0vaeo.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DxbtuVQ7.js";import{C as T}from"./CartesianGrid-DnAQ3s7G.js";import{X as M}from"./XAxis-BQQS4Uyr.js";import{Y as $}from"./YAxis-BzqiKsmD.js";import{L as O}from"./Legend-D-c46KFD.js";import{T as W}from"./Tooltip-DE-Xht-O.js";import{L as C}from"./Line-gdwjxtB7.js";import{R as X}from"./RechartsHookInspector-DoNDmCSP.js";import{C as Y}from"./Curve-CIYQTlJO.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DqK5jQb8.js";import"./immer-DLDegpHz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-p99nh58x.js";import"./index-CqHAUX4Y.js";import"./hooks-CxmJQzvA.js";import"./axisSelectors-Bjzn5CZG.js";import"./d3-scale-jx-p6VOM.js";import"./zIndexSlice-BXAFsMol.js";import"./renderedTicksSlice-BOGp2GeV.js";import"./CartesianChart-BotaMIv-.js";import"./chartDataContext-C7KiXxa1.js";import"./CategoricalChart-Ced0NDVQ.js";import"./CartesianAxis-CFKApKAY.js";import"./Layer-9B5krggT.js";import"./Text-DpT8fH0_.js";import"./DOMUtils-bKs0Y9ns.js";import"./Label-CmY8D_Vk.js";import"./ZIndexLayer-rfj-vOql.js";import"./types-C7VY0BRq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BX6LNW-t.js";import"./symbol-CO4n4duV.js";import"./step-BVNiQCr9.js";import"./useElementOffset-DBo3BKsc.js";import"./uniqBy-BkkLROVl.js";import"./iteratee-DR_LWlIn.js";import"./useAnimationId-BIOuiTZH.js";import"./Cross-CiHOZNs8.js";import"./Rectangle-DjmVhQIC.js";import"./Sector-CWORy7MA.js";import"./ReactUtils-BiDFqrgq.js";import"./ActivePoints-BNreOZF9.js";import"./Dot-C8tx3hOP.js";import"./RegisterGraphicalItemId-qopa_Nsy.js";import"./ErrorBarContext-DocAQmKI.js";import"./GraphicalItemClipPath-BN3M0qNc.js";import"./SetGraphicalItem-CpGjwelu.js";import"./getRadiusAndStrokeWidthFromDot-lM7t1HK-.js";import"./ActiveShapeUtils-D0ia5i81.js";import"./isPlainObject-B18GKfQY.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CbRqZG4l.js";import"./index-Dh6m6MB-.js";import"./ChartSizeDimensions-CH4qJAUd.js";import"./OffsetShower-CtjINnVg.js";import"./PlotAreaShower-BAtsa-GO.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
