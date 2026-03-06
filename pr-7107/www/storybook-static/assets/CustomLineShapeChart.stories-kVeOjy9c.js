import{e as t}from"./iframe-aCccIK8W.js";import{R as D,i as s}from"./arrayEqualityCheck-ClrrSpKq.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-FsTde4B4.js";import{C as K}from"./CartesianGrid-C6abTyCe.js";import{X as T}from"./XAxis-DiB5K0gp.js";import{Y as M}from"./YAxis-DESrMeXh.js";import{L as $}from"./Legend-m0sjU_gO.js";import{T as O}from"./Tooltip-BiqMomjH.js";import{L as C}from"./Line-C_rjhjlW.js";import{R as W}from"./RechartsHookInspector-DXULShHw.js";import{C as X}from"./Curve-BLf6fQkp.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BiMbCPR1.js";import"./immer-CMSDbRto.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-KXQQ6Aed.js";import"./index-7BGALgNU.js";import"./hooks-BQl6gm9P.js";import"./axisSelectors-BqKDnBGl.js";import"./d3-scale-CSKaLMYw.js";import"./zIndexSlice-dI_hsE6E.js";import"./renderedTicksSlice-C5CpkahC.js";import"./CartesianChart-Dg_vwzFX.js";import"./chartDataContext-DcZ4BnGt.js";import"./CategoricalChart-43yq3nHJ.js";import"./CartesianAxis-DWcQuKap.js";import"./Layer-CmBSmthE.js";import"./Text-CNK9ky3H.js";import"./DOMUtils-6k1qM2nD.js";import"./Label-BjurlKVT.js";import"./ZIndexLayer-B0CgEJFf.js";import"./types-BigTFNah.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BntmdNmA.js";import"./symbol-CMsEkqSO.js";import"./step-DZfgQXrh.js";import"./useElementOffset-BcVyS5Gh.js";import"./uniqBy-BmKwTMCS.js";import"./iteratee-BCXX7LqW.js";import"./useAnimationId-DA5IV2DG.js";import"./Cross-UEGwbcTO.js";import"./Rectangle-Bexr03gH.js";import"./Sector-v0Uu-y4P.js";import"./ReactUtils-DHbtMuek.js";import"./ActivePoints-CPXBnAoH.js";import"./Dot-DtYrWfLR.js";import"./RegisterGraphicalItemId-taqDOdbV.js";import"./ErrorBarContext-BYQ7VTEV.js";import"./GraphicalItemClipPath-DFzOqGMg.js";import"./SetGraphicalItem-C9DhQ9yz.js";import"./getRadiusAndStrokeWidthFromDot-BvcMpZcb.js";import"./ActiveShapeUtils-DCYjk_1o.js";import"./isPlainObject-DUQm3b0H.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-XFMgvjFP.js";import"./index-B0bVpeoD.js";import"./ChartSizeDimensions-6pSaZa--.js";import"./OffsetShower-zTVqoSRT.js";import"./PlotAreaShower-DtT8gIxN.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
