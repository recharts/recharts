import{e as t}from"./iframe-CZHGkDMk.js";import{R as D,i as s}from"./arrayEqualityCheck-t7_Vj7sH.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-BO4tKouV.js";import{C as K}from"./CartesianGrid-BIRxsn1l.js";import{X as T}from"./XAxis-Cs9WyPyM.js";import{Y as M}from"./YAxis-CdFo-ouM.js";import{L as $}from"./Legend-DBLKlW1a.js";import{T as O}from"./Tooltip-CrDF-3si.js";import{L as C}from"./Line-ClQhLAMG.js";import{R as W}from"./RechartsHookInspector-C2iN9faU.js";import{C as X}from"./Curve-Blj5JdwD.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CKtEFeCC.js";import"./immer-CfF_q19L.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BGk6MiSH.js";import"./index-D3qhFu-Q.js";import"./hooks-CUvOjLlM.js";import"./axisSelectors-D3XLf68-.js";import"./d3-scale-CJ4CmDjU.js";import"./zIndexSlice-GashnqAX.js";import"./renderedTicksSlice-BHMidfzd.js";import"./CartesianChart-DdydfBsf.js";import"./chartDataContext-jJyFb7d8.js";import"./CategoricalChart-DKqzOjpF.js";import"./CartesianAxis-DF2xaChD.js";import"./Layer-BtRR3UnB.js";import"./Text-Dz8Smy7e.js";import"./DOMUtils-Dplq7MJH.js";import"./Label-BXzi6VYN.js";import"./ZIndexLayer-BsPUf8rB.js";import"./types-DWMIcrlC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Ctb7kZia.js";import"./symbol-CijKNxf6.js";import"./step-Dqoonar_.js";import"./useElementOffset-CZUcq4jB.js";import"./uniqBy-Ds7yRC1X.js";import"./iteratee-DKYYZ1VB.js";import"./useAnimationId-Dafl-wjr.js";import"./Cross-bNB0w8OK.js";import"./Rectangle-edUSSKkv.js";import"./Sector-DW-S4DGt.js";import"./ReactUtils-BbDB6XIE.js";import"./ActivePoints-DNK08ppe.js";import"./Dot-B15ey3u9.js";import"./RegisterGraphicalItemId-ZIh58Q32.js";import"./ErrorBarContext-CBnG3rqw.js";import"./GraphicalItemClipPath-ChUVq13t.js";import"./SetGraphicalItem-CkEorLUE.js";import"./getRadiusAndStrokeWidthFromDot-BZkgtEFS.js";import"./ActiveShapeUtils-o-rZaL_n.js";import"./isPlainObject-D32szo0O.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BJG4OUz6.js";import"./index-CdrqNv6J.js";import"./ChartSizeDimensions-CNgNJ-I_.js";import"./OffsetShower-CN3I_bcm.js";import"./PlotAreaShower-AE8bmklz.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
