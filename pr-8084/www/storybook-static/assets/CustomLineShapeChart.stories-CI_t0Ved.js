import{R as t}from"./iframe-sVYf0T4K.js";import{R as D,m as p}from"./zIndexSlice-DCYn61_Z.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CfXitxuO.js";import{C as M}from"./CartesianGrid-Dc3gAsdP.js";import{X as $}from"./XAxis-DBp8xvXF.js";import{Y as I}from"./YAxis-CNIo2SjU.js";import{L as O}from"./Legend-C9mntufH.js";import{T as W}from"./Tooltip-lnOD4kE7.js";import{L as f}from"./Line-ChZJFWD1.js";import{C as X}from"./Curve-DRJ9KjAo.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BNjxkguA.js";import"./throttle-B5u3GWWh.js";import"./index-DiC6i9Zs.js";import"./index--6n540TN.js";import"./RechartsWrapper-cX9KnfoQ.js";import"./axisSelectors-DeiSy_-h.js";import"./polarAxisSelectors-BsaBqdPx.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CaVFs3zj.js";import"./index-hsh9HVaA.js";import"./index-ByFnZ7XW.js";import"./renderedTicksSlice-BPEsWmdR.js";import"./index-BXr1355W.js";import"./CartesianChart-DjuWDgK1.js";import"./chartDataContext-Dkn-AagS.js";import"./CategoricalChart-BAqEzU7h.js";import"./CartesianAxis-BI1VsAr7.js";import"./Layer-BIjeoEg2.js";import"./Text-BWcB5EFj.js";import"./pageBackground-DIQ0WB3A.js";import"./useId-V8WWGbBi.js";import"./ZIndexLayer-BVANdKv1.js";import"./Label-DWNcL86V.js";import"./dataEntryStyles-4CyLqaB1.js";import"./types-ZHVwXJa3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-B9IhfDAO.js";import"./symbol-BnKq_a6Q.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Mops_opC.js";import"./uniqBy-DE0GfQ2f.js";import"./iteratee-BQC4Cygg.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-D71D5MAL.js";import"./Cross-DbRi0_-s.js";import"./Rectangle--uO5acWR.js";import"./util-Dxo8gN5i.js";import"./Sector-CUgX515f.js";import"./activeStyles-BGq7qwld.js";import"./ActivePoints-qLv8n1bM.js";import"./Dot-CyGoxzEw.js";import"./RegisterGraphicalItemId-CPgTzLUz.js";import"./ErrorBarContext-BIENolIM.js";import"./SetGraphicalItem-BDTNcAra.js";import"./getRadiusAndStrokeWidthFromDot-C9_Ol6X7.js";import"./ActiveShapeUtils-CcGGZZs1.js";import"./useEffectiveDataKey-TZEf5iHD.js";import"./step-DuwXt4tv.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
