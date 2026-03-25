import{e as t}from"./iframe-BUUPGxKW.js";import{R as D,i as s}from"./arrayEqualityCheck-uAaGhnkl.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-Csy6lkeg.js";import{C as K}from"./CartesianGrid-DwseK7AT.js";import{X as T}from"./XAxis-DpsztnP2.js";import{Y as M}from"./YAxis-B2sJZ_bt.js";import{L as $}from"./Legend-CgioBktz.js";import{T as O}from"./Tooltip-DAyQG3j_.js";import{L as C}from"./Line-CtLW08yR.js";import{R as W}from"./RechartsHookInspector-Bw28QuEh.js";import{C as X}from"./Curve-C5yOoaqn.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DyTAkq0H.js";import"./immer-kqZDXGZE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DdW9qina.js";import"./index-oLTRUqnU.js";import"./hooks-BNCSk-QW.js";import"./axisSelectors-CQVyKxdV.js";import"./d3-scale-b1qoVJWC.js";import"./zIndexSlice-DsPDLjCa.js";import"./renderedTicksSlice-GPCqPVlj.js";import"./CartesianChart-npq1asZ9.js";import"./chartDataContext-D2ei2EEV.js";import"./CategoricalChart-BjzN8N8f.js";import"./CartesianAxis-CFdsXoNd.js";import"./Layer-DlNKk7f2.js";import"./Text-CHP1LCbq.js";import"./DOMUtils-z8uKMvkf.js";import"./Label-C0y-OKmx.js";import"./ZIndexLayer-CiKkYojy.js";import"./types-DBwevUA7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-xIV2Z4Ym.js";import"./symbol-BvvTpJyA.js";import"./step-C9wD-hig.js";import"./useElementOffset-DfNe91Mv.js";import"./uniqBy-RZOC8lwP.js";import"./iteratee-D8peaFHS.js";import"./useAnimationId-CMTrGaHR.js";import"./Cross-CXyiErJn.js";import"./Rectangle-3zO8wV20.js";import"./Sector-DdslfAV3.js";import"./ReactUtils-BaDlyhyr.js";import"./ActivePoints-oTNshfX-.js";import"./Dot-3oFAy5A0.js";import"./RegisterGraphicalItemId-F7IP_4jr.js";import"./ErrorBarContext-CwmlQaa8.js";import"./GraphicalItemClipPath-D_imBHSf.js";import"./SetGraphicalItem-BXWccnGO.js";import"./getRadiusAndStrokeWidthFromDot-CPj_WkC-.js";import"./ActiveShapeUtils-yXhTLdG6.js";import"./isPlainObject-BGZcR8iC.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BV5ztp3S.js";import"./index-ByfBPDju.js";import"./ChartSizeDimensions-Db9Stn-A.js";import"./OffsetShower-Di7UReX2.js";import"./PlotAreaShower-BDM2L963.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
