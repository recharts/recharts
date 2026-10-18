import{R as t}from"./iframe-BVidFuBg.js";import{a as p}from"./isWellBehavedNumber-Bgrep7-b.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-6wRhXT5W.js";import{R as T}from"./zIndexSlice-BVu_VJKn.js";import{C as M}from"./CartesianGrid-CE1nnXHn.js";import{X as $}from"./XAxis-D6ghc140.js";import{Y as I}from"./YAxis-CAK7lAdx.js";import{L as O}from"./Legend-BCcfS3Kt.js";import{T as W}from"./Tooltip-D2nd5wLd.js";import{L as C}from"./Line-BwWsnMpN.js";import{C as X}from"./Curve-DADC3Qn9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BnMAchLG.js";import"./RechartsWrapper-7A4GvPw3.js";import"./axisSelectors-7sszg3SW.js";import"./throttle-BSCmJhty.js";import"./index-qH4-zIlS.js";import"./index-DBJQpaC5.js";import"./d3-scale-n9zBPjXr.js";import"./index-BiOB95Co.js";import"./index-k6xKkYdd.js";import"./renderedTicksSlice-X2qP0nh3.js";import"./index-CYZL9Ecm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BVao4mhK.js";import"./chartDataContext-KRrlptML.js";import"./CategoricalChart-B9oBZckD.js";import"./CartesianAxis-B6O3GOLV.js";import"./Layer-BamX7bDZ.js";import"./Text-B-jeJZdK.js";import"./pageBackground-DWUaDsTL.js";import"./useId-B-SrM2oo.js";import"./useBackwardsCompatibleTheme-CdbVLEqd.js";import"./Label-Dkr2cH3E.js";import"./ZIndexLayer-Diklw-mz.js";import"./types-d1h9D5Nt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Ce81nxL9.js";import"./symbol-B3XC6ocG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DGDKGLsn.js";import"./uniqBy-DnZxk8gC.js";import"./iteratee-BSh9UVJS.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-DUX3gKYN.js";import"./Cross-B_3lqDDg.js";import"./Rectangle-BXXUvRMI.js";import"./util-Dxo8gN5i.js";import"./Sector-Dc8MKQa3.js";import"./activeStyles-DLYfLCId.js";import"./dataEntryStyles-doFW0jSZ.js";import"./ActivePoints-CkjWSogS.js";import"./Dot-08nNQsA3.js";import"./ErrorBarContext-DCSMt2xY.js";import"./GraphicalItemClipPath-BHt5dg8Z.js";import"./SetGraphicalItem-COgSsKbs.js";import"./getRadiusAndStrokeWidthFromDot-DtsjXIq5.js";import"./ActiveShapeUtils-OFRSQ0pw.js";import"./useEffectiveDataKey-BG2pu5J2.js";import"./step-DQ_5Whcs.js";const Qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Ut=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
