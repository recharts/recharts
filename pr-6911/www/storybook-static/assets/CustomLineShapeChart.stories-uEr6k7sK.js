import{e as t}from"./iframe-B6AlQnM2.js";import{R as D,n as p}from"./arrayEqualityCheck-DOlZ0mCX.js";import{L as v}from"./LineChartArgs-C9Vp8FkW.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-DP8kSvbq.js";import{C as K}from"./CartesianGrid-BsrOPDfE.js";import{X as T}from"./XAxis-B2vfw6Li.js";import{Y as M}from"./YAxis-BtS_tsxk.js";import{L as $}from"./Legend-FguBr4zK.js";import{T as O}from"./Tooltip-JUfWckLq.js";import{L as C}from"./Line-9lTUlltG.js";import{R as W}from"./RechartsHookInspector-C4bhcvg_.js";import{C as X}from"./Curve-DTUwCS4t.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-osVefOLp.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CexAAOIz.js";import"./hooks-CQRKljNW.js";import"./axisSelectors-CbxR9aKJ.js";import"./zIndexSlice-lMltdZop.js";import"./CartesianChart-lYw6K-4N.js";import"./chartDataContext-JLBHd2Mr.js";import"./CategoricalChart-Bzfkval9.js";import"./CartesianAxis-BwDpbQiB.js";import"./Layer-Cdn-3vsr.js";import"./Text-BQHJk7TW.js";import"./DOMUtils-ookTrfW2.js";import"./Label-CIaajA0c.js";import"./ZIndexLayer-KOQQKvvO.js";import"./types-C25Y7m2H.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Cm6_UFeB.js";import"./useElementOffset-D5aHn8Rk.js";import"./iteratee-7MvN9BPN.js";import"./Cross-BXVeeLRc.js";import"./Rectangle-BQhXboIW.js";import"./useAnimationId-CsS9GYvF.js";import"./Sector-D5Wtmz4T.js";import"./ReactUtils-ODr0KtTw.js";import"./ActivePoints-CNKPkIr-.js";import"./Dot-DwI94pSl.js";import"./RegisterGraphicalItemId-BrQ42RrU.js";import"./ErrorBarContext-DYHYd6lU.js";import"./GraphicalItemClipPath-CFBlDtHu.js";import"./SetGraphicalItem-BFhZLv7r.js";import"./getRadiusAndStrokeWidthFromDot-L9FXfyyd.js";import"./ActiveShapeUtils-Ly0l_9qH.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DdjR8tMX.js";import"./index-CYGFbMYu.js";import"./ChartSizeDimensions-BY4lvFSe.js";import"./OffsetShower-IG_VUviu.js";import"./PlotAreaShower-DnDaw1Ql.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
