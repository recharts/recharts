import{e as t}from"./iframe-Yt5kG58B.js";import{g as D,J as p}from"./arrayEqualityCheck-CmivkQHU.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-DPte-9pC.js";import{L as A}from"./LineChart-TRF0qMwX.js";import{C as T}from"./CartesianGrid-C6yEJEor.js";import{X as M}from"./XAxis-BMPl7mYX.js";import{Y as $}from"./YAxis-fNPxfz24.js";import{L as O}from"./Legend-F4IN3yHj.js";import{T as W}from"./Tooltip-BcVnATUn.js";import{L as C}from"./Line-DblcEqSB.js";import{R as X}from"./RechartsHookInspector-Cviat0cY.js";import{C as Y}from"./Curve-BqZs6d01.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-unPLvkOT.js";import"./immer-CcDOB7WW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CNwUSHj6.js";import"./index-CCn_KrYt.js";import"./hooks-DdT8YGKV.js";import"./axisSelectors-Cu_RAN-5.js";import"./d3-scale-ClNNBzhr.js";import"./zIndexSlice-pBWW2gMH.js";import"./renderedTicksSlice-CAjiTAMh.js";import"./CartesianChart-CbX7HdzJ.js";import"./chartDataContext-D89eDWXB.js";import"./CategoricalChart-LTsMGKb4.js";import"./CartesianAxis-CkTrjpZB.js";import"./Layer-C5jjOkvS.js";import"./Text-Ch8634yl.js";import"./DOMUtils-BHiH0dNd.js";import"./Label-BnSyr1ay.js";import"./ZIndexLayer-V8l53dIn.js";import"./types-DbVT1P7h.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-U--EO8M8.js";import"./symbol-CjsKKohT.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DrOONtSV.js";import"./uniqBy-D4Gfq8Pv.js";import"./iteratee-CA1CdI-j.js";import"./useAnimationId-D8AADvXI.js";import"./Cross-C5tccwof.js";import"./Rectangle-7uU6IRNU.js";import"./Sector-CRzUL7tg.js";import"./ReactUtils-Jy4OurHq.js";import"./ActivePoints-BQ3lgqlU.js";import"./Dot-BBaQQz_u.js";import"./RegisterGraphicalItemId-u9uNYDRF.js";import"./ErrorBarContext-CIW2Opuu.js";import"./GraphicalItemClipPath-BVHUKTdw.js";import"./SetGraphicalItem-BQyEnfew.js";import"./getRadiusAndStrokeWidthFromDot-ew-Ir4iU.js";import"./ActiveShapeUtils-C6u69RRm.js";import"./index-BGUbPMKQ.js";import"./ChartSizeDimensions-DfUWMKem.js";import"./OffsetShower-DwOtQel9.js";import"./PlotAreaShower-C3hlHEsr.js";import"./step-C2PKa5KE.js";const Nt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,qt as __namedExportsOrder,Nt as default};
