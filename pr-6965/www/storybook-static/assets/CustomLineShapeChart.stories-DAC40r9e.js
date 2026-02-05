import{e as t}from"./iframe-D44FkRcR.js";import{R as D,n as p}from"./arrayEqualityCheck-CpHRyEoZ.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-C-Ica-4g.js";import{C as K}from"./CartesianGrid-ZMyhlhKd.js";import{X as T}from"./XAxis-Bc7aqN4V.js";import{Y as M}from"./YAxis-B19HmFuc.js";import{L as $}from"./Legend-Cq3fip5T.js";import{T as O}from"./Tooltip-BAdN8Rfb.js";import{L as C}from"./Line-CGS71pfF.js";import{R as W}from"./RechartsHookInspector-BUut-YKB.js";import{C as X}from"./Curve-gEApNnTT.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C9MxTna8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CZxiJS72.js";import"./hooks-yX9SOuhB.js";import"./axisSelectors-DS2aNONq.js";import"./zIndexSlice-By2Q2sEz.js";import"./CartesianChart-MGBUmmtK.js";import"./chartDataContext-DR37Z2O8.js";import"./CategoricalChart-Dy6guSzL.js";import"./CartesianAxis-CQLQyo5l.js";import"./Layer-Cw02mn90.js";import"./Text-m6BVE9y3.js";import"./DOMUtils-DdnL5-6j.js";import"./Label-BDKklye7.js";import"./ZIndexLayer-6GEHbSGN.js";import"./types-BaOyAkY9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-D2aKUPGo.js";import"./useElementOffset-BhWAtdqB.js";import"./iteratee-CgLyGfPs.js";import"./Cross-b_theP-x.js";import"./Rectangle-CuTYB5sP.js";import"./useAnimationId-B6KoK7rR.js";import"./Sector-CGH7Ttue.js";import"./ReactUtils-Dk5cr1D8.js";import"./ActivePoints-ClEt73cA.js";import"./Dot-CxuisgTC.js";import"./RegisterGraphicalItemId-Cmin2ECj.js";import"./ErrorBarContext-WrFhm3tP.js";import"./GraphicalItemClipPath-CVVuYceY.js";import"./SetGraphicalItem-DNNp47_y.js";import"./getRadiusAndStrokeWidthFromDot-c3x0UpIy.js";import"./ActiveShapeUtils-CvDVndyY.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-B3gZXa3J.js";import"./index-D7ezxrhm.js";import"./ChartSizeDimensions-B61qSqob.js";import"./OffsetShower-BfGtxzWE.js";import"./PlotAreaShower-DA_KxbUr.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const jt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,jt as __namedExportsOrder,_t as default};
