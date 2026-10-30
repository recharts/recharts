import{R as t}from"./iframe-DfPB0Wpx.js";import{R as D,l as p}from"./zIndexSlice-Vk5rQcki.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CM1I_N6f.js";import{C as M}from"./CartesianGrid-DpWT8FbB.js";import{X as $}from"./XAxis-COzQcKyh.js";import{Y as I}from"./YAxis-BQ4oN9O6.js";import{L as O}from"./Legend-Cy6g-3_w.js";import{T as W}from"./Tooltip-4Eh1cKx8.js";import{L as f}from"./Line-CJuI2uq-.js";import{C as X}from"./Curve-NvY6PR48.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Bt24D4BM.js";import"./throttle-DIfZf6Rg.js";import"./index-Ax9OSmSr.js";import"./index-jmk38lRQ.js";import"./RechartsWrapper-DGPnCUTJ.js";import"./axisSelectors-CYP2U9Wf.js";import"./polarAxisSelectors-UZRyPZtr.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CsMflnTp.js";import"./index-TI8GAjTb.js";import"./index-C7rcjmTF.js";import"./renderedTicksSlice-DnnXNCqP.js";import"./index-DZEvNl2j.js";import"./CartesianChart-C7bLJAaP.js";import"./ZIndexPortal-BHohkWL-.js";import"./CategoricalChart-B65nKayz.js";import"./CartesianAxis-CNCSz6Km.js";import"./Layer-8vRP1mbc.js";import"./Text-DaqQgel7.js";import"./DOMUtils-C1IGffYG.js";import"./ZIndexLayer-no9MVuHN.js";import"./Label-2zEOllgr.js";import"./types-D0-9LK1x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./Symbols-DuFTa5a3.js";import"./symbol-DWiA1K--.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-Dc4guk2V.js";import"./useElementOffset-CqmQGpgi.js";import"./uniqBy-CDxgcpy6.js";import"./iteratee-DH59VCX2.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-C0yM1MFO.js";import"./Cross-DqBgWcpT.js";import"./Rectangle-CWBHAPFe.js";import"./util-Dxo8gN5i.js";import"./Sector-e4AoF70j.js";import"./LabelList-Nkxiy7Jt.js";import"./ActivePoints-RRa8EpH6.js";import"./Dot-DTEgYyAs.js";import"./activeStyles-ChnEmJqB.js";import"./ErrorBarContext-CQDbXt_x.js";import"./SetGraphicalItem-BxFlQPUr.js";import"./getRadiusAndStrokeWidthFromDot-CgvxCR2o.js";import"./ActiveShapeUtils-CvH07gq7.js";import"./useEffectiveDataKey-DKbAeGMk.js";import"./step-C1TIQlMm.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
