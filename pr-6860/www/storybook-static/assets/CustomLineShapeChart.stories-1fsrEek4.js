import{e as t}from"./iframe-Cr3T7ZdA.js";import{a as I}from"./ChartProps-Cvo8vJEE.js";import{R as K,n as p}from"./arrayEqualityCheck-DqF1T4jr.js";import{L as v}from"./LineChart-D55KAf0D.js";import{C as b}from"./CartesianGrid-BmfMprKw.js";import{X as A}from"./XAxis-DBNHDh11.js";import{Y as M}from"./YAxis-D1E5tbtq.js";import{L as $}from"./Legend-C40qRgVH.js";import{T}from"./Tooltip-Bv5lo6sl.js";import{L as y}from"./Line-CLdKLaES.js";import{R as W}from"./RechartsHookInspector-ClBCFl3l.js";import{C as X}from"./Curve-vdkFq02R.js";import{p as Y}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./EventHandlers-JVOOzquU.js";import"./resolveDefaultProps-QfAcHL3W.js";import"./PolarUtils-Bmm-pqPZ.js";import"./RechartsWrapper-Cofc_HNc.js";import"./hooks-jzijfY0b.js";import"./axisSelectors-DxNzAaef.js";import"./zIndexSlice-DMIprIZ-.js";import"./CartesianChart-BU0IfpuH.js";import"./chartDataContext-DYJ71PQb.js";import"./CategoricalChart-BUJ2-En9.js";import"./CartesianAxis-CSlwZ6TK.js";import"./Layer-BFmFB8To.js";import"./Text-DbGQ3XiU.js";import"./DOMUtils-zL1z85r6.js";import"./Label-DztQJaU2.js";import"./ZIndexLayer-CX1hwCrz.js";import"./types-CSmgv1ek.js";import"./Symbols-DxVRzyBt.js";import"./useElementOffset-Cq6eEjaE.js";import"./iteratee-ZYwUAU3v.js";import"./Cross-wUbNU5eO.js";import"./Rectangle-DrfuL_Gq.js";import"./useAnimationId-2lKqmsIN.js";import"./Sector-CoMH23ZQ.js";import"./ReactUtils-DZO-5FXB.js";import"./ActivePoints-BdPSsFnL.js";import"./Dot-6-wh7CsL.js";import"./RegisterGraphicalItemId-IPVqF7Vn.js";import"./ErrorBarContext-BW79uC4e.js";import"./GraphicalItemClipPath-ChnTD72G.js";import"./SetGraphicalItem-CtAyZH4_.js";import"./getRadiusAndStrokeWidthFromDot-BaVzfpDE.js";import"./ActiveShapeUtils-DPbFIg-T.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BeG4Metg.js";import"./index-ClJsMHvI.js";import"./ChartSizeDimensions-BmiXy0Af.js";import"./OffsetShower-SLhoxg8F.js";import"./PlotAreaShower-CKe-EEVm.js";const Yt={component:v,argTypes:I,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,P=m.length;a<P;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const u=(i.x-e.x)/r,g=(i.y-e.y)/r,w=Math.atan2(g,u)*180/Math.PI,S=Math.abs(Math.floor(r/h-1)),D=r/S;let s=h/2,{x:C,y:f}=e;for(;r-s>0;)r-=s,C+=u*s,f+=g*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${C} ${f}) rotate(${w})`},o)),s=D}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(K,{width:"100%",height:"100%"},t.createElement(v,{...c},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(A,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(T,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(y,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(y,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var x,E,L;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
