import{e as t}from"./iframe-BMuWxLAr.js";import{R as D,n as p}from"./arrayEqualityCheck-CqiNO7U9.js";import{L as v}from"./LineChartArgs-C9Vp8FkW.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-B-x4I9wy.js";import{C as K}from"./CartesianGrid-BGa4GjxM.js";import{X as T}from"./XAxis-WAtQ1axi.js";import{Y as M}from"./YAxis-Ce7Q5R0b.js";import{L as $}from"./Legend-BrJXnRCE.js";import{T as O}from"./Tooltip-gmr6yCdO.js";import{L as C}from"./Line-91vdzmkR.js";import{R as W}from"./RechartsHookInspector-zXV2QGE7.js";import{C as X}from"./Curve-vG_gbHgm.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-5NLO6c-f.js";import"./PolarUtils-TfsB6rvw.js";import"./RechartsWrapper-DX7_Ztwr.js";import"./hooks-sLtblQr0.js";import"./axisSelectors-DkziLgOX.js";import"./zIndexSlice-BTEUYv6U.js";import"./CartesianChart-FY0XM-zb.js";import"./chartDataContext-CANLYf-Z.js";import"./CategoricalChart-DViLh9Ev.js";import"./CartesianAxis-HpZ4NVBh.js";import"./Layer-B3GdCeOT.js";import"./Text-Cd5r0d0D.js";import"./DOMUtils-X92SmXv_.js";import"./Label-BDcobJj_.js";import"./ZIndexLayer-5mbugvqo.js";import"./types-DTEjZcuz.js";import"./Symbols-BPsutJwu.js";import"./useElementOffset-BIPaTuv8.js";import"./iteratee-D0uxWt8q.js";import"./Cross-cWd-WtQK.js";import"./Rectangle-TwJi8_LR.js";import"./useAnimationId-CV7m1u0T.js";import"./Sector-BljMkyic.js";import"./ReactUtils-CnoqxUjn.js";import"./ActivePoints-uR3BYcLE.js";import"./Dot-D-B6iTph.js";import"./RegisterGraphicalItemId-CCrV6fDN.js";import"./ErrorBarContext-DEke2_6E.js";import"./GraphicalItemClipPath-C7bBKX3e.js";import"./SetGraphicalItem-U0-JS-G0.js";import"./getRadiusAndStrokeWidthFromDot-BFaAXNYg.js";import"./ActiveShapeUtils-DpBW0Bti.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CkjHCqiS.js";import"./index-B4xTjkvp.js";import"./ChartSizeDimensions-CDGd01Cb.js";import"./OffsetShower-BqR0syDI.js";import"./PlotAreaShower-C3Up4AFj.js";const Yt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const _t=["CustomLineShapeChart"];export{n as CustomLineShapeChart,_t as __namedExportsOrder,Yt as default};
