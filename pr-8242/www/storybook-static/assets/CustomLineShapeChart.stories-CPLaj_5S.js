import{R as t}from"./iframe-BRs2DqB3.js";import{R as D,l as p}from"./zIndexSlice-XRTrDK7l.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CavKE_bD.js";import{C as M}from"./CartesianGrid-krvxFSeS.js";import{X as $}from"./XAxis-BJyhb9sC.js";import{Y as I}from"./YAxis-DidbNqGc.js";import{L as O}from"./Legend-aPOwwcA9.js";import{T as W}from"./Tooltip-CqMuKwCH.js";import{L as f}from"./Line-BkTgv4cu.js";import{C as X}from"./Curve-YmdI71--.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BRTztjAc.js";import"./throttle-BN55ZsBD.js";import"./index-CqTGU6qX.js";import"./index-C0uv-V1O.js";import"./RechartsWrapper-CJYaD9xA.js";import"./axisSelectors-DBUHuATQ.js";import"./polarAxisSelectors-DwLugqE9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B39-KfBv.js";import"./index-BL5_00_X.js";import"./index-Co-V1H3-.js";import"./renderedTicksSlice-BjdRfY4C.js";import"./index-IgyX-1iw.js";import"./fillDefinitions-Cww6uxJT.js";import"./CartesianChart-Dsxkw-P3.js";import"./chartDataContext-QcS0sZvi.js";import"./CategoricalChart-BZHqfx2A.js";import"./CartesianAxis-C23TAeVf.js";import"./Layer-DqrqtEm2.js";import"./Text-DRaltNnR.js";import"./ZIndexLayer-BCRtaoEe.js";import"./Label-utTJNWp0.js";import"./types-BN549hIA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Cy-ALuGW.js";import"./symbol-rCFxuDnc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DjI6NDB8.js";import"./uniqBy-aZImii2x.js";import"./iteratee-CrjEP9l6.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-De06VpE9.js";import"./Cross-Bogn5Ydo.js";import"./Rectangle-BivqHDne.js";import"./util-Dxo8gN5i.js";import"./Sector-CsRUhTp7.js";import"./dataEntryStyles-B5I1MPoS.js";import"./ActivePoints-DywQ8pFt.js";import"./Dot-DCtDqOty.js";import"./activeStyles-gnY1xuwf.js";import"./ErrorBarContext-D0NsIgk-.js";import"./SetGraphicalItem-C9srr3mG.js";import"./getRadiusAndStrokeWidthFromDot-CwwAN-KH.js";import"./ActiveShapeUtils-Cvk6a1r9.js";import"./useEffectiveDataKey-_AqelCoa.js";import"./step-UgzMRyWu.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
