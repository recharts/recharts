import{e as t}from"./iframe-D83ZSNbz.js";import{R as D,i as s}from"./arrayEqualityCheck-BGA4RwPN.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-CLUPg6T-.js";import{C as K}from"./CartesianGrid-DOXYo2au.js";import{X as T}from"./XAxis-C6_NJJDB.js";import{Y as M}from"./YAxis-QvVYxZLS.js";import{L as $}from"./Legend-CFiUqMnB.js";import{T as O}from"./Tooltip-CqpJOm1l.js";import{L as C}from"./Line-nYAELe6c.js";import{R as W}from"./RechartsHookInspector-BWsm2Zwo.js";import{C as X}from"./Curve-VgEiMVDm.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BQFmif0Y.js";import"./immer-CVep4-EU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-6kLXfAE0.js";import"./index-8b00PKjq.js";import"./hooks-DCtmV1SZ.js";import"./axisSelectors-DsPqnEOY.js";import"./d3-scale-yzqdTiSJ.js";import"./zIndexSlice-z-sDwpjP.js";import"./renderedTicksSlice-Bt6P6Lqy.js";import"./CartesianChart-Zohr5k9I.js";import"./chartDataContext-DzOegroB.js";import"./CategoricalChart-BH19QtA5.js";import"./CartesianAxis-4L0yK2SL.js";import"./Layer-CzMDOsc5.js";import"./Text-BHw_uujw.js";import"./DOMUtils-Bml6CSWG.js";import"./Label-CPoQ7ALx.js";import"./ZIndexLayer-BlsfoIRs.js";import"./types-CQ4rEtgJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BiJ-DNBY.js";import"./symbol-S6sIvH4b.js";import"./step-DnRHTEfS.js";import"./useElementOffset-BGi4QxFd.js";import"./uniqBy-DgQL0Nmw.js";import"./iteratee-DGB-E-W_.js";import"./useAnimationId-DC1LkXPL.js";import"./Cross-DfakOLYr.js";import"./Rectangle-BcHYsitW.js";import"./Sector-BNG-UwhR.js";import"./ReactUtils-Dwz5eB4M.js";import"./ActivePoints-xgfu-OUk.js";import"./Dot-CeVblkN7.js";import"./RegisterGraphicalItemId-DBtbwGke.js";import"./ErrorBarContext-DI1C1qO8.js";import"./GraphicalItemClipPath-DCwYUI8F.js";import"./SetGraphicalItem-CVQEh09-.js";import"./getRadiusAndStrokeWidthFromDot-C8XAklJz.js";import"./ActiveShapeUtils-C7T_TsZu.js";import"./isPlainObject-CP5WOR_K.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DcZW9PM6.js";import"./index-CSluNsr9.js";import"./ChartSizeDimensions--X_0ARq3.js";import"./OffsetShower-CvSCKQiO.js";import"./PlotAreaShower-BKASkiMz.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
