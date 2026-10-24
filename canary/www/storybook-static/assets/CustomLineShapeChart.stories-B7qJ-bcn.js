import{R as t}from"./iframe-CHJ8qNn-.js";import{a as p}from"./isWellBehavedNumber-BRib7OTz.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-B4bXXO0G.js";import{R as T}from"./zIndexSlice-DNIXTlyt.js";import{C as M}from"./CartesianGrid-KqJXt-cq.js";import{X as $}from"./XAxis-L9UrmdET.js";import{Y as I}from"./YAxis-BiD1d_mO.js";import{L as O}from"./Legend-CtgsxT5S.js";import{T as W}from"./Tooltip-DV20MK05.js";import{L as C}from"./Line-DI2at8cX.js";import{C as X}from"./Curve-Dy3LXOkF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DpVu8JOQ.js";import"./RechartsWrapper-BJlTvsU4.js";import"./axisSelectors-BBd7_xKf.js";import"./throttle-XqMRt2jJ.js";import"./index-D97GqZNj.js";import"./index-D2V1f5dZ.js";import"./d3-scale-Tozs6n73.js";import"./index-BKlKJCZc.js";import"./index-BzI6syEB.js";import"./renderedTicksSlice-C8683P8v.js";import"./index-CoSZFYA7.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BhRxeAbm.js";import"./chartDataContext-BkqAIBWa.js";import"./CategoricalChart-CQg4LCLR.js";import"./CartesianAxis-Durs5z8j.js";import"./Layer-D78kPmJv.js";import"./Text-CNSLXPSH.js";import"./pageBackground-DmOvuMA2.js";import"./useId-DMQKzmZX.js";import"./useBackwardsCompatibleTheme-BpzyF9ZD.js";import"./Label-B11lJlmF.js";import"./ZIndexLayer-D300_86G.js";import"./dataEntryStyles-DVh89c5p.js";import"./types-Dz3e-B0c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-AUdiU7pc.js";import"./symbol-B3rYpPSJ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BalShxiV.js";import"./uniqBy-CEOdNzvN.js";import"./iteratee-B1w-dxbF.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-CQYAMcX9.js";import"./Cross-D2aMjNTl.js";import"./Rectangle-B0Mkl8MZ.js";import"./util-Dxo8gN5i.js";import"./Sector-Ct6CV9fW.js";import"./activeStyles-ujvHG1pk.js";import"./ActivePoints-DnpLdJfX.js";import"./Dot-C7lzuZIa.js";import"./RegisterGraphicalItemId-BoIM166p.js";import"./ErrorBarContext-gVyy4V_e.js";import"./GraphicalItemClipPath-CRFACIVC.js";import"./SetGraphicalItem-CGS7hoc8.js";import"./getRadiusAndStrokeWidthFromDot-Dlc5cKW5.js";import"./ActiveShapeUtils-5-Co5jK-.js";import"./useEffectiveDataKey-BD8sCJ8W.js";import"./step-BMByuFVF.js";const Ut={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Vt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Vt as __namedExportsOrder,Ut as default};
