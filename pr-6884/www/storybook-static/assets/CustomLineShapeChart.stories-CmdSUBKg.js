import{e as t}from"./iframe-CaIgGyHM.js";import{R as D,n as p}from"./arrayEqualityCheck-CjxR2bSj.js";import{L as v}from"./LineChartArgs-C9Vp8FkW.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-ClG2CRPa.js";import{C as K}from"./CartesianGrid-Bv3reDCi.js";import{X as T}from"./XAxis-CTD8LeaB.js";import{Y as M}from"./YAxis-CtUU2Zal.js";import{L as $}from"./Legend-DSWW6CjA.js";import{T as O}from"./Tooltip-BSsCpQhd.js";import{L as C}from"./Line-JaWJo4pn.js";import{R as W}from"./RechartsHookInspector-Dwl6GEES.js";import{C as X}from"./Curve-9htNi4i5.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DWSFOFU9.js";import"./PolarUtils-DrqRDweU.js";import"./RechartsWrapper-GR6QdmkY.js";import"./hooks-C-Cwfz9Q.js";import"./axisSelectors-CnuhT51I.js";import"./zIndexSlice-Q7xIp-VY.js";import"./CartesianChart-oU5kzf8D.js";import"./chartDataContext-D2XV3P37.js";import"./CategoricalChart-BosqoloG.js";import"./CartesianAxis-BIL2gr42.js";import"./Layer-Bv6QiOXu.js";import"./Text-b4cawV-F.js";import"./DOMUtils-Bp1vNIxR.js";import"./Label-P-OvPLPn.js";import"./ZIndexLayer-Dbr8-T8d.js";import"./types-8d_H4dY-.js";import"./Symbols-Crj6RDt9.js";import"./useElementOffset-HsHwXild.js";import"./iteratee-BXSQ8JUf.js";import"./Cross-lPqrfSfL.js";import"./Rectangle-CaJA74zA.js";import"./useAnimationId-C8_uny94.js";import"./Sector-BJsydvu6.js";import"./ReactUtils-CsC3O-TD.js";import"./ActivePoints-C6Jn1jar.js";import"./Dot-LAxET7O2.js";import"./RegisterGraphicalItemId-BuoGtP2e.js";import"./ErrorBarContext-Dm8UQh69.js";import"./GraphicalItemClipPath-DomblT_L.js";import"./SetGraphicalItem-ByoAYqMJ.js";import"./getRadiusAndStrokeWidthFromDot-_YFZPvzl.js";import"./ActiveShapeUtils-BYK5wQE6.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DwBeZXV_.js";import"./index-B-tNTan1.js";import"./ChartSizeDimensions-BI1RWPz_.js";import"./OffsetShower-BPLk7P8i.js";import"./PlotAreaShower-CFgftmSD.js";const Yt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const _t=["CustomLineShapeChart"];export{n as CustomLineShapeChart,_t as __namedExportsOrder,Yt as default};
