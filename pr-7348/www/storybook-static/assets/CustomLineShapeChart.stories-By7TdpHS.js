import{e as t}from"./iframe-BExdC6gN.js";import{g as D,J as s}from"./arrayEqualityCheck-DOMqUAof.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-DPte-9pC.js";import{L as A}from"./LineChart-euj5BLuK.js";import{C as T}from"./CartesianGrid-BwP7A8dN.js";import{X as M}from"./XAxis-CiJpP_bt.js";import{Y as $}from"./YAxis-CJCe92Ep.js";import{L as O}from"./Legend-B2lxEszQ.js";import{T as W}from"./Tooltip-BgS9wPqC.js";import{L as C}from"./Line-CtNgSGaI.js";import{R as X}from"./RechartsHookInspector-jedlPGVn.js";import{C as Y}from"./Curve-BAgcgHZR.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BABy-fAx.js";import"./immer-fLQu0D5z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BFXm4Z4I.js";import"./index-dnhQRVhY.js";import"./hooks-f9uoWTfr.js";import"./axisSelectors-G4Ozr4C7.js";import"./d3-scale-CPvJwxK1.js";import"./zIndexSlice-DqK4zht4.js";import"./renderedTicksSlice-Cgs3_pbO.js";import"./CartesianChart-DEFw3dUf.js";import"./chartDataContext-zs3q_52z.js";import"./CategoricalChart-GKia85wb.js";import"./CartesianAxis-DOEtdq2b.js";import"./Layer-Bn8zfoRz.js";import"./Text-DprtRutp.js";import"./DOMUtils-DUHeo9eF.js";import"./Label-BEYaNe1v.js";import"./ZIndexLayer-7iJ9Z1BS.js";import"./types-DfAw3uAA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-P9zroqHz.js";import"./symbol-DqwVPS5C.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B0Mp0O5s.js";import"./uniqBy-RnJXqtWx.js";import"./iteratee-BYEtbo7d.js";import"./useAnimationId-DlRyv4oq.js";import"./Cross-BjlkqM3M.js";import"./Rectangle-DUkG5lzX.js";import"./Sector-FJVsvN4m.js";import"./ReactUtils-Dgl8JF7u.js";import"./ActivePoints-BRlCo6wv.js";import"./Dot-DeXpLXf5.js";import"./RegisterGraphicalItemId-CGA7gaf-.js";import"./ErrorBarContext-B68PiQ82.js";import"./GraphicalItemClipPath-B5kn33G8.js";import"./SetGraphicalItem-DVUCQsv1.js";import"./getRadiusAndStrokeWidthFromDot-CEsaKSHL.js";import"./ActiveShapeUtils-BBh91YEI.js";import"./isPlainObject-Eh4Z7yDc.js";import"./isPlainObject-BSutPv-K.js";import"./index-Bb8SVNOL.js";import"./ChartSizeDimensions-DVous5ni.js";import"./OffsetShower-DTmFDKEr.js";import"./PlotAreaShower-D_ibhKaV.js";import"./step-D4OvHG8Z.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Qt as __namedExportsOrder,zt as default};
