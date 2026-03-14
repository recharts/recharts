import{e as t}from"./iframe-ZP7E3tAE.js";import{R as D,i as s}from"./arrayEqualityCheck-BZegdwCU.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-D1fRLyzi.js";import{C as K}from"./CartesianGrid-DHIJoitw.js";import{X as T}from"./XAxis-CN_uVChz.js";import{Y as M}from"./YAxis-BhI8CLrp.js";import{L as $}from"./Legend-BApGVLdg.js";import{T as O}from"./Tooltip-DDgIq-hW.js";import{L as C}from"./Line-8udFf86z.js";import{R as W}from"./RechartsHookInspector-Bzs4iZ_z.js";import{C as X}from"./Curve-BPu6gFcf.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-79J5uOQE.js";import"./immer-DfBDygba.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CXTZX0lw.js";import"./index-B6UrQqZ7.js";import"./hooks-DCx4ALdg.js";import"./axisSelectors-jiBsETiM.js";import"./d3-scale-Y646Y1FN.js";import"./zIndexSlice-DYNjVLba.js";import"./renderedTicksSlice-DWiQ850g.js";import"./CartesianChart-CyeIpcsP.js";import"./chartDataContext-Cn5Bk3lF.js";import"./CategoricalChart-BiLT_62I.js";import"./CartesianAxis-BqPQSvc8.js";import"./Layer-BHiu2mcd.js";import"./Text-Fmn2R1e8.js";import"./DOMUtils-B5v93EaI.js";import"./Label-DQuLGrHO.js";import"./ZIndexLayer-CQ2HcABX.js";import"./types-BY0ZtJ6u.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DjU9F7j-.js";import"./symbol-Db4XPyyX.js";import"./step-DXK9R3Qh.js";import"./useElementOffset-DUus7wqV.js";import"./uniqBy-BwvjcPiA.js";import"./iteratee-BocZf6ff.js";import"./useAnimationId-DzP9W11z.js";import"./Cross-IWz9MMXP.js";import"./Rectangle-MC9ihyGv.js";import"./Sector-BSueo3lX.js";import"./ReactUtils-Jyyk6uCy.js";import"./ActivePoints-DeU0k1bK.js";import"./Dot-DDX9j8Ax.js";import"./RegisterGraphicalItemId-Cw_F4O-7.js";import"./ErrorBarContext-BLxncd0z.js";import"./GraphicalItemClipPath-D_6vSzHc.js";import"./SetGraphicalItem-Cf9rfdg9.js";import"./getRadiusAndStrokeWidthFromDot-DY7k2y1V.js";import"./ActiveShapeUtils-DrBMRVee.js";import"./isPlainObject-DdPleWLd.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DEV19aif.js";import"./index-B9IDBt-R.js";import"./ChartSizeDimensions-B4BdsRyY.js";import"./OffsetShower-CpH9si2J.js";import"./PlotAreaShower-DFApfivg.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
