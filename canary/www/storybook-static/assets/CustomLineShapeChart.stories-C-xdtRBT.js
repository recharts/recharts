import{e as t}from"./iframe-BqavfRSI.js";import{R as D,n as p}from"./arrayEqualityCheck-Ra3gjxaW.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-BDRBoI-D.js";import{C as K}from"./CartesianGrid-BPs8G6WA.js";import{X as T}from"./XAxis-DMyHdO-k.js";import{Y as M}from"./YAxis-Ce0lAKWw.js";import{L as $}from"./Legend-DrBtMXV7.js";import{T as O}from"./Tooltip-lF-68z_O.js";import{L as C}from"./Line-DNpMvcz0.js";import{R as W}from"./RechartsHookInspector-DIZI_dr5.js";import{C as X}from"./Curve-Bl7M7m7v.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BagVy590.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQN53ECK.js";import"./hooks-BhizAxMH.js";import"./axisSelectors-CrlizjCS.js";import"./zIndexSlice-cuW5CNY3.js";import"./CartesianChart-ANLepPjj.js";import"./chartDataContext-eZIgvl_0.js";import"./CategoricalChart-IGjGR71r.js";import"./CartesianAxis--LdiM4X3.js";import"./Layer-7F20iT3S.js";import"./Text-D8aeDJgV.js";import"./DOMUtils-BJ4FDKUp.js";import"./Label-DNJA6zIC.js";import"./ZIndexLayer-BDqdije3.js";import"./types-etyYATxu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Dkh1Olqs.js";import"./useElementOffset-DWXh0cP9.js";import"./iteratee-CEGyMYpE.js";import"./Cross-Ceg3F-Eh.js";import"./Rectangle-CxU_uLMj.js";import"./useAnimationId-CE6HvtJ3.js";import"./Sector-BUeJdgSe.js";import"./ReactUtils-wyfG9-H0.js";import"./ActivePoints-OGEKIs-O.js";import"./Dot-JmokcpW7.js";import"./RegisterGraphicalItemId-BslGmMBw.js";import"./ErrorBarContext-CMc8E4Ed.js";import"./GraphicalItemClipPath-yqNdVZ5Z.js";import"./SetGraphicalItem-Chc8WLtN.js";import"./getRadiusAndStrokeWidthFromDot-D8tTG8Mp.js";import"./ActiveShapeUtils-Dcqmnzwc.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-B5zHDmOP.js";import"./index-BwE92fQv.js";import"./ChartSizeDimensions-uf7awrTX.js";import"./OffsetShower-CmxTasWx.js";import"./PlotAreaShower-RwBV7968.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
