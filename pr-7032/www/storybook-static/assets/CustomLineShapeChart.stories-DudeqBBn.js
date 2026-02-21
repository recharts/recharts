import{e as t}from"./iframe-Bu-inuC_.js";import{R as D,i as s}from"./arrayEqualityCheck-DU89AxsE.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-nzpQheVg.js";import{C as K}from"./CartesianGrid-DprSPxu5.js";import{X as T}from"./XAxis-B7Sm-Q2v.js";import{Y as M}from"./YAxis-C2_h55z2.js";import{L as $}from"./Legend-DfqT_4h2.js";import{T as O}from"./Tooltip-DKHSH364.js";import{L as C}from"./Line-QmWmoYT_.js";import{R as W}from"./RechartsHookInspector-kfypTTkJ.js";import{C as X}from"./Curve-SSe25XRS.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CsH4psWY.js";import"./immer-XJQsdFk2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DprTEw8A.js";import"./index-DtrjCIe1.js";import"./hooks-B2OsnqL5.js";import"./axisSelectors-Cj-Rs3MP.js";import"./d3-scale-BAf69j3g.js";import"./zIndexSlice-jAGqg83w.js";import"./renderedTicksSlice-CV5QPe8g.js";import"./CartesianChart-D_KSdiR0.js";import"./chartDataContext-CNWF4aQ0.js";import"./CategoricalChart-CbSijQZS.js";import"./CartesianAxis-RY4R-JEB.js";import"./Layer-Dlph539k.js";import"./Text-C9R9pE-c.js";import"./DOMUtils-D9MAnWMp.js";import"./Label-Bztw_jsS.js";import"./ZIndexLayer-XPmioUZb.js";import"./types-kezhLfGE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CfIo9P3Y.js";import"./symbol-DCuuGdc1.js";import"./step-CG3E5dJ5.js";import"./useElementOffset-CAcMGNUP.js";import"./uniqBy-i9XfwvOX.js";import"./iteratee-DAenRuB5.js";import"./useAnimationId-BQHAYEwx.js";import"./Cross-DvWZEZRa.js";import"./Rectangle-ih3X5Nav.js";import"./Sector-K5K0caPh.js";import"./ReactUtils-CbatvDS3.js";import"./ActivePoints-4FzqXwK2.js";import"./Dot-C-ngH4D5.js";import"./RegisterGraphicalItemId-D1pnqeqs.js";import"./ErrorBarContext-DApypuO7.js";import"./GraphicalItemClipPath-Tj00x8Wp.js";import"./SetGraphicalItem-Brp5xTx2.js";import"./getRadiusAndStrokeWidthFromDot-ClhAYeel.js";import"./ActiveShapeUtils-BT0ZFYuE.js";import"./isPlainObject-Dg1QCtSt.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DN15z973.js";import"./index-CiBd-8tu.js";import"./ChartSizeDimensions-BFqzoU52.js";import"./OffsetShower-D2S5vzbK.js";import"./PlotAreaShower-BXNxywRo.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
