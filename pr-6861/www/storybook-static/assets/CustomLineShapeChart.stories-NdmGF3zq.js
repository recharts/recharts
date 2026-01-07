import{e as t}from"./iframe-BzK4IM4O.js";import{a as I}from"./ChartProps-BCGtP1Xa.js";import{R as K,n as p}from"./arrayEqualityCheck-DntSlYRe.js";import{L as v}from"./LineChart-m8pMGU70.js";import{C as b}from"./CartesianGrid-D-ISYqWZ.js";import{X as A}from"./XAxis-BEioX7l9.js";import{Y as M}from"./YAxis-FFHKkbRQ.js";import{L as $}from"./Legend-BSKRxihT.js";import{T}from"./Tooltip-DG0VLx16.js";import{L as y}from"./Line-BDor0g31.js";import{R as W}from"./RechartsHookInspector-Blpd2IS8.js";import{C as X}from"./Curve-Cez8Njk6.js";import{p as Y}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./EventHandlers-JVOOzquU.js";import"./resolveDefaultProps-DxvkoyFj.js";import"./PolarUtils-CkcjhAmg.js";import"./RechartsWrapper-G-7uZuvB.js";import"./hooks-VI0oeyv4.js";import"./axisSelectors-FRDErLTA.js";import"./zIndexSlice-CDkWNK3b.js";import"./CartesianChart-LpoIcLQ4.js";import"./chartDataContext-DMRgNTR6.js";import"./CategoricalChart-DIHkHBGg.js";import"./CartesianAxis-Bvc9afGW.js";import"./Layer-D3djBZrj.js";import"./Text-2hmmkMzb.js";import"./DOMUtils-DhJGRkcK.js";import"./Label-Cw9dZn4K.js";import"./ZIndexLayer-CvqQuagi.js";import"./types-CR25OGX1.js";import"./Symbols-C_2JILz4.js";import"./useElementOffset-a9sy_bGO.js";import"./iteratee-D-fyWy_G.js";import"./Cross-BYH-rkpi.js";import"./Rectangle-CHjVgmr4.js";import"./useAnimationId-BpCcKQdg.js";import"./Sector-BXKtHGMH.js";import"./ReactUtils-BdJFLjIw.js";import"./ActivePoints-Dcm7tES9.js";import"./Dot-CeVvwLNa.js";import"./RegisterGraphicalItemId-BlwXRQ76.js";import"./ErrorBarContext-DVva_-TX.js";import"./GraphicalItemClipPath-C1-ivBuq.js";import"./SetGraphicalItem-DxeqcNbM.js";import"./getRadiusAndStrokeWidthFromDot-XEghJGNu.js";import"./ActiveShapeUtils-CRuw5H-2.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BORiQi9t.js";import"./index-977mc2AH.js";import"./ChartSizeDimensions-D2LiT7mU.js";import"./OffsetShower-0fHUvhro.js";import"./PlotAreaShower-DvSB-8u7.js";const Yt={component:v,argTypes:I,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,P=m.length;a<P;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const u=(i.x-e.x)/r,g=(i.y-e.y)/r,w=Math.atan2(g,u)*180/Math.PI,S=Math.abs(Math.floor(r/h-1)),D=r/S;let s=h/2,{x:C,y:f}=e;for(;r-s>0;)r-=s,C+=u*s,f+=g*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${C} ${f}) rotate(${w})`},o)),s=D}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(K,{width:"100%",height:"100%"},t.createElement(v,{...c},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(A,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(T,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(y,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(y,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var x,E,L;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
