import{e as t}from"./iframe-R35hz9hm.js";import{R as D,i as s}from"./arrayEqualityCheck-l_dnVtmw.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-hk8sugoy.js";import{C as T}from"./CartesianGrid-D4JR-kM2.js";import{X as M}from"./XAxis-iZqvrzZu.js";import{Y as $}from"./YAxis-BsChZZHK.js";import{L as O}from"./Legend-CDDtjQBw.js";import{T as W}from"./Tooltip-BHaEgbPx.js";import{L as C}from"./Line-CQqbPlip.js";import{R as X}from"./RechartsHookInspector-DP3Qs2H_.js";import{C as Y}from"./Curve-C1o9Us3j.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DfULgVhS.js";import"./immer-CFK8uJ_y.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BzZW_8cp.js";import"./index-BFs7fXnY.js";import"./hooks-DwD3G30p.js";import"./axisSelectors-BZF7ob4Z.js";import"./d3-scale-DK92Q0IA.js";import"./zIndexSlice-DymzsNPY.js";import"./renderedTicksSlice-DFK-mhd6.js";import"./CartesianChart-dKVKHPad.js";import"./chartDataContext-B0058VjU.js";import"./CategoricalChart-BeKpYgsM.js";import"./CartesianAxis-BfU0E9Vd.js";import"./Layer-NhMRn63k.js";import"./Text-CIuibZ8V.js";import"./DOMUtils-CUUuW9k8.js";import"./Label-CVLCzJ8S.js";import"./ZIndexLayer-BeTprR_g.js";import"./types-CncuKFdL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-uWpNLd5r.js";import"./symbol-CizJV2Ht.js";import"./step-BTcv05YG.js";import"./useElementOffset-BvkeSyWD.js";import"./uniqBy-B7WsKYqq.js";import"./iteratee-BjdV9oEw.js";import"./useAnimationId-bDa-RfQI.js";import"./Cross-eK7Jb6dc.js";import"./Rectangle-BRq5yFCv.js";import"./Sector-DcJh_DF9.js";import"./ReactUtils-CnWgF_pv.js";import"./ActivePoints-CEGTpw3Q.js";import"./Dot-DYh4HsOt.js";import"./RegisterGraphicalItemId-CFhaP5Xg.js";import"./ErrorBarContext-ySjR7PXX.js";import"./GraphicalItemClipPath-C9lbZ9U9.js";import"./SetGraphicalItem-CXTqk9fv.js";import"./getRadiusAndStrokeWidthFromDot-DdT_lr8z.js";import"./ActiveShapeUtils-BCSEa4J9.js";import"./isPlainObject-HxgO3KZH.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DsSNyfmU.js";import"./index-Dr19aGzn.js";import"./ChartSizeDimensions-CNipumKi.js";import"./OffsetShower-BtN_LmjI.js";import"./PlotAreaShower-DeWLuHk-.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
