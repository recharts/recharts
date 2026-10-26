import{R as t}from"./iframe-COIGCNXI.js";import{R as D,m as p}from"./zIndexSlice-SGGyD0oS.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-Bbin2Eyn.js";import{C as M}from"./CartesianGrid-4AMzfBUY.js";import{X as $}from"./XAxis-CKJPf7Wd.js";import{Y as I}from"./YAxis-MNgk7gZM.js";import{L as O}from"./Legend-B_Tu88mw.js";import{T as W}from"./Tooltip-BtRgioyf.js";import{L as f}from"./Line-ma9HaId0.js";import{C as X}from"./Curve-C5TSA5DD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CZS8aiFv.js";import"./throttle-BlyN22Fr.js";import"./index-NGI2UEpG.js";import"./index-CUG4PNHE.js";import"./RechartsWrapper-CSAoBtxd.js";import"./axisSelectors-BNkJw-2U.js";import"./polarAxisSelectors-BmRQgzqt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-VptsFP1A.js";import"./index-C5of7-FY.js";import"./index-C_FuKoEm.js";import"./renderedTicksSlice-BSSoKuOA.js";import"./index-BPTy_Aa_.js";import"./CartesianChart-CrElt8Ki.js";import"./chartDataContext-oGIvKB_Y.js";import"./CategoricalChart-CDhmqNu9.js";import"./CartesianAxis-DcbYB9kS.js";import"./Layer-CTEYWFZQ.js";import"./Text-BbaXzr-_.js";import"./pageBackground-B1zZiLSr.js";import"./useId-uRdV4O5l.js";import"./ZIndexLayer-CkLN3vho.js";import"./Label-BzUBYLaO.js";import"./dataEntryStyles-lF4b12oa.js";import"./types-CFJTQnsm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-dCxkCRB_.js";import"./symbol-D4ULe7qk.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DjofQ5-m.js";import"./uniqBy-BGB3FWFX.js";import"./iteratee-BGdRtgf7.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-C1qK0jXb.js";import"./Cross-BQX1HV7D.js";import"./Rectangle-DrpU_fhN.js";import"./util-Dxo8gN5i.js";import"./Sector-CdYXHMxl.js";import"./activeStyles-DPX8m1qG.js";import"./ActivePoints-C-R45DhW.js";import"./Dot-vDehyzRD.js";import"./RegisterGraphicalItemId-DZ8oXJnI.js";import"./ErrorBarContext-B7OlR22L.js";import"./SetGraphicalItem-D643u_Ng.js";import"./getRadiusAndStrokeWidthFromDot-BWolhaji.js";import"./ActiveShapeUtils-DcPjXX29.js";import"./useEffectiveDataKey-DqlQcCPn.js";import"./step-C9LyDlWE.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
