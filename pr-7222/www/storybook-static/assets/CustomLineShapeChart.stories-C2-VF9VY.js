import{e as t}from"./iframe-BbLTqg_I.js";import{R as D,i as s}from"./arrayEqualityCheck-CBxHnj40.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BFRpNTUN.js";import{C as T}from"./CartesianGrid-8ldLZAOH.js";import{X as M}from"./XAxis-WOMOBxy0.js";import{Y as $}from"./YAxis-DbPxFlg1.js";import{L as O}from"./Legend-DF_mz3Gp.js";import{T as W}from"./Tooltip-7ugGiU5m.js";import{L as C}from"./Line-D-ePJ61S.js";import{R as X}from"./RechartsHookInspector-D5b-YMWc.js";import{C as Y}from"./Curve-Bfkmy_Vr.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DeEvTvqp.js";import"./immer-0I19eR8v.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-sXCJwmzA.js";import"./index-t2-XMrpS.js";import"./hooks-lBsi1Lte.js";import"./axisSelectors-Bham5zd3.js";import"./d3-scale-DytBNPzq.js";import"./zIndexSlice-DaNYP2h4.js";import"./renderedTicksSlice-mAMVqgeM.js";import"./CartesianChart-6nDSe5MW.js";import"./chartDataContext-CkbwJfZ5.js";import"./CategoricalChart-CiUZR458.js";import"./CartesianAxis-BQlJw0QH.js";import"./Layer-De7FJLXT.js";import"./Text-Doa3jS46.js";import"./DOMUtils-_WjkpCG3.js";import"./Label-Dp17yuaT.js";import"./ZIndexLayer-CG-7pAPx.js";import"./types-BQQUehNG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DHvudbT_.js";import"./symbol-C3VSVIbg.js";import"./step-DZPsS0dg.js";import"./useElementOffset-CyzrHFyC.js";import"./uniqBy-DX_iKdhm.js";import"./iteratee-D7Prihow.js";import"./useAnimationId-Dzq-5vwQ.js";import"./Cross-1-u-Ueg2.js";import"./Rectangle-oP2ZElLD.js";import"./Sector-DvZKa3JR.js";import"./ReactUtils-BKGICeIT.js";import"./ActivePoints-BtWDyisY.js";import"./Dot-BQWhfV5T.js";import"./RegisterGraphicalItemId-BMAYZOJ5.js";import"./ErrorBarContext-DVSsr0NQ.js";import"./GraphicalItemClipPath-BQ69dXZ4.js";import"./SetGraphicalItem-BZCA2PlV.js";import"./getRadiusAndStrokeWidthFromDot-CwIeBf7B.js";import"./ActiveShapeUtils-DIUxAYHp.js";import"./isPlainObject--uBpLfXE.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CEWsUmUR.js";import"./index-BvC3nlY0.js";import"./ChartSizeDimensions-BXlHCl-n.js";import"./OffsetShower-ifdzBZ5-.js";import"./PlotAreaShower-CxkyObXY.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
