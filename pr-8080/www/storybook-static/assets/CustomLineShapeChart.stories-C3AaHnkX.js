import{R as t}from"./iframe-zw95Jg5I.js";import{R as D,m as p}from"./zIndexSlice-BhhR1tic.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-lMX534J_.js";import{C as M}from"./CartesianGrid-C41mXYJa.js";import{X as $}from"./XAxis-FSNVlg8z.js";import{Y as I}from"./YAxis-DxhDNNfO.js";import{L as O}from"./Legend-C1xiNV_O.js";import{T as W}from"./Tooltip-hAQMQs7N.js";import{L as f}from"./Line-DC_4pa8I.js";import{C as X}from"./Curve-D_d6vzaM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-oavmg9-5.js";import"./throttle-Cgnp6_V2.js";import"./index-CWbrX-i7.js";import"./index-CWy5ARPc.js";import"./RechartsWrapper-DNF4noKd.js";import"./axisSelectors-DAhbEMcv.js";import"./polarAxisSelectors-DUH0PWke.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BXUDNojI.js";import"./index-BPsqxPXN.js";import"./index-BEzQf4L4.js";import"./renderedTicksSlice-BhGNFZVD.js";import"./index-bXT-B2Zu.js";import"./CartesianChart-CAbKVIox.js";import"./chartDataContext-DsEiNuFy.js";import"./CategoricalChart-DSpSOmf_.js";import"./CartesianAxis-Ps3DKwB1.js";import"./Layer-KXbvniH8.js";import"./Text-d1Lwh7G9.js";import"./pageBackground-04zbeTMB.js";import"./useId-CtBeXuXP.js";import"./ZIndexLayer-DT4lNh0N.js";import"./Label-B1gN_1pg.js";import"./dataEntryStyles-B6Pg3he4.js";import"./types-BkYRfFSe.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-g6eOoLF6.js";import"./symbol-D4N1oQUq.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DSktO4lL.js";import"./uniqBy-BGk6LrH6.js";import"./iteratee-Dt64Sdjl.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-DHyavBGa.js";import"./Cross-C0WKTy_J.js";import"./Rectangle-B120DpgE.js";import"./util-Dxo8gN5i.js";import"./Sector-B4pIaq7y.js";import"./activeStyles-Dzq6_wuP.js";import"./ActivePoints-DhDmo-r8.js";import"./Dot-gB6O6AIc.js";import"./RegisterGraphicalItemId-Ci1zbwmF.js";import"./ErrorBarContext-D3KXG5mH.js";import"./SetGraphicalItem-D5SILBm3.js";import"./getRadiusAndStrokeWidthFromDot-BjYb5x8U.js";import"./ActiveShapeUtils-KL7GHwh1.js";import"./useEffectiveDataKey-ak6DNGcC.js";import"./step-Q9jA4NJI.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
