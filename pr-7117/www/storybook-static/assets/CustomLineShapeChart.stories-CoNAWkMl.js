import{e as t}from"./iframe-CkFXM4wB.js";import{R as D,i as s}from"./arrayEqualityCheck-YTUxoqUB.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-Cr9i5T2V.js";import{C as K}from"./CartesianGrid-4A_mvLxP.js";import{X as T}from"./XAxis-BrfBiI3E.js";import{Y as M}from"./YAxis--nz6ltt0.js";import{L as $}from"./Legend-Cnu46-RD.js";import{T as O}from"./Tooltip-DB8bTF4E.js";import{L as C}from"./Line-DrdnGU3b.js";import{R as W}from"./RechartsHookInspector-B3xLxxYl.js";import{C as X}from"./Curve-KgtuRfAG.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CgSC7b_8.js";import"./immer-VfMLklKA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BszZHVIX.js";import"./index-BdUYKJku.js";import"./hooks-DcZa8pcT.js";import"./axisSelectors-CJKN5-Iu.js";import"./d3-scale-DufYgqIf.js";import"./zIndexSlice-B5-XLxo_.js";import"./renderedTicksSlice-DBeHnZTe.js";import"./CartesianChart-bKq-XmFS.js";import"./chartDataContext-BpQAywsQ.js";import"./CategoricalChart-Mr91sBr1.js";import"./CartesianAxis-Bb-zNiAP.js";import"./Layer-dIWMs8k-.js";import"./Text-B-XsujPt.js";import"./DOMUtils-BTVGwpKA.js";import"./Label-BRTUkEBL.js";import"./ZIndexLayer-4pe948L1.js";import"./types-CUTS6MB0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-D5HyOKc9.js";import"./symbol-C6JS3ts9.js";import"./step-CbyAEdw5.js";import"./useElementOffset-BnogzPjY.js";import"./uniqBy-BtLygSeP.js";import"./iteratee-BY4qpxip.js";import"./useAnimationId-C9BYbESN.js";import"./Cross-DUBAeb_H.js";import"./Rectangle-aTEw3KI1.js";import"./Sector-DMfw9vpP.js";import"./ReactUtils-YGQ827Cl.js";import"./ActivePoints-BuiTIuA5.js";import"./Dot-tTXkn-xi.js";import"./RegisterGraphicalItemId-ChGWl6rQ.js";import"./ErrorBarContext-CePwVUjY.js";import"./GraphicalItemClipPath-DuUyvYTP.js";import"./SetGraphicalItem-DJLRAQ5n.js";import"./getRadiusAndStrokeWidthFromDot-DSs9rVtO.js";import"./ActiveShapeUtils-CAJHYtrp.js";import"./isPlainObject-BUyihnnB.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BrsI-zno.js";import"./index-D5JWzaIV.js";import"./ChartSizeDimensions-DcpLG0d2.js";import"./OffsetShower-BfJno29D.js";import"./PlotAreaShower-DrDSYf2L.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
