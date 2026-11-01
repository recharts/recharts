import{R as t}from"./iframe-LXaU_yGQ.js";import{R as D,l as p}from"./zIndexSlice-BSsrgEaY.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-yXeCZP-_.js";import{C as M}from"./CartesianGrid-OUGW3i4b.js";import{X as $}from"./XAxis-p7HCxuCB.js";import{Y as I}from"./YAxis-CSeoCJK5.js";import{L as O}from"./Legend-CW4FQckG.js";import{T as W}from"./Tooltip-CMuc6rXN.js";import{L as f}from"./Line-DVYXuLoQ.js";import{C as X}from"./Curve-Bdp5Gfaz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DbWwNOSn.js";import"./throttle-ByKIQNrZ.js";import"./index-DZIymj_T.js";import"./index-C00bVPiJ.js";import"./RechartsWrapper-D3XMumfr.js";import"./axisSelectors-COTFFsL0.js";import"./polarAxisSelectors-Bwd8WsKu.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-xVZA29h1.js";import"./index-Cj2wRU1Y.js";import"./index-DCFuZ4eP.js";import"./renderedTicksSlice-bFWdrA3f.js";import"./index-D3Vd1Yho.js";import"./fillDefinitions-GJQeghKS.js";import"./CartesianChart-BiL3U0u_.js";import"./ZIndexPortal-B1CrZPtb.js";import"./CategoricalChart-DH4yc53T.js";import"./CartesianAxis-DZ_FsRV8.js";import"./Layer-CHoN3bhu.js";import"./Text-B2wTTXhn.js";import"./DOMUtils-wasDQX09.js";import"./ZIndexLayer-D76BtQdI.js";import"./Label-DYJ5zyBE.js";import"./types-WPs3xsFH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DwjhqM4z.js";import"./symbol-BBQKO5RK.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BTM80VK-.js";import"./uniqBy-BQLHmkt7.js";import"./iteratee-CVfcQAqg.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-BI8ofMSC.js";import"./Cross-BjDFY2Wu.js";import"./Rectangle-CE9_TMcs.js";import"./util-Dxo8gN5i.js";import"./Sector-DHye28nJ.js";import"./LabelList-edsO3Rk5.js";import"./ActivePoints-NFoR1iD6.js";import"./Dot-DyfeLkRk.js";import"./activeStyles-PwSBVgUE.js";import"./dataEntryStyles-CwUtW2sJ.js";import"./ErrorBarContext-DEyq_U4L.js";import"./SetGraphicalItem-GbWatXWt.js";import"./getRadiusAndStrokeWidthFromDot-DPvgYAJF.js";import"./ActiveShapeUtils-57-jWYU2.js";import"./useEffectiveDataKey-zCOJ1kMm.js";import"./step-nDdn65YX.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
