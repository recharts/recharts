import{e as t}from"./iframe-LMZEDrr2.js";import{R as D,i as s}from"./arrayEqualityCheck-Isy6zPZP.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CDsw78cF.js";import{C as T}from"./CartesianGrid-Da8LAIdn.js";import{X as M}from"./XAxis-CDuwPcZ0.js";import{Y as $}from"./YAxis-ClmaHC8-.js";import{L as O}from"./Legend-DpVDCq_z.js";import{T as W}from"./Tooltip-B_90clCK.js";import{L as C}from"./Line-5-HvnnXd.js";import{R as X}from"./RechartsHookInspector-BQiO1I7n.js";import{C as Y}from"./Curve-D3f_JNhO.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BZX4Pe9p.js";import"./immer-BxzI6gFZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CGclI6Yd.js";import"./index-9UiZJf_6.js";import"./hooks-D05996su.js";import"./axisSelectors-BJbnODt1.js";import"./d3-scale-HoZeCUQ0.js";import"./zIndexSlice-C5mrfXZA.js";import"./renderedTicksSlice-P-8ydmtT.js";import"./CartesianChart-D8UfDOFa.js";import"./chartDataContext-CmqegXUH.js";import"./CategoricalChart-CdP22T7j.js";import"./CartesianAxis-CmrHLfhr.js";import"./Layer-Dm4unAaj.js";import"./Text-D-rTyPnI.js";import"./DOMUtils-nLe0COZN.js";import"./Label-C1cFmZLh.js";import"./ZIndexLayer-xLHvpxY5.js";import"./types-C96dbGEy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-q47rYWMx.js";import"./symbol-BUCm0Fuj.js";import"./step-DHepAl4j.js";import"./useElementOffset-BsnK6ysB.js";import"./uniqBy-DoryuFu9.js";import"./iteratee-B7wf2MQl.js";import"./useAnimationId-BVzXz2Ut.js";import"./Cross-Codaptvi.js";import"./Rectangle-bTQTBoQ8.js";import"./Sector-DM3Dpfvi.js";import"./ReactUtils-D-S282mX.js";import"./ActivePoints-iQlXbE54.js";import"./Dot-D2FHp4ML.js";import"./RegisterGraphicalItemId-D4ZA5iGR.js";import"./ErrorBarContext-ByVn-xgW.js";import"./GraphicalItemClipPath-BG8ja_no.js";import"./SetGraphicalItem-BbPBNAhF.js";import"./getRadiusAndStrokeWidthFromDot-uSj8EeRI.js";import"./ActiveShapeUtils-DlCg2xOm.js";import"./isPlainObject-tSKo75hS.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BaFBv2Ob.js";import"./index-B4Bhf0VI.js";import"./ChartSizeDimensions-Dkn4GtcA.js";import"./OffsetShower-BXlYCay7.js";import"./PlotAreaShower-3thsUpgf.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
