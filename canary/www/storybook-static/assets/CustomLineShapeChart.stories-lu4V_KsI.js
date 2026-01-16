import{e as t}from"./iframe-Daa7gVLq.js";import{R as D,n as p}from"./arrayEqualityCheck-DHiMbEr4.js";import{L as v}from"./LineChartArgs-C9Vp8FkW.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-DeAHavZw.js";import{C as K}from"./CartesianGrid-75effBkS.js";import{X as T}from"./XAxis-9jKN-_DJ.js";import{Y as M}from"./YAxis-BnejCEyC.js";import{L as $}from"./Legend-8Lsn4QIr.js";import{T as O}from"./Tooltip-DmXRg1lA.js";import{L as C}from"./Line-B5G8X7n4.js";import{R as W}from"./RechartsHookInspector-5CuZ5Ttw.js";import{C as X}from"./Curve-CWMRaKtl.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CqeH2zdA.js";import"./PolarUtils-BgeQKPj6.js";import"./RechartsWrapper-DHnB2RYt.js";import"./hooks-DRpX0LFg.js";import"./axisSelectors-BSy2Ei6Q.js";import"./zIndexSlice-DRH3Lnc3.js";import"./CartesianChart-D3r6q5qA.js";import"./chartDataContext-C9HoDYmp.js";import"./CategoricalChart-B6hlTMds.js";import"./CartesianAxis-BVtnbRV6.js";import"./Layer-CGvX8Aev.js";import"./Text-WZTWBxCY.js";import"./DOMUtils-CqCd1ysC.js";import"./Label-Czm8SDG7.js";import"./ZIndexLayer-BpC0cLWO.js";import"./types-C4ZPTuLr.js";import"./Symbols-Ct_d7yT0.js";import"./useElementOffset-BEi6rhn-.js";import"./iteratee-C1MLwHnw.js";import"./Cross-kvNgnX-L.js";import"./Rectangle-DdCOnFsR.js";import"./useAnimationId-ahZSEp8i.js";import"./Sector-BNry3-1y.js";import"./ReactUtils-DBjM8e5X.js";import"./ActivePoints-CnyDSr4M.js";import"./Dot-DRRuIu69.js";import"./RegisterGraphicalItemId-C9_vaDSC.js";import"./ErrorBarContext-C3qObGNC.js";import"./GraphicalItemClipPath-CdixPI_Q.js";import"./SetGraphicalItem-SUpveLj9.js";import"./getRadiusAndStrokeWidthFromDot-DQjBSxKW.js";import"./ActiveShapeUtils-BKnbDBiu.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BpmoHtq5.js";import"./index-hu5OYDiu.js";import"./ChartSizeDimensions-b43WqGvd.js";import"./OffsetShower-11IB6J7X.js";import"./PlotAreaShower-B0b4w-E6.js";const Yt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
