import{e as t}from"./iframe-D10KqzUD.js";import{R as D,n as p}from"./arrayEqualityCheck-BiFmrFlI.js";import{L as v}from"./LineChartArgs-C9Vp8FkW.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-B83MfsiT.js";import{C as K}from"./CartesianGrid-BamDRBTo.js";import{X as T}from"./XAxis-BQt1-o4i.js";import{Y as M}from"./YAxis-DR2gGzMh.js";import{L as $}from"./Legend-CUAitUpE.js";import{T as O}from"./Tooltip-qTD6wmE4.js";import{L as C}from"./Line-DoQ21THX.js";import{R as W}from"./RechartsHookInspector-D11PdPOv.js";import{C as X}from"./Curve-BHXU1eAM.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-9OrE3puy.js";import"./PolarUtils--rK1_r3m.js";import"./RechartsWrapper-DmZaXDX9.js";import"./hooks-CD0TfSak.js";import"./axisSelectors-C2rRwI0J.js";import"./zIndexSlice-C09Fe5zh.js";import"./CartesianChart-BphZ3X7F.js";import"./chartDataContext-Dv1VUms-.js";import"./CategoricalChart-Cot6VJVX.js";import"./CartesianAxis-UUDtKWGi.js";import"./Layer-ht9SJGho.js";import"./Text-CCvRlOZV.js";import"./DOMUtils-6pjMFL45.js";import"./Label-NWVYeZEG.js";import"./ZIndexLayer-CJv48mZa.js";import"./types-DH2QYYrT.js";import"./Symbols-DUUGs6sP.js";import"./useElementOffset-BpotpCoB.js";import"./iteratee-B19FyeeB.js";import"./Cross-DC2jpo78.js";import"./Rectangle-DpWw-GEi.js";import"./useAnimationId-CbuLj6s5.js";import"./Sector-C5ufK4tl.js";import"./ReactUtils-Bjqgxmj3.js";import"./ActivePoints-Cl0N8-Qa.js";import"./Dot-WZLVysVK.js";import"./RegisterGraphicalItemId-Da0N4p7t.js";import"./ErrorBarContext-D0gYYf11.js";import"./GraphicalItemClipPath-BK-RhyE8.js";import"./SetGraphicalItem-BG3i3hAQ.js";import"./getRadiusAndStrokeWidthFromDot-B2lKpKPj.js";import"./ActiveShapeUtils-DYlzmj4y.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DuyF-aaV.js";import"./index-CvJ6Av4F.js";import"./ChartSizeDimensions-CrUVJUaS.js";import"./OffsetShower-CpYxr2Ft.js";import"./PlotAreaShower-B_BAjCHP.js";const Yt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
