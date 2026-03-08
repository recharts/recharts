import{e as t}from"./iframe-DujSE0UK.js";import{R as D,i as s}from"./arrayEqualityCheck-D8VjMjvf.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-BLzGdaPb.js";import{C as K}from"./CartesianGrid-DMmCJ2YK.js";import{X as T}from"./XAxis-YY1xwgnu.js";import{Y as M}from"./YAxis-DGH9UPdi.js";import{L as $}from"./Legend-ppfsaZvO.js";import{T as O}from"./Tooltip-ZKuMVIqS.js";import{L as C}from"./Line-D-gcbtsu.js";import{R as W}from"./RechartsHookInspector-CRMB31G9.js";import{C as X}from"./Curve-BIsIHsFZ.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C48txAh5.js";import"./immer-DoffRpuJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CZxyCKqo.js";import"./index-BzWEaTVN.js";import"./hooks-BfEZyruk.js";import"./axisSelectors-CplbQtmA.js";import"./d3-scale-DAOxFYCv.js";import"./zIndexSlice-DxmTVpDq.js";import"./renderedTicksSlice-qOFace14.js";import"./CartesianChart-C8FLn_u-.js";import"./chartDataContext-C-qHRTgP.js";import"./CategoricalChart-H-u-kan4.js";import"./CartesianAxis-DVd0f2kI.js";import"./Layer-B-nUYb5l.js";import"./Text-qQLvw26P.js";import"./DOMUtils-CiKk1OJG.js";import"./Label-D6PynPvp.js";import"./ZIndexLayer-sSQKP7NE.js";import"./types-D6xVUDWG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-nyT1XPVO.js";import"./symbol-CaRsNxSw.js";import"./step-BqfvS8lo.js";import"./useElementOffset-BLNKdpxK.js";import"./uniqBy-3iDuyky4.js";import"./iteratee-BYf5_rS8.js";import"./useAnimationId-DcYOTGVs.js";import"./Cross-BrrDcBeB.js";import"./Rectangle-SsDZNd-D.js";import"./Sector-FLQA7LtL.js";import"./ReactUtils-CJKtjJwj.js";import"./ActivePoints-BzgKbyfb.js";import"./Dot-Bc7S1y82.js";import"./RegisterGraphicalItemId-CBH-yQFt.js";import"./ErrorBarContext-D8NP2kg_.js";import"./GraphicalItemClipPath-SL3od_yD.js";import"./SetGraphicalItem-BsRnOhvR.js";import"./getRadiusAndStrokeWidthFromDot-BIQm3Qe0.js";import"./ActiveShapeUtils-CfdmikBA.js";import"./isPlainObject-PvV2F2dX.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-C4tWIuQV.js";import"./index-B_iM8tEy.js";import"./ChartSizeDimensions-DEiQIg5P.js";import"./OffsetShower-CF4VV-Vy.js";import"./PlotAreaShower-CLUz5lpa.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
