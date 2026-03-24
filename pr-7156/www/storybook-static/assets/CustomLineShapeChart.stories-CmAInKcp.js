import{e as t}from"./iframe-CGYv0J_P.js";import{R as D,i as s}from"./arrayEqualityCheck-BZetwlMO.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-Bboyl9Ls.js";import{C as K}from"./CartesianGrid-BGuUvgv_.js";import{X as T}from"./XAxis-BBLpBgR2.js";import{Y as M}from"./YAxis-CJylCvLo.js";import{L as $}from"./Legend-Zwt5uMi7.js";import{T as O}from"./Tooltip-BDmLuqNU.js";import{L as C}from"./Line-R4kryobQ.js";import{R as W}from"./RechartsHookInspector-BO40i9ox.js";import{C as X}from"./Curve-NAJ5RvpG.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CDCzLOgk.js";import"./immer-Dq3_p8cl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BFBg4H1i.js";import"./index-DCXgcjyB.js";import"./hooks-BYcy2WEI.js";import"./axisSelectors-d1jnmTLI.js";import"./d3-scale-CFFcqd30.js";import"./zIndexSlice-DscQ2UEO.js";import"./renderedTicksSlice-BB6lYCOP.js";import"./CartesianChart-cuEjJLA1.js";import"./chartDataContext-DAOXspfa.js";import"./CategoricalChart-DJ2ZS2wS.js";import"./CartesianAxis-Cu0bgGrg.js";import"./Layer-Gk-yVd_6.js";import"./Text-DbZ5XXQf.js";import"./DOMUtils-CmrzvfdE.js";import"./Label-CLm-GmRY.js";import"./ZIndexLayer-ChWoeJD6.js";import"./types-DA895aOk.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-wA8q_wPX.js";import"./symbol-BMJz3y-1.js";import"./step-WNwAxyX5.js";import"./useElementOffset-Dg7ksT9H.js";import"./uniqBy-C4EJXCv-.js";import"./iteratee-XiLYEPtC.js";import"./useAnimationId-DzTM1tK7.js";import"./Cross-DYitQ8uV.js";import"./Rectangle-D-iQ4syW.js";import"./Sector-DG9owPHZ.js";import"./ReactUtils-e-fTpbBc.js";import"./ActivePoints-DuCztam3.js";import"./Dot-B2QyCy--.js";import"./RegisterGraphicalItemId-Br_SJebF.js";import"./ErrorBarContext-Cs8TC5a2.js";import"./GraphicalItemClipPath-CH3RqnTG.js";import"./SetGraphicalItem-BJId-qpW.js";import"./getRadiusAndStrokeWidthFromDot-Cp2r1Hxi.js";import"./ActiveShapeUtils-D3fNYChL.js";import"./isPlainObject-CRVi6C8E.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-C3Q-7u80.js";import"./index-CfugQJAU.js";import"./ChartSizeDimensions-CWNsHALg.js";import"./OffsetShower-n0t9eY-O.js";import"./PlotAreaShower-C2TG4Ybd.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
