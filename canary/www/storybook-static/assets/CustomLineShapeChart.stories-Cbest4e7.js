import{e as t}from"./iframe-Dnh1Ryvb.js";import{a as I}from"./ChartProps-Cvo8vJEE.js";import{R as K,n as p}from"./arrayEqualityCheck-DCevfetv.js";import{L as v}from"./LineChart-BGN89IIE.js";import{C as b}from"./CartesianGrid-BznzeLYA.js";import{X as A}from"./XAxis-CR1tc-KL.js";import{Y as M}from"./YAxis-BShcefNK.js";import{L as $}from"./Legend-DNq5AodR.js";import{T}from"./Tooltip-DMtaWOlD.js";import{L as y}from"./Line-BA57OhZU.js";import{R as W}from"./RechartsHookInspector-DMji7YUm.js";import{C as X}from"./Curve-CGOZKazJ.js";import{p as Y}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./EventHandlers-JVOOzquU.js";import"./resolveDefaultProps-Coi4LBhI.js";import"./PolarUtils-Cgm959MD.js";import"./RechartsWrapper-Ch8zJvUN.js";import"./hooks-TRp6kMUA.js";import"./axisSelectors-CwAmoCkz.js";import"./zIndexSlice-BXugI2eB.js";import"./CartesianChart-B2M6TWiT.js";import"./chartDataContext-CqWHnJZ5.js";import"./CategoricalChart-BipcxAVd.js";import"./CartesianAxis-CXvREodt.js";import"./Layer-CG0lsnsl.js";import"./Text-DuqEZ_1u.js";import"./DOMUtils-Bor3dP_R.js";import"./Label-B-RHJFae.js";import"./ZIndexLayer-Bcm3_13n.js";import"./types-NxPc932w.js";import"./Symbols-Bi-3r2yZ.js";import"./useElementOffset-JFxjDGnz.js";import"./iteratee-KFvQ-6kW.js";import"./Cross-Cjn-lYng.js";import"./Rectangle-lOgApOPv.js";import"./useAnimationId-DymxHjdh.js";import"./Sector-CK7LUajO.js";import"./ReactUtils-09bip2qn.js";import"./ActivePoints-CXZHC2s7.js";import"./Dot-DDKiUYZY.js";import"./RegisterGraphicalItemId-vvLaBIlf.js";import"./ErrorBarContext-ELPHN1NQ.js";import"./GraphicalItemClipPath-DCk99Thz.js";import"./SetGraphicalItem-Dm7xV0AH.js";import"./getRadiusAndStrokeWidthFromDot-BiJeskmV.js";import"./ActiveShapeUtils-oJd1nGJX.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DqrFuhKX.js";import"./index-BBrJvbdK.js";import"./ChartSizeDimensions-DbCZNQtH.js";import"./OffsetShower-DAcHGjow.js";import"./PlotAreaShower-5JxeAXKY.js";const Yt={component:v,argTypes:I,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,P=m.length;a<P;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const u=(i.x-e.x)/r,g=(i.y-e.y)/r,w=Math.atan2(g,u)*180/Math.PI,S=Math.abs(Math.floor(r/h-1)),D=r/S;let s=h/2,{x:C,y:f}=e;for(;r-s>0;)r-=s,C+=u*s,f+=g*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${C} ${f}) rotate(${w})`},o)),s=D}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(K,{width:"100%",height:"100%"},t.createElement(v,{...c},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(A,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(T,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(y,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(y,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var x,E,L;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
