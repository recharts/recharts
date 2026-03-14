import{e as t}from"./iframe-B0wKxNpK.js";import{R as D,i as s}from"./arrayEqualityCheck-5nuhtSeT.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-Brahxgvc.js";import{C as K}from"./CartesianGrid-BXbLZ40w.js";import{X as T}from"./XAxis-y_MJiFx9.js";import{Y as M}from"./YAxis-Cj3ZlpOa.js";import{L as $}from"./Legend-Z02505nm.js";import{T as O}from"./Tooltip-DJaVq7DJ.js";import{L as C}from"./Line-DOcSrsPt.js";import{R as W}from"./RechartsHookInspector-DYn9zJB9.js";import{C as X}from"./Curve-DiJIjJff.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CIdIqjjC.js";import"./immer-DUb1bWtb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CrtUXLbx.js";import"./index-Cnz4_p8Q.js";import"./hooks-oSTNajEI.js";import"./axisSelectors-C1uueI6X.js";import"./d3-scale-CQFM5VB3.js";import"./zIndexSlice-BcKpuoZl.js";import"./renderedTicksSlice-dfIm6fl5.js";import"./CartesianChart-CLpt04B_.js";import"./chartDataContext-CfWR9eN6.js";import"./CategoricalChart-DBWdCLL2.js";import"./CartesianAxis-BqdAX1QZ.js";import"./Layer-DSIwel9q.js";import"./Text-DlBKXZA-.js";import"./DOMUtils-CSAF-8sx.js";import"./Label-BdkcMQDU.js";import"./ZIndexLayer-70VD5Z7C.js";import"./types-CYNiifb0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-D24cFx-Z.js";import"./symbol-CrLzL-Wg.js";import"./step-CkYKWKxI.js";import"./useElementOffset-B49r8Ahh.js";import"./uniqBy-Dhf1Ehe8.js";import"./iteratee-C1h-EimB.js";import"./useAnimationId-BdZ_5XMP.js";import"./Cross--xo8aNh2.js";import"./Rectangle-BLIXCh-E.js";import"./Sector-CjeW4NDg.js";import"./ReactUtils-sKOkm0_2.js";import"./ActivePoints-BSvrQoGF.js";import"./Dot-DXpreqzJ.js";import"./RegisterGraphicalItemId-CDkf5IwF.js";import"./ErrorBarContext-B1oYf-9A.js";import"./GraphicalItemClipPath-BCjuGXXY.js";import"./SetGraphicalItem-Be0sJCS3.js";import"./getRadiusAndStrokeWidthFromDot-C3Mll_Mr.js";import"./ActiveShapeUtils-D6gjATQs.js";import"./isPlainObject-CDFz0xXj.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DtGJqYre.js";import"./index-CyRoQl_d.js";import"./ChartSizeDimensions-Bu6AufwQ.js";import"./OffsetShower-Crn6XKfz.js";import"./PlotAreaShower-YsEXXYRG.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
