import{R as t}from"./iframe-C9xnj3fa.js";import{R as D,l as p}from"./zIndexSlice-CcurngJa.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DM45Enu7.js";import{C as M}from"./CartesianGrid-Bgu7WhU1.js";import{X as $}from"./XAxis-CqLpIx_r.js";import{Y as I}from"./YAxis-CZieiH3_.js";import{L as O}from"./Legend-EgzWNiBX.js";import{T as W}from"./Tooltip-CVQ7tiwn.js";import{L as f}from"./Line-CeHzBY0l.js";import{C as X}from"./Curve-CKzhw-Lm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Brqxe2vY.js";import"./throttle-Brv_8OQk.js";import"./index-HR2zHK1s.js";import"./index-CGQL5uib.js";import"./RechartsWrapper-BTsf-RRm.js";import"./axisSelectors-Ci_X7Owa.js";import"./polarAxisSelectors-D4sMq_tB.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Bt8PJZEG.js";import"./index-jCX_JL39.js";import"./index-DsrYsm3j.js";import"./renderedTicksSlice-w5XdGCx4.js";import"./index-HliY0Ktb.js";import"./CartesianChart-ZuYtKyhz.js";import"./ZIndexPortal-CioIZ4EI.js";import"./CategoricalChart-Dkc5AhoM.js";import"./CartesianAxis-CWptnmGh.js";import"./Layer-DDMBpFba.js";import"./Text-BlDPHkKw.js";import"./DOMUtils-rMdb-gP0.js";import"./pageBackground-BZHE6_vS.js";import"./ZIndexLayer-BqHotqUl.js";import"./Label-BDFDhH9S.js";import"./types-DG6esOZW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-JiW6eW7Z.js";import"./Symbols-Cm6DVkmF.js";import"./symbol-B6aiZ8Bc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BFo0ivMe.js";import"./uniqBy-DEkhL1Ig.js";import"./iteratee-BNbt2Vfj.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-CE3S5svQ.js";import"./Cross-DXOgwnMG.js";import"./Rectangle-BnqXvc2P.js";import"./util-Dxo8gN5i.js";import"./Sector-BXMfsR_X.js";import"./LabelList-Dl-1RIBv.js";import"./ActivePoints-CONJtR6k.js";import"./Dot-GKhzlTQm.js";import"./activeStyles-D9Ul1Rn7.js";import"./dataEntryStyles-DUCKxZ4T.js";import"./ErrorBarContext-CpFpfUyn.js";import"./SetGraphicalItem-CW9QGr42.js";import"./getRadiusAndStrokeWidthFromDot-BiTQJ7fn.js";import"./ActiveShapeUtils-3CPPp2aV.js";import"./useEffectiveDataKey-Bl0Ac7JR.js";import"./step-FdCzkuxT.js";const Qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ut=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
