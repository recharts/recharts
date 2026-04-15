import{e as t}from"./iframe-DJH7-DuZ.js";import{R as D,i as s}from"./arrayEqualityCheck-BCL8BMWc.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CSfi06d5.js";import{C as T}from"./CartesianGrid-CKoa0GDb.js";import{X as M}from"./XAxis-CZkA-oar.js";import{Y as $}from"./YAxis-D7iD0ncq.js";import{L as O}from"./Legend-BsPBB5AD.js";import{T as W}from"./Tooltip-MQjUxdHs.js";import{L as C}from"./Line-C8wq7-ld.js";import{R as X}from"./RechartsHookInspector-Cl1nQjm_.js";import{C as Y}from"./Curve-BCbaV2-E.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DEI4xjdp.js";import"./immer-Up9jfWyF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-lBMzT84x.js";import"./index-DdbzQdr9.js";import"./hooks-CHeZq7QJ.js";import"./axisSelectors-QKrA9-VE.js";import"./d3-scale-DorYBcEd.js";import"./zIndexSlice-DDN8c_9B.js";import"./renderedTicksSlice-BZJ0LC0-.js";import"./CartesianChart-DS-UTjvk.js";import"./chartDataContext-tGyrX-5w.js";import"./CategoricalChart-BCCF7qba.js";import"./CartesianAxis-CPsFrMJH.js";import"./Layer-DXEVbG5U.js";import"./Text-D3lbDKii.js";import"./DOMUtils-MBSOXcf3.js";import"./Label-CqQ3p6o_.js";import"./ZIndexLayer-BCFams-U.js";import"./types-xH_rqDEy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-C-1ojLAZ.js";import"./symbol-C9P6TcDS.js";import"./step-DL72aW96.js";import"./useElementOffset-DxSDxF4G.js";import"./uniqBy-xKJWQ-iw.js";import"./iteratee-D5nijMhP.js";import"./useAnimationId-CnjUKELe.js";import"./Cross-B8TXY95C.js";import"./Rectangle-DffZWIBt.js";import"./Sector-DN23uiBq.js";import"./ReactUtils-CaksUlzy.js";import"./ActivePoints-CTsHhn1X.js";import"./Dot-DqIFXDgd.js";import"./RegisterGraphicalItemId-BdCMR3nP.js";import"./ErrorBarContext-B33zly5n.js";import"./GraphicalItemClipPath-BkUssZcX.js";import"./SetGraphicalItem-CwRe-vCa.js";import"./getRadiusAndStrokeWidthFromDot-B30SAq_H.js";import"./ActiveShapeUtils-B6QMjEZK.js";import"./isPlainObject-CUvGDmNO.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-Bfh0_KKX.js";import"./index-3J-EA25K.js";import"./ChartSizeDimensions-B_Dm3cCN.js";import"./OffsetShower-BnHyQTzL.js";import"./PlotAreaShower-B21fSxhD.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
