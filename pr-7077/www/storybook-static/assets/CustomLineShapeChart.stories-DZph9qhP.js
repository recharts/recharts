import{e as t}from"./iframe-CFR-gaGN.js";import{R as D,i as s}from"./arrayEqualityCheck-B4mATf9c.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-CNwaPDqJ.js";import{C as K}from"./CartesianGrid-BOeOMLnY.js";import{X as T}from"./XAxis-DQlERQHB.js";import{Y as M}from"./YAxis-Bo04wnJz.js";import{L as $}from"./Legend-CJh5rV-_.js";import{T as O}from"./Tooltip-DaoP09P6.js";import{L as C}from"./Line-ChBLpYB3.js";import{R as W}from"./RechartsHookInspector-DAIAGGPn.js";import{C as X}from"./Curve-xncZGYH6.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DjGpqQPT.js";import"./immer-Bk-xXHBC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DeWitytO.js";import"./index-CSJLk245.js";import"./hooks-JwuHHdAq.js";import"./axisSelectors-D5HRTRW9.js";import"./d3-scale-BgOEq5Xh.js";import"./zIndexSlice-Boi-P9QX.js";import"./renderedTicksSlice-Br16TDM7.js";import"./CartesianChart-ueo_-gP0.js";import"./chartDataContext-BElgqktZ.js";import"./CategoricalChart-BnFLIcrr.js";import"./CartesianAxis-ClI6MqAO.js";import"./Layer-BHVJ1AiA.js";import"./Text-mFmQrBQg.js";import"./DOMUtils-yKB-qwZ7.js";import"./Label-DP_LAI-Y.js";import"./ZIndexLayer-C3JqUkkH.js";import"./types-DncqRVvk.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-tvatlAm7.js";import"./symbol-DyWKZjmK.js";import"./step-BuQilum9.js";import"./useElementOffset-CL7hYgwQ.js";import"./uniqBy-D3vM5faK.js";import"./iteratee-BQ71FW9H.js";import"./useAnimationId-VCCfkRDK.js";import"./Cross-ClGrA40Z.js";import"./Rectangle-1LUHF-ab.js";import"./Sector-DhcqTi-n.js";import"./ReactUtils-C9SxeRDL.js";import"./ActivePoints-DyWoik7C.js";import"./Dot-B3-OWSbc.js";import"./RegisterGraphicalItemId-BEFkKq7O.js";import"./ErrorBarContext-GzoTlhrP.js";import"./GraphicalItemClipPath-Plh3ZetI.js";import"./SetGraphicalItem-DT4VFHn2.js";import"./getRadiusAndStrokeWidthFromDot-BDVDZ-9_.js";import"./ActiveShapeUtils-DrwV2_Fx.js";import"./isPlainObject-D5r1oj15.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-C6_wzf5N.js";import"./index-BlXLNwUK.js";import"./ChartSizeDimensions-D3nOZoYf.js";import"./OffsetShower-CvuXOJnC.js";import"./PlotAreaShower-BMOctqSh.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
