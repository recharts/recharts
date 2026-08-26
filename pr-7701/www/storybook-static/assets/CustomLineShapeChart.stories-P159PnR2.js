import{R as t}from"./iframe-B6gM4DBh.js";import{a as s}from"./isWellBehavedNumber-oWfLE68q.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-C5EN6pN8.js";import{R as T}from"./zIndexSlice-B4H70akx.js";import{C as M}from"./CartesianGrid-BaXO-HzQ.js";import{X as $}from"./XAxis-BPzJdn5a.js";import{Y as I}from"./YAxis-d65xn9J2.js";import{L as O}from"./Legend-qAXQw7-7.js";import{T as W}from"./Tooltip-LOl6iYza.js";import{L as C}from"./Line-DR958mka.js";import{C as X}from"./Curve-BJ4EcGmY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-HOpiV2UA.js";import"./RechartsWrapper-D2vZVe4g.js";import"./axisSelectors-D78GfHI7.js";import"./throttle-CinY1Cg6.js";import"./index-CaHvefGu.js";import"./index-DbvGR5AH.js";import"./d3-scale-CI-CA5sR.js";import"./index-kpSUoDvk.js";import"./index-8y1uh0JJ.js";import"./renderedTicksSlice-C9ov5r2C.js";import"./index-CgCBhtWH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DHo5twJf.js";import"./chartDataContext-SMCrbflL.js";import"./CategoricalChart-COvMpWfW.js";import"./CartesianAxis-BQyu91wk.js";import"./Layer-BvISteiU.js";import"./Text-D8H4cfwv.js";import"./DOMUtils-BD82E1of.js";import"./useId-DmdpXOpx.js";import"./useBackwardsCompatibleTheme-9Vtrcjiv.js";import"./Label-uI-6_naX.js";import"./ZIndexLayer-C4neE0Nt.js";import"./types-B56u5L7u.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-B96vx3HZ.js";import"./symbol-DjIioEey.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B_AujER3.js";import"./uniqBy-gLmjoiP9.js";import"./iteratee-DAM7e3NH.js";import"./useAnimationId-B9APFvDh.js";import"./Cross-Cw_vUoRT.js";import"./Rectangle-BJ2YLML2.js";import"./util-Dxo8gN5i.js";import"./Sector-Cy7n_hv5.js";import"./AnimatedItems-DoXh_8P-.js";import"./ActivePoints-Dyp1po5C.js";import"./Dot-DPENikpb.js";import"./RegisterGraphicalItemId-Bqoy6nT5.js";import"./ErrorBarContext-BH6HTwRn.js";import"./GraphicalItemClipPath-BlpQx9et.js";import"./SetGraphicalItem-CtntmLYm.js";import"./getRadiusAndStrokeWidthFromDot-B_TRGaiU.js";import"./ActiveShapeUtils-DnLJRiwf.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-hz5YCF7J.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let b=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
