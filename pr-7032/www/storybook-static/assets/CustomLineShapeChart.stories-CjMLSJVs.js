import{e as t}from"./iframe-DhupoOg_.js";import{R as D,p}from"./arrayEqualityCheck-1a2j5A1f.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-BXp7Ar16.js";import{C as K}from"./CartesianGrid-CZVdI6-b.js";import{X as T}from"./XAxis-GsEtiJs1.js";import{Y as M}from"./YAxis-Bqh3gjFj.js";import{L as $}from"./Legend-CjOih_WG.js";import{T as O}from"./Tooltip-BWybEPAX.js";import{L as C}from"./Line-JwA_PVGy.js";import{R as W}from"./RechartsHookInspector-BRJSRdzz.js";import{C as X}from"./Curve-BbS-sSDe.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BTEYvdCP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BO7q4INj.js";import"./hooks-B-j7NBfr.js";import"./axisSelectors-C2OcRccT.js";import"./zIndexSlice-3nE7BOgk.js";import"./renderedTicksSlice-Bj2xHM0I.js";import"./CartesianChart-BeuGUy48.js";import"./chartDataContext-CrqCenWu.js";import"./CategoricalChart-C2IMp10s.js";import"./CartesianAxis-CrD8JHxo.js";import"./Layer-Bu6njlMc.js";import"./Text-ByV2kj0P.js";import"./DOMUtils-gPRAn0h9.js";import"./Label-jW6-M5QE.js";import"./ZIndexLayer-UCgdXbxU.js";import"./types-CAd6nAW9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-B_Z7RLio.js";import"./useElementOffset-DbSKwHmX.js";import"./iteratee-1SnXECjR.js";import"./useAnimationId-DwQLM9Vt.js";import"./Cross-CecaA5jP.js";import"./Rectangle-CD_6SwFf.js";import"./Sector-qA3WmdGy.js";import"./ReactUtils-Den_eo7w.js";import"./ActivePoints-CT0rrdoG.js";import"./Dot-h4eiknre.js";import"./RegisterGraphicalItemId-S4zlzp4z.js";import"./ErrorBarContext-DeheRuUe.js";import"./GraphicalItemClipPath-n7T_zXvL.js";import"./SetGraphicalItem-DotNlweO.js";import"./getRadiusAndStrokeWidthFromDot-CGbuqu4G.js";import"./ActiveShapeUtils-CwO0ADgQ.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CNwzGgkA.js";import"./index-B1siFWfz.js";import"./ChartSizeDimensions-DQpUS7oV.js";import"./OffsetShower-CF_FCt5b.js";import"./PlotAreaShower-O-owCsXY.js";const jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
