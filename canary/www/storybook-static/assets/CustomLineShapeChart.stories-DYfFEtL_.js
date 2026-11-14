import{R as t}from"./iframe-DtzldFfh.js";import{R as D,l as p}from"./zIndexSlice-PhkkSvay.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DvMezkvu.js";import{C as M}from"./CartesianGrid-BD5I5N2b.js";import{X as $}from"./XAxis-BY5CXCjh.js";import{Y as I}from"./YAxis-CQZ6A0GW.js";import{L as O}from"./Legend-CCpYiMhz.js";import{T as W}from"./Tooltip-CXQtUWKg.js";import{L as f}from"./Line-BvNBRL71.js";import{C as X}from"./Curve-xzGpqU4W.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-u2nTClVy.js";import"./throttle-Drk_UoQx.js";import"./index-CCZfAL_G.js";import"./index-CuN-tN9X.js";import"./RechartsWrapper-RpB-MHrg.js";import"./axisSelectors-C2izPxUf.js";import"./polarAxisSelectors-IPVOZM3m.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BmMEJmfI.js";import"./index-xLc8fata.js";import"./index-6_OYP7D7.js";import"./renderedTicksSlice-DbXdst8y.js";import"./index-OfVoCx4o.js";import"./fillDefinitions-4fWzE3Hc.js";import"./CartesianChart-D8rXmJzw.js";import"./chartDataContext-BNrACUYr.js";import"./CategoricalChart-Bkw2UtyY.js";import"./CartesianAxis-DxmrFkoo.js";import"./Layer-BcJtH6wk.js";import"./Text-BCSLlBnR.js";import"./ZIndexLayer-BWdFNyrE.js";import"./Label-DAuHelmL.js";import"./types-aakKZZv0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CvrtYxxZ.js";import"./symbol-D-v3LMsn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-0o51WQzY.js";import"./uniqBy-DSURNKI0.js";import"./iteratee-BoqSWeEv.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-Dzlg4g7S.js";import"./Cross-D_bufb52.js";import"./Rectangle-sBf3lxLL.js";import"./util-Dxo8gN5i.js";import"./Sector-CK9Jq0GA.js";import"./dataEntryStyles-kT4_La43.js";import"./ActivePoints-klnIqfJn.js";import"./Dot-DiyqsLJ3.js";import"./activeStyles-BesdgLFE.js";import"./ErrorBarContext-CFgTAQbG.js";import"./SetGraphicalItem-31k7kJYq.js";import"./getRadiusAndStrokeWidthFromDot-CtzQdQd8.js";import"./ActiveShapeUtils-lUUDRG4C.js";import"./useEffectiveDataKey-BP-D5MQu.js";import"./step-Dbgt0c4J.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Ht as __namedExportsOrder,zt as default};
