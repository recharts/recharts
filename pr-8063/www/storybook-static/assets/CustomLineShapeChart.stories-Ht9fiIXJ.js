import{R as t}from"./iframe-ByLAgMyT.js";import{a as p}from"./isWellBehavedNumber-ib3lWxb6.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CQWbm8Aq.js";import{R as T}from"./zIndexSlice-DbH_vqN6.js";import{C as M}from"./CartesianGrid-wfbzDarX.js";import{X as $}from"./XAxis-6YbWYxrg.js";import{Y as I}from"./YAxis-VAKOhZSF.js";import{L as O}from"./Legend-DXEOnPpR.js";import{T as W}from"./Tooltip-CYncKF8P.js";import{L as C}from"./Line-CHgQT9HL.js";import{C as X}from"./Curve-CcWf2VYJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-ZOEnIxye.js";import"./RechartsWrapper-8hL2knQK.js";import"./axisSelectors-1NzaQeZW.js";import"./throttle-CEah83BE.js";import"./index-Bd0XDIKz.js";import"./index-DQDYz7Kn.js";import"./d3-scale-C7CraIkv.js";import"./index-BzVpSiBS.js";import"./index-Dm91Zbdm.js";import"./renderedTicksSlice-Rz2ip3G5.js";import"./index-DiiEfgcg.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CKytCKi1.js";import"./chartDataContext-xQwTU35T.js";import"./CategoricalChart-CKR8_K54.js";import"./CartesianAxis-CuUPXULq.js";import"./Layer-g3XAbIKO.js";import"./Text-K2cZEaeG.js";import"./pageBackground-CJjC7Pe6.js";import"./useId-N2SJ_s2K.js";import"./useBackwardsCompatibleTheme-CAGUGjI_.js";import"./Label-DiFVkyKf.js";import"./ZIndexLayer-J8gq1KPk.js";import"./types-B5PcYGv_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BQkxcmQZ.js";import"./symbol-Bz2OujGP.js";import"./path-DyVhHtw_.js";import"./useElementOffset-uQmAL4tB.js";import"./uniqBy-Bt5JPp1g.js";import"./iteratee-CZLX0qdh.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-CBnq7Z5z.js";import"./Cross-DfRQs8p7.js";import"./Rectangle-CzITLvl8.js";import"./util-Dxo8gN5i.js";import"./Sector-stkq1E_q.js";import"./activeStyles-Dj4g-rEk.js";import"./dataEntryStyles-Cy26GKXH.js";import"./ActivePoints-BaYU0Cf-.js";import"./Dot-C6LI6MNA.js";import"./ErrorBarContext-CBilAMI3.js";import"./GraphicalItemClipPath-Bv7X_kga.js";import"./SetGraphicalItem-BhbU4A3u.js";import"./getRadiusAndStrokeWidthFromDot-RbzC3joP.js";import"./ActiveShapeUtils-C4wijBbi.js";import"./useEffectiveDataKey-DILJl117.js";import"./step-CewcAd9T.js";const Qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Ut=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Ut as __namedExportsOrder,Qt as default};
