import{e as t}from"./iframe-ZLLTs1L2.js";import{a as I}from"./ChartProps-Cvo8vJEE.js";import{R as K,n as p}from"./arrayEqualityCheck-DulyWTfD.js";import{L as v}from"./LineChart-CdZlvONq.js";import{C as b}from"./CartesianGrid-RpQXF-Dz.js";import{X as A}from"./XAxis-CHTCY5Jh.js";import{Y as M}from"./YAxis-BCMoz5bl.js";import{L as $}from"./Legend-Dqil_PZE.js";import{T}from"./Tooltip-Bed7mk_T.js";import{L as y}from"./Line-BN6F4eoo.js";import{R as W}from"./RechartsHookInspector-BKmDjbuV.js";import{C as X}from"./Curve-F2oZRqDm.js";import{p as Y}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./EventHandlers-JVOOzquU.js";import"./resolveDefaultProps-EUJ6_KoJ.js";import"./PolarUtils-B9p_wTge.js";import"./RechartsWrapper-Bhfb6Tks.js";import"./hooks-hqrrPiBI.js";import"./axisSelectors-Cv0R_3oc.js";import"./zIndexSlice-CBRMfbRc.js";import"./CartesianChart-Ck4WnZ-P.js";import"./chartDataContext-nQ2-yRIQ.js";import"./CategoricalChart-CbG3DQY1.js";import"./CartesianAxis-C0wXEvxF.js";import"./Layer-Z1TeMr3K.js";import"./Text-BKG1mCXc.js";import"./DOMUtils-CjGF8Xv9.js";import"./Label-B7ECka5v.js";import"./ZIndexLayer-C8fNtv4Q.js";import"./types-DBavnEN9.js";import"./Symbols-CzmBRPG3.js";import"./useElementOffset-C-GQABMK.js";import"./iteratee-DOdS9XFe.js";import"./Cross-DHvBXRas.js";import"./Rectangle-CUa7ysAN.js";import"./useAnimationId-BvHzHoR_.js";import"./Sector-C6G3hgjU.js";import"./ReactUtils-WSqE_xht.js";import"./ActivePoints-BwYfd7gv.js";import"./Dot-DSdrQqBD.js";import"./RegisterGraphicalItemId-l1uOO4MI.js";import"./ErrorBarContext-ByATrnH8.js";import"./GraphicalItemClipPath-BLImpVHN.js";import"./SetGraphicalItem-D8kwoYfk.js";import"./getRadiusAndStrokeWidthFromDot-Vw-0YA6V.js";import"./ActiveShapeUtils-DYOPRKym.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-qhd__VDX.js";import"./index-CuDIHWly.js";import"./ChartSizeDimensions-P7hJmoJ7.js";import"./OffsetShower-DgUH6KPA.js";import"./PlotAreaShower-Caaac_r-.js";const Yt={component:v,argTypes:I,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,P=m.length;a<P;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const u=(i.x-e.x)/r,g=(i.y-e.y)/r,w=Math.atan2(g,u)*180/Math.PI,S=Math.abs(Math.floor(r/h-1)),D=r/S;let s=h/2,{x:C,y:f}=e;for(;r-s>0;)r-=s,C+=u*s,f+=g*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${C} ${f}) rotate(${w})`},o)),s=D}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(K,{width:"100%",height:"100%"},t.createElement(v,{...c},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(A,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(T,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(y,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(y,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var x,E,L;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
