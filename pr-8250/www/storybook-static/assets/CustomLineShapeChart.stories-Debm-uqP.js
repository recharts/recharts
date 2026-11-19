import{R as t}from"./iframe-WBbNNnuy.js";import{R as D,l as p}from"./zIndexSlice-tUIWaJXi.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-B4Yh12HY.js";import{C as M}from"./CartesianGrid-DGZxWtdu.js";import{X as $}from"./XAxis-D4ryVEq0.js";import{Y as I}from"./YAxis-BvxL6veE.js";import{L as O}from"./Legend-BCZHr7ks.js";import{T as W}from"./Tooltip-DO_kcQZm.js";import{L as f}from"./Line-By_II2b6.js";import{C as X}from"./Curve-DgOptS1N.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BQVAzGvB.js";import"./throttle-BZsWSkxT.js";import"./index-r4gbZ-og.js";import"./index-lLL3p07g.js";import"./RechartsWrapper-KCZFV5Qp.js";import"./axisSelectors-BsjG_ZcL.js";import"./polarAxisSelectors-BgsSPbjL.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BmTpsTXt.js";import"./index-Z7LA0nwu.js";import"./index-DfAsO6-W.js";import"./renderedTicksSlice-Dwvf-gTi.js";import"./index-UohdA6tU.js";import"./fillDefinitions-mDThsQp_.js";import"./CartesianChart-CMzbfvn4.js";import"./chartDataContext-FFlBnRja.js";import"./CategoricalChart-DYbe0UIE.js";import"./CartesianAxis-d7TJLpW4.js";import"./Layer-B9NKZG1g.js";import"./Text-BMtYTGtz.js";import"./ZIndexLayer-BKvRHpsJ.js";import"./Label-C7oootOX.js";import"./types-DJHF32C4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BMJzxDY-.js";import"./symbol-Cy3OnQKT.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BXgxBoqY.js";import"./uniqBy-CZ2AwJLU.js";import"./iteratee-ZB0s3k9M.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-Cxl9dyaW.js";import"./Cross-CGrYZ8gF.js";import"./Rectangle-B8WyH4x0.js";import"./util-Dxo8gN5i.js";import"./Sector-A4RtaUVu.js";import"./getRadiusAndStrokeWidthFromDot-BJbGVYFk.js";import"./dataEntryStyles-DB--RtiY.js";import"./ActivePoints-CufioKrW.js";import"./Dot-CWYAFnGF.js";import"./activeStyles-CA5Mddf7.js";import"./ErrorBarContext-DyCR_fdR.js";import"./SetGraphicalItem-TF5VFMkr.js";import"./ActiveShapeUtils-DuPu1Vop.js";import"./useEffectiveDataKey-CNDMCH51.js";import"./step-sID4B3fn.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
