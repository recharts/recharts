import{e as t}from"./iframe-CnJUGyj2.js";import{a as I}from"./ChartProps-Cvo8vJEE.js";import{R as K,n as p}from"./arrayEqualityCheck-DS-98WmY.js";import{L as v}from"./LineChart-kPP5dpRl.js";import{C as b}from"./CartesianGrid-Dgw7xuDw.js";import{X as A}from"./XAxis-BXjKhibu.js";import{Y as M}from"./YAxis-BOMJi5bn.js";import{L as $}from"./Legend-Bicnpt6O.js";import{T}from"./Tooltip-Di2CZLYp.js";import{L as y}from"./Line-LC_xllE3.js";import{R as W}from"./RechartsHookInspector-D9NSExUN.js";import{C as X}from"./Curve-B_FGldsa.js";import{p as Y}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./EventHandlers-JVOOzquU.js";import"./resolveDefaultProps-BzjH9Fll.js";import"./PolarUtils-DUXYMnUd.js";import"./RechartsWrapper-CvN69gVe.js";import"./hooks-DtPou_4w.js";import"./axisSelectors-B3UBVlXk.js";import"./zIndexSlice-BtlphbRl.js";import"./CartesianChart-DarKL8UC.js";import"./chartDataContext-BL3jGdF-.js";import"./CategoricalChart-3iTekVlo.js";import"./CartesianAxis-DVo4bkjd.js";import"./Layer-BsUJcQkF.js";import"./Text-sLuusAcx.js";import"./DOMUtils-CjNSxgDj.js";import"./Label-DpPDMM47.js";import"./ZIndexLayer-Dc_RcEv2.js";import"./types-D9HbD0yL.js";import"./Symbols-kQyDCWDP.js";import"./useElementOffset-D0YfL9KH.js";import"./iteratee-DiQ7weWT.js";import"./Cross-9Jtk4bAQ.js";import"./Rectangle-DAmamxSx.js";import"./useAnimationId-CPv9iP46.js";import"./Sector-CiIkZPTJ.js";import"./ReactUtils-BNR-lOsN.js";import"./ActivePoints-Z1vNPH_9.js";import"./Dot-BlTBScXS.js";import"./RegisterGraphicalItemId-BM4OoSas.js";import"./ErrorBarContext-5qx9m8qh.js";import"./GraphicalItemClipPath-FClbaDV6.js";import"./SetGraphicalItem-BuXMx1_s.js";import"./getRadiusAndStrokeWidthFromDot-A9oPyYzt.js";import"./ActiveShapeUtils-DTauRdeB.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-B9_fPQiM.js";import"./index-CeIzyUzp.js";import"./ChartSizeDimensions-CoD815Xi.js";import"./OffsetShower-QmDVJyKt.js";import"./PlotAreaShower-CTJ4RF1E.js";const Yt={component:v,argTypes:I,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,P=m.length;a<P;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const u=(i.x-e.x)/r,g=(i.y-e.y)/r,w=Math.atan2(g,u)*180/Math.PI,S=Math.abs(Math.floor(r/h-1)),D=r/S;let s=h/2,{x:C,y:f}=e;for(;r-s>0;)r-=s,C+=u*s,f+=g*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${C} ${f}) rotate(${w})`},o)),s=D}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(K,{width:"100%",height:"100%"},t.createElement(v,{...c},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(A,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(T,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(y,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(y,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var x,E,L;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(L=(E=n.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const _t=["CustomLineShapeChart"];export{n as CustomLineShapeChart,_t as __namedExportsOrder,Yt as default};
