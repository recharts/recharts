import{e as t}from"./iframe-C4HM3tOf.js";import{R as D,i as s}from"./arrayEqualityCheck-pVd2ZEAL.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CrAxHQY-.js";import{C as T}from"./CartesianGrid-BbPisY8H.js";import{X as M}from"./XAxis-BK6oNET2.js";import{Y as $}from"./YAxis-BtziLXcq.js";import{L as O}from"./Legend-CeIE24ND.js";import{T as W}from"./Tooltip-C-o5KbGY.js";import{L as C}from"./Line--jw4iogU.js";import{R as X}from"./RechartsHookInspector-Dl-njr8g.js";import{C as Y}from"./Curve-CTxT4HGO.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DIrfype3.js";import"./immer-DKT0L4DC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CsUVNyak.js";import"./index-fnqQxzGI.js";import"./hooks-BGwRhZ9s.js";import"./axisSelectors-q2a6ivV9.js";import"./d3-scale-LcYjb00Y.js";import"./zIndexSlice-B6fkFiXD.js";import"./renderedTicksSlice-D0u-pzQU.js";import"./CartesianChart-zslZnBEv.js";import"./chartDataContext-11WBovGQ.js";import"./CategoricalChart-CnCIIeeu.js";import"./CartesianAxis-BrQUtBdm.js";import"./Layer-BI5SY9Q3.js";import"./Text-Cpkro7uK.js";import"./DOMUtils-CuJDrrCS.js";import"./Label-95NTi3lP.js";import"./ZIndexLayer-hyQhvrxG.js";import"./types-DhPv2WtL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DcdiuJ8X.js";import"./symbol-CU7O9hm_.js";import"./step-Bw_J3Aex.js";import"./useElementOffset-DzbAKatV.js";import"./uniqBy-8PxkX1wT.js";import"./iteratee-Dv6XlQG0.js";import"./useAnimationId-G20N3axR.js";import"./Cross-DhoUqqES.js";import"./Rectangle-DkO9lidd.js";import"./Sector-D93eAIbO.js";import"./ReactUtils-NJDufUbJ.js";import"./ActivePoints-BfIabrgE.js";import"./Dot-V_SCRyyA.js";import"./RegisterGraphicalItemId-lR-7WV2p.js";import"./ErrorBarContext-CuIz_GNg.js";import"./GraphicalItemClipPath-BLanLC3n.js";import"./SetGraphicalItem-Cgab4IqB.js";import"./getRadiusAndStrokeWidthFromDot-xmz8CGWl.js";import"./ActiveShapeUtils-CmP6-7kE.js";import"./isPlainObject-CF48X339.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-nYgyRJct.js";import"./index-D1Vpw6AQ.js";import"./ChartSizeDimensions-C5dCDLnk.js";import"./OffsetShower-DOxYEgNi.js";import"./PlotAreaShower-BwQpOYoG.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
