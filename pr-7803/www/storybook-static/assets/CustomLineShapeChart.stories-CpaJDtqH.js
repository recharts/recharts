import{R as t}from"./iframe-CbFuLFtu.js";import{a as p}from"./isWellBehavedNumber-I93tJShS.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-_ExzCiC5.js";import{R as T}from"./zIndexSlice-D_moIlDh.js";import{C as M}from"./CartesianGrid-C7XsKy8T.js";import{X as $}from"./XAxis-DNc-Fb9p.js";import{Y as I}from"./YAxis-o1yfQ20q.js";import{L as O}from"./Legend-CzT_dOOi.js";import{T as W}from"./Tooltip-CIq0HG2Z.js";import{L as C}from"./Line-BaLTgSTX.js";import{C as X}from"./Curve-_JdbhAIS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CPfR2KLv.js";import"./RechartsWrapper-mkS7ocZy.js";import"./axisSelectors-rEOj_nFC.js";import"./throttle-B61_h2S2.js";import"./index-KwOlWhXR.js";import"./index-BJNLJA8n.js";import"./d3-scale-Dx3NsH5I.js";import"./index-BqC7Dl52.js";import"./index-KFI10z6J.js";import"./renderedTicksSlice-DX_n3Vj3.js";import"./index-Cqx3EeHn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B3yIAK9J.js";import"./chartDataContext-D0ZC99YL.js";import"./CategoricalChart-Bc2ATxVj.js";import"./CartesianAxis-DmdL1NlC.js";import"./Layer-DrMT32rq.js";import"./Text-Cl3vVdZy.js";import"./DOMUtils-ac9yPFyL.js";import"./useId-eR1BXb0O.js";import"./useBackwardsCompatibleTheme-CAlV4td3.js";import"./Label-B0AIyR8e.js";import"./ZIndexLayer-DLo3iEV5.js";import"./types-CI87_xcK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-wEHpObTA.js";import"./symbol-DzlCbcpp.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D0ssS32b.js";import"./uniqBy-qMnMoCvD.js";import"./iteratee-C1nM4-Ch.js";import"./useAnimationId-B7x_KCom.js";import"./Cross-DITT8qNm.js";import"./Rectangle-DDNbo7Ju.js";import"./util-Dxo8gN5i.js";import"./Sector-VzpKEpAo.js";import"./AnimatedItems-pPCGFSQU.js";import"./ActivePoints-Ba6uCDOF.js";import"./Dot-BGjmzY1b.js";import"./RegisterGraphicalItemId-Bfab39Ve.js";import"./ErrorBarContext-u6MEnxN0.js";import"./GraphicalItemClipPath-Cc0KTnBN.js";import"./SetGraphicalItem-Ga4RFH-2.js";import"./getRadiusAndStrokeWidthFromDot-Dp4xn9Uf.js";import"./ActiveShapeUtils-C1bQLB6k.js";import"./useGraphicalItemIdentity-WLgpMifT.js";import"./step-DlCZnSaC.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
