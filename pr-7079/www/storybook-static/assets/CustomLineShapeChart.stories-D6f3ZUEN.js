import{e as t}from"./iframe-DFPwKozO.js";import{R as D,i as s}from"./arrayEqualityCheck-BO0FMWsB.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-B4YXShBz.js";import{C as K}from"./CartesianGrid-B_s_8s8s.js";import{X as T}from"./XAxis-DB5s1uQK.js";import{Y as M}from"./YAxis-D_B66qKF.js";import{L as $}from"./Legend-CrpbHb3D.js";import{T as O}from"./Tooltip-CejCiFQQ.js";import{L as C}from"./Line-CJI9U6t6.js";import{R as W}from"./RechartsHookInspector-y9SAwPh-.js";import{C as X}from"./Curve-Cr2jXmDN.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B8sM-C45.js";import"./immer-Cq-7IBeQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CjOfOtkl.js";import"./index-BM-iP6jK.js";import"./hooks-bta4c9FS.js";import"./axisSelectors-Fye4v2An.js";import"./d3-scale-DC5SBv4a.js";import"./zIndexSlice-uamkKpnq.js";import"./renderedTicksSlice-BKeP3MvG.js";import"./CartesianChart-Dzwf7i_k.js";import"./chartDataContext-o1PhfYVG.js";import"./CategoricalChart-B84p6B_R.js";import"./CartesianAxis-BRd4GQUv.js";import"./Layer-UW-3uLDu.js";import"./Text-BuTP6JNp.js";import"./DOMUtils-XVY0zsXA.js";import"./Label-BfeOO_bU.js";import"./ZIndexLayer-DyDzR_iO.js";import"./types-DHDJ8gyd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-GcyqxXm3.js";import"./symbol-DJv_b8-d.js";import"./step-CD2gspfu.js";import"./useElementOffset-6CBXSlCR.js";import"./uniqBy-CE3JJ0yH.js";import"./iteratee-DpnnO8WS.js";import"./useAnimationId-DMMdhd1b.js";import"./Cross-DwDV1BmD.js";import"./Rectangle-Atcro-mi.js";import"./Sector-UE1_Ib6K.js";import"./ReactUtils-iN1uHd88.js";import"./ActivePoints-D7vvpkK8.js";import"./Dot-BAdyos6T.js";import"./RegisterGraphicalItemId-ISC1Bh-u.js";import"./ErrorBarContext-D3fyLUw8.js";import"./GraphicalItemClipPath-CH9onNSH.js";import"./SetGraphicalItem-D8F49Ifw.js";import"./getRadiusAndStrokeWidthFromDot-m10-ynrS.js";import"./ActiveShapeUtils-CntxH9-T.js";import"./isPlainObject-GWG2LZr9.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DlIOBrOD.js";import"./index-BKyMZNGM.js";import"./ChartSizeDimensions-tYevmH5B.js";import"./OffsetShower-CuJwjf0e.js";import"./PlotAreaShower-CheWi7Y7.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
