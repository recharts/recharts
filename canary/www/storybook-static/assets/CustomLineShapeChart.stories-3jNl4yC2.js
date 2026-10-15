import{R as t}from"./iframe-B0MhV86h.js";import{a as p}from"./isWellBehavedNumber-Cfafrgq8.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BPmT7I6P.js";import{R as T}from"./zIndexSlice-JhYmjiRs.js";import{C as M}from"./CartesianGrid-Cz0GsxYj.js";import{X as $}from"./XAxis-mSUHawKI.js";import{Y as I}from"./YAxis-fXjE14Qf.js";import{L as O}from"./Legend-DAtiCdh9.js";import{T as W}from"./Tooltip-Cdn6ZAA0.js";import{L as C}from"./Line-CWasAWgS.js";import{C as X}from"./Curve-BkmryfS-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B7HpHAm5.js";import"./RechartsWrapper-B_6wPZYR.js";import"./axisSelectors-CrrgMfKB.js";import"./throttle-BiG1uYFs.js";import"./index-I3GMq-pj.js";import"./index-R2Dh29NI.js";import"./d3-scale-CR10n00v.js";import"./index-ZJn3ELdV.js";import"./index-By5cImAN.js";import"./renderedTicksSlice-DHx9pPwr.js";import"./index-DmgedYxy.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-plZLO0XN.js";import"./chartDataContext-DI3_2rek.js";import"./CategoricalChart-BLaINhxr.js";import"./CartesianAxis-BSkD6k6d.js";import"./Layer-TaFZ6cEO.js";import"./Text-03E8A-Bw.js";import"./pageBackground-qvgCZBpb.js";import"./useId-BhVD5AMJ.js";import"./useBackwardsCompatibleTheme-DIfSIBwo.js";import"./Label-DtBWxW0-.js";import"./ZIndexLayer-OiTLfYLd.js";import"./types-BhM_mLRi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DZiZJLI3.js";import"./symbol-aWmrJ5x4.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D3PGtHdN.js";import"./uniqBy-C-fLvMH7.js";import"./iteratee-Czlzoku_.js";import"./useAnimationId-CudNOC-V.js";import"./Cross-bltm8sjj.js";import"./Rectangle-CJdwGJ58.js";import"./util-Dxo8gN5i.js";import"./Sector-Cg6jha8o.js";import"./activeStyles-DryRBlXh.js";import"./dataEntryStyles--cHZ_1nv.js";import"./ActivePoints-DTScXn02.js";import"./Dot-Btw3znVN.js";import"./ErrorBarContext-CxDSe0Hd.js";import"./GraphicalItemClipPath-B8x00Z-R.js";import"./SetGraphicalItem-BAdS99gT.js";import"./getRadiusAndStrokeWidthFromDot-B_7w4E3e.js";import"./ActiveShapeUtils-BLQr2vhf.js";import"./useEffectiveDataKey-DkWEBp9n.js";import"./step-D52lSMQ-.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
