import{e as t}from"./iframe-C4IWMahh.js";import{R as D,n as p}from"./arrayEqualityCheck-0GnG-RUv.js";import{L as v}from"./LineChartArgs-p69byTpd.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-Cp0A7Rqc.js";import{C as K}from"./CartesianGrid-L1AtGOCH.js";import{X as T}from"./XAxis-BngJLTZF.js";import{Y as M}from"./YAxis-Ba9FHWJv.js";import{L as $}from"./Legend-BnPfdZH3.js";import{T as O}from"./Tooltip-zA8WPGbw.js";import{L as C}from"./Line-4z32avHq.js";import{R as W}from"./RechartsHookInspector-CpFOwYB5.js";import{C as X}from"./Curve-DlsjNj4d.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DtgeT8pD.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-D1ed8gsV.js";import"./hooks-D4XFO7pe.js";import"./axisSelectors-BJBfabjw.js";import"./zIndexSlice-CIYOR3wZ.js";import"./CartesianChart-D8zP0xhX.js";import"./chartDataContext-kpLSUwh0.js";import"./CategoricalChart-DyuPf8cz.js";import"./CartesianAxis-DOkMNxmt.js";import"./Layer-CdQ-wzgp.js";import"./Text-TpjxoAAm.js";import"./DOMUtils-BgZ5XZxL.js";import"./Label-C0TeAK2L.js";import"./ZIndexLayer-BJJTWLZI.js";import"./types-Dnr4tbcG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BZom7IJQ.js";import"./useElementOffset-DM7EgaVV.js";import"./iteratee-C11Ig8yy.js";import"./Cross-DXveOCuK.js";import"./Rectangle-D-3bF21H.js";import"./useAnimationId-DNnry8cr.js";import"./Sector-wIi7OYIA.js";import"./ReactUtils-DjwylJ1a.js";import"./ActivePoints-uikp9xPQ.js";import"./Dot-B6v543Pb.js";import"./RegisterGraphicalItemId-CADIBD7u.js";import"./ErrorBarContext-C2hEeIYE.js";import"./GraphicalItemClipPath-CTryCVIw.js";import"./SetGraphicalItem-Qx2BbNwy.js";import"./getRadiusAndStrokeWidthFromDot-DZBvYZ8u.js";import"./ActiveShapeUtils-Dhbc_DTR.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CRuG6j_-.js";import"./index-aiWA5sXu.js";import"./ChartSizeDimensions-DBfcvr5j.js";import"./OffsetShower-CMENuWZ2.js";import"./PlotAreaShower-c29i0cb1.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
