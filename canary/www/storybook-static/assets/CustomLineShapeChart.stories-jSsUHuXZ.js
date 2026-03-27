import{e as t}from"./iframe-DDDnlj5f.js";import{R as D,i as s}from"./arrayEqualityCheck-CJpSjh_E.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-xthVPzYB.js";import{C as K}from"./CartesianGrid-qf6C1vx8.js";import{X as T}from"./XAxis-CWnYqww0.js";import{Y as M}from"./YAxis-BsKc4EC-.js";import{L as $}from"./Legend-BN3eH4xq.js";import{T as O}from"./Tooltip-D_nWFJy_.js";import{L as C}from"./Line-X_BIU_ye.js";import{R as W}from"./RechartsHookInspector-BhwNj7SB.js";import{C as X}from"./Curve-SLwfiusm.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DYeysdtP.js";import"./immer-aj6qr0b6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CrpiHev6.js";import"./index-CMSlVVpG.js";import"./hooks-Dv-UaG4_.js";import"./axisSelectors-CDHzLZeD.js";import"./d3-scale-pmFb8TKN.js";import"./zIndexSlice-DoI0yJNb.js";import"./renderedTicksSlice-k6HnSAnM.js";import"./CartesianChart-D5sDgHmv.js";import"./chartDataContext-ib7DGGK_.js";import"./CategoricalChart-h2VJliXU.js";import"./CartesianAxis-CMW5fm9o.js";import"./Layer-BtE1IS0j.js";import"./Text-C-kvncvF.js";import"./DOMUtils-DDovTr1I.js";import"./Label-VNLDkr3Z.js";import"./ZIndexLayer-DkrOw8iH.js";import"./types-BPe_V6d-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-9n4DXsSp.js";import"./symbol-B5WodTQ6.js";import"./step-BKhUoFo2.js";import"./useElementOffset-03RznBD_.js";import"./uniqBy-CE60lU9f.js";import"./iteratee-BZMdZ1c9.js";import"./useAnimationId-Dkj4_Bqz.js";import"./Cross-CLlcOZg_.js";import"./Rectangle-Cb4jcIHL.js";import"./Sector-BQbNJdDe.js";import"./ReactUtils-CjPSIKmy.js";import"./ActivePoints-IhqFWUPQ.js";import"./Dot-BEStURxK.js";import"./RegisterGraphicalItemId-D4tYqbmw.js";import"./ErrorBarContext-E3Vm-e-r.js";import"./GraphicalItemClipPath-CuDHFuAP.js";import"./SetGraphicalItem-CHHuJTp3.js";import"./getRadiusAndStrokeWidthFromDot-BWHQ3Uig.js";import"./ActiveShapeUtils-BfdtDxL7.js";import"./isPlainObject-CJH28dtQ.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DeNT7-hb.js";import"./index-CTBoJ3Fl.js";import"./ChartSizeDimensions-CGFO1lez.js";import"./OffsetShower-LgcvfXe3.js";import"./PlotAreaShower-DDwsWzkY.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
