import{e as t}from"./iframe-D86QwX9l.js";import{R as D,i as s}from"./arrayEqualityCheck-CgXO-ZuA.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-CLDA4f-N.js";import{C as K}from"./CartesianGrid-CHsoccTH.js";import{X as T}from"./XAxis-BmsupeL1.js";import{Y as M}from"./YAxis-Dp7U47F6.js";import{L as $}from"./Legend-B_1fLrVV.js";import{T as O}from"./Tooltip-Cm8sA5h1.js";import{L as C}from"./Line-CYsao_-4.js";import{R as W}from"./RechartsHookInspector-BUpx_xVe.js";import{C as X}from"./Curve-r3vqpxAw.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dk2nPyU3.js";import"./immer-8-oQo3xP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-9Ks6YNdz.js";import"./index-Dlozd1Zf.js";import"./hooks-CqXI__Cc.js";import"./axisSelectors-CDwpVfsZ.js";import"./d3-scale-Be_57Quy.js";import"./zIndexSlice-Cs40vUo3.js";import"./renderedTicksSlice-Cs4zqxJz.js";import"./CartesianChart-BPHLQ0t0.js";import"./chartDataContext-Ct7JPcI4.js";import"./CategoricalChart-C13dIv8W.js";import"./CartesianAxis-DxWgPgnd.js";import"./Layer-7ZFhhqEA.js";import"./Text-Du8Py4Em.js";import"./DOMUtils-BHs0vF9m.js";import"./Label-Db7DMkNg.js";import"./ZIndexLayer-UcIV_jcl.js";import"./types-BKmbYWQ3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BEczeOkh.js";import"./symbol-C57rPMDp.js";import"./step-lGE8FQDz.js";import"./useElementOffset-D0xWsyXU.js";import"./uniqBy-CXA0falP.js";import"./iteratee-QPPlsimc.js";import"./useAnimationId-DeGRDsC6.js";import"./Cross-z0fNXnwB.js";import"./Rectangle-BlbPkBXV.js";import"./Sector-qJl1uh8Z.js";import"./ReactUtils-BRuRWbDc.js";import"./ActivePoints-oDQ7pGW6.js";import"./Dot-Bkmwyapo.js";import"./RegisterGraphicalItemId-Cb3ALFIQ.js";import"./ErrorBarContext-CuFeAbue.js";import"./GraphicalItemClipPath-DOcGoQ4n.js";import"./SetGraphicalItem-rCG6xPW_.js";import"./getRadiusAndStrokeWidthFromDot-BEX2oyUV.js";import"./ActiveShapeUtils-B0bsImWY.js";import"./isPlainObject-HWQUIItt.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-jhl-5jxc.js";import"./index-BhBhI1sn.js";import"./ChartSizeDimensions-0WIqpo-P.js";import"./OffsetShower-laCN2MaK.js";import"./PlotAreaShower-DL6rBkyw.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
