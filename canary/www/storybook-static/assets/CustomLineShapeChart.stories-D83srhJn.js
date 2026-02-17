import{e as t}from"./iframe-DtzQZ5We.js";import{R as D,p}from"./arrayEqualityCheck-3Q4fEezD.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-DeGMKDl2.js";import{C as K}from"./CartesianGrid-CjCU3Tmd.js";import{X as T}from"./XAxis-DbDdWo9i.js";import{Y as M}from"./YAxis-jb4FGmfu.js";import{L as $}from"./Legend-mG970ShB.js";import{T as O}from"./Tooltip-CijaiZ-x.js";import{L as C}from"./Line-CrxGC9uS.js";import{R as W}from"./RechartsHookInspector-podkStYr.js";import{C as X}from"./Curve-C7rWq_eQ.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BRs_UQ99.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DGOHUa9W.js";import"./hooks-B-LrQ_eV.js";import"./axisSelectors-BkRgZDRN.js";import"./zIndexSlice-DS1PNPXk.js";import"./renderedTicksSlice-CW-ChE7J.js";import"./CartesianChart-DjEZ7rdy.js";import"./chartDataContext-DsBjDkWS.js";import"./CategoricalChart-p0GBJql4.js";import"./CartesianAxis-D6UZdOOc.js";import"./Layer-P1mRwVv-.js";import"./Text-plRA5L0Q.js";import"./DOMUtils-KcfZip85.js";import"./Label-D5-8z0UP.js";import"./ZIndexLayer-DGEtHlps.js";import"./types-DcSMO55m.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-k0cT0xYb.js";import"./useElementOffset-CmcXmoGo.js";import"./iteratee-C7zx0CtR.js";import"./useAnimationId-GgPPrJFw.js";import"./Cross-db7bQK8G.js";import"./Rectangle-BSEdSL9_.js";import"./Sector-CcjHcsYG.js";import"./ReactUtils-Bg8ILpJF.js";import"./ActivePoints-CLc9h_MH.js";import"./Dot-D4WZdJ7E.js";import"./RegisterGraphicalItemId-BLNhdTAM.js";import"./ErrorBarContext-BtAqYSS8.js";import"./GraphicalItemClipPath-pRNKwbfQ.js";import"./SetGraphicalItem-B7Fz13cw.js";import"./getRadiusAndStrokeWidthFromDot-Cnf2Ftr7.js";import"./ActiveShapeUtils-D2Eg2bWy.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DCMThu2C.js";import"./index-CiWjk4ms.js";import"./ChartSizeDimensions-DX7nzkVv.js";import"./OffsetShower-CSfFk_uM.js";import"./PlotAreaShower-IRVjM9_1.js";const jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
