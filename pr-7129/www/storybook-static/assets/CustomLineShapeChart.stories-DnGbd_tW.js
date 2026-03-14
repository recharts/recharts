import{e as t}from"./iframe-3667Tvz2.js";import{R as D,i as s}from"./arrayEqualityCheck-D9OvKJwD.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-CgpJj2mZ.js";import{C as K}from"./CartesianGrid-C3IKB72D.js";import{X as T}from"./XAxis-BpxRjWnh.js";import{Y as M}from"./YAxis-DW4WG6ok.js";import{L as $}from"./Legend-Dvo2TWmH.js";import{T as O}from"./Tooltip-CDV62SER.js";import{L as C}from"./Line-D4SOJls3.js";import{R as W}from"./RechartsHookInspector-CJCnB7_4.js";import{C as X}from"./Curve-BaNFvaPx.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BtuJUOf7.js";import"./immer-UKt74SqS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-oIAnzkqM.js";import"./index-C4SUCtnx.js";import"./hooks-BZsQuy7Q.js";import"./axisSelectors-DQHNBIMP.js";import"./d3-scale-DGzXDIH7.js";import"./zIndexSlice-T5ACl1fd.js";import"./renderedTicksSlice-AmLe9sEW.js";import"./CartesianChart-DujR4c01.js";import"./chartDataContext-DwqmBR6M.js";import"./CategoricalChart-BIICkzoQ.js";import"./CartesianAxis-C27eZMEL.js";import"./Layer-DkCxZ1Nm.js";import"./Text-BJUXCfBk.js";import"./DOMUtils-CXQ8jzVY.js";import"./Label-BZ-HO-n4.js";import"./ZIndexLayer-DQkUzdJa.js";import"./types-B-N1LhIG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Dz33hGQT.js";import"./symbol-DLtpIQQd.js";import"./step-DREQNBhH.js";import"./useElementOffset-BBj3jhiQ.js";import"./uniqBy-D-QVLyY1.js";import"./iteratee-esNjAKiM.js";import"./useAnimationId-QOY8B5bM.js";import"./Cross-8LVQ3THK.js";import"./Rectangle-CBZ7nnGZ.js";import"./Sector-DqFdBDD-.js";import"./ReactUtils-BGYookdr.js";import"./ActivePoints-uWw7uTV8.js";import"./Dot-CliWMADJ.js";import"./RegisterGraphicalItemId-6KUqIGYl.js";import"./ErrorBarContext-f546Mx0J.js";import"./GraphicalItemClipPath-B2jRUZRX.js";import"./SetGraphicalItem-9InqSUgs.js";import"./getRadiusAndStrokeWidthFromDot-knWG_owO.js";import"./ActiveShapeUtils-BGTdwFBk.js";import"./isPlainObject-BNfNO1bM.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BmNjJBFD.js";import"./index-BoqoSvrt.js";import"./ChartSizeDimensions-rVAYYRrn.js";import"./OffsetShower-DYHCblSP.js";import"./PlotAreaShower-BlEzOlOg.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
