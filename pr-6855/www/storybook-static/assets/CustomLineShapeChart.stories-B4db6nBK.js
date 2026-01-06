import{e as t}from"./iframe-DLhPWxyK.js";import{a as I}from"./ChartProps-BCGtP1Xa.js";import{R as K,n as p}from"./arrayEqualityCheck-m1RhjOmx.js";import{L as v}from"./LineChart-DQpy4KHB.js";import{C as b}from"./CartesianGrid-Bs1CS7L4.js";import{X as A}from"./XAxis-sgPLB-rr.js";import{Y as M}from"./YAxis-BkUnmSc2.js";import{L as $}from"./Legend-dB7LAjtZ.js";import{T}from"./Tooltip-DUsq4-kv.js";import{L as y}from"./Line-g_zWlZ80.js";import{R as W}from"./RechartsHookInspector-HNjcmSsy.js";import{C as X}from"./Curve-DeIwtCC2.js";import{p as Y}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./EventHandlers-JVOOzquU.js";import"./resolveDefaultProps-E8e_3mlR.js";import"./PolarUtils-C6JBvuC0.js";import"./RechartsWrapper-DgQpMTik.js";import"./hooks-CPfFhdP1.js";import"./axisSelectors-H2aLd2HR.js";import"./zIndexSlice-CkjTQxGc.js";import"./CartesianChart-C_LwKB0K.js";import"./chartDataContext-DLN8QOpK.js";import"./CategoricalChart-B42UgGES.js";import"./CartesianAxis-DsXxqkAo.js";import"./Layer-T-_zDyRj.js";import"./Text-1NI18g4k.js";import"./DOMUtils-DXMqjRDX.js";import"./Label-Cfm9uiYS.js";import"./ZIndexLayer-CE4rF1P8.js";import"./types-DGdi1KYp.js";import"./Symbols-CNkEhL1u.js";import"./useElementOffset-CebiNadU.js";import"./iteratee-B5VvVAP5.js";import"./Cross-B3vZI2Mu.js";import"./Rectangle-DFsdprJS.js";import"./useAnimationId-CcCb5ZgY.js";import"./Sector-tN30gQok.js";import"./ReactUtils-CkbQi9iw.js";import"./ActivePoints-CMJVeQ-U.js";import"./Dot-BSI9AMQL.js";import"./RegisterGraphicalItemId-BfrmZf1G.js";import"./ErrorBarContext-DgDHXHvv.js";import"./GraphicalItemClipPath-B90mhSGP.js";import"./SetGraphicalItem-FkCdxtAh.js";import"./getRadiusAndStrokeWidthFromDot-CualhsEn.js";import"./ActiveShapeUtils-BWgEW_58.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-C-EY4dJQ.js";import"./index-DdNKA2qu.js";import"./ChartSizeDimensions-2_L3pVFL.js";import"./OffsetShower-Bubd5l8I.js";import"./PlotAreaShower-DZzXcMEl.js";const Yt={component:v,argTypes:I,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,P=m.length;a<P;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const u=(i.x-e.x)/r,g=(i.y-e.y)/r,w=Math.atan2(g,u)*180/Math.PI,S=Math.abs(Math.floor(r/h-1)),D=r/S;let s=h/2,{x:C,y:f}=e;for(;r-s>0;)r-=s,C+=u*s,f+=g*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${C} ${f}) rotate(${w})`},o)),s=D}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(K,{width:"100%",height:"100%"},t.createElement(v,{...c},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(A,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(T,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(y,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(y,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var x,E,L;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
