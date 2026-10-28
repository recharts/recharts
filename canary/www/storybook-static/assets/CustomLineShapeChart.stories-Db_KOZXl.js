import{R as t}from"./iframe-v0-Os2yM.js";import{R as D,l as p}from"./zIndexSlice-_iZ3OTIR.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-J7H0G1Pi.js";import{C as M}from"./CartesianGrid-B_mQPiyV.js";import{X as $}from"./XAxis-DNiYKSvx.js";import{Y as I}from"./YAxis-CgkQKIAn.js";import{L as O}from"./Legend-Cwc7Q_ts.js";import{T as W}from"./Tooltip-B21ab-pA.js";import{L as f}from"./Line-CMP1V8O2.js";import{C as X}from"./Curve-NJea3yIB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BcTNVKvX.js";import"./throttle-CSC07CA1.js";import"./index-CjGezUyu.js";import"./index-DwxXslvM.js";import"./RechartsWrapper-DpMxjJPI.js";import"./axisSelectors-Db_FhKX_.js";import"./polarAxisSelectors-Bp8G6CJB.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Dv-uHWFd.js";import"./index-DjMmN7uR.js";import"./index-COci_OUD.js";import"./renderedTicksSlice-Z7zIrOC1.js";import"./index-ClZJ5H50.js";import"./CartesianChart-CSMk8NrA.js";import"./ZIndexPortal-IUufwUyf.js";import"./CategoricalChart-DUPn6ZbT.js";import"./CartesianAxis-BkO3xjcX.js";import"./Layer--oy12MjQ.js";import"./Text-CJd7Lo81.js";import"./pageBackground-BMquVDd2.js";import"./ZIndexLayer-CZxM3zqX.js";import"./Label-DI0UjsSd.js";import"./types-BJeT-aZk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Cw6oiD0A.js";import"./symbol-DlOomsec.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C7YVK8J4.js";import"./uniqBy-l27jBtp-.js";import"./iteratee-C2U1tTrM.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-CXPH24GZ.js";import"./Cross-I_CZgQpk.js";import"./Rectangle-C4C7r0Pi.js";import"./util-Dxo8gN5i.js";import"./Sector-BBv4yBun.js";import"./LabelList-lSE4rpjb.js";import"./ActivePoints-B5HER2Lt.js";import"./Dot-D0cTKtS9.js";import"./activeStyles-CbGGlVk2.js";import"./dataEntryStyles-DfwnSxIB.js";import"./ErrorBarContext-Dj2syV2g.js";import"./SetGraphicalItem-C-WANBtu.js";import"./getRadiusAndStrokeWidthFromDot-BkVmaDqw.js";import"./ActiveShapeUtils-BRXSym3E.js";import"./useEffectiveDataKey-DAI_6E1U.js";import"./step-DpC9Q9rs.js";const Ht={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Jt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Jt as __namedExportsOrder,Ht as default};
