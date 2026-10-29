import{R as t}from"./iframe-DpFoyu2v.js";import{R as D,l as p}from"./zIndexSlice-BR5-by35.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CLP_sqqe.js";import{C as M}from"./CartesianGrid-CyfgoVXE.js";import{X as $}from"./XAxis-B0PuBmnr.js";import{Y as I}from"./YAxis-UjIlgdkn.js";import{L as O}from"./Legend-m6bZE-oV.js";import{T as W}from"./Tooltip-ByKC-vUJ.js";import{L as f}from"./Line-DsODaGkU.js";import{C as X}from"./Curve-CrBw6Qm3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Bl7dCfEE.js";import"./throttle-CbL9mvVE.js";import"./index-CXkQwc1T.js";import"./index-Dvxsi2Qy.js";import"./RechartsWrapper-BNB2siqp.js";import"./axisSelectors-DsRIuzGY.js";import"./polarAxisSelectors-CoSF9I4I.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DFMCrQku.js";import"./index-CQQQihly.js";import"./index-DPbLagXs.js";import"./renderedTicksSlice-DLxnQ8Ny.js";import"./index-J5LyVsrM.js";import"./CartesianChart-C9Oi4Bgl.js";import"./ZIndexPortal-j1WUiNyF.js";import"./CategoricalChart-CbXZ5UqK.js";import"./CartesianAxis-C3Cmf1pW.js";import"./Layer-C27d_lJh.js";import"./Text-B1i7DvDe.js";import"./DOMUtils-I7Jj66xj.js";import"./ZIndexLayer-Q15FdZk9.js";import"./Label-RSQOEDTQ.js";import"./types-nITqZw6s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BqVxLZyQ.js";import"./symbol-Bc1WE4jB.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-CLwCi-e2.js";import"./dataEntryStyles-BSD8zeo1.js";import"./useElementOffset-wTrI9o3y.js";import"./uniqBy-Bawyhepk.js";import"./iteratee-BD3h7MYT.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-DcTYtpTG.js";import"./Cross-BMOocMKo.js";import"./Rectangle-D1RSMQ2o.js";import"./util-Dxo8gN5i.js";import"./Sector-DyuVM7Tk.js";import"./LabelList-BcqFX_Cs.js";import"./ActivePoints--ch9wTnx.js";import"./Dot-BBDn528y.js";import"./activeStyles-Dlv-kHFt.js";import"./ErrorBarContext-C0P4PP3P.js";import"./SetGraphicalItem-BiUFphqr.js";import"./getRadiusAndStrokeWidthFromDot-DS-6kW0Q.js";import"./ActiveShapeUtils-DOhyqEjv.js";import"./useEffectiveDataKey-D3EJWYit.js";import"./step-DIzEC01T.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
