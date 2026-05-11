import{e as t}from"./iframe-B5OZyTLO.js";import{R as D,i as s}from"./arrayEqualityCheck-CWhdwSDm.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BH7TQb8n.js";import{C as T}from"./CartesianGrid-B88auzH8.js";import{X as M}from"./XAxis-zb4VUPh6.js";import{Y as $}from"./YAxis-Dux7TOCI.js";import{L as O}from"./Legend-D4s-p13t.js";import{T as W}from"./Tooltip-Bk-yGqEO.js";import{L as C}from"./Line-4w5j44YG.js";import{R as X}from"./RechartsHookInspector-_hFKO12C.js";import{C as Y}from"./Curve-CZezSHJu.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CAPxLZ6Q.js";import"./immer-TWt97Mx7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CQQb0kbC.js";import"./index-hV-3VpKL.js";import"./hooks-BezBw8uS.js";import"./axisSelectors-ABOgVma3.js";import"./d3-scale-CN5ZQXr4.js";import"./zIndexSlice-BhJZ8kMU.js";import"./renderedTicksSlice-D_AhA4OM.js";import"./CartesianChart-FhsaLguc.js";import"./chartDataContext-B484Lq8t.js";import"./CategoricalChart-zasF99ZZ.js";import"./CartesianAxis-DF2T2i1R.js";import"./Layer-DY3DBIYw.js";import"./Text-CpciUZWD.js";import"./DOMUtils-CaAH8jO5.js";import"./Label-DrAV5Ysg.js";import"./ZIndexLayer--mzOMN2C.js";import"./types-CBKdJqtE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CYtIKOUS.js";import"./symbol-OBCxgJUM.js";import"./step--d94ZHvF.js";import"./useElementOffset-CMyZblD5.js";import"./uniqBy-Bjy84KJm.js";import"./iteratee-DcHlFybE.js";import"./useAnimationId-C8kgPVjG.js";import"./Cross-Bo9V-nNr.js";import"./Rectangle-CluG0cnR.js";import"./Sector-DWNWDgn6.js";import"./ReactUtils-50LnJO-z.js";import"./ActivePoints-BCl6lkYq.js";import"./Dot-DW8dVVMQ.js";import"./RegisterGraphicalItemId-DI_yJ9XE.js";import"./ErrorBarContext-Cy-UI2HL.js";import"./GraphicalItemClipPath-DqNQMvK4.js";import"./SetGraphicalItem-DtNxMT9p.js";import"./getRadiusAndStrokeWidthFromDot-BwBEHiBz.js";import"./ActiveShapeUtils-wCZ0vcum.js";import"./isPlainObject-dgzqLzJz.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DfDBBk_X.js";import"./index-1eVRlG7n.js";import"./ChartSizeDimensions-UHLg_21n.js";import"./OffsetShower-C1QQvoSP.js";import"./PlotAreaShower-Bz0iMrs_.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
