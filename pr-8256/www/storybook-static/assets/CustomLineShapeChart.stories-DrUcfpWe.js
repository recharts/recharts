import{R as t}from"./iframe-CRBCr4I7.js";import{R as D,l as p}from"./zIndexSlice-C5HnNY9r.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-BMih5QAj.js";import{C as M}from"./CartesianGrid-ByvwPBwu.js";import{X as $}from"./XAxis-4jTaFcnE.js";import{Y as I}from"./YAxis-C5vFCns8.js";import{L as O}from"./Legend-Dak6j9fY.js";import{T as W}from"./Tooltip-DE0qGtkw.js";import{L as f}from"./Line-Bk3eQLZy.js";import{C as X}from"./Curve-L8TXrD0N.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C-CjWl4M.js";import"./throttle-Bi7M9SHL.js";import"./index-DNywOopk.js";import"./index-CgJEBRA7.js";import"./RechartsWrapper-Csv9gEG8.js";import"./axisSelectors-Cn24srzI.js";import"./polarAxisSelectors-BXwH5847.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BBFMZtoY.js";import"./index-CYvH0a5R.js";import"./index-D8BMywLD.js";import"./renderedTicksSlice-Bcj92DQ0.js";import"./index-DOjsHhAo.js";import"./fillDefinitions-MhsyTwKb.js";import"./CartesianChart-DtrL87f_.js";import"./chartDataContext-Ds5ARDJg.js";import"./CategoricalChart-CIMwuqDL.js";import"./CartesianAxis-Cnz0mea7.js";import"./Layer-DK4q3BXK.js";import"./Text-CzrZS4hs.js";import"./ZIndexLayer-ChuLKuaE.js";import"./Label-CLJtKhiN.js";import"./types-BcVdsd1S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-qyep14Vl.js";import"./symbol-dNn9HYSI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dm_VZj6e.js";import"./uniqBy-B5_XcYmH.js";import"./iteratee-BFRZNziE.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-BEWOQrK8.js";import"./Cross-DIfmxK3b.js";import"./Rectangle-BwKZkKAc.js";import"./util-Dxo8gN5i.js";import"./Sector-MfTKhJkQ.js";import"./getRadiusAndStrokeWidthFromDot-DSL_ZrdX.js";import"./dataEntryStyles-BCu_-7t9.js";import"./ActivePoints-BaVCT3KN.js";import"./Dot-BSp4p8j6.js";import"./activeStyles-BGmObwWl.js";import"./ErrorBarContext-C9vHq9NB.js";import"./SetGraphicalItem-CVR_yFh9.js";import"./ActiveShapeUtils-DkbYb7aY.js";import"./useEffectiveDataKey-Bv2ZRQEX.js";import"./step-CDOWbVN9.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
