import{e as t}from"./iframe-DRAz-MOV.js";import{R as D,i as s}from"./arrayEqualityCheck-C8643F2b.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BgY0AZFd.js";import{C as T}from"./CartesianGrid-CFynsdgL.js";import{X as M}from"./XAxis-LfLbW5h3.js";import{Y as $}from"./YAxis-Exnm2m07.js";import{L as O}from"./Legend-DAlheZF3.js";import{T as W}from"./Tooltip-BPjmhM8Z.js";import{L as C}from"./Line-CziVn159.js";import{R as X}from"./RechartsHookInspector-ZnBZyL4x.js";import{C as Y}from"./Curve-rCu2vvgU.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DMSAaaR1.js";import"./immer-7dbUwIWB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bq0uftOK.js";import"./index-BwgIdcXX.js";import"./hooks-DKliz_JR.js";import"./axisSelectors-B3X53-PT.js";import"./d3-scale-CP3jXnNI.js";import"./zIndexSlice-QFEsuJ_i.js";import"./renderedTicksSlice-C3sDnISd.js";import"./CartesianChart-D16-_KrV.js";import"./chartDataContext-DfgXfLVB.js";import"./CategoricalChart-mIZr-3BC.js";import"./CartesianAxis-BEMLBmX5.js";import"./Layer-7ou2jnr2.js";import"./Text-BfMqXVQN.js";import"./DOMUtils-BDvhlQed.js";import"./Label-BA834Vai.js";import"./ZIndexLayer-BQfiKj8k.js";import"./types-BHj1SP9z.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BE03y18L.js";import"./symbol-BJNbjT1E.js";import"./step-DsP_EtiA.js";import"./useElementOffset-Buqr-Q9u.js";import"./uniqBy-C7Z_8_ul.js";import"./iteratee-BbZqSogb.js";import"./useAnimationId-CSxRZUsd.js";import"./Cross-DmcqLs2s.js";import"./Rectangle-CIlVtzFE.js";import"./Sector-BFFY6GnN.js";import"./ReactUtils-C_AD8QSo.js";import"./ActivePoints-6EKZqhHa.js";import"./Dot-DXpzcep7.js";import"./RegisterGraphicalItemId-DNpPqdGB.js";import"./ErrorBarContext-C2uHiTDW.js";import"./GraphicalItemClipPath-DkmmuFjC.js";import"./SetGraphicalItem-BOrXETUL.js";import"./getRadiusAndStrokeWidthFromDot-bTkwdsC0.js";import"./ActiveShapeUtils-BkbmdP_u.js";import"./isPlainObject-CaT7z4Jz.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-i_eTbcia.js";import"./index-CJqTRlWb.js";import"./ChartSizeDimensions-B-YSta_X.js";import"./OffsetShower-DVMilrOo.js";import"./PlotAreaShower-B89WvJSc.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
