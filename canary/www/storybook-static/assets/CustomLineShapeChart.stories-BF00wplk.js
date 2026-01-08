import{e as t}from"./iframe-D9q7UUmi.js";import{a as I}from"./ChartProps-BCGtP1Xa.js";import{R as K,n as p}from"./arrayEqualityCheck-CJJXJ9Rv.js";import{L as v}from"./LineChart-DkIzBThE.js";import{C as b}from"./CartesianGrid-ocgArU4K.js";import{X as A}from"./XAxis-Dxn9Zo0N.js";import{Y as M}from"./YAxis-Ds2QNT8w.js";import{L as $}from"./Legend-D31ymzRq.js";import{T}from"./Tooltip-BLBubyYz.js";import{L as y}from"./Line-BGi21o2A.js";import{R as W}from"./RechartsHookInspector-Btgon49z.js";import{C as X}from"./Curve-DEESCjbc.js";import{p as Y}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./EventHandlers-JVOOzquU.js";import"./resolveDefaultProps-D-3coS0e.js";import"./PolarUtils-cf4CEJPT.js";import"./RechartsWrapper-8_jXv7hz.js";import"./hooks-b1KD0qBL.js";import"./axisSelectors-DCJHWbvW.js";import"./zIndexSlice-CxekzBSL.js";import"./CartesianChart-B58H7xZp.js";import"./chartDataContext-C5vcePQl.js";import"./CategoricalChart-ak-_6B9f.js";import"./CartesianAxis-DBnbCnpE.js";import"./Layer-CUKLQgPC.js";import"./Text-CLmUy_On.js";import"./DOMUtils-BXuH-NK6.js";import"./Label-CDSn628C.js";import"./ZIndexLayer-CtgCGO4x.js";import"./types-FPdAMXDy.js";import"./Symbols-B3oT9PiF.js";import"./useElementOffset-D1mKrQqH.js";import"./iteratee-JJOOie1Z.js";import"./Cross-Cb3_Opci.js";import"./Rectangle-aQPjrzEG.js";import"./useAnimationId-DeN0uxUI.js";import"./Sector-BIUbLnT5.js";import"./ReactUtils-CfRgqXT5.js";import"./ActivePoints-B6AA5Rbz.js";import"./Dot-CrGRPD2L.js";import"./RegisterGraphicalItemId-B8upk-8m.js";import"./ErrorBarContext-D_fOmF9j.js";import"./GraphicalItemClipPath-CYdNpZeU.js";import"./SetGraphicalItem-DllIbSlC.js";import"./getRadiusAndStrokeWidthFromDot-Ct_S_qD5.js";import"./ActiveShapeUtils-Cf3wP9DQ.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CrYCphId.js";import"./index-YTWFD20P.js";import"./ChartSizeDimensions-CGOPgU1Q.js";import"./OffsetShower-D7RAK20_.js";import"./PlotAreaShower-DDsxyFt0.js";const Yt={component:v,argTypes:I,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,P=m.length;a<P;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const u=(i.x-e.x)/r,g=(i.y-e.y)/r,w=Math.atan2(g,u)*180/Math.PI,S=Math.abs(Math.floor(r/h-1)),D=r/S;let s=h/2,{x:C,y:f}=e;for(;r-s>0;)r-=s,C+=u*s,f+=g*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${C} ${f}) rotate(${w})`},o)),s=D}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(K,{width:"100%",height:"100%"},t.createElement(v,{...c},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(A,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(T,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(y,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(y,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var x,E,L;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
