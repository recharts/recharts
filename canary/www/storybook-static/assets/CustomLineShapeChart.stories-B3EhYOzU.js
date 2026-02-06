import{e as t}from"./iframe-BD1KoWK2.js";import{R as D,n as p}from"./arrayEqualityCheck-Cde7DPwP.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-B8TgrOXP.js";import{C as K}from"./CartesianGrid-BcU30g3K.js";import{X as T}from"./XAxis-DnAqFIqk.js";import{Y as M}from"./YAxis-Ck4AhIst.js";import{L as $}from"./Legend-Bp5H4dxa.js";import{T as O}from"./Tooltip-DvDl9VQH.js";import{L as C}from"./Line-CGYyis5f.js";import{R as W}from"./RechartsHookInspector-D7IHkHn9.js";import{C as X}from"./Curve-CTi9DAae.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-jJ9mOY4z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CyX5gEfk.js";import"./hooks-BYJ871TN.js";import"./axisSelectors-CEc7xIMq.js";import"./zIndexSlice-BvhylE7E.js";import"./CartesianChart-Dhtf_0dk.js";import"./chartDataContext-CnDpTFyo.js";import"./CategoricalChart-CI3_eBBD.js";import"./CartesianAxis-le_A4Q3P.js";import"./Layer-CRI4mTHm.js";import"./Text-NBPo0mLT.js";import"./DOMUtils-Lc23xLhb.js";import"./Label-DKDP8eG9.js";import"./ZIndexLayer-CVx_Xq-U.js";import"./types-CvLbK4WM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Cd74flzx.js";import"./useElementOffset-CbgUnFUY.js";import"./iteratee-qfF8uGCk.js";import"./Cross-Binq3Rad.js";import"./Rectangle-Dqzy-26l.js";import"./useAnimationId-C52_k4XW.js";import"./Sector-BVsQ6t1D.js";import"./ReactUtils-Z9JD7jXO.js";import"./ActivePoints-BVAo8tZZ.js";import"./Dot-CM29upss.js";import"./RegisterGraphicalItemId-BdofLPRs.js";import"./ErrorBarContext-DDBG_BG0.js";import"./GraphicalItemClipPath-CHbmwSgW.js";import"./SetGraphicalItem-BNcYp_R3.js";import"./getRadiusAndStrokeWidthFromDot-DUli-5VF.js";import"./ActiveShapeUtils-D4Tjr80H.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-Ce1Zpmiv.js";import"./index-G9AZeeqA.js";import"./ChartSizeDimensions-asr3RhFu.js";import"./OffsetShower-CBrp3efF.js";import"./PlotAreaShower-Bn3UIJhb.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
