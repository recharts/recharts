import{e as t}from"./iframe-C3KLAr_X.js";import{R as D,i as s}from"./arrayEqualityCheck-DnI1m1N4.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-EylGj-2b.js";import{C as T}from"./CartesianGrid-DYEBcZCQ.js";import{X as M}from"./XAxis-BBmktT_d.js";import{Y as $}from"./YAxis-BzdeP421.js";import{L as O}from"./Legend-zcFKlEVB.js";import{T as W}from"./Tooltip-DgK5KqS0.js";import{L as C}from"./Line-_AKn2THI.js";import{R as X}from"./RechartsHookInspector-CDrt9EHV.js";import{C as Y}from"./Curve-DuWzArMY.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CDRZbdh0.js";import"./immer-7U5Tji_6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CHSmfZwv.js";import"./index-C-7EyPyC.js";import"./hooks-DZuDX4va.js";import"./axisSelectors-CWLPDJ8I.js";import"./d3-scale-ZNDiiXCQ.js";import"./zIndexSlice-Cl9Q2qHp.js";import"./renderedTicksSlice-Y_XNygaP.js";import"./CartesianChart-CwI8QMMb.js";import"./chartDataContext-BIjR8iwE.js";import"./CategoricalChart-CWEKSGB2.js";import"./CartesianAxis-B4oXNbAG.js";import"./Layer-gez65z60.js";import"./Text-CKsAfS2q.js";import"./DOMUtils-BTX_GG3X.js";import"./Label-D03TCqMA.js";import"./ZIndexLayer-ZwdT_RoZ.js";import"./types-CUBBvZMp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BpWkyHSI.js";import"./symbol-Bi41egzv.js";import"./step-nMlGD7PS.js";import"./useElementOffset-BzB57i36.js";import"./uniqBy-Cv-Iaane.js";import"./iteratee-Bd1b-YF_.js";import"./useAnimationId-BHPPVsUk.js";import"./Cross-B-4L7eoI.js";import"./Rectangle-BNR6RJPB.js";import"./Sector-DDPunuhX.js";import"./ReactUtils-Dl7XDcr4.js";import"./ActivePoints-C0SjOUTr.js";import"./Dot-b607mIJy.js";import"./RegisterGraphicalItemId-uSngcEvn.js";import"./ErrorBarContext-pe48v0HA.js";import"./GraphicalItemClipPath-CrZc4JF3.js";import"./SetGraphicalItem-CgbMvRrw.js";import"./getRadiusAndStrokeWidthFromDot-CfDNziOs.js";import"./ActiveShapeUtils-BDuTGezX.js";import"./isPlainObject-1BlW33tf.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-Bo7unZPt.js";import"./index-D4Ia_Qi8.js";import"./ChartSizeDimensions-BUMoLVC9.js";import"./OffsetShower-Bzqo_bHi.js";import"./PlotAreaShower-9mAhzD5z.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
