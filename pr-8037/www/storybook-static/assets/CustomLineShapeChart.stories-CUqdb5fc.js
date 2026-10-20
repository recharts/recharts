import{R as t}from"./iframe-DtNEXb77.js";import{a as p}from"./isWellBehavedNumber-C5_DATUj.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BtNKayC6.js";import{R as T}from"./zIndexSlice-C61cTRUd.js";import{C as M}from"./CartesianGrid-DQ51llt0.js";import{X as $}from"./XAxis-B8fOHSNk.js";import{Y as I}from"./YAxis-BIfcFYbQ.js";import{L as O}from"./Legend-PSAl3kQK.js";import{T as W}from"./Tooltip-B7uEKN2c.js";import{L as C}from"./Line-B2PHvqdd.js";import{C as X}from"./Curve-C4o5b1LX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Ci1CA8vh.js";import"./RechartsWrapper-B3jS1aTx.js";import"./axisSelectors-CRqNtGDu.js";import"./throttle-DHRCkM2S.js";import"./index-DqUzV6Pu.js";import"./index-Da1Kct3U.js";import"./d3-scale-4c7z9Afg.js";import"./index-By0oCmzG.js";import"./index-B8VSKNpf.js";import"./renderedTicksSlice-BLHzyPiU.js";import"./index-BsnYyY0R.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bw3KaQeV.js";import"./chartDataContext-BMn1S1Pl.js";import"./CategoricalChart-IPQiQcsO.js";import"./CartesianAxis-BqiHJNgo.js";import"./Layer-809xSg6I.js";import"./Text-M6NyH5bl.js";import"./pageBackground-CwZqZ7-z.js";import"./useId-fj0geEgf.js";import"./useBackwardsCompatibleTheme-By9gF9DG.js";import"./Label-9NLOMOhr.js";import"./ZIndexLayer-CBx6DJIh.js";import"./types-CsDLwvl0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BU9qCE7s.js";import"./symbol-C8bXqKh9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BQLGRE_E.js";import"./uniqBy-DRVk0Ehd.js";import"./iteratee-rlP-A4cC.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-B5nilSLl.js";import"./Cross-_SAGdCEj.js";import"./Rectangle-C_OpsUN-.js";import"./util-Dxo8gN5i.js";import"./Sector-CkM0ROhk.js";import"./activeStyles-BtinU4U_.js";import"./dataEntryStyles-DdoWImTb.js";import"./ActivePoints-Cq7N-Rzx.js";import"./Dot-wiF8eMia.js";import"./ErrorBarContext-Cs-Qof9d.js";import"./GraphicalItemClipPath-D1LTNIcZ.js";import"./SetGraphicalItem-CBRl2Ktm.js";import"./getRadiusAndStrokeWidthFromDot-50sO_gfq.js";import"./ActiveShapeUtils-CKa9wY87.js";import"./useEffectiveDataKey-BFzz_xKL.js";import"./step-DBGMRA4B.js";const Qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Ut=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
