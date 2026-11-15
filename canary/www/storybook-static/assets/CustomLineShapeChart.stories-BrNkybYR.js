import{R as t}from"./iframe-c26JqrsL.js";import{R as D,l as p}from"./zIndexSlice-BkUYlJsZ.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BTqtIOwK.js";import{C as M}from"./CartesianGrid-BfXOM6vw.js";import{X as $}from"./XAxis-DutmNx-o.js";import{Y as I}from"./YAxis-BMAl-ilQ.js";import{L as O}from"./Legend-B8n_PKuf.js";import{T as W}from"./Tooltip-C74uwVO5.js";import{L as f}from"./Line-CCpKAg6f.js";import{C as X}from"./Curve-XxFxrIWP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-YkjEKeW8.js";import"./throttle-B2IvKwW-.js";import"./index-CUwFsdn8.js";import"./index-mm1LjFas.js";import"./RechartsWrapper-C0_ZnG3M.js";import"./axisSelectors-Dy58hWsd.js";import"./polarAxisSelectors-NvwmetH_.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DWhFNlvg.js";import"./index-vwxbY9MG.js";import"./index-DaW3zNl9.js";import"./renderedTicksSlice-DchxVsWm.js";import"./index-CUrdsACp.js";import"./fillDefinitions-OkciRhhD.js";import"./CartesianChart-CNu4n4dr.js";import"./chartDataContext-KJrM16zP.js";import"./CategoricalChart-DQ-Epfo-.js";import"./CartesianAxis-CwL4X3Li.js";import"./Layer-vJvTy9Ku.js";import"./Text-DrKUoP8L.js";import"./ZIndexLayer-B-r7bl4K.js";import"./Label-U_zx5ZhA.js";import"./types-BkHyLjnw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BvzuXAby.js";import"./symbol-DAgH9-Fu.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BmKkIlsV.js";import"./uniqBy-CpoKnfjS.js";import"./iteratee-DEQ9rNns.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-s58nu9Pz.js";import"./Cross-CtwUkA5D.js";import"./Rectangle-C6L3NnBU.js";import"./util-Dxo8gN5i.js";import"./Sector-zTgxjB-0.js";import"./dataEntryStyles-NUuyBQzn.js";import"./ActivePoints-CT1fm5gU.js";import"./Dot-BhI3xlfW.js";import"./activeStyles-CxWIOF49.js";import"./ErrorBarContext-Cck_FQwt.js";import"./SetGraphicalItem-Bf7rIr_j.js";import"./getRadiusAndStrokeWidthFromDot-DaLi06Yy.js";import"./ActiveShapeUtils-DUAkL6fN.js";import"./useEffectiveDataKey-BT6_jhIX.js";import"./step-CELEtsjP.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
