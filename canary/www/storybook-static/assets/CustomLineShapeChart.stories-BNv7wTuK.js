import{e as t}from"./iframe-BH4WSVJq.js";import{R as D,n as p}from"./arrayEqualityCheck-CP7zdH6j.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-CQAFoWwo.js";import{C as K}from"./CartesianGrid-ChShBsrG.js";import{X as T}from"./XAxis-Co1hN3iA.js";import{Y as M}from"./YAxis-Dj6UBB19.js";import{L as $}from"./Legend-BnVA_vKm.js";import{T as O}from"./Tooltip-DmWUq_Wy.js";import{L as C}from"./Line-B3K65Hzw.js";import{R as W}from"./RechartsHookInspector-C-rHiQ21.js";import{C as X}from"./Curve-C54rJcUa.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-YH6ur84t.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-cR6befFD.js";import"./hooks-CsAFpvHN.js";import"./axisSelectors-DWE-oxLu.js";import"./zIndexSlice-DQh671qs.js";import"./CartesianChart-CnXNKoh0.js";import"./chartDataContext-px_EklfT.js";import"./CategoricalChart-BvpoJ5FY.js";import"./CartesianAxis-6RsVZvqn.js";import"./Layer-FSItnfZD.js";import"./Text-BUp1j61E.js";import"./DOMUtils-Cd95pt4E.js";import"./Label-BSQQrDO-.js";import"./ZIndexLayer-CiVdec-B.js";import"./types-BEfpPHVi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BTckn8e4.js";import"./useElementOffset-COjyL-h1.js";import"./iteratee-DdEzHjIf.js";import"./Cross-CxE7VLOZ.js";import"./Rectangle-BrKooVgo.js";import"./useAnimationId-BPcwtD5E.js";import"./Sector-BpvDDX3s.js";import"./ReactUtils-DW1hnj4j.js";import"./ActivePoints-DZW_-t1x.js";import"./Dot-KeJkGvxa.js";import"./RegisterGraphicalItemId-BYo0Vbbs.js";import"./ErrorBarContext-DRki-TWq.js";import"./GraphicalItemClipPath-DGOjr7en.js";import"./SetGraphicalItem-Blp2F8-c.js";import"./getRadiusAndStrokeWidthFromDot-DJ87tJ-9.js";import"./ActiveShapeUtils-BnM7Jbce.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-B_z9CYCL.js";import"./index-Cisc0CQR.js";import"./ChartSizeDimensions-CPQ4YyST.js";import"./OffsetShower-DYg0OjQP.js";import"./PlotAreaShower-C2wLpcp8.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
