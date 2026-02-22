import{e as t}from"./iframe-CqeTTYgU.js";import{R as D,i as s}from"./arrayEqualityCheck-Coc3X9xQ.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-DVlmKlTt.js";import{C as K}from"./CartesianGrid-yfJNILtK.js";import{X as T}from"./XAxis-BD3HY8Ew.js";import{Y as M}from"./YAxis-G7ixdQ8E.js";import{L as $}from"./Legend-zMx_XW4R.js";import{T as O}from"./Tooltip-Cr2ndAdc.js";import{L as C}from"./Line-LV0Unjzt.js";import{R as W}from"./RechartsHookInspector-DuqrKYC7.js";import{C as X}from"./Curve-BysHPIUF.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cwp1jNVd.js";import"./immer-Bmaq1-Mg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D6Akcaf8.js";import"./index-BO_IR7-E.js";import"./hooks-BVZwqIsr.js";import"./axisSelectors-eZrQ8WsS.js";import"./d3-scale-BUPtB_Da.js";import"./zIndexSlice-B88Xz9xU.js";import"./renderedTicksSlice-8ohVO2kh.js";import"./CartesianChart-DZdtJPpm.js";import"./chartDataContext-Ldzwvxi_.js";import"./CategoricalChart-BJzA0W2C.js";import"./CartesianAxis-B73_0LJP.js";import"./Layer-BQFYDPNU.js";import"./Text-CnAhi5dg.js";import"./DOMUtils-CyUZ16Kt.js";import"./Label-CPRQ4lU_.js";import"./ZIndexLayer-3q_nDWL4.js";import"./types-Bq8qb-jz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CZaCanOC.js";import"./symbol-DUDKRTy9.js";import"./step-D7PdYBbD.js";import"./useElementOffset-BoMITrwv.js";import"./uniqBy-Cx5jog5w.js";import"./iteratee-DUK5kNMd.js";import"./useAnimationId-qdD0Hx_g.js";import"./Cross-7tIjJRue.js";import"./Rectangle-Ns2TMUOg.js";import"./Sector-DAbvgQ-I.js";import"./ReactUtils-B-FxzwwC.js";import"./ActivePoints-CQGIjEIn.js";import"./Dot-B3GxioXu.js";import"./RegisterGraphicalItemId-BIO7eBqw.js";import"./ErrorBarContext-CkyHavp9.js";import"./GraphicalItemClipPath-CG5McJvS.js";import"./SetGraphicalItem--tjWfp6d.js";import"./getRadiusAndStrokeWidthFromDot-8MQj61Xg.js";import"./ActiveShapeUtils-DuOrrb61.js";import"./isPlainObject-D0uwI2wh.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CAvqiTd0.js";import"./index-B3OxvjqV.js";import"./ChartSizeDimensions-VEbBqbyV.js";import"./OffsetShower-DVBsz6mw.js";import"./PlotAreaShower-DAW7_xjH.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
