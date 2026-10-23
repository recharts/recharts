import{R as t}from"./iframe-BJwrbqqi.js";import{a as p}from"./isWellBehavedNumber-pfE5Q5mt.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CLZDvXiw.js";import{R as T}from"./zIndexSlice-Dgyv34Z4.js";import{C as M}from"./CartesianGrid-t9_8Qbmt.js";import{X as $}from"./XAxis-B7ZX8Kfa.js";import{Y as I}from"./YAxis-BRttk8mJ.js";import{L as O}from"./Legend-CXIWKYSv.js";import{T as W}from"./Tooltip-D-aHLOso.js";import{L as C}from"./Line-ChjYxcU9.js";import{C as X}from"./Curve-DpfItrvf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C-uvAkWz.js";import"./RechartsWrapper-DeuEZMtn.js";import"./axisSelectors-C5NObvkt.js";import"./throttle-pfeYxzRR.js";import"./index-G7qNEGy_.js";import"./index-DvHXQAWB.js";import"./d3-scale-DSWUCzXy.js";import"./index-DsGTB-aY.js";import"./index-WSINJmPt.js";import"./renderedTicksSlice-BnrduSeF.js";import"./index-BP4AOHzk.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CLAnODbR.js";import"./chartDataContext-BDqLbH1o.js";import"./CategoricalChart-Db_HBiCU.js";import"./CartesianAxis-CmiU-XO8.js";import"./Layer-eN5gk5Rs.js";import"./Text-KHiJMqsX.js";import"./pageBackground-BIIIhWKR.js";import"./useId-DQUV3KXo.js";import"./useBackwardsCompatibleTheme-B8str_Tp.js";import"./Label-XjwS876P.js";import"./ZIndexLayer-BJ-hVFwd.js";import"./dataEntryStyles-D7ilp65R.js";import"./types-BBGLRMuE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BIb_pKxd.js";import"./symbol-5eUW0bsj.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B3zfLjYP.js";import"./uniqBy-CLTRPXtC.js";import"./iteratee-DM8gut2i.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-Cz6ggmzR.js";import"./Cross-b_5sADJx.js";import"./Rectangle-DKcQQ7tK.js";import"./util-Dxo8gN5i.js";import"./Sector-CfxM3osn.js";import"./activeStyles-JM_riMMZ.js";import"./ActivePoints-5m6R4yet.js";import"./Dot-Bsu5ZBhw.js";import"./RegisterGraphicalItemId-CPxaQHtW.js";import"./ErrorBarContext-8FsJ_EHd.js";import"./GraphicalItemClipPath-D57dspwd.js";import"./SetGraphicalItem-Dgy41JCB.js";import"./getRadiusAndStrokeWidthFromDot-DpwEmJ7r.js";import"./ActiveShapeUtils-DSUQ40Ee.js";import"./useEffectiveDataKey-dwhPZ08z.js";import"./step-CFdztVjQ.js";const Ut={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Vt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Vt as __namedExportsOrder,Ut as default};
