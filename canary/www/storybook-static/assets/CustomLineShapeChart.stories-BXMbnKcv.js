import{e as t}from"./iframe-2t9JIeSz.js";import{a as I}from"./ChartProps-BCGtP1Xa.js";import{R as K,n as p}from"./arrayEqualityCheck-Ne24Ckb0.js";import{L as v}from"./LineChart-B-BuLFrY.js";import{C as b}from"./CartesianGrid-BgfG3uYI.js";import{X as A}from"./XAxis-RUsgvceF.js";import{Y as M}from"./YAxis-DOtUVqzp.js";import{L as $}from"./Legend-BBddR5ra.js";import{T}from"./Tooltip-DAiegNE1.js";import{L as y}from"./Line-BuJmFTie.js";import{R as W}from"./RechartsHookInspector-l9P1RfFo.js";import{C as X}from"./Curve-DIMaTG8J.js";import{p as Y}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./EventHandlers-JVOOzquU.js";import"./resolveDefaultProps-CwSOlvvS.js";import"./PolarUtils-Bz6vuuVH.js";import"./RechartsWrapper-C_G63Drq.js";import"./hooks-DDv3wssX.js";import"./axisSelectors-ELUvGx1F.js";import"./zIndexSlice-CQpntV3l.js";import"./CartesianChart-DBgS_hM4.js";import"./chartDataContext-CjpiQJqz.js";import"./CategoricalChart-f3TADWMW.js";import"./CartesianAxis-nSSqg5TL.js";import"./Layer-CYDA86pH.js";import"./Text-QtvFI3Y4.js";import"./DOMUtils-BaCwwoZ6.js";import"./Label-D1Z20PQg.js";import"./ZIndexLayer-B4A1m3pC.js";import"./types-D5gHJUP5.js";import"./Symbols-CU3qyqsb.js";import"./useElementOffset-Dgi8y477.js";import"./iteratee-BMq1dSJo.js";import"./Cross-B8nhDlPB.js";import"./Rectangle-C8Ra0xJ2.js";import"./useAnimationId-BJoNxofQ.js";import"./Sector-BmtUKRUo.js";import"./ReactUtils-3f6_sZO7.js";import"./ActivePoints-DcFveFLp.js";import"./Dot-Cgrjcqkr.js";import"./RegisterGraphicalItemId-DXz7HuqF.js";import"./ErrorBarContext-BR1ah_yR.js";import"./GraphicalItemClipPath-D7leeg0p.js";import"./SetGraphicalItem-BT3CB0sc.js";import"./getRadiusAndStrokeWidthFromDot-Xho2r0bU.js";import"./ActiveShapeUtils-CFUB8TRB.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BU2FReUY.js";import"./index-DUuuQEHh.js";import"./ChartSizeDimensions-DxYmbnCC.js";import"./OffsetShower-2v-BX8n-.js";import"./PlotAreaShower-D4PK9QSt.js";const Yt={component:v,argTypes:I,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,P=m.length;a<P;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const u=(i.x-e.x)/r,g=(i.y-e.y)/r,w=Math.atan2(g,u)*180/Math.PI,S=Math.abs(Math.floor(r/h-1)),D=r/S;let s=h/2,{x:C,y:f}=e;for(;r-s>0;)r-=s,C+=u*s,f+=g*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${C} ${f}) rotate(${w})`},o)),s=D}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(K,{width:"100%",height:"100%"},t.createElement(v,{...c},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(A,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(T,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(y,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(y,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var x,E,L;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
