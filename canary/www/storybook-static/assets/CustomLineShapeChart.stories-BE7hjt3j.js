import{R as t}from"./iframe-DzGmKl0f.js";import{R as D,l as p}from"./zIndexSlice-C_hCocyn.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-By3ADgoR.js";import{C as M}from"./CartesianGrid-B2Ex7aw7.js";import{X as $}from"./XAxis-jTQGWzOI.js";import{Y as I}from"./YAxis-0b4E4ljK.js";import{L as O}from"./Legend-DaKWHHq_.js";import{T as W}from"./Tooltip-DBSvm2sG.js";import{L as f}from"./Line-Bstpyosc.js";import{C as X}from"./Curve-CY0LgJEY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DQfzh6Jd.js";import"./throttle-CTpO1d0G.js";import"./index-CLtTm24E.js";import"./index-BW8cRvO1.js";import"./RechartsWrapper-DyktFVWv.js";import"./axisSelectors-CXmW2Cx2.js";import"./polarAxisSelectors-BjROy2nM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BqUwTZLN.js";import"./index-Dfq7BfPO.js";import"./index-CbanqfDi.js";import"./renderedTicksSlice-Cj7UXIdm.js";import"./index-By0aYyvM.js";import"./fillDefinitions-D8TUKuUW.js";import"./CartesianChart-BHEtFY6v.js";import"./chartDataContext-CBkj6nC7.js";import"./CategoricalChart-8iPxehsc.js";import"./CartesianAxis-CdlgwruK.js";import"./Layer-FlA1vg8A.js";import"./Text-4Yqe8NiQ.js";import"./ZIndexLayer-DCgoY3ny.js";import"./Label-D7SDC5pA.js";import"./types-DhQXJZ5L.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-f4V1uJfI.js";import"./symbol-C_p4EZd-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C8NhgWYR.js";import"./uniqBy-DbBQ0HwH.js";import"./iteratee-BoZ32etu.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-CGyZ0qQs.js";import"./Cross-Dy4jVGVU.js";import"./Rectangle-C67JpI60.js";import"./util-Dxo8gN5i.js";import"./Sector-C_dYEOQx.js";import"./getRadiusAndStrokeWidthFromDot-x4kMFRNy.js";import"./dataEntryStyles-Dj48sKZ8.js";import"./ActivePoints-Dk-ASqYF.js";import"./Dot-C7ry2cU8.js";import"./activeStyles-wSVq9YzU.js";import"./ErrorBarContext-DXEk3_Nm.js";import"./SetGraphicalItem-BOgZ-5S7.js";import"./ActiveShapeUtils-DvbjLMLM.js";import"./useEffectiveDataKey-DtLTSAvq.js";import"./step-DtdKv3o3.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
