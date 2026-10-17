import{R as t}from"./iframe-Cf4rQ-NM.js";import{a as p}from"./isWellBehavedNumber-DGgr4zRD.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CxT6q1vm.js";import{R as T}from"./zIndexSlice-DMD_kE2u.js";import{C as M}from"./CartesianGrid-Dijd34fp.js";import{X as $}from"./XAxis-BIvdIl6o.js";import{Y as I}from"./YAxis-CNqs_HAY.js";import{L as O}from"./Legend-BTDRi3AW.js";import{T as W}from"./Tooltip-CMjrj-7d.js";import{L as C}from"./Line-D7eG1rq4.js";import{C as X}from"./Curve-Dr4UIWQ5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Dge1pFTV.js";import"./RechartsWrapper-BteUr7Vj.js";import"./axisSelectors-9PR0sTvr.js";import"./throttle-B2HUKrsu.js";import"./index-BCa2sd2-.js";import"./index-DeMDRv06.js";import"./d3-scale-Lc72VcRD.js";import"./index-xRR_iGj4.js";import"./index-1RjEuLS2.js";import"./renderedTicksSlice-CE9QQLn-.js";import"./index-BsaRhs6B.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CpdyhfTD.js";import"./chartDataContext-Dx7ZG5X9.js";import"./CategoricalChart-BUsdXEus.js";import"./CartesianAxis-DkanQVq_.js";import"./Layer-Cw23EJyc.js";import"./Text-CI7nXg92.js";import"./pageBackground-ja8baDve.js";import"./useId-CX6V0BQ1.js";import"./useBackwardsCompatibleTheme-Beid_g9Z.js";import"./Label-DJuA9Y4I.js";import"./ZIndexLayer-DsOZ8kUq.js";import"./types-PE1Wk2R_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-D5DJG6Nl.js";import"./symbol-B_S5I6Iq.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dl0LIsHj.js";import"./uniqBy-CYhaWn8Y.js";import"./iteratee-Dbg95qkm.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-D_Che_T2.js";import"./Cross-t70eUuc2.js";import"./Rectangle-B34jhTte.js";import"./util-Dxo8gN5i.js";import"./Sector-BHuTuRcM.js";import"./activeStyles-Do9UPxka.js";import"./dataEntryStyles-DPFF45fD.js";import"./ActivePoints-C6euMq8T.js";import"./Dot-B2NKpqWj.js";import"./ErrorBarContext-CaHoTzTO.js";import"./GraphicalItemClipPath-Dmqa19CH.js";import"./SetGraphicalItem-Dfb9XQen.js";import"./getRadiusAndStrokeWidthFromDot-DixpZj8q.js";import"./ActiveShapeUtils-BaLJZ67g.js";import"./useEffectiveDataKey-BQAfbWh7.js";import"./step-Bcwq9xqU.js";const Qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Ut=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Ut as __namedExportsOrder,Qt as default};
