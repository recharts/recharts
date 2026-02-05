import{e as t}from"./iframe-CWWhV85a.js";import{R as D,n as p}from"./arrayEqualityCheck-BrvYjDvj.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-Cv3wl7Sx.js";import{C as K}from"./CartesianGrid-C3-6Xyui.js";import{X as T}from"./XAxis-Csdvagzn.js";import{Y as M}from"./YAxis-DfgzXKJt.js";import{L as $}from"./Legend-CAfyJPWT.js";import{T as O}from"./Tooltip-BIDBFQ2N.js";import{L as C}from"./Line-pUdx1ebJ.js";import{R as W}from"./RechartsHookInspector-C1-BzxNv.js";import{C as X}from"./Curve-CEhuq5Wz.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C1e51uNd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B76lvk5b.js";import"./hooks-hmYRkmbQ.js";import"./axisSelectors-DefXTn4I.js";import"./zIndexSlice-DakyRb4z.js";import"./CartesianChart-9TMDzitE.js";import"./chartDataContext-B_cxSlaG.js";import"./CategoricalChart-B6q7J0Mb.js";import"./CartesianAxis-BLwbg9OG.js";import"./Layer-CEGJXWpg.js";import"./Text-BGl_BLD8.js";import"./DOMUtils-DdesQF23.js";import"./Label-sj2OS_tg.js";import"./ZIndexLayer-CsGSNJ1a.js";import"./types-HO0i5iTi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-D5GFnflg.js";import"./useElementOffset-CDAAba6N.js";import"./iteratee-5pGWl1WW.js";import"./Cross-Cr6e7nmy.js";import"./Rectangle-DgoKSUUy.js";import"./useAnimationId--U2HKBmo.js";import"./Sector-CjkT0xYm.js";import"./ReactUtils-erR6fuGc.js";import"./ActivePoints-DYENIXWD.js";import"./Dot-COoG0jLM.js";import"./RegisterGraphicalItemId-C6xkCy3A.js";import"./ErrorBarContext-BiKvJSsP.js";import"./GraphicalItemClipPath-60MS9PCs.js";import"./SetGraphicalItem-CgqlK889.js";import"./getRadiusAndStrokeWidthFromDot-DAki4Jbv.js";import"./ActiveShapeUtils-D-wBc36w.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CadbmzeJ.js";import"./index-1_XwddF_.js";import"./ChartSizeDimensions-BYyG2w9L.js";import"./OffsetShower-BriTQDS6.js";import"./PlotAreaShower-CFNBsBQe.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const jt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,jt as __namedExportsOrder,_t as default};
