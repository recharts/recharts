import{e as t}from"./iframe-BzghaLEp.js";import{g as D,J as p}from"./arrayEqualityCheck-CS3de1t5.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-DPte-9pC.js";import{L as A}from"./LineChart-DyvViKij.js";import{C as T}from"./CartesianGrid-CYCVH740.js";import{X as M}from"./XAxis-CsBkluNM.js";import{Y as $}from"./YAxis-BRrP9GqR.js";import{L as O}from"./Legend-C8p4ND2T.js";import{T as W}from"./Tooltip-uIxHi1QF.js";import{L as C}from"./Line-LDEjBea-.js";import{R as X}from"./RechartsHookInspector-BuYwcCb3.js";import{C as Y}from"./Curve-DBC2v7ce.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BVZsWnmP.js";import"./immer-BXETI75S.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DR3m1DYe.js";import"./index-DQ335CG7.js";import"./hooks-BRSXFpN3.js";import"./axisSelectors-aIIB8FuD.js";import"./d3-scale-qhwlSf_5.js";import"./zIndexSlice-DCGzB6PO.js";import"./renderedTicksSlice-STF43WXb.js";import"./CartesianChart-DcVmos4e.js";import"./chartDataContext-D4_qA_s_.js";import"./CategoricalChart-BnPKkEWG.js";import"./CartesianAxis-C9tacUHl.js";import"./Layer-BJAfo-lt.js";import"./Text-B8a7yFIp.js";import"./DOMUtils-Du7GfFqb.js";import"./Label-DpeHQT41.js";import"./ZIndexLayer-Bqel3NP6.js";import"./types-DUQUBotY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-T88cUd7_.js";import"./symbol-CW8XACm_.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dhmem0N7.js";import"./uniqBy-BO8xKTz0.js";import"./iteratee-B_jC2Ofk.js";import"./useAnimationId-DtC5i2fv.js";import"./Cross-CaSuoC_h.js";import"./Rectangle-CeWrkHhO.js";import"./Sector-CpQlOQUy.js";import"./ReactUtils-DCWlBgg2.js";import"./ActivePoints-B-bDqxYx.js";import"./Dot-DOp6zc7l.js";import"./RegisterGraphicalItemId-BXJ3uWYw.js";import"./ErrorBarContext-D8hJtv3V.js";import"./GraphicalItemClipPath-CjgICd57.js";import"./SetGraphicalItem-c7OZec2D.js";import"./getRadiusAndStrokeWidthFromDot-r9y5eo4i.js";import"./ActiveShapeUtils-DC8wyXqX.js";import"./index-BG2QvuV2.js";import"./ChartSizeDimensions-hfJquHEG.js";import"./OffsetShower-_lbWu0gQ.js";import"./PlotAreaShower-CKhzQKyo.js";import"./step-Cb7NJXQj.js";const Nt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
