import{e as t}from"./iframe-C389UKKQ.js";import{g as D,J as p}from"./arrayEqualityCheck-Cu2SMg-k.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-DPte-9pC.js";import{L as A}from"./LineChart-D8QJGyP4.js";import{C as T}from"./CartesianGrid-CruiBcA5.js";import{X as M}from"./XAxis-CkTpgH_L.js";import{Y as $}from"./YAxis-DdPwtx1e.js";import{L as O}from"./Legend-CapyIZ6D.js";import{T as W}from"./Tooltip-TOls3Rtg.js";import{L as C}from"./Line-CTNqbcwQ.js";import{R as X}from"./RechartsHookInspector-CxbWCB6n.js";import{C as Y}from"./Curve-DBcCTjlE.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-2PDdAmjP.js";import"./immer-4pDlWF5t.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-De-O4PZ_.js";import"./index-CDhhJ3He.js";import"./hooks-yBoCoA8O.js";import"./axisSelectors-B2s8T9Mh.js";import"./d3-scale-CLP74tcR.js";import"./zIndexSlice-DHdgWlAr.js";import"./renderedTicksSlice-BUt1aBWJ.js";import"./CartesianChart-3kGQQmyR.js";import"./chartDataContext-UATbZCFS.js";import"./CategoricalChart-C8H-MuO4.js";import"./CartesianAxis-BfjJ9MKk.js";import"./Layer-BRJkvvA0.js";import"./Text-CdmDvBPW.js";import"./DOMUtils-CjAbMbXQ.js";import"./Label-BsU6QA-m.js";import"./ZIndexLayer-OX2yCAej.js";import"./types-9ii6Ug_u.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DhEDlNLq.js";import"./symbol-B93tdxSz.js";import"./path-DyVhHtw_.js";import"./useElementOffset-6UXXDY4R.js";import"./uniqBy-CsNwgfvM.js";import"./iteratee-DHpBDbpq.js";import"./useAnimationId-CxUXlcSZ.js";import"./Cross-C6FDWmVX.js";import"./Rectangle-Bdl90qEj.js";import"./Sector-DFxGAsB6.js";import"./ReactUtils-B3LU80BF.js";import"./ActivePoints-CgiRv0IS.js";import"./Dot-BzYUQbpy.js";import"./RegisterGraphicalItemId-e2Xsds3X.js";import"./ErrorBarContext-BnMue-Vz.js";import"./GraphicalItemClipPath-CCvWImiO.js";import"./SetGraphicalItem-DcN0Hr85.js";import"./getRadiusAndStrokeWidthFromDot-DD7Lnopo.js";import"./ActiveShapeUtils-FSjQNWDr.js";import"./index-BR3VF3oH.js";import"./ChartSizeDimensions-BBcqsgSH.js";import"./OffsetShower-CIf7NCdz.js";import"./PlotAreaShower-DabrICzc.js";import"./step-DbNUII7N.js";const Nt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
