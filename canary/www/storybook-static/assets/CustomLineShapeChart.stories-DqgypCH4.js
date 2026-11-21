import{R as t}from"./iframe-ClXUkryL.js";import{R as D,l as p}from"./zIndexSlice-DzUiPhG1.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BcUQ_1hT.js";import{C as M}from"./CartesianGrid-Doxf1-eg.js";import{X as $}from"./XAxis-DAmFlkh4.js";import{Y as I}from"./YAxis-CSB-tj7Q.js";import{L as O}from"./Legend-Du0XFptm.js";import{T as W}from"./Tooltip-CVS8zOAR.js";import{L as f}from"./Line-CTNZd68_.js";import{C as X}from"./Curve-MAqNRQ5D.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Be-R1NDV.js";import"./throttle-CEjR9znF.js";import"./index-1IQ6h1fT.js";import"./index-D1YVhIqp.js";import"./RechartsWrapper-C4CsKSyh.js";import"./axisSelectors-BImpBlrZ.js";import"./polarAxisSelectors-B2T5HNNu.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Crqvu4_S.js";import"./index-DTBjcvrn.js";import"./index-CrY7M_Vr.js";import"./renderedTicksSlice-0uwg5ZfK.js";import"./index-BN7SKK3J.js";import"./fillDefinitions-C705icco.js";import"./CartesianChart-Dl8SN8lO.js";import"./chartDataContext-vv2pvmYC.js";import"./CategoricalChart-B-f9dtfF.js";import"./CartesianAxis-DC6JqvO0.js";import"./Layer-L872TvYf.js";import"./Text-C9XRZpa-.js";import"./ZIndexLayer-CVBpK4Om.js";import"./Label-BMxAhfb3.js";import"./types-la06XTph.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-x2c8SqkY.js";import"./symbol-DbkjlHpo.js";import"./path-BBMZd4YL.js";import"./useElementOffset-DeqYTBDK.js";import"./uniqBy-BpqYijuT.js";import"./iteratee-B2tmauo-.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-Dks1GaGE.js";import"./Cross-5JluxCld.js";import"./Rectangle-KaRylKEj.js";import"./util-Dxo8gN5i.js";import"./Sector-BP6odGN8.js";import"./getRadiusAndStrokeWidthFromDot-BBOOYriq.js";import"./dataEntryStyles-Br1h1G1A.js";import"./ActivePoints-FWIT6xTU.js";import"./Dot-ACUQcHT1.js";import"./activeStyles-CbEtMY8z.js";import"./ErrorBarContext-BbIl9cJe.js";import"./SetGraphicalItem-XdL-o-fT.js";import"./ActiveShapeUtils-Co4M2_jg.js";import"./useEffectiveDataKey-OGRxErZi.js";import"./step-DKRQgBi6.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Ht as __namedExportsOrder,zt as default};
