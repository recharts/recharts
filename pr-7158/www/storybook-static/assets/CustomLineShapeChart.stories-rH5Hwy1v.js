import{e as t}from"./iframe-CJ63uMHg.js";import{R as D,i as s}from"./arrayEqualityCheck-CjZgOdyP.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-Ccn2No7x.js";import{C as K}from"./CartesianGrid-CBP3Dch3.js";import{X as T}from"./XAxis-CaS203aX.js";import{Y as M}from"./YAxis-BJ9lAReC.js";import{L as $}from"./Legend-D94wkKyo.js";import{T as O}from"./Tooltip-BeUjSwWI.js";import{L as C}from"./Line-HCaUYNRw.js";import{R as W}from"./RechartsHookInspector-JQmetI7b.js";import{C as X}from"./Curve-CD35vdaK.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CMjyVNNi.js";import"./immer-CKeBagLw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DPJT4FLk.js";import"./index-BTkZssxQ.js";import"./hooks-DAjaeQkS.js";import"./axisSelectors-Cmmc63M7.js";import"./d3-scale-Ba7WtcOV.js";import"./zIndexSlice-DcFOWvFe.js";import"./renderedTicksSlice-BxvVTmCz.js";import"./CartesianChart-CnhtnX-W.js";import"./chartDataContext-BCusU8xR.js";import"./CategoricalChart-mP3FKWNM.js";import"./CartesianAxis-DJXCnb2v.js";import"./Layer-DwPjM_1S.js";import"./Text-C4Zilip_.js";import"./DOMUtils-CEnHACCK.js";import"./Label-BT9o0AB1.js";import"./ZIndexLayer-hB7INJpc.js";import"./types-Cg-iPHUY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Yo7h6BqR.js";import"./symbol-6foS3Lbf.js";import"./step-CrMJLvxS.js";import"./useElementOffset-Db3u9B4j.js";import"./uniqBy-YwcJNLS3.js";import"./iteratee-BOLGpibr.js";import"./useAnimationId-B1Pbcgq5.js";import"./Cross-arbvINZp.js";import"./Rectangle-RAhStLpg.js";import"./Sector-D96mfy5y.js";import"./ReactUtils-BrLU3nhQ.js";import"./ActivePoints-CuJqjtUw.js";import"./Dot-D4anQyzH.js";import"./RegisterGraphicalItemId-B1D-i393.js";import"./ErrorBarContext-dABLLY8L.js";import"./GraphicalItemClipPath-B2w_akpT.js";import"./SetGraphicalItem-BO21g4cB.js";import"./getRadiusAndStrokeWidthFromDot-C1RJ8FJA.js";import"./ActiveShapeUtils-B2UK-_O2.js";import"./isPlainObject-DxawGvw9.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DE_yg1mh.js";import"./index-BTv7XF5w.js";import"./ChartSizeDimensions-C_IgMMTX.js";import"./OffsetShower-TshGFHAM.js";import"./PlotAreaShower-BX2Nq4gV.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
