import{e as t}from"./iframe-I81QGiZ0.js";import{R as D,i as s}from"./arrayEqualityCheck-DEF1A1K9.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-DP1mieV3.js";import{C as K}from"./CartesianGrid-D0gWY7Nf.js";import{X as T}from"./XAxis-CQKq-ex8.js";import{Y as M}from"./YAxis-w5mY6Ink.js";import{L as $}from"./Legend-C2x900X2.js";import{T as O}from"./Tooltip-UxmMbkYs.js";import{L as C}from"./Line-CWvEZ8nS.js";import{R as W}from"./RechartsHookInspector-CY8GaMGS.js";import{C as X}from"./Curve-COcp6alG.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CESK2sOz.js";import"./immer-Bx-m2dTE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DhPN24j4.js";import"./index-MTHTVMV2.js";import"./hooks-BwARZfYC.js";import"./axisSelectors-D3NUsEze.js";import"./d3-scale-BKQywhX-.js";import"./zIndexSlice-BTQopzha.js";import"./renderedTicksSlice-DjaQJSKB.js";import"./CartesianChart-BgVpH7Hp.js";import"./chartDataContext-DLJ8LOtf.js";import"./CategoricalChart-Dhxptkdp.js";import"./CartesianAxis-B00ihn4w.js";import"./Layer-nQYqqIOO.js";import"./Text-CYvk9Z-R.js";import"./DOMUtils-DRotObOj.js";import"./Label-LA2ogkfT.js";import"./ZIndexLayer-R3Wk8cgP.js";import"./types-CpBHwU86.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-MCFH85eq.js";import"./symbol-B5gXRZo2.js";import"./step-DCb-mqT3.js";import"./useElementOffset-BIXhMv0f.js";import"./uniqBy-DtcJp7bW.js";import"./iteratee-Al1RcwZC.js";import"./useAnimationId-BTiaxNBH.js";import"./Cross-9H6MLiUO.js";import"./Rectangle-BSAz1yWp.js";import"./Sector-CEDvP0Pt.js";import"./ReactUtils-bl8BpOYM.js";import"./ActivePoints-D75FV8Tu.js";import"./Dot-BGO9lVtU.js";import"./RegisterGraphicalItemId-ECNqkOOP.js";import"./ErrorBarContext-6fNIAsL2.js";import"./GraphicalItemClipPath-BVS2WqeA.js";import"./SetGraphicalItem-D5u-UCbo.js";import"./getRadiusAndStrokeWidthFromDot-dbaSmHwq.js";import"./ActiveShapeUtils-C9oxgbzm.js";import"./isPlainObject-3DRjiOwk.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BCwQCoIH.js";import"./index-DG9lLNBE.js";import"./ChartSizeDimensions-BL05aSMc.js";import"./OffsetShower-B9su28DB.js";import"./PlotAreaShower-D0Rx9exC.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
