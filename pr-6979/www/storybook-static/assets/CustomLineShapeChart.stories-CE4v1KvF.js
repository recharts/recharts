import{e as t}from"./iframe-Bm_dlztP.js";import{R as D,n as p}from"./arrayEqualityCheck-BKx_y40S.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-C2AEnur2.js";import{C as K}from"./CartesianGrid-D8kzHBwE.js";import{X as T}from"./XAxis-DiBdkzoV.js";import{Y as M}from"./YAxis-Dt19AUea.js";import{L as $}from"./Legend-Dzh3BOn7.js";import{T as O}from"./Tooltip-D5YK1Rdo.js";import{L as C}from"./Line-CLMa4j3x.js";import{R as W}from"./RechartsHookInspector-CZNQLUTJ.js";import{C as X}from"./Curve-D1sI4FDZ.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DAVx7IVS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BufFVb6a.js";import"./hooks-QfdSjeut.js";import"./axisSelectors-BUAas6a1.js";import"./zIndexSlice-Bq54Z1bK.js";import"./CartesianChart-BEFObzU7.js";import"./chartDataContext-D60asm_F.js";import"./CategoricalChart-DinCBVKr.js";import"./CartesianAxis-Df-SQWPS.js";import"./Layer-DqzpUDSE.js";import"./Text-BE0vw9O_.js";import"./DOMUtils-BT5kncNa.js";import"./Label-CDVZMFBi.js";import"./ZIndexLayer-BWJMOT1A.js";import"./types-DmFvG4SC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CIac5k7Z.js";import"./useElementOffset-H-NWySai.js";import"./iteratee-C4Ua_ZlD.js";import"./Cross-Bc0M8izX.js";import"./Rectangle-CF3NoYDn.js";import"./useAnimationId-DL43TA5B.js";import"./Sector-Tp_jaJNZ.js";import"./ReactUtils-278YW1x2.js";import"./ActivePoints-CYA336oa.js";import"./Dot-DVC6PvDp.js";import"./RegisterGraphicalItemId-Fy4B400g.js";import"./ErrorBarContext-DrNk0Egn.js";import"./GraphicalItemClipPath-DBcACHox.js";import"./SetGraphicalItem-C3DJs7FG.js";import"./getRadiusAndStrokeWidthFromDot-zhMizOQu.js";import"./ActiveShapeUtils-CdMwlbl5.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BcjTe3fL.js";import"./index-DBvu736D.js";import"./ChartSizeDimensions-vZmS1AK4.js";import"./OffsetShower-D1dBuDTC.js";import"./PlotAreaShower-CncsJcTH.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
