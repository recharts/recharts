import{e as t}from"./iframe-KDaejyXN.js";import{R as D,i as s}from"./arrayEqualityCheck-Dl9si1nG.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-LIE9GsFd.js";import{C as T}from"./CartesianGrid-BFk4wEkm.js";import{X as M}from"./XAxis-CUWzsXQO.js";import{Y as $}from"./YAxis-CqYxMeQG.js";import{L as O}from"./Legend-DoolAvDu.js";import{T as W}from"./Tooltip-CJ8fiXaY.js";import{L as C}from"./Line-D4d4pIVB.js";import{R as X}from"./RechartsHookInspector-BNR7Zm8b.js";import{C as Y}from"./Curve-CK8qujc-.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BkMgUNPT.js";import"./immer-CeGNtgFu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D4JhW72j.js";import"./index-DSI_5Wf4.js";import"./hooks-CwyWi44i.js";import"./axisSelectors-BceHH7kX.js";import"./d3-scale-CG0ZS8xo.js";import"./zIndexSlice-rJuXE5Mc.js";import"./renderedTicksSlice-B9nrJdqK.js";import"./CartesianChart-CCFhyuSh.js";import"./chartDataContext-B8zHImkQ.js";import"./CategoricalChart-BdhxEmbd.js";import"./CartesianAxis-BiIKu8kc.js";import"./Layer-SuuPoHJx.js";import"./Text-QAqYT_st.js";import"./DOMUtils-nQzBqLwC.js";import"./Label-qsNuh3C9.js";import"./ZIndexLayer-ByxBNcmF.js";import"./types-D57AIWPR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DZnm1ivu.js";import"./symbol-BVVD6ru2.js";import"./step-DG8IXFxN.js";import"./useElementOffset-BqSaCjyk.js";import"./uniqBy-C-hwanSq.js";import"./iteratee-w_ArUq_v.js";import"./useAnimationId-BgX8Z8_i.js";import"./Cross-X10m6apn.js";import"./Rectangle-B7hb1YKX.js";import"./Sector-Dm_k8cyb.js";import"./ReactUtils-Cz14zwuP.js";import"./ActivePoints-9qhwqgPR.js";import"./Dot-BonfgY2V.js";import"./RegisterGraphicalItemId-Dm0pQXAu.js";import"./ErrorBarContext-BOfeTKVj.js";import"./GraphicalItemClipPath-D6jTsWti.js";import"./SetGraphicalItem-F9UKQ2Ti.js";import"./getRadiusAndStrokeWidthFromDot-BSb3e5WQ.js";import"./ActiveShapeUtils-CHydaFDW.js";import"./isPlainObject-DwPMRYDf.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DebRFFpI.js";import"./index-BtJXyiTG.js";import"./ChartSizeDimensions-DVpdAMro.js";import"./OffsetShower-CxuZTe0D.js";import"./PlotAreaShower-N-DfZF_A.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
